import { useEffect, useState } from 'react';
import { Container } from '../../../component/atom/Container/Container';
import FormKunjungan from './assets/form-kunjungan.png';
import FormMasukan from './assets/form-masukan.png';
import FormPembayaran from './assets/form-pembayaran.png';
import FormPinjaman from './assets/form-pinjaman.png';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { CardFormTransaksi } from './CardFormTransaksi';
import { Layouts } from '../../../component/molecules/Layouts';
import axios from 'axios';
import { useAuthHeader } from 'react-auth-kit';
import { getTokenInvesta } from '../../../utils/function';
import { API_URL } from '../../../utils/constant';

const FormTransaksi = () => {
  const params = useParams();
  const [data, setData] = useState({});
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
  return (
    <Layouts title={'Form Transaksi'}>
      <Container>
        <h1 className="text-2xl font-bold mb-5">Tracking Proyek</h1>
        <div className="bg-investa-netral-30 p-10 rounded-2xl ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <CardFormTransaksi
                  img={FormPinjaman}
                  href={`/admin/tracking_proyek/${params.id}/form-transaksi/pinjaman`}
                  label={'Form Pinjaman'}
                  status={data?.status}
                />
                <CardFormTransaksi
                  img={FormMasukan}
                  href={`/admin/tracking_proyek/${params.id}/form-transaksi/pengembalian`}
                  label={'Form Pemasukan Panen'}
                  status={data?.status}
                />
                <CardFormTransaksi
                  img={FormKunjungan}
                  href={`/admin/tracking_proyek/${params.id}/form-transaksi/kunjungan`}
                  label={'Form Kunjungan'}
                  status={data?.status}
                />
                <CardFormTransaksi
                  img={FormPembayaran}
                  href={`/admin/tracking_proyek/${params.id}/form-transaksi/pembayaran`}
                  label={'Form Pembayaran'}
                  status={data?.status}
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
                    Form Kunjungan adalah form yang harus diisi oleh petani
                    setiap kali petugas investa melakukan survey
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
              to={'/admin/tracking_proyek/' + params.id}
              className="border bg-white   border-investa-primary-50 px-20 py-3 rounded text-investa-primary-50 hover:bg-investa-primary-50 hover:text-white transition-all"
            >
              Kembali
            </Link>
          </div>
        </div>
      </Container>
    </Layouts>
  );
};

export default FormTransaksi;
