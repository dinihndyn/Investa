import { Link } from 'react-router-dom';

export const ImgLink = ({ src, link, onError }) => {
  return (
    <Link to={link}>
      <div className="relative">
        <img
          className="rounded-3xl w-full"
          src={src}
          alt=""
          onError={onError}
        />
        <div className="absolute rounded-3xl bg-gray-800 inset-0 flex items-center justify-center opacity-0 hover:opacity-75 transition-opacity">
          <div className="text-white px-4 py-2 font-bold text-2xl">
            <span>Detail Proyek</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
