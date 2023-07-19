"use client";
// import  Mainfechdata  from "./../../../api/hello/Mainfechdata";
import MainorderClone from "./MainorderClone";
import "./Mainhomecontent.css";
// import Mainfechdata from "../../../api/hello/Mainfechdata";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { MainlistClone } from "./MainlistClone";

import Mainfechdata from "../../../api/Mainfechdata";

let GodjsonData: any = [];
let minijsonData: any = [];

let Bolian = false;

const Mainhomecontent = function () {
  const [lodingorder, setlodingorder] = useState(false);
  const [Loding_Error_varible, setLoding_Error_varible] =
    useState<any>("Loding ...");

  const [secendrydataorder, setsecendrydataorder] = useState<undefined | any>(
    []
  );
  const [secendrydataorder_1, setsecendrydataorder_1] = useState<
    undefined | any
  >([]);

  let MaindataVarible;

  async function MainfunctionForHandlelingEfect() {
    setlodingorder(true);

    MaindataVarible = await Mainfechdata();

    if (MaindataVarible == "error") {
      setLoding_Error_varible("Error when loding plase chek your network !!!");
      alert("i use firebase for my database please use VPN");
    } else {
      GodjsonData = Object.entries(MaindataVarible);

      minijsonData = Object.entries(MaindataVarible);
      setsecendrydataorder_1(minijsonData);
      setsecendrydataorder(GodjsonData);
      setlodingorder(false);
    }
  }
  useEffect(() => {
    MainfunctionForHandlelingEfect();
  }, []);

  let componentList_: any;

  let componentList_0: any;
  let componentList_1: any;
  let componentList_2: any;
  let componentList_3: any;

  let datasList_: any = [];
  let datasList_0: any = [];
  let datasList_1: any = [];
  let datasList_2: any = [];
  let datasList_3: any = [];
  let [GodListRender, setGodListRender] = useState<undefined | any>();

  const GODListHandler = function () {
    const render_data: any = [];
    const render_1 = secendrydataorder_1;
    const data_1 = secendrydataorder_1.map((g: any) => {
      render_data.push(g[1]);
    });

    try {
      datasList_0 = Object.entries(render_data[0]);
      datasList_1 = Object.entries(render_data[1]);
      datasList_2 = Object.entries(render_data[2]);
      datasList_3 = Object.entries(render_data[3]);
    } catch {
      // what up broo :)
    }
    componentList_ = datasList_.map((T: any) => {
      return <MainlistClone MaindataH={T}></MainlistClone>;
    });

    componentList_0 = datasList_0.map((T: any) => {
      return <MainlistClone MaindataH={T}></MainlistClone>;
    });
    componentList_1 = datasList_1.map((T: any) => {
      return <MainlistClone MaindataH={T}></MainlistClone>;
    });
    componentList_2 = datasList_2.map((T: any) => {
      return <MainlistClone MaindataH={T}></MainlistClone>;
    });
    componentList_3 = datasList_3.map((T: any) => {
      return <MainlistClone MaindataH={T}></MainlistClone>;
    });
  };

  GODListHandler();

  const [actionOrederHandler, setactionOrederHandler] = useState<
    undefined | any
  >();
  const refDiv: any = useRef<HTMLDivElement | undefined>();
  const listHadlerSelf = function (event: any, value: string) {
    let mainAPIvalue: string[] = [];
    const mainvalue = value.replaceAll(" ", "_");

    GodjsonData.forEach((element: any) => {
      mainAPIvalue.push(element[0]);
    });

    function founderFunction(event: any) {
      return event == mainvalue;
    }
    const MainorderAction = document.querySelectorAll(".MainorderClone");

    const mainDataFounder: any = mainAPIvalue.find(founderFunction);
    const DataFounder = mainDataFounder.replaceAll("_", " ");

    MainorderAction.forEach((OrderAction) => {
      const OrderActionvalue = OrderAction.textContent;

      if (OrderActionvalue == DataFounder) {
        OrderAction.classList.add("orderAction");
      }
    });

    if (DataFounder == "Coffe machine") {
      setGodListRender(componentList_0);
      setactionOrederHandler("Coffe machine");
    } else if (DataFounder == "Coffee brewing") {
      setGodListRender(componentList_1);
      setactionOrederHandler("Coffee brewing");
    } else if (DataFounder == "Hot Drinks") {
      setGodListRender(componentList_2);
      setactionOrederHandler("Hot Drinks");
    } else if (DataFounder == "Tea and Herbal") {
      setGodListRender(componentList_3);
      setactionOrederHandler("Tea and Herbal");
    }
  };
  const listHadlerSelf_1 = async function (event: any, value: string) {
    const HandelrFunction = function () {
      setGodListRender([]);
    };
    await HandelrFunction();
    listHadlerSelf(event, value);
    Bolian = true;
  };
  let [mainOrderComponent, setmainOrderComponent] = useState();
  mainOrderComponent = secendrydataorder.map((g: any) => {
    return (
      <MainorderClone
        actionOrederHandlerVarible={actionOrederHandler}
        listhadler={listHadlerSelf}
        listhadler_1={listHadlerSelf_1}
        maindatas={g}
      />
    );
  });

  if (GodListRender != undefined) {
    if (GodListRender.length == 0) {
      const selectDCinDOM = document.querySelector(".GodListRender_ety");
      selectDCinDOM?.remove();
      setGodListRender(
        <div className="GodListRender_emty">... its emty ...</div>
      );
    }
  }

  return (
    <>
      <div className="MainhomeContent">
        <div className="homeContent">
          <div className="OrderComponent">
            <div className="GodOrderComponent">
              {lodingorder && (
                <div className="Main_order_loding ">{Loding_Error_varible}</div>
              )}

              {mainOrderComponent}
            </div>
          </div>
          <div ref={refDiv} className="Main_list">
            {GodListRender}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainhomecontent;
