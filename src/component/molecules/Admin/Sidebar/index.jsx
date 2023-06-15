import { AiTwotoneSetting } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

import { NavLink } from 'react-router-dom';
import { MenuDropdown } from '../MenuDropdown';

const AdminInfo = () => {
  return <div className='flex justify-start items-center pl-5 py-5'>
    <img className="rounded-full w-50 h-50 mr-3" src="https://placehold.co/90" alt="image description" />
    <div>
      <p className='font-bold text-base'>Dini Dwi Handayani</p>
      <p className='text-gray-400'>diniwih@gmail.com</p>
    </div>
  </div>
}

const menu = [
  {
    name: "Dashboard",
    link: "/admin/dashboard"
  },
  {
    name: "Persetujuan",
    link: "/admin/persetujuan"
  },
  {
    name: "Traking",
    link: '/admin/traking_investor',
    submenu: [
      {
        name: 'Investor',
        link: '/admin/tracking_investor'
      },
      {
        name: 'Proyek',
        link: '/admin/tracking_proyek'
      }
    ]
  },
  {
    name: "Pencairan",
    submenu: [
      {
        name: 'Investor',
        link: '/admin/pencairan/investor'
      },
      {
        name: 'Petani',
        link: '/admin/pencairan/petani'
      }
    ]
  },
  {
    name: "Management Akun",
    submenu: [
      {
        name: 'Investor',
        link: '/admin/akun/investor'
      },
      {
        name: 'Petani',
        link: '/admin/akun/petani'
      }
    ]
  },
  {
    name: "Artikel",
    submenu: [
      {
        name: 'Artikel',
        link: '/admin/artikel/list'
      },
      {
        name: 'Input Artikel',
        link: '/admin/artikel/input'
      },
      {
        name: 'Manajemen Unggahan',
        link: '/admin/artikel/management_unggahan'
      }
    ]
  },
  {
    name: "Logout",
    link: '/admin/logout'
  }
]

export const Sidebar = ({ children }) => {
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
      <div className={` min-h-[80vh] transition-all  flex relative`}>
        <div className="w-[350px] border-r-2 border-r-investa-primary-30 hidden md:block bg-white  ">
          <div className="flex flex-col ">
            <AdminInfo />
            {
              menu.map((item, index) => {
                return (
                  <MenuDropdown
                    key={index}
                    name={item.name}
                    link={item.link}
                    submenu={item.submenu}
                  />
                )
              })
            }
          </div>
        </div>

        <div className="w-full">{children}</div>
      </div>
    </>
  );
};
