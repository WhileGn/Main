import { Footer } from "./Footer_aboutCoffe/FooteraboutCoffe";
import "./Mainabout.css";
import { ChildContent } from "./content/ChildContent";
import { Maincontent } from "./content/Maincontent";
import NavbarAboutCoffe from "./navbarAboutCoffe/NavbarAboutCoffe";
import { motion } from "framer-motion";

export function Mainabout() {
  return (
    <>
      <div className="Main_about">
        <div className="abouts">
          <div className="Main_about_child_1">
            <div className="about">
              <NavbarAboutCoffe></NavbarAboutCoffe>
              <Maincontent></Maincontent>
            </div>
          </div>
          {/* <div className="Main_about_child_borderbetincontent"></div> */}
          <div className="Main_about_child_2">
            <ChildContent></ChildContent>
          </div>
        </div>

        <div className="FoterAbout">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
