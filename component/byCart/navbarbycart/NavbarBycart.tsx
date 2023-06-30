import Link from "next/link";
import "./NavbarBycart.css";

export function NavbarBycart() {
  return (
    <>
      <div className="navbar_Main_">
        <div className="navbar_icon_">
          <p className="navbar_icon_self_">Coffee</p>
        </div>
        <div className="navbar_btn_Maindiv_">
          <Link className="navbar_btn_" href={"/"}>
            Home
          </Link>
          <Link className="navbar_btn_" href={"About"}>
            AboutCoffe
          </Link>
          <Link className="navbar_btn_ SMainPage_" href={"Bycart"}>
            Bying
          </Link>
        </div>
      </div>
    </>
  );
}
