import { Footer } from "./Footer/Footer";
import "./Mainabout.css";
import { ChildContent } from "./content/ChildContent";
import { Maincontent } from "./content/Maincontent";
import NavbarAboutCoffe from "./navbarAboutCoffe/NavbarAboutCoffe";
import { motion } from "framer-motion";

export function Mainabout() {
  return (
    <div className="Main_about">
      <div className="Main_about_child_1">
        <div className="about">
          <NavbarAboutCoffe></NavbarAboutCoffe>
          <Maincontent></Maincontent>
        </div>
      </div>
      {/* <div className="Main_about_child_borderbetincontent"></div> */}
      <div className="Main_about_child_2">
        <ChildContent></ChildContent>
        <Footer></Footer>
      </div>
    </div>
  );
}
