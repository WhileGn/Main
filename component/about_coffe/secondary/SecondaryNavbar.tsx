import "./SecondaryNavbar.css";
import React from "react";
// import { Link, NavLink } from "react-router-dom";
import Link from "next/link";
import { useState } from "react";
const SecondaryNavbar: React.FC = function (props) {
  // const [mainstate, setmainstate] = useState(0);
  return (
    <div className="Snavbar_Main">
      <div className="Snavbar_icon">
        <p className="Snavbar_icon_self">Coffee</p>
      </div>
      <div className="Snavbar_btn_Maindiv">
        <Link className="Snavbar_btn" href={"/"}>
          Home
        </Link>
        <Link className="Snavbar_btn SMainPage" href={"About"}>
          AboutCoffe
        </Link>
        <Link className="Snavbar_btn" href={""}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
