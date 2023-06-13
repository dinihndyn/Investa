import { Link, useParams } from 'react-router-dom';
import { CardFormTransaksi } from './CardFormTransaksi';
import FormKunjungan from './assets/form-kunjungan.png';
import FormMasukan from './assets/form-masukan.png';
import FormPembayaran from './assets/form-pembayaran.png';
import FormPinjaman from './assets/form-pinjaman.png';
import { useEffect, useState } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import axios from 'axios';
import { API_URL } from '../../utils/constant';
import { getTokenInvesta } from '../../utils/function';

export const FormTransaksiChild = () => {
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
      <h1 className="text-2xl font-bold mb-5">Form Transaksi</h1>
      <div className="bg-investa-netral-30 p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <CardFormTransaksi
                img={FormKunjungan}
                href={`/proyek/${params.id}/form-transaksi/pinjaman`}
                label={'Form Pinjaman'}
                status={data?.status}
              />
              <CardFormTransaksi
                img={FormMasukan}
                href={`/proyek/${params.id}/form-transaksi/pemasukan`}
                label={'Form Pemasukan/Panen'}
                status={data?.status}
              />
              <CardFormTransaksi
                img={FormPembayaran}
                href={`/proyek/${params.id}/form-transaksi/kunjungan`}
                label={'Form Kunjungan'}
                status={data?.status}
              />
              <CardFormTransaksi
                href={`/proyek/${params.id}/form-transaksi/pembayaran`}
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
