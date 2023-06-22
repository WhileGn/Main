import "./NavbarAboutCoffe.css";
import React, { useRef } from "react";
// import { Link, NavLink } from "react-router-dom";
import Link from "next/link";
import { useState } from "react";
import { GoListUnordered } from "react-icons/go";
import { useIntersectionObserver } from "usehooks-ts";

const NavbarAboutCoffe: React.FC = function (props) {
  // const [mainstate, setmainstate] = useState(0);

  const ref_0: any = useRef().current;
  const ref_1: any = useRef().current;
  const entry_1 = useIntersectionObserver(ref_1, {});

  return (
    <div className="Snavbar_Main">
      <div className="Snavbar_icon">
        <p className="Snavbar_icon_self">Coffee</p>
      </div>
      <div ref={ref_0} id="navbar_mobileresponsve_icon" className="hidden">
        <GoListUnordered></GoListUnordered>
      </div>
      <div ref={ref_1} className="Snavbar_btn_Maindiv">
        <Link className="Snavbar_btn" href={"/"}>
          Home
        </Link>
        <Link className="Snavbar_btn SMainPage" href={"About"}>
          AboutCoffe
        </Link>
        <Link className="Snavbar_btn" href={"Bycart"}>
          Bying
        </Link>
      </div>
    </div>
  );
};

export default NavbarAboutCoffe;
