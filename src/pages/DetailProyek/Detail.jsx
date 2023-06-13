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
          />
          <p className="mt-5 flex flex-row gap-2">
            <span className="font-bold whitespace-nowrap">Lokasi :</span>
            <span>
              {data.info_tani.alamat} Kecamatan {data.info_tani.kecamatan}
              ,Kabupaten {data.info_tani.kota}.
            </span>
          </p>
        </div>
        <div>
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

          <div>
            <h1 className="font-semibold mb-3 mt-3">
              Pendanaan yang Terkumpul
            </h1>
          </div>
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
                {data.jumlah_unit == null ? '0' : data.jumlah_unit + 'Unit'}
              </p>
            </div>
            <div>
              <p>Unit Tersedia</p>
              <p className="font-semibold">
                {data.jumlah_unit == null ? '0' : data.jumlah_unit + 'Unit'}
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
          <div className="mb-5">
            <p className="font-semibold">Rincian Proyek</p>
            <p>
              Pertanian jagung di Nganjuk merupakan sektor penting dalam
              perekonomian daerah tersebut. Varietas jagung yang dibudidayakan
              meliputi varietas hibrida dan lokal. Petani menggunakan metode
              penanaman langsung dan melakukan pemeliharaan rutin seperti
              penyiangan gulma, pengendalian hama dan penyakit, serta pengairan
              yang cukup. Panen dilakukan setelah tanaman mencapai kematangan
              fisiologis. Tantangan yang dihadapi petani termasuk serangan hama
              dan penyakit, perubahan iklim, serta akses terbatas terhadap
              teknologi dan pembiayaan. Namun, dengan inovasi teknologi
              pertanian, pelatihan petani, dan dukungan pemerintah, pertanian
              jagung di Nganjuk memiliki potensi untuk terus berkembang
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div>
            <Button
              label={'Form Transaksi'}
              linkTo={`/proyek/${params.id}/form-transaksi`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
