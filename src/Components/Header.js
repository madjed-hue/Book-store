import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="content">
          <NavLink to="/">
            <div className="header__logo">
              <img src="https://itbook.store/img/logo.png" alt="IT Bookstore" />
            </div>
          </NavLink>
          <div className="header__search">
            <input type="text" placeholder="Search" />
            <button type="button">
              <SearchIcon className="searchicon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
