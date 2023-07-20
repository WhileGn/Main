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
import { Tube } from "@react-three/drei";
let state: boolean = true;
const Bycard: React.FC<data> = function (props: any) {
  const [finalAmountState, setfinalAmountState] = useState<any>();
  const ref = useRef<any>();

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

  const [MainNumber, setMainNumber] = useState<number>(0);
  const data = {
    Name: datas.Name,
    amount: datas.amount,
    number: datas.MainNumselection,
  };

  useEffect(() => {
    const bynum_child = data.amount * MainNumber;

    setMainNumber(data.number);
  }, []);

  const TargetDivanimationdelet = document.querySelector(".MainbyCard");
  const [Show, setShow] = useState<boolean>(true);
  const MainDeletHandler = function () {
    const nameFood = data.Name;

    TargetDivanimationdelet?.classList.add("animation__deleting");
    setTimeout(() => {
      localStorage.removeItem(nameFood);
      setShow(false);
    }, 200);
  };

  if (Show == true) {
    if (TargetDiv != undefined) {
      if (MainNumber == 0 || MainNumber < 0) {
        const nameFood = data.Name;
        TargetDivanimationdelet?.classList.add("animation__deleting");
        setTimeout(() => {
          localStorage.removeItem(nameFood);
          setShow(false);
        }, 200);
      }
    }
  }

  useEffect(() => {
    const finalAmounts = data.amount * data.number;

    props.firstState(finalAmounts);
  }, []);

  const clickHandlers = function (prop: string) {
    const props_varible = prop;
    const finalAmount = data.amount * MainNumber;
    const Amount = data.amount;

    props.state(props_varible, Amount, finalAmount);
  };

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    dispatch(ckickstate(true));
    setTimeout(() => {
      dispatch(ckickstate(false));
    }, 500);

    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return (
    <>
      {Show && (
        <div ref={MainDivElement} className="MainbyCard">
          <div className="byCard">
            <div className="byCard_leftSide">
              <div className="byCard_atribiute byCard_name">{data.Name} </div>
              <div className="byCard_atribiute byCard_amount">
                {data.amount}$
              </div>
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
                  }
                }}
                className="ByCardBution ByCardBution_Rem"
              >
                -
              </button>
              <button
                onClick={() => {
                  clickHandlers("del");
                  MainDeletHandler();

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
      )}
    </>
  );
};
export default Bycard;
