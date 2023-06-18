"use client";

const Fetchbydata = async function () {
  try {
    const Mainfetch = await fetch(
      "https://maincoffe-a99a3-default-rtdb.firebaseio.com/dynamicSide.json"
    );
    const MainData = await Mainfetch.json();
    return MainData;
  } catch {
    return "error";
  }
};

export default Fetchbydata;
