import Image from "next/image";
import "./MainlistClone.css";
// import { imgg } from "./../../../img/2389954.jpg";
import { JsxAttribute } from "typescript";
import { URL } from "url";
import { log } from "console";
// import { url } from "inspector";
// import Mainfechdata from "../../../api/Mainfechdata";

export function MainlistClone(props: any) {
  const MainVariableimageurl = props.MaindataH[0];
  console.log(MainVariableimageurl);

  const MainImage = `./../../../img/${MainVariableimageurl}.jpg`;
  console.log(MainImage);

  console.log(MainImage);
  console.log(MainImage);

  const MainData = props.MaindataH;

  const Data = {
    Name: MainData[0].replace("_", " "),
    about: MainData[1].about,
    amount: MainData[1].amount,
  };
  console.log(Data.Name);
  // const fortest = "esperso_dabel";

  // const final = fortest.replace("_", " ");

  // console.log(fortest);
  // console.log(final);
  const mainaddlisthandler = function () {
    // const MainsendData = Main;
  };

  return (
    <div className="MainlistClone">
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
        rel="stylesheet"
      />
      <div className="listClone">
        <div className="header_listClone">
          <div className="content_listClone">
            <div className="content_listClone_name">
              name :
              <div className="child_content_listClone_name">{Data.Name}</div>
            </div>
            <div className="content_listClone_about">
              about :<br />
              <div className="child_content_listClone_about">{Data.about}</div>
            </div>
            <div className="content_listClone_amount">
              amount :
              <div className="child_content_listClone_amount">
                {Data.amount}
              </div>
            </div>
            <div className="content_ading_side_MainDiv">
              <button
                onClick={mainaddlisthandler}
                className="content_ading_side_but"
              >
                add
              </button>
            </div>
          </div>
          <div className="img_listClone_div">
            {/* <img
              className=""
              src={require("./../../../img/Differences-Between-Arabica-and-Robusta-Coffee-Beans-1.jpg")}
              alt=""
            /> */}
            {/* <Image className="img_listClone" src={imgg} /> */}
            <img
              className="img_listClone"
              src={MainImage}
              alt="not have image !!!"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
