// import  Mainfechdata  from "./../../../api/hello/Mainfechdata";
import MainorderClone from "./MainorderClone";
import "./Mainhomecontent.css";
import Mainfechdata from "../../../api/hello/Mainfechdata";
import React, { useEffect, useState } from "react";
import { log } from "console";
import { MainlistClone } from "./MainlistClone";
import { list } from "postcss";
import { List } from "postcss/lib/list";
let GodjsonData: any = [];
// let minijsonData: any = [];
const Mainhomecontent: React.FC = function () {
  const [lodingorder, setlodingorder] = useState(false);
  const [Loding_Error_varible, setLoding_Error_varible] =
    useState<any>("Loding ...");
  // const [Maindataorder, setMaindataorder] = useState<undefined | any>([]);
  const [secendrydataorder, setsecendrydataorder] = useState<undefined | any>(
    []
  );

  const [showListData, setshowListData] = useState<undefined | any>();
  let MaindataVarible;

  async function MainfunctionForHandlelingEfect() {
    setlodingorder(true);

    MaindataVarible = await Mainfechdata();
    if (MaindataVarible == "error") {
      setLoding_Error_varible("Error when loding plase chek your network !!!");
    } else {
      // setLoding_Error_varible("Loding...");
      // console.log(MaindataVarible);
      // const MainjsonData: any = Object.values(MaindataVarible);
      // const secenderyjsonData: any = Object(MaindataVarible.data);
      GodjsonData = Object.entries(MaindataVarible.data);
      // minijsonData = Object.entries(MaindataVarible.data);
      console.log(GodjsonData);

      setsecendrydataorder(GodjsonData);
      setlodingorder(false);
    }
  }
  useEffect(() => {
    MainfunctionForHandlelingEfect();
  }, []);

  const GodlistComponent = [];
  const GODListHandler = function () {
    console.log(secendrydataorder);
    const render_1_data = secendrydataorder;
    const render_1 = secendrydataorder[0];
    // const test = render_1[1];
    // console.log(test);

    console.log(render_1);

    const render_2 = secendrydataorder;
    const render_3 = secendrydataorder;
    const render_4 = secendrydataorder;
  };
  GODListHandler();

  // const mainListComponent = secendrydataorder.map((g: any) => {
  //   console.log(g);

  //   const RenderHandler = Object.entries(g);

  //   RenderHandler.map((RenderHandler: any) => {
  //     return <MainlistClone />;
  //   });
  // });

  const listHadlerSelf = function (event: any) {
    const targetValue = event.target.childNodes[0].data;
    let mainAPIvalue: string[] = [];

    GodjsonData.forEach((element: any) => {
      mainAPIvalue.push(element[0]);
    });

    function founderFunction(event: any) {
      return event == targetValue;
    }

    const mainDataFounder = mainAPIvalue.find(founderFunction);

    if (mainDataFounder == "Coffe_machine") {
    } else if (mainDataFounder == "Coffee_brewing") {
    } else if (mainDataFounder == "Hot_Drinks") {
    } else if (mainDataFounder == "Tea_and_Herbal") {
    }
    console.log(mainDataFounder);
  };

  const mainOrderComponent = secendrydataorder.map((g: any) => {
    return <MainorderClone listhadler={listHadlerSelf} maindatas={g} />;
  });

  return (
    <>
      <div className="MainhomeContent">
        <div className="homeContent">
          <div className="Main_order">
            {lodingorder && (
              <div className="Main_order_loding ">{Loding_Error_varible}</div>
            )}
            {mainOrderComponent}
          </div>
          <div className="Main_list">
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
