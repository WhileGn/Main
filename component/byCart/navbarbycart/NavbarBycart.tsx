import Link from "next/link";
import "./NavbarBycart.css";

export function NavbarBycart() {
  return (
    <>
      <div className="navbar_Main">
        <div className="navbar_icon">
          <p className="navbar_icon_self">Coffee</p>
        </div>
        <div className="navbar_btn_Maindiv">
          <Link className="navbar_btn" href={"/"}>
            Home
          </Link>
          <Link className="navbar_btn" href={"About"}>
            AboutCoffe
          </Link>
          <Link className="navbar_btn SMainPage" href={"Bycart"}>
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
