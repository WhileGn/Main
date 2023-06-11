"use client";

// import ApiHandler from "./Mainfechdata";
async function Mainfechdata() {
  let jsonData;
  console.log("ooooooooooooooooooooooooooooooooooooo");
  const SendResponse = await fetch(
    "https://maincoffe-a99a3-default-rtdb.firebaseio.com/.json"
  );
  jsonData = await SendResponse.json();
  console.log(jsonData);
  try {
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
