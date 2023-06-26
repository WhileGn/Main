"use client";

// import { store } from "../Store_Redux/MainRedux";
import HomePage from "./../../../component/Home/Home";
import Mainhomecontent from "./../../../component/Home/Mainhomecontent/Mainhomecontent";
import MainOrderBycard from "./../../../component/byCart/MainContent/MainOrderBycard";
import "./index.css";
import { Provider } from "react-redux";

const HomeP = function () {
  return (
    <div className="GodHome">
      <Mainhomecontent></Mainhomecontent>
      <HomePage></HomePage>

      {/* <Provider store={store}></Provider> */}
    </div>
  );
};

export default HomeP;
