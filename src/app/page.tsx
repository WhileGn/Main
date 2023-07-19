"use client";

import "./index.css";
import Router from "next/router";
import { redirect } from "next/navigation";
const HomeP = function () {
  const router = Router;
  const reDirecthandler = function () {
    "use client";
    redirect("/Home");
  };
  reDirecthandler();
};

export default HomeP;
