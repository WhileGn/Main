import "./Navbar.css";
import React from "react";
// import { Link, NavLink } from "react-router-dom";
import Link from "next/link";
const Navbar: React.FC = function (props) {
  return (
    <div className="navbar_Main">
      <div className="navbar_icon">
        <p className="navbar_icon_self">Coffee</p>
      </div>
      <div className="navbar_btn_Maindiv">
        <Link className="navbar_btn SMainPage" href={"/"}>
          Home
        </Link>
        <Link className="navbar_btn" href={"About"}>
          AboutCoffe
        </Link>
        <Link className="navbar_btn" href={"Bycart"}>
          Bying
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
