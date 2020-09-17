import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./sidebar.scss";

const SidebarLink = ({ label, icon, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return (
    <li className={match ? "menu__item menu__item--active" : "menu__item"}>
      <Link to={to} className="menu__link">
        <i className={icon}></i>
        {label}
      </Link>
    </li>
  );
};

function SideBar(props) {
  return (
    <div className="sidebar">
      <ul className="menu">
        <SidebarLink
          activeOnlyWhenExact={true}
          to="/"
          label="Dashboard"
          icon="far fa-tachometer-alt-fast"
        ></SidebarLink>
        <SidebarLink
          to="/products"
          label="Products"
          icon="far fa-shopping-basket"
        ></SidebarLink>
        <SidebarLink
          to="/category"
          label="Category"
          icon="far fa-clipboard-list"
        ></SidebarLink>
        <SidebarLink
          to="/orders"
          label="Orders"
          icon="fas fa-box-usd"
        ></SidebarLink>
        <SidebarLink
          to="/customers"
          label="Customers"
          icon="far fa-users"
        ></SidebarLink>
        <SidebarLink
          to="/logout"
          label="Logout"
          icon="fas fa-sign-out"
        ></SidebarLink>
      </ul>
    </div>
  );
}

export default SideBar;
