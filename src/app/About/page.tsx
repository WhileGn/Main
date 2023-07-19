"use client";

import React, { useEffect } from "react";
import { Mainabout } from "./../../../component/about_coffe/Mainabout";

import "./About.css";
import { useState } from "react";

function Aboutpage() {
  const [mainstate, setmainstate] = useState(0);
  useEffect(() => {
    setmainstate(1);
  }, []);

  return (
    <React.Fragment>
      <Mainabout></Mainabout>
    </React.Fragment>
  );
}
export default Aboutpage;
