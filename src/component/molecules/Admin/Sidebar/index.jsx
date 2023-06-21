import { useAuthUser } from 'react-auth-kit';
import { NavLink } from 'react-router-dom';
import { MenuDropdown } from '../MenuDropdown';
import { PUBLIC_URL } from '../../../../utils/constant';

const AdminInfo = () => {
  const user = useAuthUser();
  return (
    <div className="flex justify-start items-center pl-5 py-5">
      <img
        className="rounded-full w-50 h-50 mr-3"
        src={PUBLIC_URL + 'image/' + user().photo}
        alt="image description"
        onError={(e) => {
          e.target.src = 'https://placehold.co/90';
        }}
      />
      <div>
        <p className="font-bold text-base">{user().name}</p>
        <p className="text-gray-400">{user().email}</p>
      </div>
    </div>
  );
};

const menu = [
  {
    name: 'Dashboard',
    link: '/admin/dashboard',
  },
  {
    name: 'Persetujuan',
    link: '/admin/persetujuan',
  },
  {
    name: 'Traking',
    link: '/admin/traking_investor',
    submenu: [
      {
        name: 'Investor',
        link: '/admin/tracking_investor',
      },
      {
        name: 'Proyek',
        link: '/admin/tracking_proyek',
      },
    ],
  },
  {
    name: 'Pencairan',
    submenu: [
      {
        name: 'Investor',
        link: '/admin/pencairan_investor',
      },
      {
        name: 'Petani',
        link: '/admin/pencairan_petani',
      },
    ],
  },
  {
    name: 'Management Akun',
    submenu: [
      {
        name: 'Investor',
        link: '/admin/akun_investor',
      },
      {
        name: 'Petani',
        link: '/admin/akun_petani',
      },
    ],
  },
  {
    name: 'Artikel',
    submenu: [
      {
        name: 'Artikel',
        link: '/admin/artikel/list',
      },
      {
        name: 'Input Artikel',
        link: '/admin/artikel/input',
      },
      {
        name: 'Manajemen Unggahan',
        link: '/admin/artikel/management_unggahan',
      },
    ],
  },
  // {
  //   name: "Logout",
  //   link: "/admin/logout",
  // },
];

export const Sidebar = ({ children, withLogo }) => {
  return (
    <>
      <div className="flex md:hidden flex-col items-center gap-1 px-10 bg-investa-primary-10 justify-center py-3 mb-5">
        <NavLink
          to={'/profil'}
          className={({ isActive }) =>
            isActive ? 'sidebar-header actives' : 'sidebar-header'
          }
        >
          <div className="text-xs font-medium ">Informasi Pengguna</div>
        </NavLink>
        <NavLink
          to={'/edit-profil'}
          className={({ isActive }) =>
            isActive ? 'sidebar-header actives' : 'sidebar-header'
          }
        >
          <div className="text-xs font-medium ">Edit Profil</div>
        </NavLink>
        <NavLink
          to={'/pengaturan-akun'}
          className={({ isActive }) =>
            isActive ? 'sidebar-header actives' : 'sidebar-header'
          }
        >
          <div className="text-xs font-medium flex gap-2 items-center ">
            <span>Pengaturan Akun</span>
          </div>
        </NavLink>
        <button type={'button'} className="sidebar-header">
          <div className="text-xs font-medium  gap-2 items-center ">
            <span>Keluar</span>
          </div>
        </button>
      </div>
      <div
        className={`${
          withLogo ? 'min-h-[100vh]' : 'min-h-[80vh]'
        }  transition-all  flex relative`}
      >
        <div className="w-[350px] border-r-2 border-r-investa-primary-30 hidden md:block bg-white  ">
          <div className="flex flex-col">
            <div
              className={
                'flex flex-wrap items-center justify-center mx-5 p-4 py-10 ' +
                (withLogo ? '' : 'hidden')
              }
            >
              <a href="/" className="flex items-center">
                <img
                  src="/assets/images/investa-logo.png"
                  className="h-8 mr-3 "
                  alt="investa-logo"
                />
              </a>
            </div>
            <AdminInfo />
            {menu.map((item, index) => {
              return (
                <MenuDropdown
                  key={index}
                  name={item.name}
                  link={item.link}
                  submenu={item.submenu}
                />
              );
            })}
          </div>
        </div>

        <div className="w-full ">{children}</div>
      </div>
    </>
  );
};
