"use client";
import Bycard from "./Bycard";
import "./MainOrderBycard.css";
import Fetchbydata from "./../../../api/Fetchbydata";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { log } from "console";
import { jsx } from "@emotion/react";

import { useSelector, useDispatch } from "react-redux";
import {
  MainState,
  MainStateNumber,
} from "./../../../src/app/GolobalRedux/features/counter/counterSlice";
let numberReduxVarible: number = 0;

const MainOrderBycard = function () {
  const [emty, setemty] = useState<boolean>(false);
  const dispatch = useDispatch();
  const numberRedux = useSelector((state: any) => state.counter.numvalue);
  const store_Redux_clickstate = useSelector(
    (state: any) => state.counter.clickstate
  );

  const [data, setData] = useState<JSX.Element[]>();
  const [Loding, setLoding] = useState(false);
  const [firstStateHadlersVarible, setfirstStateHadlersVarible] =
    useState<number>(0);

  localStorage.removeItem("ally-supports-cache");

  const [mainByNumber, setmainByNumber] = useState(0);

  const numHandlers = function (id: any, amount: any, finalAmount: any) {
    const id_Varible = id;

    if (id_Varible == "add") {
      setfirstStateHadlersVarible((preveValue) => preveValue + amount);
    } else if (id_Varible == "rem") {
      setfirstStateHadlersVarible((preveValue) => preveValue - amount);
    } else if (id_Varible == "del") {
      setfirstStateHadlersVarible((preveValue) => preveValue - finalAmount);
    }

    setmainByNumber(numberReduxVarible);
  };
  const [stateBoolan, setstateBoolan] = useState(false);
  const mainnumberReduxBugHandlers = function () {
    if (stateBoolan == true) {
      dispatch(MainStateNumber(mainByNumber));
      setstateBoolan(false);
    }
  };

  const firstStateHadlers = function (firstRenderAmount: number) {
    setfirstStateHadlersVarible((preveValue) => preveValue + firstRenderAmount);
  };

  function MainfetchdataFunction() {
    const MainFetchDataFromLocalStorage: any = localStorage;

    const MainData = Object.entries(MainFetchDataFromLocalStorage);

    const finalData = MainData.map((childData: any) => {
      return (
        <Bycard
          data={childData[1]}
          state={numHandlers}
          firstState={firstStateHadlers}
        ></Bycard>
      );
    });
    setData(finalData);
  }
  useEffect(() => {
    MainfetchdataFunction();
  }, []);

  useEffect(() => {}, [store_Redux_clickstate]);

  return (
    <>
      <div className="GodOrderBycardDiv">
        <div className="MainOrderBycardDiv">
          <div className="MainOrderBycardDiv_Emty"></div>
          <div className="OrderBycardDiv">
            {data}

            <div className="Main_by_bution">
              <button className="NumBtn">
                $
                <div className={store_Redux_clickstate ? "valueChange" : ""}>
                  {firstStateHadlersVarible}
                </div>
              </button>
              <button
                className="byBtn"
                onClick={() => {
                  localStorage.clear();
                  setfirstStateHadlersVarible(0);
                  MainfetchdataFunction();
                }}
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainOrderBycard;
