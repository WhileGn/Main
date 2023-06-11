"use client";

// import { redirect } from "next/dist/server/api-utils";
// import { store } from "../Store_Redux/MainRedux";
import HomePage from "../../component/Home/Home";
import Mainhomecontent from "../../component/Home/Mainhomecontent/Mainhomecontent";
import MainOrderBycard from "../../component/byCart/MainContent/MainOrderBycard";
import "./index.css";
import { Provider } from "react-redux";
import Router from "next/router";
import { useEffect } from "react";
import { redirect } from "next/navigation";
const HomeP = function () {
  const router = Router;
  const reDirecthandler = function () {
    "use client";
    // router.push("/hello-nextjs");
    redirect("/Home");
  };
  reDirecthandler();

  // reDirecthandler();

  // useEffect(() => {
  //   // push("/hello-nextjs");
  //   Router.push("/hello-nextjs");
  // }, []);

  // const { pathname } = Router;
  // if (pathname == "/") {
  //   // with router.push the page may be added to history
  //   // the browser on history back will  go back to this page and then forward again to the redirected page
  //   // you can prevent this behaviour using location.replace
  //   Router.push("/hello-nextjs");
  // }
  //location.replace("/hello-nextjs")
  // return (
  //   <>
  //     <Mainhomecontent></Mainhomecontent>
  //     <HomePage></HomePage>
  //     {/* <Provider store={store}></Provider> */}
  //   </>
  // );
};

export default HomeP;
