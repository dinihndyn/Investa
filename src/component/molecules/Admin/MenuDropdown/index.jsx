import { Dropdown } from "flowbite-react";
import { NavLink } from "react-router-dom";

export const MenuDropdown = ({ name, link, submenu }) => {
  if (submenu) {
    return (
      <div className=" sidebar text-xl">
        <Dropdown inline color={"yellow"} label={name}>
          {submenu.map((item, index) => {
            return (
              <NavLink className="text-2xl" key={index} to={item.link}>
                <Dropdown.Item>{item.name}</Dropdown.Item>
              </NavLink>
            );
          })}
        </Dropdown>
      </div>
    );
  } else {
    return (
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? "sidebar actives" : "sidebar")}
      >
        <div className="text-xl font-medium ">{name}</div>
      </NavLink>
    );
  }
};
