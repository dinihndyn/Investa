import { Link } from 'react-router-dom';
import toRupiah from '@develoka/angka-rupiah-js';
import { PUBLIC_URL } from '../../../utils/constant';
export const CardInvestasi = ({
  statusProyek,
  pengajuan,
  dana_terkumpul,
  name,
  img,
  id,
}) => {
  const progress = ((dana_terkumpul / pengajuan) * 100).toFixed(2);
  return (
    <div className="rounded-lg">
      <img
        src={PUBLIC_URL + img}
        alt="gambar"
        className="h-[200px] w-full object-cover rounded-lg shadow"
      />
      <div className=" bg-white flex flex-col gap-3 group transition-all">
        <h1 className="font-semibold text-2xl mb-3 px-5 py-5">{name}</h1>

        <div className="group-hover:hidden group-hover:transition-all">
          <div className="px-5 py-5">
            <div className="flex flex-row justify-between">
              <p>Dana Terkumpul</p>
              <p>
                {dana_terkumpul == null ? 'Rp.0' : toRupiah(dana_terkumpul)}
              </p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Kebutuhan Dana</p>
              <p> {toRupiah(pengajuan)}</p>
            </div>
          </div>
        </div>

        <div className="hidden group-hover:block group-hover:transition-all">
          <div className="px-5 py-5">
            <div className="flex flex-row justify-between">
              <p>Ekspetasi Imbal Hasil</p>
              <p>5%</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Lokasi</p>
              <p>Nganjuk</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Resiko</p>
              <p>Sedang</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className={`bg-investa-primary-50 w-full] mt-5 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
              >
                {progress}%
              </div>
            </div>
          </div>

          <div className="mt-5 bg-investa-primary-10 rounded-lg p-5">
            <div className="flex flex-row justify-between">
              <p>Dana Terkumpul</p>
              <p>
                {dana_terkumpul == null ? 'Rp.0' : toRupiah(dana_terkumpul)}
              </p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Kebutuhan Dana</p>
              <p> {toRupiah(pengajuan)}</p>
            </div>
          </div>
        </div>
        <Link className="" to={`/proyek/${id}`}>
          <div className="p-3 bg-investa-netral-30 font-bold text-center rounded-lg">
            {statusProyek}
          </div>
        </Link>
      </div>
    </div>
  );
};