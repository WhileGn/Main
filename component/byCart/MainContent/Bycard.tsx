import { useRef } from "react";
import "./bycard.css";

const Bycard = function () {
  const MainDivElement = useRef<any>();
  const TargetDiv = MainDivElement.current;
  console.log(TargetDiv);

  const MaindeletHandler = function () {
    // TargetDiv.add.ClassName = "Display_none";
    TargetDiv.remove();
    console.log(TargetDiv);
  };
  return (
    <>
      <div ref={MainDivElement} className="MainbyCard">
        <div className="byCard">
          <div className="byCard_leftSide">
            <div className="byCard_atribiute byCard_name"> name</div>
            <div className="byCard_atribiute byCard_amount"> 20</div>
            <div className="byCard_atribiute byCard_num">num</div>
          </div>
          <div className="byCard_rightSide">
            <button className="ByCardBution ByCardBution_Add">+</button>
            <button className="ByCardBution ByCardBution_Rem">-</button>
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
