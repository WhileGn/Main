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
let minijsonData: any = [];
const Mainhomecontent: React.FC = function () {
  const [lodingorder, setlodingorder] = useState(false);
  const [Loding_Error_varible, setLoding_Error_varible] =
    useState<any>("Loding ...");
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

  let componentList_0: any;
  let componentList_1: any;
  let componentList_2: any;
  let componentList_3: any;

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

    let datasList_0: any = [];
    let datasList_1: any = [];
    let datasList_2: any = [];
    let datasList_3: any = [];
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

    componentList_0 = datasList_0.map((T: any) => {
      return <MainlistClone Maindata={T}></MainlistClone>;
    });
    componentList_1 = datasList_1.map((T: any) => {
      return <MainlistClone Maindata={T}></MainlistClone>;
    });
    componentList_2 = datasList_2.map((T: any) => {
      return <MainlistClone Maindata={T}></MainlistClone>;
    });
    componentList_3 = datasList_3.map((T: any) => {
      return <MainlistClone Maindata={T}></MainlistClone>;
    });

    // render_1.map(() => {
    //   console.log("ggmennnnnnnnnnnnnnnnnnnnnnnnn");
    // });
    // render_1.
    // const test = render_1[1];
    // console.log(test);

    const render_2 = secendrydataorder;
    const render_3 = secendrydataorder;
    const render_4 = secendrydataorder;
  };
  GODListHandler();

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
  const [GodListRender, setGodListRender] = useState();
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
      setGodListRender(componentList_0);
    } else if (mainDataFounder == "Coffee_brewing") {
      setGodListRender(componentList_1);
    } else if (mainDataFounder == "Hot_Drinks") {
      setGodListRender(componentList_2);
    } else if (mainDataFounder == "Tea_and_Herbal") {
      setGodListRender(componentList_3);
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
          <div className="Main_list">{GodListRender}</div>
        </div>
      </div>
    </>
  );
};

export default Mainhomecontent;
