import React from "react";
import "./MainorderClone.css";
import Link from "next/link";

const MainorderClone: React.FC = function (props) {
  return (
    <>
      <div className="Main_MainorderClone">
        <div className="MainorderClone"></div>
        <Link href={""} className="orderLinkSelf"></Link>
      </div>
    </>
  );
};

export default MainorderClone;
