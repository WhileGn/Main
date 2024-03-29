import { useEffect, useRef, useState } from "react";
import "./Maincontent.css";
import { useIntersectionObserver } from "usehooks-ts";

export function Maincontent() {
  const [render_0, setrender_0] = useState(false);

  const [render_1, setrender_1] = useState(false);

  const ref_0 = useRef<HTMLDivElement | null>(null);
  const entry_0 = useIntersectionObserver(ref_0, {});
  const isVisible_0 = !!entry_0?.isIntersecting;

  const ref_1 = useRef<HTMLDivElement | null>(null);
  const entry_1 = useIntersectionObserver(ref_1, {});
  const isVisible_1 = !!entry_1?.isIntersecting;

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

  return (
    <>
      <div className="MainContent">
        <div className="fragment_content fragment_content_0" ref={ref_0}>
          {render_0 && (
            <div className="Main_Robosta_arabika Main_Robosta_arabika_0">
              <div className="Robosta_arabika_img"></div>
              <div className="Robosta_arabika_text Robosta_arabika_text_first">
                <p className="Robosta_arabika_textself Robosta_arabika_textself_first">
                  Coffee is a beverage prepared from roasted coffee beans.
                  Darkly colored, bitter, and slightly acidic, coffee has a
                  stimulating effect on humans.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="margins"></div>
        <div className="fragment_content fragment_content_1" ref={ref_1}>
          {render_1 && (
            <div className="Main_Robosta_arabika Main_Robosta_arabika_1">
              <div className="Robosta_arabika_text Robosta_arabika_text_secend">
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
