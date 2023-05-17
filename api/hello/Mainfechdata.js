import { useFetch } from "usehooks-ts";

// export function Mainfechdata() {
//   // const Goddata_0 = fetch("https://maincoffe-a99a3-default-rtdb.firebaseio.com/data")

//   const res = fetch(
//     "https://maincoffe-a99a3-default-rtdb.firebaseio.com/data"
//   ).then((GG) => {
//     console.log(gg);
//   });

//   // if (!res.response) {
//   //   return <div>Loading...</div>;
//   // }
//   const MAIN = res.response.message;

//   return res;
// }

async function Mainfechdata() {
  const SendResponse = await fetch(
    "https://maincoffe-a99a3-default-rtdb.firebaseio.com/data.json"
  );
  const jsonData = await SendResponse.json();

  return jsonData;
}

export default Mainfechdata;
