import { Link, useParams } from 'react-router-dom';
import { Button } from '../../component/atom/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, PUBLIC_URL } from '../../utils/constant';
import {
  dateFormatInvesta,
  getPercentageInvesta,
  getTokenInvesta,
  toRupiahInvesta,
} from '../../utils/function';
import { useAuthHeader } from 'react-auth-kit';
import { Loading } from '../../component/molecules/Loading';
import { ProgressBar } from '../../component/atom/ProgressBar';
import { Table } from 'flowbite-react';

export const Detail = () => {
  const [data, setData] = useState();
  const params = useParams();
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
        console.log(data);
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
    <div className="min-h-screen bg-white rounded p-10">
      <div className="flex justify-between">
        <h1 className="mb-5 font-semibold text-2xl">{data.pengajuan_name}</h1>
        <Link
          className="font-bold text-investa-primary-50"
          to={'/daftar-pinjaman'}
        >
          Klik untuk proyek lainnya
        </Link>
      </div>
      <hr />
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <img
            src={PUBLIC_URL + data.files[0].alamat_gambar}
            alt="foto"
            className="h-[200px] w-full object-cover rounded-lg"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg';
            }}
          />
          <p className="mt-5 flex flex-row gap-2">
            <span className="font-bold whitespace-nowrap">Nama Petani :</span>
            <span>
              {data.user.name}
            </span>
          </p>
          <p className="mt-5 flex flex-row gap-2">
            <span className="font-bold whitespace-nowrap">Pengalaman Bertani :</span>
            <span>
              {data.info_tani.pengalaman_tani}
            </span>
          </p>
          <p className="mt-5 flex flex-row gap-2">
            <span className="font-bold whitespace-nowrap">Lokasi :</span>
            <span>
              {data.info_tani.provinsi}, {data.info_tani.kota}, {data.info_tani.kecamatan}, {data.info_tani.alamat}
            </span>
          </p>
          <hr className="my-5" />
          <p className="mt-5 mb-5 flex flex-row gap-2">
            <span className="font-bold whitespace-nowrap">Kebutuhan :</span>
          </p>
          <Table>
            <Table.Head>
              <Table.HeadCell className="bg-investa-primary-50 text-white">
                Nama Barang
              </Table.HeadCell>
              <Table.HeadCell className="bg-investa-primary-50 text-white">
                Jumlah
              </Table.HeadCell>
              <Table.HeadCell className="bg-investa-primary-50 text-white">
                Harga
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y" data={data.kebutuhan}>
              {data.kebutuhan && data.kebutuhan.length === 0 ? (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell colSpan={3} className="text-center">
                    Belum ada data
                  </Table.Cell>
                </Table.Row>
              ) : (
                data.kebutuhan &&
                data.kebutuhan.map((item, index) => (
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="bg-gray-100">{item.nama}</Table.Cell>
                    <Table.Cell className="bg-gray-100">{item.jumlah}</Table.Cell>
                    <Table.Cell className="bg-gray-100">{toRupiahInvesta(item.total)}</Table.Cell>
                  </Table.Row>
                ))
              )}
            </Table.Body>
          </Table>
        </div>
        <div className="ms-4">
          <h1 className="font-semibold mb-2 mt-3">
            Pendanaan yang Terkumpul
          </h1>
          <div className="flex justify-between">
            <p>
              {toRupiahInvesta(
                data.dana_terkumpul == null ? 0 : data.dana_terkumpul
              )}
            </p>
            <p>{toRupiahInvesta(data.total_pengajuan)}</p>
          </div>
          <ProgressBar
            percentage={getPercentageInvesta(
              data.dana_terkumpul == null ? 0 : data.dana_terkumpul,
              data.total_pengajuan
            )}
          />
          <hr className="my-5" />
          <div className="grid grid-cols-2 mb-5">
            <div>
              <p>Tenor</p>
              <p className="font-semibold">{data.tenor}</p>
            </div>
            <div>
              <p>Imbal Hasil</p>
              <p className="font-semibold">
                {data.imbal_hasil == null
                  ? 'Belum Ditentukan'
                  : data.imbal_hasil + '%'}
              </p>
            </div>
          </div>
          <hr />
          <div className="my-5 grid grid-cols-3">
            <div>
              <p>Status</p>
              <p className="font-semibold">{data.status}</p>
            </div>
            <div>
              <p>Jumlah Unit</p>
              <p className="font-semibold">
                {data.jumlah_unit == null ? '0' : data.jumlah_unit + ' Unit'}
              </p>
            </div>
            <div>
              <p>Unit Tersedia</p>
              <p className="font-semibold">
                {data.unit_tersedia == null ? '0' : data.unit_tersedia + ' Unit'}
              </p>
            </div>
          </div>
          <hr />
          <div className="mb-5 mt-3">
            <p>Pengembalian</p>
            <p className="font-semibold">
              {dateFormatInvesta(data.estimasi_pengembalian)}
            </p>
          </div>
          <div className="mb-5">
            <p className="font-semibold">Perhatian</p>
            <p>
              Resiko kredit atau gagal bayar ditanggung sepenuhnya oleh pendana.
              Mohon mempelajari risiko pendanaan sebelum mendanai.
            </p>
          </div>
          <hr />
          <div className="mb-5 mt-3">
            <p className="font-semibold">Rincian Proyek</p>
            <p>{data.deskripsi}</p>
          </div>
        </div>
        <div className="flex justify-end">
          {data.status === 'Proyek Berjalan' ||
            data.status === 'Pendanaan Terpenuhi' ||
            data.status === 'Verifikasi Pembayaran' ||
            data.status === 'Pembayaran Gagal' ||
            data.status === 'Proyek Selesai' ? (
            <div>
              <Button
                label={'Tracking Proyek'}
                linkTo={`/proyek/${params.id}/form-transaksi`}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
