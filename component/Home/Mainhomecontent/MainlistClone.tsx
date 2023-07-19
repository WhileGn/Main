"use client";

import "./MainlistClone.css";

import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  MainState,
  MainStateNumber,
} from "./../../../src/app/GolobalRedux/features/counter/counterSlice";
export function MainlistClone(props: any) {
  //  redux

  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  const [alertState, setalertState] = useState(Boolean);
  const [MainNumselection, setMainNumselection] = useState(1);
  const [IsShow, setIsShow] = useState(true);
  const [LodingContent, setLodingContent] = useState<any>(
    <div className="Loding-MainlistClone-Successful">Successful add</div>
  );

  const NumberinsideLocalStorage = useSelector(
    (state: any) => state.counter.numvalue
  );
  1;
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

  const localStorageData = [];
  const localstorageSelf = localStorage;
  const fetchFromLocalStorage = localStorage.getItem(Data.Name);

  const mainaddlisthandler = function () {
    dispatch(MainStateNumber(NumberinsideLocalStorage + 1));
    const mainlocalStorageNumbersHadlers = function () {};
    mainlocalStorageNumbersHadlers();

    setMainNumselection(MainNumselection + 1);
    localStorage.setItem(Data.Name, JSON.stringify(Data));
    dispatch(MainState(true));
    setTimeout(() => {
      dispatch(MainState(false));
    }, 200);

    // localStorage.setItem("hefdasfdasllo", "hdfash");
    setIsShow(false);
    setTimeout(() => {
      setIsShow(true);
    }, 800);
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
              <img
                className="img_listClone"
                src={MainImage}
                alt="not have image !!!"
              ></img>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
