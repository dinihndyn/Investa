import { NavLink } from 'react-router-dom';
import { Button } from '../../component/atom/Button';

export const SideDashboard = ({ children, isQuestion, isInvestor }) => {
  return (
    <section>
      {isInvestor ? (
        <div className="flex md:hidden flex-col items-center gap-1 px-10 bg-investa-primary-10 justify-center py-3 mb-5">
          <NavLink
            to={'/investor/dashboard'}
            className={({ isActive }) =>
              isActive ? 'sidebar-header actives' : 'sidebar-header'
            }
          >
            <div className="text-xs font-medium ">Dashboard</div>
          </NavLink>
          <NavLink
            to={'/investor/proyek'}
            className={({ isActive }) =>
              isActive ? 'sidebar-header actives' : 'sidebar-header'
            }
          >
            <div className="text-xs font-medium ">Proyek</div>
          </NavLink>
          <NavLink
            to={'/investor/investasi'}
            className={({ isActive }) =>
              isActive ? 'sidebar-header actives' : 'sidebar-header'
            }
          >
            <div className="text-xs font-medium ">Investasi</div>
          </NavLink>

          <button type={'button'} className="sidebar-header">
            <div className="text-xs font-medium  gap-2 items-center ">
              <span>Keluar</span>
            </div>
          </button>
        </div>
      ) : (
        <div className="flex md:hidden flex-col items-center gap-1 px-10 bg-investa-primary-10 justify-center py-3 mb-5">
          <NavLink
            to={'/dashboard-petani'}
            className={({ isActive }) =>
              isActive ? 'sidebar-header actives' : 'sidebar-header'
            }
          >
            <div className="text-xs font-medium ">Dashboard</div>
          </NavLink>
          <NavLink
            to={'/daftar-pinjaman'}
            className={({ isActive }) =>
              isActive ? 'sidebar-header actives' : 'sidebar-header'
            }
          >
            <div className="text-xs font-medium ">Daftar Pinjaman</div>
          </NavLink>
          <NavLink
            to={'/artikel'}
            className={({ isActive }) =>
              isActive ? 'sidebar-header actives' : 'sidebar-header'
            }
          >
            <div className="text-xs font-medium flex gap-2 items-center ">
              <span>Artikel</span>
            </div>
          </NavLink>
          <button type={'button'} className="sidebar-header">
            <div className="text-xs font-medium  gap-2 items-center ">
              <span>Keluar</span>
            </div>
          </button>
        </div>
      )}
      <div className={` min-h-[80vh] transition-all  flex relative`}>
        <div className="w-[350px] bg-white border-r-2 border-r-investa-primary-30 hidden md:block  ">
          {isInvestor ? (
            <div className="flex flex-col ">
              <div className="mt-10"></div>
              <NavLink
                to={'/investor/dashboard'}
                className={({ isActive }) =>
                  isActive ? 'sidebar actives' : 'sidebar'
                }
              >
                <div className="text-xl font-medium ">Dashboard</div>
              </NavLink>
              <NavLink
                to={'/investor/proyek'}
                className={({ isActive }) =>
                  isActive ? 'sidebar actives' : 'sidebar'
                }
              >
                <div className="text-xl font-medium ">Proyek</div>
              </NavLink>
              <NavLink
                to={'/investor/investasi'}
                className={({ isActive }) =>
                  isActive ? 'sidebar actives' : 'sidebar'
                }
              >
                <div className="text-xl font-medium ">Investasi</div>
              </NavLink>
              <div className=" h-[2px] mx-5 my-5 bg-investa-primary-30"></div>
              <NavLink
                to={'/artikel'}
                className={({ isActive }) =>
                  isActive ? 'sidebar actives' : 'sidebar'
                }
              >
                <div className="text-xl font-medium ">Artikel</div>
              </NavLink>
            </div>
          ) : (
            <div className="flex flex-col ">
              <div className="mt-10"></div>
              <NavLink
                to={'/dashboard-petani'}
                className={({ isActive }) =>
                  isActive ? 'sidebar actives' : 'sidebar'
                }
              >
                <div className="text-xl font-medium ">Dashboard</div>
              </NavLink>
              <NavLink
                to={'/daftar-pinjaman'}
                className={({ isActive }) =>
                  isActive ? 'sidebar actives' : 'sidebar'
                }
              >
                <div className="text-xl font-medium ">Daftar Pinjaman</div>
              </NavLink>
              <div className=" h-[2px] mx-5 my-5 bg-investa-primary-30"></div>
              <NavLink
                to={'/artikel'}
                className={({ isActive }) =>
                  isActive ? 'sidebar actives' : 'sidebar'
                }
              >
                <div className="text-xl font-medium ">Artikel</div>
              </NavLink>
            </div>
          )}
        </div>

        <div className="w-full">{children}</div>
      </div>
    </section>
  );
};
