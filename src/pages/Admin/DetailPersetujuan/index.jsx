import { useState, useEffect } from 'react';
import { Layouts } from '../../../component/molecules/Layouts';
import { Sidebar } from '../../../component/molecules/Admin/Sidebar';
import { Container } from '../../../component/atom/Container/Container';
import TitleForDetail from '../../../component/molecules/Admin/TitleForDetail';
import { API_URL, PUBLIC_URL } from '../../../utils/constant';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  dateFormatInvesta,
  getPercentageInvesta,
  getTokenInvesta,
  toRupiahInvesta,
} from '../../../utils/function';
import { useAuthHeader } from 'react-auth-kit';
import CountdownTime from '../../../component/atom/CountdownTime';
import { Button, Modal, Textarea } from 'flowbite-react';
import { toast } from 'react-toastify';
import { ImgLink } from '../../../component/atom/ImgLink';
import { Loading } from '../../../component/molecules/Loading';
import axios from 'axios';
import { useFormik } from 'formik';

export const DetailPersetujuan = () => {
  // const [data, setdata] = useState({});
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const calculateUnit = (totalPengajuan) => {
    return totalPengajuan / 10000;
  };

  // Menghitung nilai unit ketika data total_pengajuan berubah

  const selectResiko = ['Tinggi', 'Sedang', 'Rendah'];

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
  const token = useAuthHeader();
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  const getDataDetail = async () => {
    try {
      const res = await axios.post(
        API_URL + `/pengajuan/detailPengajuan/${params.id}`,
        null,
        getTokenInvesta(token())
      );
      setData(res.data.Pengajuan);
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      imbal_hasil: '',
      status: '',
      resiko: '',
      jumlah_unit: '',
      deskripsi: '',
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          API_URL + `/pengajuan/acceptPengajuan/${params.id}`,
          values,
          getTokenInvesta(token())
        );
        toast.success('Berhasil update');
        navigate('/admin/persetujuan');
      } catch (error) {
        toast.error(Object.values(error.response.data)[0][0]);
      }
    },
  });
  useState(() => {
    getDataDetail();
  }, []);
  useEffect(() => {
    if (data && data.total_pengajuan) {
      const unitValue = calculateUnit(data.total_pengajuan);
      formik.setFieldValue('jumlah_unit', unitValue); // Set nilai unit ke formik
    }
  }, [data]);

  if (data == {}) {
    return <Loading />;
  }
  return (
    <Layouts title="Detail Proyek" bg="bg-[#fffff]">
      <Sidebar>
        <Container>
          <TitleForDetail label={data.pengajuan_name} />
        </Container>
        <div className="h-0.5 w-full bg-gray-300"></div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:pr-5">
              <ImgLink
                src={PUBLIC_URL + data?.files?.[0].alamat_gambar}
                link={`/admin/persetujuan_lanjutan/${params.id}`}
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x400';
                }}
              />
              <div className="flex text-sm md:text-lg mt-6">
                <p className="font-bold">Lokasi:</p>
                <p className="ml-2">
                  {data?.info_tani?.provinsi}, {data?.info_tani?.kota}, {data?.info_tani?.kecamatan}, {data?.info_tani?.alamat}
                </p>
              </div>
            </div>
            <div className="ms-5">
              <div className="grid grid-cols-2 mb-2">
                <p>{toRupiahInvesta(data?.dana_terkumpul || 0)}</p>
                <p className="text-right md:text-right ">
                  {toRupiahInvesta(data?.total_pengajuan || 0)}
                </p>
              </div>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-blue-600 text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{
                    width: `${getPercentageInvesta(
                      data.dana_terkumpul,
                      data.total_pengajuan
                    )}%`,
                  }}
                >
                  {getPercentageInvesta(
                    data.dana_terkumpul,
                    data.total_pengajuan
                  )}
                  %
                </div>
              </div>
              <div className="grid grid-cols-3 my-2">
                <div>
                  <p>Tenor</p>
                  <p className="font-bold">{data?.tenor}</p>
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-900 dark:text-white">
                    Imbal Hasil
                  </label>
                  <select
                    name="imbal_hasil"
                    onChange={formik.handleChange}
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
                    {toRupiahInvesta(data.harga_unit || 10000)}
                  </p>
                </div>
              </div>
              <p>
                {dateFormatInvesta(data.start_date)} sampai{' '}
                {dateFormatInvesta(data.end_date)}
              </p>
              <hr className="my-2" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
                <div>
                  <label
                    htmlFor="staus"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Status
                  </label>
                  <select
                    name="status"
                    onChange={formik.handleChange}
                    className="block w-full p-2 mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option disabled selected value="">
                      Pilih Status
                    </option>
                    {selectStatus.map(({ label, value }, index) => {
                      if (value == data.status) {
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
                    onChange={formik.handleChange}
                    name="resiko"
                    className="block w-full p-2 mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option disabled selected value="">
                      Pilih Resiko
                    </option>
                    {selectResiko.map((item, index) =>
                      data.resiko == item ? (
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
                    {dateFormatInvesta(data.estimasi_pengembalian)}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="jumlah_unit"
                    className="block mb-2 text-sm text-gray-900 dark:text-white"
                  >
                    Jumlah Unit
                  </label>
                  <input
                    disabled
                    type="number"
                    value={formik.values.jumlah_unit}
                    name="jumlah_unit"
                    onChange={formik.handleChange}
                    className="w-20 rounded"
                  />
                </div>
                <div>
                  <p>Unit Tersedia</p>
                  <p className="font-bold">{data.unit_tersedia || '0 Unit'}</p>
                </div>
              </div>
              <hr className="my-2 mb-4" />
              <h5 className="font-bold">Perhatian</h5>
              <p className="my-1">
                Resiko kredit atau gagal bayar ditanggung sepenuhnya oleh
                pendana. Mohon mempelajari risiko pendanaan sebelum mendanai.
              </p>
              <h5 className={`font-bold mt-10 mb-2 `} htmlFor="deskripsi">
                Rincian Proyek
              </h5>
              <Textarea
                name="deskripsi"
                id="deskripsi"
                required
                rows={4}
                placeholder="Tulis Rincian Proyek ..."
                onChange={formik.handleChange}
              />
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
                <Button color="warning" onClick={formik.handleSubmit}>
                  Setujui
                </Button>
                <Button
                  color="warning"
                  outline
                  onClick={() => {
                    props.setOpenModal(undefined);
                  }}
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
