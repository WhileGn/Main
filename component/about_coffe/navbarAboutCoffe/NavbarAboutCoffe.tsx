import "./NavbarAboutCoffe.css";
import React, { useRef } from "react";
// import { Link, NavLink } from "react-router-dom";
import Link from "next/link";
import { useState } from "react";
import { GoListUnordered } from "react-icons/go";
import { useIntersectionObserver } from "usehooks-ts";
import { Root } from "postcss";
import { log } from "console";

const NavbarAboutCoffe: React.FC = function (props) {
  const ref_0: any = useRef();
  const entry_1: any = useIntersectionObserver(ref_0, {});

  return (
    <div ref={ref_0} className="Snavbar_Main">
      <div className="Snavbar_icon">
        <p className="Snavbar_icon_self">Coffee</p>
      </div>

      <div
        id="Snavbar_mobileresponsve_btn_Maindiv"
        className="Snavbar_btn_Maindiv"
      >
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
