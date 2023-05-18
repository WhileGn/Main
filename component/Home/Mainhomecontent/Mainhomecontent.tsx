// import  Mainfechdata  from "./../../../api/hello/Mainfechdata";
import MainorderClone from "./MainorderClone";
import "./Mainhomecontent.css";
import Mainfechdata from "../../../api/hello/Mainfechdata";
import React from "react";

const Mainhomecontent: React.FC = function () {
  // async function MainfunctionForHandlelingEfect() {
  //   const MaindataVarible = await Mainfechdata();
  //   const MainjsonData = Object.values(MaindataVarible);
  //   console.log(MainjsonData.length);

  //   // const MainjsonData = Object.values(MaindataVarible.jsonData);
  // }
  // MainfunctionForHandlelingEfect();

  // const Maindata = Mainfechdata;
  // console.log(Maindata);

  return (
    <>
      <div className="MainhomeContent">
        <div className="homeContent">
          <div className="Main_order">
            <MainorderClone></MainorderClone>
            <MainorderClone></MainorderClone>
          </div>
          <div className="Main_list"></div>
        </div>
      </div>
    </>
  );
};

export default Mainhomecontent;
