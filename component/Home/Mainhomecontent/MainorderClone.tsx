import React, { useCallback, useRef, useState } from "react";
import "./MainorderClone.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { stat } from "fs";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const MainorderClone: React.FC<{
  maindatas: any;
  listhadler: any;
  actionOrederHandlerVarible: any;
  listhadler_1: any;
}> = function (props: any) {
  const refrens: any = useRef<HTMLDivElement>();

  const mainorderName = props.maindatas[0].replaceAll("_", " ");

  const orderClickHandler = function () {
    const MainorderAction = document.querySelectorAll(".MainorderClone");
    MainorderAction.forEach((orderAction) => {
      orderAction.classList.remove("orderAction");
    });
  };

  const targetDiv = refrens.current;

  return (
    <div
      onClick={(e) => {
        orderClickHandler(), props.listhadler_1(e, mainorderName);
      }}
      className="Main_MainorderClone"
      ref={refrens}
    >
      <div className="MainorderClone " id="actionHandler">
        {mainorderName}
      </div>
    </div>
  );
};

export default MainorderClone;
