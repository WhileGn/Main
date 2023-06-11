// import { store } from "../Store_Redux/MainRedux";
import HomePage from "../component/Home/Home";
import Mainhomecontent from "../component/Home/Mainhomecontent/Mainhomecontent";
import MainOrderBycard from "../component/byCart/MainContent/MainOrderBycard";
import "./index.css";
import { Provider } from "react-redux";

function Homepages() {
  return (
    <>
      <Mainhomecontent></Mainhomecontent>
      <HomePage></HomePage>

      {/* <Provider store={store}></Provider> */}
    </>
  );
}

export default Homepages;
