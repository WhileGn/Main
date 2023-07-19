"use client";

import { useEffect, useState } from "react";
import HomePage from "./../../../component/Home/Home";
import Mainhomecontent from "./../../../component/Home/Mainhomecontent/Mainhomecontent";
import "./index.css";

const HomeP = function () {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
  }, []);

  return (
    <div className="GodHome">
      <Mainhomecontent></Mainhomecontent>
      <HomePage></HomePage>
    </div>
  );
};

export default HomeP;
