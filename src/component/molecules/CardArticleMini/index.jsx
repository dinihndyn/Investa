import { PUBLIC_URL } from '../../../utils/constant';
import { dateFormatInvesta } from '../../../utils/function';

export const CardArtikelMini = ({ image, title, date, sub_title }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <img
          src={PUBLIC_URL + 'image/' + image}
          alt="img"
          className="w-42 h-3w-42 object-cover rounded-xl"
        />
        <h1 className="text-lg font-semibold mb-3">{title}</h1>
        <div className="flex gap-3  col-span-2">
          <p>Admin</p>
          <p className="text-investa-netral-50">| {dateFormatInvesta(date)}</p>
        </div>
        <div className="w-fit px-3 py-1 text-xs col-span-2 bg-investa-netral-50 text-investa-netral-70 font-semibold rounded">
          {sub_title}
        </div>
      </div>
      <div className="w-full bg-black h-[2px] my-10"></div>
    </>
  );
};
