import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import Images from "../../../constants/images";
import DrawerForm from "../DrawerForm";

function Header(props) {
  return (
    <header className="header">
      <Link className="header__logo" to="">
        <img src={Images.LOGO} alt="logo"></img>
      </Link>
      <div className="header__content">
        <DrawerForm addProduct />
        <i className="fal fa-bell"></i>
        <div className="header__avatar">
          <img
            src={Images.AVATAR}
            alt="avatar"
            className="header__image-rounder"
          ></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
