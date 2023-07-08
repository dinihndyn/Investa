import { Link } from 'react-router-dom';
import { toRupiahInvesta } from '../../../utils/function';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { API_URL, PUBLIC_URL } from '../../../utils/constant';
import { useEffect, useState } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import axios from 'axios';

export const CardProyekInvestor = ({ terpenuhi, day, amount, progress, data }) => {
  const [dataDashboard, setDataDashboard] = useState({
    total_dana: '',
  });
  const token = useAuthHeader();
  const getData = async () => {
    try {
      const res = await axios.post(API_URL + '/wallet/totalAset', null, {
        headers: {
          Authorization: `${token()}`,
        },
      });
      setDataDashboard({
        total_dana: res.data.total_asset,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-white rounded-lg">
      {terpenuhi ? (
        <Link
          to={`/investor/investasi/proyek/${data.id}`}
          className="relative group rounded-lg"
        >
          <img
            src={PUBLIC_URL + data.files[0].alamat_gambar}
            alt="img-thumbnail"
            className="rounded-lg w-full h-[200px] object-cover"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg';
            }}
          />
          <div className="absolute w-full h-full bg-black/70 rounded-lg top-0 transition-all items-center justify-center flex">
            {data.status === 'Pendanaan Terpenuhi' ? (
              <h1 className="text-white font-bold text-2xl">
                Pendanaan Terpenuhi
              </h1>
            ) : data.status === 'Proyek Selesai' ? (
              <h1 className="text-white font-bold text-2xl">
                Proyek Selesai
              </h1>
            ) : null}
          </div>
        </Link>
      ) : (
        <Link
          to={`/investor/investasi/proyek/${data.id}`}
          className="relative group rounded-lg"
        >
          <img
            src={PUBLIC_URL + data.files[0].alamat_gambar}
            alt="img-thumbnail"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg';
            }}
            className="rounded-lg w-full h-[200px] object-cover"
          />
          <div className="absolute w-full h-full bg-black/70 rounded-lg top-0 transition-all items-center justify-center hidden group-hover:flex">
            <h1 className=" text-white font-bold text-2xl">DETAIL PROYEK</h1>
          </div>
          <div className="absolute top-2 text-black bg-white right-2 flex p-2 rounded-lg font-bold items-center gap-2 ">
            {' '}
            <AiOutlineClockCircle className="w-fit" />
            <span>{day} Hari Tersisa</span>
          </div>
        </Link>
      )}
      <h1 className="my-3 text-2xl font-bold py-1 px-5">
        {data.pengajuan_name}
      </h1>
      <div className="grid grid-cols-2 justify-between px-5">
        <p className="text-xs">Ekspetasi Imbal Hasil</p>
        <p className="text-end text-sm">{data.imbal_hasil}%</p>
        <p className="text-sm">Lokasi</p>
        <p className="text-end text-sm">Nganjuk</p>
        <p className="text-sm">Resiko</p>
        <p className="text-end text-sm">{data.resiko}</p>
      </div>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          style={{ width: `${progress > 100 ? 100 : progress}%` }}
          className={`bg-investa-primary-50 mt-5 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
        >
          {progress.toFixed(1) > 100 ? 100 : progress.toFixed(1)}%
        </div>
      </div>
      <div className="mt-5 py-5 bg-investa-primary-10 rounded-lg">
        <div className="grid grid-cols-2 justify-between px-5">
          {dataDashboard.total_dana != '' ? (
            <>
              <p className="text-sm">Dana Investasi:</p>
              <p className="text-end text-sm">
                {amount}
              </p>
            </>
          ) : null}
          <p className="text-sm font-bold">Kebutuhan Dana</p>
          <p className="text-end text-sm font-bold">
            {toRupiahInvesta(data.total_pengajuan)}
          </p>
          <p className="text-sm">Dana Terkumpul</p>
          <p className="text-end text-sm">
            {toRupiahInvesta(data.dana_terkumpul)}
          </p>
        </div>
      </div>
    </div>
  );
};
