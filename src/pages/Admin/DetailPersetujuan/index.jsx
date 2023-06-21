import { useEffect, useState } from 'react';
import { Layouts } from '../../../component/molecules/Layouts';
import { Sidebar } from '../../../component/molecules/Admin/Sidebar';
import { Container } from '../../../component/atom/Container/Container';
import TitleForDetail from '../../../component/molecules/Admin/TitleForDetail';
import { PUBLIC_URL } from '../../../utils/constant';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  dateFormatInvesta,
  getPercentageInvesta,
  toRupiahInvesta,
} from '../../../utils/function';
import { useAuthHeader, useSignOut } from 'react-auth-kit';
import CountdownTime from '../../../component/atom/CountdownTime';
import { Button, Modal, Textarea } from 'flowbite-react';
import { accPengajuan, getDetailPengajuan } from './data';
import { toast } from 'react-toastify';
import { ImgLink } from '../../../component/atom/ImgLink';
import { Loading } from '../../../component/molecules/Loading';

export const DetailPersetujuan = () => {
  const [dataProyek, setDataProyek] = useState({});
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const selectStatus = [
    {
      label: 'Sedang Diverifikasi',
      value: 'Sedang Diverifikasi',
    },
    {
      label: 'Proyek Berjalan',
      value: 'Proyek Berjalan',
    },
    {
      label: 'Proyek Ditolak',
      value: 'Proyek Ditolak',
    },
    {
      label: 'Menunggu Konfirmasi',
      value: 'Menunggu Konfirmasi',
    },
  ];
  const selectResiko = ['Tinggi', 'Sedang', 'Rendah'];
  const params = useParams();
  const token = useAuthHeader();
  const logout = useSignOut();
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({
    id: 2,
    imbal_hasil: '',
    status_pengajuan: '',
    resiko: 'Tinggi',
    deskripsi: '',
    jumlah_unit: '120',
  });
  const [error, setError] = useState({
    files: [],
  });

  const handleAccPengajuan = async () => {
    try {
      const result = await accPengajuan(dataForm, token());
      console.log(result);
      setError({ ...error, ...result });

      setOpenModal(undefined);
      toast.success(result.message);
      navigate('/admin/persetujuan');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await getDetailPengajuan(params.id, token());
        setDataProyek(data);
        console.log(data);
        setDataForm({
          ...dataForm,
          id: data.id,
          status_pengajuan: data.status,
          deskripsi: data.deskripsi,
          imbal_hasil: data.imbal_hasil,
          resiko: data.resiko,
          jumlah_unit: data.jumlah_unit,
        });
      } catch (error) {
        if (error == 'Unauthorized') {
          logout();
          navigate('/login');
        }
        toast.warn('Maaf terjadi masalah');
        console.log(error);
      }
    })();
  }, []);
  if (dataProyek == {}) {
    return <Loading />;
  }
  return (
    <Layouts title="Detail Proyek" bg="bg-[#fffff]">
      <Sidebar>
        <Container>
          <TitleForDetail label={dataProyek.pengajuan_name} />
        </Container>
        <div className="h-0.5 w-full bg-gray-300"></div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:pr-3">
              <ImgLink
                src={PUBLIC_URL + dataProyek?.files?.[0].alamat_gambar}
                link={`/admin/persetujuan_lanjutan/${params.id}`}
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x400';
                }}
              />
              <div className="flex text-sm md:text-lg mt-6">
                <p className="font-bold">Lokasi:</p>
                <p className="ml-2">
                  {dataProyek?.info_tani?.alamat}, Kecamatan{' '}
                  {dataProyek?.info_tani?.kecamatan},{' '}
                  {dataProyek?.info_tani?.kota}.
                </p>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 mb-2">
                <p>{toRupiahInvesta(dataProyek?.total_pengajuan || 0)}</p>
                <p className="text-right md:text-left">
                  {toRupiahInvesta(dataProyek?.dana_terkumpul || 0)}
                </p>
              </div>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-blue-600 text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{
                    width: getPercentageInvesta(
                      dataProyek?.dana_terkumpul,
                      dataProyek?.total_pengajuan
                    ),
                  }}
                >
                  {getPercentageInvesta(
                    dataProyek.dana_terkumpul,
                    dataProyek.total_pengajuan
                  )}
                  %
                </div>
              </div>
              <div className="grid grid-cols-3 my-2">
                <div>
                  <p>Tenor</p>
                  <p className="font-bold">{dataProyek?.tenor}</p>
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-900 dark:text-white">
                    Imbal Hasil
                  </label>
                  <select
                    name="imbal_hasil"
                    onChange={handleChange}
                    value={dataForm.imbal_hasil}
                    className="block p-1 px-2 mb-6 md:mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option disabled selected value="">
                      Pilih Imbal Hasil
                    </option>
                    <option value="5">5%</option>
                    <option value="3">3%</option>
                    <option value="1">1%</option>
                  </select>
                </div>
                <div>
                  <p>Harga per Unit</p>
                  <p className="font-bold">
                    {toRupiahInvesta(dataProyek.harga_unit || 0)}
                  </p>
                </div>
              </div>
              <p>
                {dateFormatInvesta(dataProyek.start_date)} sampai{' '}
                {dateFormatInvesta(dataProyek.end_date)}
              </p>
              <hr className="my-2" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
                <div>
                  <label
                    htmlFor="status_pengajuan"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Status
                  </label>
                  <select
                    name="status_pengajuan"
                    onChange={handleChange}
                    className="block w-full p-2 mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {selectStatus.map(({ label, value }, index) => {
                      if (value == dataProyek.status) {
                        return (
                          <option selected value={value} key={index}>
                            {label}
                          </option>
                        );
                      } else {
                        return (
                          <option value={value} key={index}>
                            {label}
                          </option>
                        );
                      }
                    })}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="resiko"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Resiko
                  </label>
                  <select
                    id="resiko"
                    name="resiko"
                    onChange={handleChange}
                    className="block w-full p-2 mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {selectResiko.map((item, index) =>
                      dataProyek.resiko == item ? (
                        <option selected value={item} key={index}>
                          {item}
                        </option>
                      ) : (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
              <hr className="my-2" />
              <div className="grid grid-cols-3 my-2 gap-3 items-center">
                <div>
                  <p>Pengembalian</p>
                  <p className="font-bold">
                    <CountdownTime date={dataProyek.estimasi_pengembalian} />
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="jumlah_unit"
                    value={dataForm.jumlah_unit}
                    className="block mb-2 text-sm text-gray-900 dark:text-white"
                  >
                    Jumlah Unit
                  </label>
                  <input
                    type="number"
                    name="jumlah_unit"
                    value={dataForm.jumlah_unit}
                    onChange={handleChange}
                    className="w-full rounded"
                  />
                </div>
                <div>
                  <p>Unit Tersedia</p>
                  <p className="font-bold">
                    {dataProyek.unit_tersedia || 'Rp. 0'}
                  </p>
                </div>
              </div>
              <hr className="my-2 mb-4" />
              <h5 className="font-bold">Perhatian</h5>
              <p className="my-1">
                Resiko kredit atau gagal bayar ditanggung sepenuhnya oleh
                pendana. Mohon mempelajari risiko pendanaan sebelum mendanai.
              </p>
              <h5
                className={`font-bold mt-10 mb-2 ${
                  error.deskripsi ? 'text-red-600' : ''
                }`}
                htmlFor="deskripsi"
              >
                Rincian Proyek
              </h5>
              <Textarea
                name="deskripsi"
                id="deskripsi"
                color={error.deskripsi ? 'failure' : ''}
                onChange={handleChange}
                value={dataForm.deskripsi}
                required
                rows={4}
                placeholder="Tulis Rincian Proyek ..."
              />
              <p className="text-red-600 text-sm font-medium mt-1">
                {error.deskripsi && error.deskripsi[0]}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 mt-10">
            <Link
              to={'/admin/persetujuan'}
              className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
            >
              Kembali
            </Link>

            <Button
              onClick={() => props.setOpenModal('modal_acc')}
              type="button"
              className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
            >
              Selanjutnya
            </Button>
          </div>
          <Modal
            show={props.openModal === 'modal_acc'}
            onClose={() => props.setOpenModal(undefined)}
          >
            <Modal.Body>
              <div className="space-y-6 font-bold text-center my-20">
                <p className="text-xl">Setujui Pendanaan pada proyek?</p>
              </div>
              <div className="flex justify-between mx-24 my-10">
                <Button color="warning" onClick={handleAccPengajuan}>
                  Setujui
                </Button>
                <Button
                  color="warning"
                  outline
                  onClick={() => props.setOpenModal(undefined)}
                >
                  <p className="text-yellow-500 hover:text-white">Tidak</p>
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </Container>
      </Sidebar>
    </Layouts>
  );
};
