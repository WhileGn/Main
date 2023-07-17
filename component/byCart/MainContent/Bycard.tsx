import React, { useEffect, useRef, useState } from "react";
import "./bycard.css";
import { types } from "util";
type data = {
  data: any;
  state: any;
};

import { useSelector, useDispatch } from "react-redux";
import {
  MainState,
  MainStateNumber,
  numberStateHandlers,
} from "./../../../src/app/GolobalRedux/features/counter/counterSlice";

const Bycard: React.FC<data> = function (props: any) {
  const ref = useRef<any>();

  // const targetRef = ref.current.vpp

  const dispatch = useDispatch();
  const NumberinsideLocalStorage = useSelector(
    (state: any) => state.counter.numvalue
  );
  const numberHandlersRedux = useSelector(
    (state: any) => state.counter.numhandlers
  );

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
  // const numberhandlers = props.state();
  const numberHandlersFunction = function () {};
  // useEffect(() => {
  //   const bynum_child = data.amount * MainNumber;
  //   props.state(bynum_child);
  // }, [MainNumber]);
  // const [boolianState, setboolianState] = useState<boolean>(true);
  // useEffect(() => {
  //   if (boolianState == true) {
  //     setMainNumber(data.number);
  //   }
  //   setboolianState(false);
  // }, []);
  // setMainNumber(data.number);
  useEffect(() => {
    const bynum_child = data.amount * MainNumber;
    console.log(MainNumber);
    props.state(datas.MainNumselection);

    setMainNumber(data.number);
  }, []);

  const MaindeletHandler = function () {
    const nameFood = data.Name;
    localStorage.removeItem(nameFood);
    // TargetDiv.add.ClassName = "Display_none";
    TargetDiv.remove();
    // console.log(TargetDiv);
  };
  // useEffect(() => {
  //   dispatch(numberStateHandlers())
  // }, [MainNumber]);

  if (TargetDiv != undefined) {
    if (MainNumber == 0 || MainNumber < 0) {
      const nameFood = data.Name;
      localStorage.removeItem(nameFood);
      TargetDiv.remove();
    }
  }
  const clickHandlers = function () {
    dispatch(MainState(true));
    setTimeout(() => {
      dispatch(MainState(false));
    }, 200);
  };
  // onchange;

  return (
    <>
      <div ref={MainDivElement} className="MainbyCard">
        <div className="byCard">
          <div className="byCard_leftSide">
            <div className="byCard_atribiute byCard_name">{data.Name} </div>
            <div className="byCard_atribiute byCard_amount">{data.amount}$</div>
            <div ref={ref} className="byCard_atribiute byCard_num">
              {MainNumber}{" "}
            </div>
          </div>
          <div className="byCard_rightSide">
            <button
              onClick={() => {
                clickHandlers();
                setMainNumber(MainNumber + 1);

                // dispatch(MainStateNumber(NumberinsideLocalStorage + 1));
              }}
              className="ByCardBution ByCardBution_Add"
            >
              +
            </button>
            <button
              onClick={() => {
                clickHandlers();
                setMainNumber(MainNumber - 1);
                if (NumberinsideLocalStorage > 0) {
                  // dispatch(MainStateNumber(NumberinsideLocalStorage - 1));
                }
              }}
              className="ByCardBution ByCardBution_Rem"
            >
              -
            </button>
            <button
              onClick={() => {
                clickHandlers();
                MaindeletHandler();
                // setMainNumber(MainNumber - 1);
                if (NumberinsideLocalStorage > 0) {
                  dispatch(
                    MainStateNumber(NumberinsideLocalStorage - MainNumber)
                  );
                }
              }}
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
