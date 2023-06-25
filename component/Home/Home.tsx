import React from "react";
import "./home.css";
import Navbar from "./Navbar";
import { Html, Main } from "next/document";
// import { Canvas } from "@react-three/fiber";
// import { Box, OrbitControls, Stars, Tube, useGLTF } from "@react-three/drei";
import "./Main.css";
// import { Mainhomecontent } from "./Mainhomecontent/Mainhomecontent";
// import Mainfechdata from "../../api/hello/Mainfechdata";
import Mainhomecontent from "./Mainhomecontent/Mainhomecontent";
const HomePage: React.FC = function () {
  // console.log(Mainfechdata());
  // const testdata = Mainfechdata();
  // console.log(testdata);
  // async function MainfunctionForHandlelingEfect() {
  //   const MaindataVarible = await Mainfechdata();
  //   const MainjsonData = Object.values(MaindataVarible);
  //   console.log(MainjsonData.length);

  //   // const MainjsonData = Object.values(MaindataVarible.jsonData);
  // }
  // MainfunctionForHandlelingEfect();

  return (
    <div className="Mainindex">
      <Navbar></Navbar>
      <Mainhomecontent></Mainhomecontent>
      {/* <div className="bodydiv"></div> */}
    </div>
  );
};
export default HomePage;
