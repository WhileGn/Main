"use client";

// import ApiHandler from "./Mainfechdata";
async function Mainfechdata() {
  let jsonData;

  // const SendResponse = await fetch(
  //   "https://jsonplaceholder.typicode.com/todos/1"
  // );

  // jsonData = await SendResponse.json();
  // console.log(jsonData);
  try {
    // const SendResponse = await fetch(
    //   "https://maincoffe-a99a3-default-rtdb.firebaseio.com/.json"
    // );
    const SendResponse = await fetch(
      "https://maincoffe-a99a3-default-rtdb.firebaseio.com/.json"
    );

    jsonData = await SendResponse.json();
    console.log(jsonData);
    return jsonData;
  } catch {
    return jsonData;
  }
}

export default Mainfechdata;

// "https://jsonplaceholder.typicode.com/todos/1"
