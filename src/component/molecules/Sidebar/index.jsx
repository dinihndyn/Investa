import { AiTwotoneSetting } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

import { NavLink } from 'react-router-dom';

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
            <h1 className="text-3xl font-semibold mb-3 pt-10 pb-5 px-5">
              Profil Saya
            </h1>
            <NavLink
              to={'/profil'}
              className={({ isActive }) =>
                isActive ? 'sidebar actives' : 'sidebar'
              }
            >
              <div className="text-xl font-medium ">Informasi Pengguna</div>
            </NavLink>
            <NavLink
              to={'/edit-profil'}
              className={({ isActive }) =>
                isActive ? 'sidebar actives' : 'sidebar'
              }
            >
              <div className="text-xl font-medium ">Edit Profil</div>
            </NavLink>
            <div className=" h-[2px] mx-5 my-5 bg-investa-primary-30"></div>
            <NavLink
              to={'/pengaturan-akun'}
              className={({ isActive }) =>
                isActive ? 'sidebar actives' : 'sidebar'
              }
            >
              <div className="text-xl font-medium flex gap-2 items-center ">
                <AiTwotoneSetting className="w-fit" />
                <span>Pengaturan Akun</span>
              </div>
            </NavLink>
            <button type={'button'} className="sidebar">
              <div className="text-xl font-medium flex gap-2 items-center ">
                <FiLogOut className="w-fit" />
                <span>Keluar</span>
              </div>
            </button>
          </div>
        </div>

        <div className="w-full">{children}</div>
      </div>
    </>
  );
};
