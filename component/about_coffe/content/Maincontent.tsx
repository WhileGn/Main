import { use, useEffect, useRef, useState } from "react";
import "./Maincontent.css";
import { useIntersectionObserver } from "usehooks-ts";
import { Transition } from "react-transition-group";
import { stat } from "fs";
import { log } from "console";
export function Maincontent() {
  // const MainObserver: any = new IntersectionObserver((entris) => {
  //   entris.forEach((entry) => {
  //     console.log(entry);
  //   });
  // });
  const [render_0, setrender_0] = useState(false);

  const [render_1, setrender_1] = useState(false);

  const ref_0 = useRef<HTMLDivElement | null>(null);
  const entry_0 = useIntersectionObserver(ref_0, {});
  const isVisible_0 = !!entry_0?.isIntersecting;

  const ref_1 = useRef<HTMLDivElement | null>(null);
  const entry_1 = useIntersectionObserver(ref_1, {});
  const isVisible_1 = !!entry_1?.isIntersecting;

  const targetelement = ref_1.current;

  useEffect(() => {
    if (!isVisible_0) {
      setrender_0(false);
    } else if (isVisible_0) {
      setrender_0(true);
    }
  }, [isVisible_0]);

  useEffect(() => {
    if (!isVisible_1) {
      setrender_1(false);
    } else if (isVisible_1) {
      setrender_1(true);
    }
  }, [isVisible_1]);

  // const testss = function () {
  //   console.log(testss);
  // };

  // console.log(MainObserver);
  // MainObserver.observe(document.querySelector(".Main_Robosta_arabika_2"));

  // const observer = new window.IntersectionObserver(([entry]) =>
  //   console.log(entry)
  // );
  // const MainRef: any = useRef<HTMLDivElement>();
  // console.log(MainRef);
  // const test_2: any = Window;
  // console.log(test_2);

  return (
    <>
      <div className="MainContent">
        <div className="fragment_content" ref={ref_0}>
          {render_0 && (
            <div className="Main_Robosta_arabika">
              <div className="Robosta_arabika_img"></div>
              <div className="Robosta_arabika_text">
                <p className="Robosta_arabika_textself">
                  Coffee is a beverage prepared from roasted coffee beans.
                  Darkly colored, bitter, and slightly acidic, coffee has a
                  stimulating effect on humans.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="margins"></div>
        <div className="fragment_content" ref={ref_1}>
          {render_1 && (
            <div className="Main_Robosta_arabika Main_Robosta_arabika_2">
              <div className="Robosta_arabika_text">
                <p className="Robosta_arabika_textself Robosta_vs_arabika_textself">
                  The two most popular coffee species in the world, Arabica vs
                  Robusta Coffee, have specific characteristics that set them
                  apart.
                </p>
              </div>
              <div className="Robosta_arabika_img_2 Robosta_arabika_img"></div>
            </div>
          )}
        </div>
      </div>
      <div className="margins"></div>
    </>
  );
}
