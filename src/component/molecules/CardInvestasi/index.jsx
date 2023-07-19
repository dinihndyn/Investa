import { Link } from 'react-router-dom';
import toRupiah from '@develoka/angka-rupiah-js';
import { PUBLIC_URL } from '../../../utils/constant';
export const CardInvestasi = ({
  statusProyek,
  pengajuan,
  dana_terkumpul,
  name,
  imbal_hasil,
  img,
  id,
  resiko,
  lokasi
}) => {
  const progress = ((dana_terkumpul / pengajuan) * 100).toFixed(2);
  return (
    <div className="rounded-lg">
      <img
        src={PUBLIC_URL + img}
        alt="gambar"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src =
            'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg';
        }}
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
              <p>{imbal_hasil ? `${imbal_hasil}%` : '-'}</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Lokasi</p>
              <p>{lokasi}</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Resiko</p>
              <p>{resiko ? `${resiko}` : '-'}</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                style={{
                  width: `${progress > 100 ? 100 : progress}%`,
                }}
                className={`bg-investa-primary-50  mt-5 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
              >
                {progress > 100 ? 100 : progress}%
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
          <div
            className={`p-3 ${statusProyek == 'Sedang Diverifikasi'
              ? 'bg-[#6D6D6D]'
              : statusProyek == 'Proyek Berjalan'
                ? 'bg-[#53A711] text-white'
                : statusProyek == 'Proyek Ditolak'
                  ? 'bg-[#B83A52] text-white'
                  : statusProyek == 'Pendanaan Terpenuhi'
                    ? 'bg-[#D57415] text-white'
                    : statusProyek == 'Proyek Selesai'
                      ? 'bg-[#1C64F2] text-white'
                      : 'bg-[#DCDCDC]'
              } font-bold text-center rounded-lg`}
          >
            {statusProyek}
          </div>
        </Link>
      </div>
    </div>
  );
};
