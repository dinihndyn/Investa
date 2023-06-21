import {
  useAuthHeader,
  useAuthUser,
  useIsAuthenticated,
  useSignOut,
} from 'react-auth-kit';
import { NavbarItem } from '../../atom/NavbarItem';
import { RiErrorWarningLine } from 'react-icons/ri';
import { UserLoginNav } from '../../atom/UserLoginNav';
import axios from 'axios';
import { getTokenInvesta } from '../../../utils/function';
import { API_URL } from '../../../utils/constant';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const isAuthenticated = useIsAuthenticated();
  window.scrollTo(0, 0);
  const token = useAuthHeader();
  const logout = useSignOut();
  const navigate = useNavigate();

  const getMe = async () => {
    try {
      const res = await axios.post(
        API_URL + '/auth/me',
        null,
        getTokenInvesta(token())
      );
      console.log('res ', res);
    } catch (error) {
      if (error.response.status == 401) {
        logout();
        navigate('/login');
      }
    }
  };
  const dataAuth = useAuthUser();
  useEffect(() => {
    if (
      dataAuth()?.tipeAkun == 'Petani' ||
      dataAuth()?.tipeAkun == 'Investor'
    ) {
      getMe();
    }
  }, []);

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md  w-full">
        <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-5 p-4">
          <a href="/" className="flex items-center">
            <img
              src="/assets/images/investa-logo.png"
              className="h-8 mr-3 "
              alt="investa-logo"
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center">
              {dataAuth()?.tipeAkun == 'Investor' ? (
                <NavbarItem to={'/investor/proyek'} label={'Mulai Investasi'} />
              ) : (
                <NavbarItem to={'/'} label={'Ajukan Pinjaman'} />
              )}

              <NavbarItem to={'/artikel'} label={'Artikel'} />
              <NavbarItem label={'Tentang Kami'} />

              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-investa-warning-50 hover:text-investa-warning-70 "
                >
                  <span className="text-black">TKB90</span>
                  <RiErrorWarningLine className="inline-block ms-1 text-black" />
                  <br />
                  97,29%
                </a>
              </li>
              {isAuthenticated() ? (
                <UserLoginNav />
              ) : (
                <>
                  <div>
                    <li>
                      <Link
                        to={'/login'}
                        href="#"
                        className="block border border-investa-primary-50 text-investa-primary-50 rounded-md py-2 pl-3 pr-4  hover:text-investa-warning-70 "
                      >
                        Masuk
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li>
                      <Link
                        to={'/register'}
                        href="#"
                        className="block py-2 pl-3 bg-investa-primary-50 text-white pr-4 rounded-md"
                      >
                        Daftar
                      </Link>
                    </li>
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
