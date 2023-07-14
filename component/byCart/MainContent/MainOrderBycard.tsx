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
  const dispatch = useDispatch();
  const numberRedux = useSelector((state: any) => state.counter.numvalue);
  const targetData: any = [];
  // let Maindata: any;
  const [data, setData] = useState<JSX.Element[]>();
  const [Loding, setLoding] = useState(false);

  // async function MainfetchdataFunction() {
  //   const MainFetchData = await Fetchbydata();
  //   const convertTypeToObject: any = Object.entries(MainFetchData);
  //   // console.log(convertTypeToObject);
  //   // targetData.push();
  //   // let childMainData: any;
  //   convertTypeToObject.map((Datas: any) => {
  //     // console.log(Datas[1]);
  //     targetData.push(Datas[1]);
  //   });
  //   // setMainData(targetData);
  //   const finalValue = targetData.map((Datas: any) => {
  //     // console.log(targetData);

  //     return <Bycard data={Datas}></Bycard>;
  //   });
  //   setData(finalValue);

  //   console.log(finalValue);
  // }
  // useEffect(() => {
  //   MainfetchdataFunction();
  // }, []);
  // console.log(targetData);
  localStorage.removeItem("ally-supports-cache");
  const [numHandlers_varible, setnumHandlers_varible] = useState<any>(0);

  const [mainByNumber, setmainByNumber] = useState(0);
  let [numHandlersFixbugsBoolian, setnumHandlersFixbugsBoolian] =
    useState<Boolean>(true);
  const numHandlers = function (Nums: number) {
    numberReduxVarible += Nums;
    // console.log(numberReduxVarible);
    setmainByNumber(numberReduxVarible);
    // setnumHandlers_varible(numHandlers_varible + Nums);
    // console.log(numHandlers_varible);

    // setmainNum()
    // console.log(Nums);

    // setmainByNumber(mainByNumber + Nums);
    // console.log(mainByNumber);
  };
  const mainnumberReduxBugHandlers = async function () {
    await numHandlers;

    // console.log(numHandlers_varible);
    console.log(numberReduxVarible);

    dispatch(MainStateNumber(mainByNumber));
  };
  mainnumberReduxBugHandlers();
  // useEffect(() => {}, [numHandlers.name]);
  // useEffect(() => {
  //   if (numHandlersFixbugsBoolian == true) {
  //     console.log(numHandlers_varible);

  //     // dispatch(MainStateNumber(numHandlers_varible));
  //     console.log("madarkose___1111");
  //     // setnumHandlersFixbugsBoolian(false);
  //   }
  //   // numHandlersFixbugsBoolian = false;
  // }, [numHandlers]);
  // if (numHandlers_varible == Number) {
  //   // dispatch(MainStateNumber(numHandlers_varible));
  //   console.log("madarkose___2222");
  // }

  numHandlers_varible;

  function MainfetchdataFunction() {
    const MainFetchDataFromLocalStorage: any = localStorage;
    // const datas = MainFetchDataFromLocalStorage;

    // const arr: any = JSON.parse(MainFetchDataFromLocalStorage.key(""));
    const MainData = Object.entries(MainFetchDataFromLocalStorage);
    console.log(MainData);
    const finalData = MainData.map((childData: any) => {
      console.log(childData);
      // const stringfyreverser = [];
      // console.log(stringfyreverser);

      return <Bycard data={childData[1]} state={numHandlers}></Bycard>;
    });
    setData(finalData);

    console.log(finalData);

    // MainFetchDataFromLocalStorage.foreach(() => {
    //   console.log("GGMWEs");
    // });

    console.log(MainFetchDataFromLocalStorage);
    // console.log(MainData);
  }
  useEffect(() => {
    MainfetchdataFunction();
  }, []);

  return (
    <>
      <div className="GodOrderBycardDiv">
        <div className="MainOrderBycardDiv">
          <div className="MainOrderBycardDiv_Emty"></div>
          <div className="OrderBycardDiv">
            {data}
            {/* <Bycard data={"childData"}></Bycard> */}
            <div className="Main_by_bution">
              <button className="NumBtn">$200.3</button>
              <button className="byBtn">Finish</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainOrderBycard;
