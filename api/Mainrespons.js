"use client";

const Mainrespons = async function (DataBody) {
  const MainData = await DataBody;
  console.log(MainData);
  const ResponsOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ MainData }),
  };
  const response = await fetch(
    "https://maincoffe-a99a3-default-rtdb.firebaseio.com/dynamicSide.json",
    ResponsOptions
  );
  // console.log(response.ok);
  const DataResponse = await response.ok;
  return DataResponse;
  // const data = await response.json();
};

export default Mainrespons;
