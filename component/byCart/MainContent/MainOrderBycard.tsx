import Bycard from "./Bycard";
import "./MainOrderBycard.css";
import Fetchbydata from "./../../../api/Fetchbydata";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
const MainOrderBycard = function () {
  const targetData: any = [];
  // let Maindata: any;
  let [data, setData] = useState();
  const [Loding, setLoding] = useState(false);

  async function MainfetchdataFunction() {
    const MainFetchData = await Fetchbydata();
    const convertTypeToObject: any = Object.entries(MainFetchData);
    // console.log(convertTypeToObject);
    // targetData.push();
    // let childMainData: any;
    convertTypeToObject.map((Datas: any) => {
      // console.log(Datas[1]);
      targetData.push(Datas[1]);
    });
    // setMainData(targetData);
    const finalValue = targetData.map((Datas: any) => {
      // console.log(targetData);

      return <Bycard data={Datas}></Bycard>;
    });
    setData(finalValue);

    console.log(finalValue);
  }
  useEffect(() => {
    MainfetchdataFunction();
  }, []);
  console.log(targetData);

  return (
    <>
      <div className="GodOrderBycardDiv">
        <div className="MainOrderBycardDiv">
          <div className="MainOrderBycardDiv_Emty"></div>
          <div className="OrderBycardDiv">
            {data}
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
