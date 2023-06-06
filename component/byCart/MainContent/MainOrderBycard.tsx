import Bycard from "./Bycard";
import "./MainOrderBycard.css";
const MainOrderBycard = function () {
  return (
    <>
      <div className="MainOrderBycardDiv">
        <div className="MainOrderBycardDiv_Emty"></div>
        <div className="OrderBycardDiv">
          <Bycard></Bycard>
          <Bycard></Bycard>
          <Bycard></Bycard>
          <Bycard></Bycard>
        </div>
      </div>
    </>
  );
};

export default MainOrderBycard;
