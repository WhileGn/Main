"use client";

import Image from "next/image";
import "./MainlistClone.css";
// import { imgg } from "./../../../img/2389954.jpg";
import { JsxAttribute } from "typescript";
import { URL } from "url";
import { log } from "console";
import Mainrespons from "./../../../api/Mainrespons";
// import { Button, Alert } from "rsuite";
import { ToastContainer, toast } from "react-toastify";
// import { url } from "inspector";
// import Mainfechdata from "../../../api/Mainfechdata";
import { Button } from "rsuite";
import Notification from "rc-notification";
// import { Alert } from "react-alert";
import { Alert } from "@mui/material";
import { useState } from "react";
import { Turret_Road } from "next/font/google";
import { type } from "os";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/GolobalRedux/store";
import { MainState } from "./../../../src/app/GolobalRedux/features/counter/counterSlice";
export function MainlistClone(props: any) {
  //  redux

  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  dispatch(MainState);
  console.log(count);

  const [alertState, setalertState] = useState(Boolean);
  const [MainNumselection, setMainNumselection] = useState(1);
  const [IsShow, setIsShow] = useState(true);
  const [LodingContent, setLodingContent] = useState<any>(
    <div className="Loding-MainlistClone">Loding ... </div>
  );

  const MainVariableimageurl = props.MaindataH[0];

  const MainImage = `./../../../img/${MainVariableimageurl}.jpg`;

  const MainData = props.MaindataH;

  type typeMainData = {
    Name: string;
    about: string;
    amount: number;
    MainNumselection: number;
  };
  const Data: typeMainData = {
    Name: MainData[0].replace("_", " "),
    about: MainData[1].about,
    amount: MainData[1].amount,
    MainNumselection,
  };

  const mainaddlisthandler = function () {
    setMainNumselection(MainNumselection + 1);
    localStorage.setItem(Data.Name, JSON.stringify(Data));
    // localStorage.setItem("hefdasfdasllo", "hdfash");
  };
  const Work_With_API = {
    // const mainaddlisthandler = async function () {
    //   setLodingContent(<div className="Loding-MainlistClone">Loding ... </div>);
    //   setIsShow(false);
    //   const MainSendDataToServerside = await Mainrespons(Data);
    //   await MainSendDataToServerside;
    //   console.log(MainSendDataToServerside);
    //   if (MainSendDataToServerside == true) {
    //     setLodingContent(
    //       <div className="Loding-MainlistClone-Successful">Successful add</div>
    //     );
    //     console.log(LodingContent);
    //   } else if (MainSendDataToServerside == "error") {
    //     setLodingContent(
    //       <div className="Loding-MainlistClone-error">
    //         some thing went wrong ...
    //       </div>
    //     );
    //   }
    //   setTimeout(() => {
    //     setIsShow(true);
    //   }, 2000);
    // }
  };

  return (
    <div className="MainlistClone">
      {/* <Alert>"foikashfoiusdafioasdfosjadoij"</Alert> */}

      <div className="listClone">
        {!IsShow && LodingContent}
        {IsShow && (
          <div className="header_listClone">
            <div className="content_listClone">
              <div className="content_listClone_name">
                name :
                <div className="child_content_listClone_name">{Data.Name}</div>
              </div>
              <div className="content_listClone_about">
                about :<br />
                <div className="child_content_listClone_about">
                  {Data.about}
                </div>
              </div>
              <div className="content_listClone_amount">
                amount :
                <div className="child_content_listClone_amount">
                  {Data.amount}
                </div>
              </div>
              <div className="content_ading_side_MainDiv">
                <button
                  onClick={mainaddlisthandler}
                  className="content_ading_side_but"
                >
                  add
                </button>
              </div>
            </div>
            <div className="img_listClone_div">
              {/* <img
              className=""
              src={require("./../../../img/Differences-Between-Arabica-and-Robusta-Coffee-Beans-1.jpg")}
              alt=""
            /> */}
              {/* <Image className="img_listClone" src={imgg} /> */}
              <img
                className="img_listClone"
                src={MainImage}
                alt="not have image !!!"
              ></img>
            </div>
          </div>
        )}
      </div>
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
        rel="stylesheet"
      /> */}
    </div>
  );
}
