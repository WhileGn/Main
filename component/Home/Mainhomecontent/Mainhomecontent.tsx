// import  Mainfechdata  from "./../../../api/hello/Mainfechdata";
import MainorderClone from "./MainorderClone";
import "./Mainhomecontent.css";
import Mainfechdata from "../../../api/hello/Mainfechdata";
import React, { useEffect, useState } from "react";
import { log } from "console";

const Mainhomecontent: React.FC = function () {
  const [lodingorder, setlodingorder] = useState(false);

  // const [Maindataorder, setMaindataorder] = useState<undefined | any>([]);
  const [secendrydataorder, setsecendrydataorder] = useState<undefined | any>(
    []
  );
  async function MainfunctionForHandlelingEfect() {
    setlodingorder(true);
    const MaindataVarible = await Mainfechdata();
    const MainjsonData: any = Object.values(MaindataVarible);
    const secenderyjsonData: any = Object(MaindataVarible.data);
    const GodjsonData: any = Object.entries(MaindataVarible.data);

    setsecendrydataorder(GodjsonData);
    setlodingorder(false);
  }
  useEffect(() => {
    MainfunctionForHandlelingEfect();
  }, []);

  console.log(secendrydataorder);

  return (
    <>
      <div className="MainhomeContent">
        <div className="homeContent">
          <div className="Main_order">
            {lodingorder && (
              <div className="Main_order_loding "> loding ...</div>
            )}
            {secendrydataorder.map((g: any) => {
              return <MainorderClone maindatas={g} />;
            })}
          </div>
          <div className="Main_list"></div>
        </div>
      </div>
    </>
  );
};

export default Mainhomecontent;
