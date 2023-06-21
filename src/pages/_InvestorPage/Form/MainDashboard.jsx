import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import { Link, useParams } from 'react-router-dom';
import { getTokenInvesta } from '../../../utils/function';
import { API_URL } from '../../../utils/constant';
import { CardFormTransaksi } from '../../FormTransaksi/CardFormTransaksi';
import FormInfoKunjungan from '../../FormTransaksi/assets/form-kunjungan.png';
import FormPemasukanPanen from '../../FormTransaksi/assets/form-masukan.png';
import FormPembayaran from '../../FormTransaksi/assets/form-pembayaran.png';
import FormPinjaman from '../../FormTransaksi/assets/form-pinjaman.png';

export const MainDashboard = () => {
  const params = useParams();
  const [data, setData] = useState();
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
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Tracking Proyek</h1>
      <div className="bg-investa-netral-30 p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <CardFormTransaksi
                img={FormInfoKunjungan}
                href={`/investor/investasi/proyek/${params.id}/form/pinjaman`}
                label={'Form Pencairan Pinjaman'}
                status={data?.status}
              />
              <CardFormTransaksi
                img={FormPemasukanPanen}
                href={`/investor/investasi/proyek/${params.id}/form/pemasukan`}
                label={'Form Pemasukan/Panen'}
                status={data?.status}
              />
              <CardFormTransaksi
                img={FormPembayaran}
                href={`/investor/investasi/proyek/${params.id}/form/kunjungan`}
                label={'Form Kunjungan'}
                status={data?.status}
              />
              <CardFormTransaksi
                href={`/investor/investasi/proyek/${params.id}/form/pembayaran`}
                img={FormPinjaman}
                status={data?.status}
                label={'Form Pembayaran'}
              />
            </div>
          </div>
          <div className="border border-black p-5 rounded-lg">
            <h1 className="font-bold mb-3">Petunjuk:</h1>
            <p className="mb-5">
              Untuk memastikan kerjasana Investa dengan peminjam sukses,
              diharapkan untuk input data progress kerjasama di form sebagai
              berikut :
            </p>
            <div className="m-3 ps-5 mb-5">
              <ol className="list-decimal">
                <li>
                  Form Pinjaman adalah form yang memuat barang pinjaman yang
                  menjadi keperluan petani
                </li>
                <li>
                  Form Kunjungan adalah form yang harus diisi oleh petani setiap
                  kali petugas investa melakukan survey
                </li>
                <li>
                  Form Pemasukan/Panen adalah form yang harus diisi petani
                  ketika sudah melakukan penjualan panen
                </li>
                <li>
                  Form Pembayaran adalah form yang harus diisi petani ketika
                  melakukan pembayaran atau pengembalian dana
                </li>
              </ol>
            </div>
            <div>
              Form ini ditujukan untuk keperluan tracking investor terhadap
              progress petani, dan merupakan hal yang sangat penting untuk di
              perhatikan
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Link
            to="/"
            className="border bg-white   border-investa-primary-50 px-20 py-3 rounded text-investa-primary-50 hover:bg-investa-primary-50 hover:text-white transition-all"
          >
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
};
