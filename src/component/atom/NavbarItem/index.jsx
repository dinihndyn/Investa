import { Link } from 'react-router-dom';

export const NavbarItem = ({ label, to }) => {
  return (
    <div>
      <li>
        <Link
          to={to}
          href="#"
          className="block py-2 pl-3 pr-4 text-investa-warning-50 hover:text-investa-warning-70 "
        >
          {label}
        </Link>
      </li>
    </div>
  );
};
