import "./Navbar.css";
import React, { useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { MainState } from "@/app/GolobalRedux/features/counter/counterSlice";
const Navbar: React.FC = function (props) {
  const count = useSelector((state: any) => state.counter.value);
  // const dispatch = useDispatch();
  let clickAnimetion;

  const clickanimatingTarget = document.querySelector(".navbar_btn_bying");
  // clickanimatingTarget?.classList.add("navbar_btn_animating_click");

  useEffect(() => {
    // console.log(count);

    if (count) {
      clickanimatingTarget?.classList.add("navbar_btn_animating_click");
      console.log("im in");
    } else if (!count) {
      clickanimatingTarget?.classList.remove("navbar_btn_animating_click");
      console.log("im outs");
    }
  }, [count]);

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
        <Link className="navbar_btn navbar_btn_bying" href={"Bycart"}>
          Bying
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
