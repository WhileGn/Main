import React from "react";
import logo from "./logo.svg";
import "./Main.css";
// import Navbar from "./component/Navbar";
// import Header from "./animation-component/Heder";
import { motion } from "framer-motion";
// import Mainback from "./animation-component/Mainback";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls, Stars, Tube, useGLTF } from "@react-three/drei";

function Main() {
  // const coffe3d = useGLTF("./../public/img/scene.gltf");
  // return (
  //   <div className="Main_Main">
  //     <div className="heder_Main">
  //       <div className="bodydiv">
  //         {/* <Navbar></Navbar> */}
  //         {/* <Header></Header> */}
  //         <Canvas>
  //           <OrbitControls
  //             enableZoom={false}
  //             enablePan={false}
  //             autoRotate={true}
  //             autoRotateSpeed={0.5}
  //           />
  //           <Stars />
  //           <ambientLight intensity={0.5} />
  //           <spotLight position={[10, 15, 10]} angle={0.3} />
  //           <mesh>
  //             {/* <boxBufferGeometry attach="geometry" /> */}
  //             <meshLambertMaterial attach="material" color="black" />
  //             {/* <primitive object={coffe3d.scene} /> */}
  //           </mesh>
  //         </Canvas>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Main;
