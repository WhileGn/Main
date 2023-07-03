import Bycard from "./Bycard";
import "./MainOrderBycard.css";
import Fetchbydata from "./../../../api/Fetchbydata";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { log } from "console";
import { jsx } from "@emotion/react";
const MainOrderBycard = function () {
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
  const numHandlers_varible = [];
  const [mainByNumber, setmainByNumber] = useState(0);
  const numHandlers = function (Nums: number) {
    // setmainNum()
    // console.log(Nums);
    // numHandlers_varible.push(Nums);

    // setmainByNumber(mainByNumber + Nums);
    // console.log(mainByNumber);
    console.log(Nums);
  };
  console.log(mainByNumber);

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
