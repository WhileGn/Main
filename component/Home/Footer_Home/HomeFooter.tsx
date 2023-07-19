import "./HomeFooter.css";
import "../Icon/instagram.svg";
import Image from "next/image";
import icoon_1 from "../Icon/instagram.svg";
import { color } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";
import Link from "next/link";

export function HomeFooter() {
  const MaincolorForIcon = {
    fill: "#D2485A",
  };
  const [MainFooterState, setMainFooterState] = useState(false);

  const ref_footer = useRef<HTMLDivElement | null>(null);
  const MainFoter_Observer = useIntersectionObserver(ref_footer, {});
  const MainrenderFoter = !!MainFoter_Observer?.isIntersecting;

  useEffect(() => {
    setMainFooterState(MainrenderFoter);
  }, [MainrenderFoter]);

  return (
    <div ref={ref_footer} className="Main_Footer">
      {MainFooterState && (
        <div className="Footer_header">
          <div className="Footer">
            <div className="header_fotehr_content">
              <h1 className="header_fotehr_content_h1">Hire Us</h1>
              <p className="header_fotehr_content_p">
                Do you like coffee <br></br>follow us
              </p>
              <div className="Footer_content_num">+98 000 000 000</div>
              <div className="Main_Footer_content_icons">
                <div className="Footer_content_icons">
                  <Link href={"https://react.semantic-ui.com/"}>
                    <BsInstagram
                      className="Footer_icon_self"
                      color="#e36d18"
                      size={30}
                      href="youtuve"
                    />
                  </Link>
                  <Link href={"https://react.semantic-ui.com/"}>
                    <BsWhatsapp
                      className="Footer_icon_self"
                      color="#e36d18"
                      size={30}
                    />
                  </Link>

                  <Link href={"https://react.semantic-ui.com/"}>
                    <BsFacebook
                      className="Footer_icon_self"
                      color="#e36d18"
                      size={30}
                    />
                  </Link>

                  <Link href={"https://react.semantic-ui.com/"}>
                    <BsYoutube
                      className="Footer_icon_self"
                      color="#e36d18"
                      size={30}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
