import React from "react";
import "./home.css";
import Navbar from "./Navbar";
import { Html, Main } from "next/document";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls, Stars, Tube, useGLTF } from "@react-three/drei";
import "./Main.css";

const HomePage: React.FC = function () {
  return (
    <div className="Mainindex">
      <Navbar></Navbar>

      <div className="bodydiv">
        <Canvas>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
          <Stars />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <mesh>
            {/* <boxBufferGeometry attach="geometry" /> */}
            <meshLambertMaterial attach="material" color="black" />
            {/* <primitive object={coffe3d.scene} /> */}
          </mesh>
        </Canvas>
      </div>
    </div>
  );
};
export default HomePage;
