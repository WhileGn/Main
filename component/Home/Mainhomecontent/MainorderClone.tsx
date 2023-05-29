import React, { useCallback, useRef, useState } from "react";
import "./MainorderClone.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { stat } from "fs";

const MainorderClone: React.FC<{
  maindatas: any;
  listhadler: any;
  actionOrederHandlerVarible: any;
}> = function (props: any) {
  const refrens: any = useRef<HTMLDivElement>();
  const router = useRouter();

  const [isActive, setisActive] = useState(false);
  // console.log(props.maindatas[0]);

  const mainorderName = props.maindatas[0].replaceAll("_", " ");
  // console.log(mainorderName);

  const MainorderHandler = function (e: any) {
    router.push(`/${mainorderName}`);
  };

  const Main_actionOrederHandlerVarible = props.actionOrederHandlerVarible;
  const Main_Name_Main_actionOrederHandlerVarible = props.maindatas[0];
  const targetDivForaction: any = document.querySelectorAll(".MainorderClone");
  // useCallback(() => {

  // }, []);
  // const tergetDivForaction = document.querySelector(".MainorderClone");
  // console.log();
  targetDivForaction.forEach((element: any) => {
    // element.classList.add("big");
    // element.classList.add("MainorderClone_activeStyle");
  });
  console.log(
    Main_actionOrederHandlerVarible == Main_Name_Main_actionOrederHandlerVarible
  );
  // if (
  //   Main_actionOrederHandlerVarible == Main_Name_Main_actionOrederHandlerVarible
  // ) {
  //   // setisActive((current) => !current);
  //   // setisActive(true);
  //   targetDivForaction?.classList.add("MainorderClone_activeStyle");
  // } else {
  //   targetDivForaction?.classList.remove("MainorderClone_activeStyle");
  //   // setisActive(false);
  // }

  const orderClickHandler = function () {
    console.log(Main_actionOrederHandlerVarible);
    console.log(
      Main_actionOrederHandlerVarible ==
        Main_Name_Main_actionOrederHandlerVarible
    );

    // console.log(isActive);
  };

  const targetDiv = refrens.current;
  // console.log(refrens.current);
  // console.log(mainorderName + " YYYYYYYYYYYYYYYYYYYYY");

  return (
    <div
      onClick={(e) => {
        props.listhadler(e, mainorderName), orderClickHandler();
      }}
      className="Main_MainorderClone"
      ref={refrens}
    >
      <div
        // className={`${"MainorderClone"} ${
        //   isActive ? "MainorderClone_activeStyle" : ""
        // }`}
        className="MainorderClone "
        id="actionHandler"
      >
        {mainorderName}
      </div>
    </div>
  );
};

export default MainorderClone;
