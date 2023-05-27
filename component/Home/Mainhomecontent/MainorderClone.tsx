import React from "react";
import styles from "./MainorderClone.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const MainorderClone: React.FC<{ maindatas: any; listhadler: any }> = function (
  props: any
) {
  const router = useRouter();
  // console.log(props.maindatas[0]);
  const mainorderName = props.maindatas[0];
  // console.log(mainorderName);

  const MainorderHandler = function (e: any) {
    router.push(`/${mainorderName}`);
  };
  // console.log(mainorderName + " YYYYYYYYYYYYYYYYYYYYY");

  return (
    <div
      onClick={(e) => {
        props.listhadler(e, mainorderName);
      }}
      className={styles.Main_MainorderClone}
    >
      <div className={styles.MainorderClone}>{mainorderName}</div>
    </div>
  );
};

export default MainorderClone;
