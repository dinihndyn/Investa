import { PUBLIC_URL } from '../../../utils/constant';
import { dateFormatInvesta } from '../../../utils/function';

export const CardArtikel = ({
  judul,
  deskripsi,
  tanggal,
  sub_judul,
  image,
}) => {
  return (
    <div>
      <div className="flex gap-3 mb-3">
        <p>Admin</p>
        <p className="text-investa-netral-50">| {dateFormatInvesta(tanggal)}</p>
      </div>
      <div className="grid grid-cols-3 mb-3">
        <div className="col-span-2">
          <h1 className="text-2xl font-semibold mb-3">{judul}</h1>
          <p className="line-clamp-3">{deskripsi}</p>
          <div className="w-fit px-3 py-1 text-xs bg-investa-netral-50 text-investa-netral-70 font-semibold my-5 rounded">
            {sub_judul}
          </div>
        </div>
        <div>
          <img
            src={PUBLIC_URL + 'image/' + image}
            alt="img"
            className="w-56 h-56 object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="w-full bg-black h-[2px] my-10"></div>
    </div>
  );
};
