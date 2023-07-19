import "./Navbar.css";
import React, { useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
import Link from "next/link";
import { useSelector } from "react-redux";
const Navbar: React.FC = function (props) {
  const count = useSelector((state: any) => state.counter.value);
  const numberRedux = useSelector((state: any) => state.counter.numvalue);

  const clickanimatingTarget = document.querySelector(".byingnumber");

  useEffect(() => {
    if (count) {
      clickanimatingTarget?.classList.add("navbar_btn_animating_click");
    } else if (!count) {
      clickanimatingTarget?.classList.remove("navbar_btn_animating_click");
    }
  }, [count]);

  return (
    <div className="navbar_Main navbar_Main_01">
      <div className="navbar_icon">
        <div className="navbar_icon_self__father">
          <p className="navbar_icon_self">Coffee</p>
        </div>
      </div>
      <div className="navbar_btn_Maindiv">
        <Link className="navbar_btn SMainPage" href={"/"}>
          Home
        </Link>
        <Link className="navbar_btn test__btn__navbar" href={"About"}>
          AboutCoffe
        </Link>
        <Link className="navbar_btn navbar_btn_bying" href={"Bycart"}>
          Bying
          <div className="parent__byingnumber__div">
            <div className="byingnumber">{numberRedux}</div>
            <div className="bying-new-show">new</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
