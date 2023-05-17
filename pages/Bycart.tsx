import React, { useEffect, useState } from "react";
import "./Bycart.css";
// import { Mainbycart } from "../component/byCart/Mainbycart";
import HomePage from "../component/Home/Home";
import Mainbycart from "../component/byCart/Mainbycart";

function Bycartpage() {
  const [mainstate_1, setmainstate_1] = useState(0);
  useEffect(() => {
    setmainstate_1(1);
  }, []);

  return (
    <React.Fragment>
      <Mainbycart></Mainbycart>;
    </React.Fragment>
  );
}

export default Bycartpage;
