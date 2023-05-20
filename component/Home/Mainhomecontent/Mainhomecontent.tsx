// import  Mainfechdata  from "./../../../api/hello/Mainfechdata";
import MainorderClone from "./MainorderClone";
import "./Mainhomecontent.css";
import Mainfechdata from "../../../api/hello/Mainfechdata";
import React, { useEffect, useState } from "react";

const Mainhomecontent: React.FC = function () {
  const [Maindataorder, setMaindataorder] = useState<undefined | any>([]);
  const [secendrydataorder, setsecendrydataorder] = useState([]);
  async function MainfunctionForHandlelingEfect() {
    const MaindataVarible = await Mainfechdata();
    const MainjsonData: any = Object.values(MaindataVarible);
    const secenderyjsonData: any = Object.values(MaindataVarible.data);

    setMaindataorder(MainjsonData);
    setsecendrydataorder(secenderyjsonData);
    console.log(MainjsonData.length);

    // const MainjsonData = Object.values(MaindataVarible.jsonData);
  }
  useEffect(() => {
    MainfunctionForHandlelingEfect();
  }, []);

  // const Maindata = Mainfechdata;
  // console.log(Maindata);
  console.log(Maindataorder);
  console.log(secendrydataorder);

  return (
    <>
      <div className="MainhomeContent">
        <div className="homeContent">
          <div className="Main_order">
            {secendrydataorder.map((g: any, id: any) => {
              return <MainorderClone {...g} />;
            })}
          </div>
          <div className="Main_list"></div>
        </div>
      </div>
    </>
  );
};

export default Mainhomecontent;
