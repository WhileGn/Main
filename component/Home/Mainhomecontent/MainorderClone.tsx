import React from "react";
import "./MainorderClone.css";
import Link from "next/link";
import { useRouter } from "next/router";

const MainorderClone: React.FC = function (props: any) {
  const router = useRouter();
  console.log(props);

  const MainorderHandler = function (e: any) {
    router.push("/");
  };

  return (
    <>
      <div onClick={MainorderHandler} className="Main_MainorderClone">
        <div className="MainorderClone"> tea adn cooffe</div>
      </div>
    </>
  );
};

export default MainorderClone;
