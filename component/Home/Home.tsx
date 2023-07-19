import React from "react";
import "./home.css";
import Navbar from "./Navbar";

import "./Main.css";

import Mainhomecontent from "./Mainhomecontent/Mainhomecontent";
const HomePage: React.FC = function () {
  return (
    <div className="Mainindex">
      <Navbar></Navbar>
      <Mainhomecontent></Mainhomecontent>
    </div>
  );
};
export default HomePage;
