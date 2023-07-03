import React, { useEffect, useRef, useState } from "react";
import "./bycard.css";
import { types } from "util";
type data = {
  data: any;
  state: any;
};
const Bycard: React.FC<data> = function (props: any) {
  const MainDivElement = useRef<any>();
  const TargetDiv = MainDivElement.current;

  const Maindata = props.data;

  const datas = JSON.parse(Maindata);
  console.log(datas);

  const [MainNumber, setMainNumber] = useState<number>(0);
  const data = {
    Name: datas.Name,
    // about: datas.about,
    amount: datas.amount,
    number: datas.MainNumselection,
  };
  // console.log(props.state("GG"));

  useEffect(() => {
    const bynum_child = data.amount * MainNumber;
    props.state(bynum_child);
  }, [MainNumber]);
  useEffect(() => {
    setMainNumber(data.number);
  }, []);

  const MaindeletHandler = function () {
    // TargetDiv.add.ClassName = "Display_none";
    TargetDiv.remove();
    // console.log(TargetDiv);
  };
  if (TargetDiv != undefined) {
    if (MainNumber == 0 || MainNumber < 0) {
      TargetDiv.remove();
    }
  }

  return (
    <>
      <div ref={MainDivElement} className="MainbyCard">
        <div className="byCard">
          <div className="byCard_leftSide">
            <div className="byCard_atribiute byCard_name">{data.Name} </div>
            <div className="byCard_atribiute byCard_amount">{data.amount}$</div>
            <div className="byCard_atribiute byCard_num">{MainNumber} </div>
          </div>
          <div className="byCard_rightSide">
            <button
              onClick={() => {
                setMainNumber(MainNumber + 1);
              }}
              className="ByCardBution ByCardBution_Add"
            >
              +
            </button>
            <button
              onClick={() => {
                setMainNumber(MainNumber - 1);
              }}
              className="ByCardBution ByCardBution_Rem"
            >
              -
            </button>
            <button
              onClick={MaindeletHandler}
              className="ByCardBution ByCardBution_Delete"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bycard;
