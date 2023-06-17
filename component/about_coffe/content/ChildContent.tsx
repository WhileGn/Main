import "./ChildContent.css";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
export function ChildContent() {
  const [Mainstate, setMainstate] = useState(false);

  const ref_ = useRef<HTMLDivElement | null>(null);
  const observer = useIntersectionObserver(ref_, {});
  const visible = !!observer?.isIntersecting;

  useEffect(() => {
    setMainstate(visible);
  }, [visible]);

  return (
    <div ref={ref_} className="Main_ChildContent">
      {
        <div className="ChildContent">
          <div className="ChildConten_history_Main">
            <div className="history_header">History of coffee</div>
            <div className="history_text">
              The history of coffee dates back to centuries of old oral
              tradition in modern day Ethiopia. However, neither where coffee
              was first cultivated, nor direct evidence of its consumption prior
              to the 15th century, have been found
            </div>
          </div>
          <div className="ChildConten_Rosting_Main">
            <div className="Rosting_header"> Coffee roasting process</div>
            <div className="Rosting_text">
              Roasting means transforming coffee beans from green to brown.
              There are different ways to make it, and that affects the flavour.
              I will here discuss the principals of roasting and commercial
              roasting
            </div>
          </div>
          <div className="ChildConten_coffeeEstate_Main">
            <div className="coffeeEstate_header">Coffee estate</div>
            <div className="coffeeEstate_text">
              A coffee estate is properly speaking simply a coffee farm, and an
              estate coffee is a coffee that has been kept separate from other
              coffees on its way from that farm to the consumer
            </div>
          </div>
        </div>
      }
    </div>
  );
}
