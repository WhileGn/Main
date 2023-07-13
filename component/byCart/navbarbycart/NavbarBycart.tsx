import Link from "next/link";
import "./NavbarBycart.css";

import { useSelector, useDispatch } from "react-redux";
import {
  MainState,
  MainStateNumber,
} from "./../../../src/app/GolobalRedux/features/counter/counterSlice";
import { useEffect } from "react";

export function NavbarBycart() {
  const dispatch = useDispatch();
  const numberRedux = useSelector((state: any) => state.counter.numvalue);
  const valueRedux = useSelector((state: any) => state.counter.value);
  const clickanimatingTarget = document.querySelector(".byingnumber");

  // useEffect(() => {
  //   dispatch(MainStateNumber(10));
  // }, []);
  useEffect(() => {
    // console.log(count);

    if (valueRedux) {
      clickanimatingTarget?.classList.add("navbar_btn_animating_click");
    } else if (!valueRedux) {
      clickanimatingTarget?.classList.remove("navbar_btn_animating_click");
    }
  }, [valueRedux]);

  // dispatch(MainStateNumber(numberRedux + 1));
  return (
    <>
      <div className="navbar_Main_">
        <div className="navbar_icon_">
          <p className="navbar_icon_self_">Coffee</p>
        </div>
        <div className="navbar_btn_Maindiv_">
          <Link className="navbar_btn_" href={"/"}>
            Home
          </Link>
          <Link className="navbar_btn_" href={"About"}>
            AboutCoffe
          </Link>
          <Link className="navbar_btn_ SMainPage_" href={"Bycart"}>
            Bying
            <div className="byingnumber">{numberRedux}</div>
          </Link>
        </div>
      </div>
    </>
  );
}
