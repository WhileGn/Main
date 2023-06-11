// import { useFetch } from "usehooks-ts";

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
// "use server";
// async function ApiHandler() {
//   let jsonData;
//   console.log("OOOOOO");
//   const SendResponse = await fetch(
//     "https://maincoffe-a99a3-default-rtdb.firebaseio.com/.json"
//   );

//   jsonData = await SendResponse.json();
//   console.log(jsonData);
//   try {
//     // const SendResponse = await fetch(
//     //   "https://maincoffe-a99a3-default-rtdb.firebaseio.com/.json"
//     // );
//     // jsonData = await SendResponse.json();
//     // console.log(jsonData);
//     return jsonData;
//   } catch {
//     return jsonData;
//   }
// }

// export default ApiHandler;
