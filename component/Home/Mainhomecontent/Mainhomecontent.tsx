// import  Mainfechdata  from "./../../../api/hello/Mainfechdata";
import MainorderClone from "./MainorderClone";
import "./Mainhomecontent.css";
import Mainfechdata from "../../../api/hello/Mainfechdata";
import React, { useEffect, useState } from "react";
import { log } from "console";
import { MainlistClone } from "./MainlistClone";

const Mainhomecontent: React.FC = function () {
  const [lodingorder, setlodingorder] = useState(false);
  const [Loding_Error_varible, setLoding_Error_varible] =
    useState<any>("Loding ...");
  // const [Maindataorder, setMaindataorder] = useState<undefined | any>([]);
  const [secendrydataorder, setsecendrydataorder] = useState<undefined | any>(
    []
  );
  async function MainfunctionForHandlelingEfect() {
    setlodingorder(true);

    const MaindataVarible = await Mainfechdata();
    if (MaindataVarible == "error") {
      setLoding_Error_varible("Error when loding plase chek your network !!!");
    } else {
      // setLoding_Error_varible("Loding...");
      console.log(MaindataVarible);
      // const MainjsonData: any = Object.values(MaindataVarible);
      // const secenderyjsonData: any = Object(MaindataVarible.data);
      const GodjsonData: any = Object.entries(MaindataVarible.data);

      setsecendrydataorder(GodjsonData);
      setlodingorder(false);
    }
  }
  useEffect(() => {
    MainfunctionForHandlelingEfect();
  }, []);

  return (
    <>
      <div className="MainhomeContent">
        <div className="homeContent">
          <div className="Main_order">
            {lodingorder && (
              <div className="Main_order_loding ">{Loding_Error_varible}</div>
            )}
            {secendrydataorder.map((g: any) => {
              return <MainorderClone maindatas={g} />;
            })}
          </div>
          <div className="Main_list">
            <MainlistClone></MainlistClone>
            <MainlistClone></MainlistClone>
            <MainlistClone></MainlistClone>
            <MainlistClone></MainlistClone>
            <MainlistClone></MainlistClone>
            <MainlistClone></MainlistClone>
            <MainlistClone></MainlistClone>
            <MainlistClone></MainlistClone>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainhomecontent;
