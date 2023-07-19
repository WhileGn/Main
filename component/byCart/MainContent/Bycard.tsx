import React, { useEffect, useRef, useState } from "react";
import "./bycard.css";
import { types } from "util";
type data = {
  data: any;
  state: any;
  firstState: any;
};

import { useSelector, useDispatch } from "react-redux";
import {
  MainState,
  MainStateNumber,
  ckickstate,
  numberStateHandlers,
} from "./../../../src/app/GolobalRedux/features/counter/counterSlice";

const Bycard: React.FC<data> = function (props: any) {
  const [finalAmountState, setfinalAmountState] = useState<any>();
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
  useEffect(() => {
    // const props_varible = prop;
    const finalAmounts = data.amount * data.number;
    console.log(MainNumber);
    props.firstState(finalAmounts);
  }, []);

  const clickHandlers = function (prop: string) {
    const props_varible = prop;
    const finalAmount = data.amount * MainNumber;
    const Amount = data.amount;
    console.log(finalAmount);

    // props.state("ggmens");
    props.state(props_varible, Amount, finalAmount);
    // setfinalAmountState(finalAmount);

    // console.log(finalAmountState);

    // dispatch(MainState(true));
    // setTimeout(() => {
    //   dispatch(MainState(false));
    // }, 200);
  };
  // onchange;
  // useEffect(() => {
  //   console.log("im change ...");
  //   const idAmount = datas.Name;
  // }, [MainNumber]);

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    dispatch(ckickstate(true));
    setTimeout(() => {
      dispatch(ckickstate(false));
    }, 500);
    console.log("im clicked");

    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return (
    <>
      <div ref={MainDivElement} className="MainbyCard">
        <div className="byCard">
          <div className="byCard_leftSide">
            <div className="byCard_atribiute byCard_name">{data.Name} </div>
            <div className="byCard_atribiute byCard_amount">{data.amount}$</div>
            <div ref={ref} className="byCard_atribiute byCard_num">
              <div className={isClicked ? "button-clicked" : ""}>
                {MainNumber}{" "}
              </div>
            </div>
          </div>
          <div className="byCard_rightSide">
            <button
              onClick={() => {
                handleClick();
                setMainNumber(MainNumber + 1);
                clickHandlers("add");

                // dispatch(MainStateNumber(NumberinsideLocalStorage + 1));
              }}
              className="ByCardBution ByCardBution_Add"
            >
              +
            </button>
            <button
              onClick={() => {
                handleClick();
                setMainNumber(MainNumber - 1);
                clickHandlers("rem");
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
                clickHandlers("del");
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
