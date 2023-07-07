import { useEffect, useState } from 'react';
import { Layouts } from '../../../component/molecules/Layouts';
import { Container } from '../../../component/atom/Container/Container';
import TitleForDetail from '../../../component/molecules/Admin/TitleForDetail';
import { Link, useParams } from 'react-router-dom';
import { useAuthHeader } from 'react-auth-kit';
import axios from 'axios';
import {
  dateFormatInvesta,
  getTokenInvesta,
  toRupiahInvesta,
} from '../../../utils/function';
import { API_URL, PUBLIC_URL } from '../../../utils/constant';
import { Loading } from '../../../component/molecules/Loading';

export const DetailTrackingProyek = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  const token = useAuthHeader();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.post(
          API_URL + `/pengajuan/detailPengajuan/${params.id}`,
          null,
          getTokenInvesta(token())
        );
        setData(result.data.Pengajuan);
      } catch (error) {
        // Handle error
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (data == null) {
    return <Loading />;
  }
  return (
    <Layouts title="Detail Tracking Proyek">
      <Container>
        <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-14 pb-10">
            <TitleForDetail label={data.pengajuan_name} />
          </div>
          <div className="h-0.5 w-full bg-gray-300"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 py-16 px-14">
            <div className="md:px-4">
              <img
                src={PUBLIC_URL + data?.files?.[0].alamat_gambar}
                alt=""
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src =
                    'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg';
                }}
                className="rounded-2xl w-full"
              />
              <div className="flex gap-2 py-4">
                <p className="font-bold text-gray-900">Lokasi:</p>
                <p>
                  {data.info_tani.alamat +
                    ', ' +
                    data.info_tani.kecamatan}
                </p>
              </div>
            </div>
            <div className="mr-10">
              <div className="grid grid-cols-2">
                <p>{toRupiahInvesta(data.total_pengajuan)}</p>
                <p className="flex justify-end">
                  {toRupiahInvesta(
                    data.dana_terkumpul == null ? 0 : data.dana_terkumpul
                  )}
                </p>
              </div>
              <div className="w-full my-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{
                    width: `${(
                      (data.dana_terkumpul == null
                        ? 0
                        : data.dana_terkumpul / data.total_pengajuan) * 100
                    ).toFixed(1)}%`,
                  }}
                >
                  {' '}
                  {`${(
                    (data.dana_terkumpul == null
                      ? 0
                      : data.dana_terkumpul / data.total_pengajuan) * 100
                  ).toFixed(1)}%`}
                </div>
              </div>
              <h5 className="font-bold">Pendanaan yang terkumpul</h5>
              <div className="grid grid-cols-3 py-5 text-sm w-full">
                <div>
                  <p>Tenor</p>
                  <p className="font-bold">{data.tenor}</p>
                </div>
                <div className="justify-self-center">
                  <p>Imbalan Hasil</p>
                  <p className="font-bold">{data.imbal_hasil}%</p>
                </div>
                <div className="justify-self-end">
                  <p>Harga per Unit</p>
                  <p className="font-bold">
                    {toRupiahInvesta(data.harga_unit)}
                  </p>
                </div>
              </div>
              <p>
                {dateFormatInvesta(data.start_date) +
                  ' sampai ' +
                  dateFormatInvesta(data.end_date)}
              </p>
              <hr />
              <div className="grid grid-cols-3 py-5 text-sm w-full">
                <div>
                  <p>Status</p>
                  <p className="font-bold">{data.status}</p>
                </div>
                <div className="justify-self-center">
                  <p>Jumlah Unit</p>
                  <p className="font-bold">{data.jumlah_unit} Unit</p>
                </div>
                <div className="justify-self-end">
                  <p>Unit Tersedia</p>
                  <p className="font-bold">{data.unit_tersedia} Unit</p>
                </div>
              </div>
              <hr className="my-2" />
              <p>Pengembalian</p>
              <strong>{dateFormatInvesta(data.estimasi_pengembalian)}</strong>
              <hr className="my-2" />
              <h5 className="font-bold">Perhatian</h5>
              <p>
                Resiko kredit atau gagal bayar ditanggung sepenuhnya oleh
                pendana. Mohon mempelajari risiko pendanaan sebelum mendanai.
              </p>
              <h5 className="mt-6 font-bold">Rincian Proyek</h5>
              <p>{data.deskripsi}</p>
            </div>
            <div className="flex justify-end">
              <Link
                to="form"
                className="bg-investa-primary-50 px-5 py-2 text-white rounded"
                style={{ alignSelf: 'flex-start' }}
              >
                Tracking Proyek
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Layouts>
  );
};
