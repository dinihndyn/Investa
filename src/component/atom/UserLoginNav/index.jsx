import { useState } from 'react';
import { useAuthUser, useSignOut } from 'react-auth-kit';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../utils/constant';

export const UserLoginNav = () => {
  const userData = useAuthUser();
  const signOut = useSignOut();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li>
      <>
        <button
          id="dropdownHoverButton"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="hover"
          className="text-black capitalize border border-investa-primary-50 py-1 px-2 justify-center rounded-lg flex items-center gap-2"
          type="button"
        >
          <img
            src={PUBLIC_URL + 'image/' + userData().photo}
            alt="image-profile"
            className="w-8 h-8 rounded-full"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                'https://cdn.vectorstock.com/i/preview-1x/32/12/default-avatar-profile-icon-vector-39013212.jpg';
            }}
          />
          {userData().name}
        </button>
        {/* Dropdown menu */}
        <div
          // id="dropdownHover"
          className={`z-10 ${
            isOpen ? 'block' : 'hidden'
          } bg-white divide-y absolute divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <li className="flex items-center">
              <p
                href="#"
                className="block px-4 py-5 text-end  dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {userData().name}
              </p>
              <img
                src={PUBLIC_URL + 'image/' + userData().photo}
                alt="image-profile"
                className="w-8 h-8 rounded-full"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src =
                    'https://cdn.vectorstock.com/i/preview-1x/32/12/default-avatar-profile-icon-vector-39013212.jpg';
                }}
              />
            </li>
            <hr />
            <hr />
            <li>
              <Link
                to={'/profil'}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Profil Saya
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Notifikasi
              </a>
            </li>
            <li>
              <Link
                to={
                  userData().tipeAkun == 'Petani'
                    ? '/dashboard-petani'
                    : '/investor/dashboard'
                }
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  signOut();
                  window.location.replace('/login');
                }}
                className="block w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </>
    </li>
  );
};
