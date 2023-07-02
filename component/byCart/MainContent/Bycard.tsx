import React, { useRef, useState } from "react";
import "./bycard.css";

const Bycard: React.FC<{ data: any }> = function (props: any) {
  const MainDivElement = useRef<any>();
  const TargetDiv = MainDivElement.current;

  const Maindata = props.data.MainData;

  const [MainNumber, setMainNumber] = useState(1);
  const data = {
    Name: Maindata.Name,
    // about: Maindata.about,
    amount: Maindata.amount,
  };
  console.log(Maindata);

  const MaindeletHandler = function () {
    // TargetDiv.add.ClassName = "Display_none";
    TargetDiv.remove();
    // console.log(TargetDiv);
  };
  if (MainNumber == 0 || MainNumber < 0) {
    TargetDiv.remove();
  }

  return (
    <>
      <div ref={MainDivElement} className="MainbyCard">
        <div className="byCard">
          <div className="byCard_leftSide">
            <div className="byCard_atribiute byCard_name">{data.Name} </div>
            <div className="byCard_atribiute byCard_amount">{data.amount} </div>
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
