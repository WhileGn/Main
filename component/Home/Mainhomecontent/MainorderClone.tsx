import React, { useRef, useState } from "react";
import "./MainorderClone.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { stat } from "fs";

const MainorderClone: React.FC<{ maindatas: any; listhadler: any }> = function (
  props: any
) {
  const refrens: any = useRef<HTMLDivElement>();
  const router = useRouter();

  const [isActive, setisActive] = useState(false);
  // console.log(props.maindatas[0]);
  const mainorderName = props.maindatas[0];
  // console.log(mainorderName);

  const MainorderHandler = function (e: any) {
    router.push(`/${mainorderName}`);
  };
  const orderClickHandler = function () {
    setisActive((current) => !current);
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
        className={`${"MainorderClone"} ${
          isActive ? "MainorderClone_activeStyle" : ""
        }`}
      >
        {mainorderName}
      </div>
    </div>
  );
};

export default MainorderClone;
