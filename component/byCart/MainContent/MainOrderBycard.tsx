import Bycard from "./Bycard";
import "./MainOrderBycard.css";
const MainOrderBycard = function () {
  return (
    <>
      <div className="GodOrderBycardDiv">
        <div className="MainOrderBycardDiv">
          <div className="MainOrderBycardDiv_Emty"></div>
          <div className="OrderBycardDiv">
            <Bycard></Bycard>
            <Bycard></Bycard>
            <Bycard></Bycard>
            <Bycard></Bycard>
            <Bycard></Bycard>
            <Bycard></Bycard>
            <Bycard></Bycard>
            <Bycard></Bycard>
            <Bycard></Bycard>
            <div className="Main_by_bution">
              <button className="NumBtn">$200.3</button>
              <button className="byBtn">Finish</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainOrderBycard;
