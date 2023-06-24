import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../../utils/constant';
import {
  getPercentageInvesta,
  toRupiahInvesta,
} from '../../../../utils/function';
import { Loading } from '../../Loading';

export const CardProyek = ({
  item,
  title,
  status,
  id,
  link = 'persetujuan',
}) => {
  if (item == {}) {
    return <Loading />;
  }
  return (
    <div className="relative max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <Link to={'/admin/' + link + '/' + id}>
        <img
          className="rounded-lg w-full h-[200px] object-cover"
          src={PUBLIC_URL + item?.files?.[0].alamat_gambar}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg';
          }}
          alt="img-thumbnail"
        />
      </Link>
      <div>
        <div className="p-3 group">
          <Link to={'/admin/' + link + '/' + id}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
              {title}
            </h5>
          </Link>
          <div
            className={`mb-2 font-normal text-gray-700 dark:text-gray-400 grid grid-cols-2 grid-flow-row hidden group-hover:grid`}
          >
            <p>Expektasi Imbal Hasil</p>
            <p className="text-right">{(item.imbal_hasil || '-') + '%'}</p>
            <p className="">Lokasi</p>
            <p className="text-right">{item?.info_tani?.kecamatan}</p>
            <p className="">Resiko</p>
            <p className="text-right">{item.resiko || '-'}</p>
            <div className="w-full bg-gray-200 col-span-2 mt-2 rounded-full dark:bg-gray-700">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{
                  width: `${getPercentageInvesta(
                    item.dana_terkumpul,
                    item.total_pengajuan
                  )}%`,
                }}
              >
                {getPercentageInvesta(
                  item.dana_terkumpul,
                  item.total_pengajuan
                )}
                %
              </div>
            </div>
          </div>
          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 grid grid-cols-2 grid-flow-row">
            <p>Dana Terkumpul</p>
            <p className="text-right">
              {toRupiahInvesta(
                item.dana_terkumpul == null ? 0 : item.dana_terkumpul
              )}
            </p>
            <p className="font-bold">Kebutuhan Dana</p>
            <p className="text-right font-bold">
              {toRupiahInvesta(
                item.total_pengajuan == null ? 0 : item.total_pengajuan
              )}
            </p>
          </p>
        </div>
        <Link
          to={'/admin/' + link + '/' + item.id}
          className={`button block w-full items-center justify-center px-3 py-2 text-sm font-bold text-center ${
            status == 'Sedang Diverifikasi'
              ? 'bg-[#6D6D6D]'
              : status == 'Proyek Berjalan'
              ? 'bg-[#53A711]'
              : status == 'Proyek Ditolak'
              ? 'bg-[#B83A52]'
              : status == 'Pendanaan Terpenuhi'
              ? 'bg-[#D57415]'
              : 'bg-[#DCDCDC]'
          } rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800`}
        >
          {status}
        </Link>
      </div>
    </div>
  );
};
