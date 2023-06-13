import { NavLink } from "react-router-dom";

export const MenuDropdown = ({ name, link, submenu }) => {
  if (submenu) {
    return (
      <>
        <button
          id={"dropdownMenu" + name}
          data-dropdown-toggle={"dropdown" + name}
          className="sidebar active flex justify-between items-center" type="button">
          <div className='text-xl font-medium'>{name}</div>
          <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div id={"dropdown" + name} className="z-10 hidden bg-white shadow w-64 dark:bg-gray-700">
          <ul className="text-sm text-gray-700 dark:text-gray-200 border" aria-labelledby={"dropdownMenu" + name}>
            {submenu.map((item, index) => {
              return (
                <li key={index} className='p-3 ps-10 hover:border-investa-primary-70 hover:bg-investa-primary-10 border-r-4'>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? 'bg-investa-primary-10 p-3 border-investa-primary-70  border-r-4' : ''
                    }
                  >
                    <div className="text-xl font-medium ">{item.name}</div>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      </ >
    );
  } else {
    return (
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? 'sidebar actives' : 'sidebar'
        }
      >
        <div className="text-xl font-medium ">{name}</div>
      </NavLink>
    );
  }
};