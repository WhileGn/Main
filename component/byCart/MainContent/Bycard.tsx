import "./bycard.css";

const Bycard = function () {
  return (
    <>
      <div className="MainbyCard">
        <div className="byCard">
          <div className="byCard_leftSide">
            <div className="byCard_atribiute byCard_name"> name</div>
            <div className="byCard_atribiute byCard_amount"> 20</div>
            <div className="byCard_atribiute byCard_num">num</div>
          </div>
          <div className="byCard_rightSide">
            <button className="ByCardBution ByCardBution_Add">+</button>
            <button className="ByCardBution ByCardBution_Rem">-</button>
            <button className="ByCardBution ByCardBution_Delete">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bycard;
