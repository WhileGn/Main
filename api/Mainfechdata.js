"use client";

async function Mainfechdata() {
  let jsonData;

  try {
    const SendResponse = await fetch(
      "https://maincoffe-a99a3-default-rtdb.firebaseio.com/data.json"
    );

    jsonData = await SendResponse.json();
    return jsonData;
  } catch {
    return "error";
  }
}

export default Mainfechdata;
