"use client";

import React, { useEffect, useState } from "react";
import "./Bycart.css";
// import { Mainbycart } from "../component/byCart/Mainbycart";
import HomePage from "./../../../component/Home/Home";
import Mainbycart from "./../../../component/byCart/Mainbycart";
// import { useDispatch } from "react-redux";

import { useSelector, useDispatch } from "react-redux";
import {
  MainState,
  MainStateNumber,
} from "./../../../src/app/GolobalRedux/features/counter/counterSlice";
function Bycartpage() {
  const Dispatch = useDispatch();
  const [mainstate_1, setmainstate_1] = useState(0);
  useEffect(() => {
    setmainstate_1(1);
    Dispatch(MainStateNumber(0));
  }, []);

  return (
    <React.Fragment>
      <div className="Bycard_selfDiv">
        <Mainbycart></Mainbycart>
      </div>
    </React.Fragment>
  );
}

export default Bycartpage;
