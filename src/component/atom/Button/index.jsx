import { Link } from 'react-router-dom';

export const Button = ({ type, disabled, label, linkTo, fit }) => {
  return linkTo ? (
    <Link
      to={linkTo}
      className={`bg-investa-primary-50 hover:bg-investa-primary-70 whitespace-nowrap transition-all ${
        fit ? 'w-fit' : 'w-full'
      } py-2 rounded text-white disabled:cursor-not-allowed disabled:bg-investa-primary-30 px-7`}
    >
      {label}
    </Link>
  ) : (
    <div>
      <button
        type={type}
        disabled={disabled ? true : false}
        className="bg-investa-primary-50 hover:bg-investa-primary-70 transition-all w-full py-2 rounded text-white disabled:cursor-not-allowed disabled:bg-investa-primary-30"
      >
        {label}
      </button>
    </div>
  );
};
