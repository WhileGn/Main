"use client";
// import  Mainfechdata  from "./../../../api/hello/Mainfechdata";
import MainorderClone from "./MainorderClone";
import "./Mainhomecontent.css";
// import Mainfechdata from "../../../api/hello/Mainfechdata";
import React, { useCallback, useEffect, useState } from "react";
import { log } from "console";
import { MainlistClone } from "./MainlistClone";
import { list } from "postcss";
import { List } from "postcss/lib/list";
import { Tube } from "@react-three/drei";
import Mainfechdata from "../../../api/Mainrespons";

let GodjsonData: any = [];
let minijsonData: any = [];
let startoperationhandelr: boolean = true;

// export default function Page({ data }) {
//   // Render data...
// }

// This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

// export default getServerSideProps;

const Mainhomecontent = function () {
  const [lodingorder, setlodingorder] = useState(false);
  const [Loding_Error_varible, setLoding_Error_varible] =
    useState<any>("Loding ...");

  // let [startoperationhandelr, setstartoperationhandelr] = useState<
  //   undefined | any
  // >();
  // const [Maindataorder, setMaindataorder] = useState<undefined | any>([]);
  const [secendrydataorder, setsecendrydataorder] = useState<undefined | any>(
    []
  );
  const [secendrydataorder_1, setsecendrydataorder_1] = useState<
    undefined | any
  >([]);

  const [showListData, setshowListData] = useState<undefined | any>();
  let MaindataVarible;

  async function MainfunctionForHandlelingEfect() {
    setlodingorder(true);

    MaindataVarible = await Mainfechdata();
    console.log(MaindataVarible);

    if (MaindataVarible == "error") {
      setLoding_Error_varible("Error when loding plase chek your network !!!");
    } else {
      // setLoding_Error_varible("Loding...");
      // console.log(MaindataVarible);
      // const MainjsonData: any = Object.values(MaindataVarible);
      // const secenderyjsonData: any = Object(MaindataVarible.data);
      GodjsonData = Object.entries(MaindataVarible.data);

      minijsonData = Object.entries(MaindataVarible.data);
      setsecendrydataorder_1(minijsonData);
      setsecendrydataorder(GodjsonData);
      setlodingorder(false);
    }
  }
  useEffect(() => {
    MainfunctionForHandlelingEfect();
  }, []);

  // const GodlistComponent = [];
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

  console.log(componentList_0);

  const GODListHandler = function () {
    console.log(minijsonData[0]);
    console.log(secendrydataorder);
    const render_data: any = [];
    const render_1 = secendrydataorder_1;
    console.log(render_1);
    const data_1 = secendrydataorder_1.map((g: any) => {
      // const maindata_1 = Object.entries(g);
      // console.log(maindata_1);
      console.log(g);

      render_data.push(g[1]);
    });

    try {
      datasList_0 = Object.entries(render_data[0]);
      datasList_1 = Object.entries(render_data[1]);
      datasList_2 = Object.entries(render_data[2]);
      datasList_3 = Object.entries(render_data[3]);

      console.log(datasList_0);
      console.log(datasList_1 == null);
      console.log(datasList_1);
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

    // render_1.map(() => {
    //   console.log("ggmennnnnnnnnnnnnnnnnnnnnnnnn");
    // });
    // render_1.
    // const test = render_1[1];
    // console.log(test);

    // const render_2 = secendrydataorder;
    // const render_3 = secendrydataorder;
    // const render_4 = secendrydataorder;
    // useEffect(() => {
    //   startoperationhandelr = true;
    // }, []);
  };
  // GodListRender = componentList_0

  GODListHandler();

  // const firstRenderList = componentList_0;

  // async function handelrListrender() {
  //   await setGodListRender(componentList_0);
  // }
  // handelrListrender();

  // useEffect(() => {
  //   setGodListRender(componentList_0);
  // }, [componentList_0]);
  // useEffect(() => {
  //   GODListHandler();
  // }, [Loding_Error_varible]);

  // const mainListComponent = secendrydataorder.map((g: any) => {
  //   console.log(g);

  //   const RenderHandler = Object.entries(g);

  //   RenderHandler.map((RenderHandler: any) => {
  //     return <MainlistClone />;
  //   });
  // });

  // useEffect(() => {}, [GODListHandler]);

  // if (GodListRender == "") {
  //   setGodListRender(<div>Cklik On Order</div>);
  // }
  const [actionOrederHandler, setactionOrederHandler] = useState<
    undefined | any
  >();

  const listHadlerSelf = function (event: any, value: string) {
    // const targetValue = event.target.childNodes[0].data;
    console.log(componentList_);

    // setGodListRender(componentList_);

    console.log(event.target);

    const mainOrderTarget = event.targets;
    // mainOrderTarget.class = "GGmen";

    let mainAPIvalue: string[] = [];
    console.log(value);
    const mainvalue = value.replaceAll(" ", "_");

    GodjsonData.forEach((element: any) => {
      mainAPIvalue.push(element[0]);
    });

    function founderFunction(event: any) {
      return event == mainvalue;
    }

    const mainDataFounder = mainAPIvalue.find(founderFunction);
    console.log(mainDataFounder);
    GodListRender = componentList_1;
    if (mainDataFounder == "Coffe_machine") {
      setGodListRender(componentList_0);
      setactionOrederHandler("Coffe_machine");
    } else if (mainDataFounder == "Coffee_brewing") {
      setGodListRender(componentList_1);
      setactionOrederHandler("Coffee_brewing");
    } else if (mainDataFounder == "Hot_Drinks") {
      setGodListRender(componentList_2);
      setactionOrederHandler("Hot_Drinks");
    } else if (mainDataFounder == "Tea_and_Herbal") {
      setGodListRender(componentList_3);
      setactionOrederHandler("Tea_and_Herbal");
    }

    console.log(mainDataFounder);
  };

  const mainOrderComponent = secendrydataorder.map((g: any) => {
    return (
      <MainorderClone
        actionOrederHandlerVarible={actionOrederHandler}
        listhadler={listHadlerSelf}
        maindatas={g}
      />
    );
    // return <div onClick={listHadlerSelf}>GGmen</div>;
  });
  // useEffect(() => {

  // });

  // if (startoperationhandelr == true) {
  //   setGodListRender(componentList_0);
  //   console.log("im here mather fucker !!!");

  //   startoperationhandelr = false;
  // }
  // let Maindata;
  // useEffect(() => {
  //   async function renderFirstTimeListHandler() {
  //     Maindata = await componentList_0;
  //     setGodListRender(Maindata);
  //   }
  //   renderFirstTimeListHandler();
  // }, [Maindata]);

  return (
    <>
      <div className="MainhomeContent">
        <div className="homeContent">
          <div className="  ">
            {lodingorder && (
              <div className="Main_order_loding ">{Loding_Error_varible}</div>
            )}
            {mainOrderComponent}
          </div>
          <div className="Main_list">{GodListRender}</div>
        </div>
      </div>
    </>
  );
};

export default Mainhomecontent;
