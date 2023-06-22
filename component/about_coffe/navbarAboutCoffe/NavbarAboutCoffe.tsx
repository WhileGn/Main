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
  // const [mainstate, setmainstate] = useState(0);

  // let options = {
  //   root: document.querySelector("#scrollArea"),
  //   rootMargin: "0px",
  //   threshold: 1.0,
  // };

  // let observer = new IntersectionObserver(callback, options);

  const ref_0: any = useRef();
  // const ref_1: any = useRef().current;
  const entry_1: any = useIntersectionObserver(ref_0, {});
  console.log(ref_0);

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
      {/* <div id="navbar_mobileresponsve_icon" className="">
        <GoListUnordered size={30} color="red"></GoListUnordered>
      </div> */}
    </div>
  );
};

export default NavbarAboutCoffe;
