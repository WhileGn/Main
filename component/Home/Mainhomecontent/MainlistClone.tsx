import Image from "next/image";
import "./MainlistClone.css";
// import { imgg } from "./../../../img/2389954.jpg";
import { JsxAttribute } from "typescript";
import { URL } from "url";
// import { url } from "inspector";
export function MainlistClone(props: any) {
  const MainVariableimageurl = "2389954";
  const MainImage = `./../../../img/${MainVariableimageurl}.jpg`;
  console.log(MainImage);

  return (
    <div className="MainlistClone">
      <div className="listClone">
        <div className="header_listClone">
          <div className="content_listClone">
            <div className="content_listClone_name">name :</div>
            <div className="content_listClone_about">about :</div>
            <div className="content_listClone_amount">amount :</div>
          </div>
          <div className="img_listClone_div">
            {/* <img
              className=""
              src={require("./../../../img/Differences-Between-Arabica-and-Robusta-Coffee-Beans-1.jpg")}
              alt=""
            /> */}
            {/* <Image className="img_listClone" src={imgg} /> */}
            <img className="img_listClone" src={MainImage}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
