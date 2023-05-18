// import  Mainfechdata  from "./../../../api/hello/Mainfechdata";
import MainorderClone from "./MainorderClone";
import "./Mainhomecontent.css";
export function Mainhomecontent() {
  // const Maindata = Mainfechdata;
  // console.log(Maindata);

  return (
    <>
      <div className="MainhomeContent">
        <div className="homeContent">
          <div className="Main_order">
            <MainorderClone></MainorderClone>
            <MainorderClone></MainorderClone>
          </div>
          <div className="Main_list"></div>
        </div>
      </div>
    </>
  );
}
