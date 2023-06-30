import "./Mainbycart.css";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Stars } from "@react-three/drei";
import Navbar from "../Home/Navbar";
import { NavbarBycart } from "./navbarbycart/NavbarBycart";
import MainOrderBycard from "./MainContent/MainOrderBycard";
const Mainbycart = function () {
  return (
    <div className="MaidDivBycart">
      <NavbarBycart></NavbarBycart>
      <MainOrderBycard></MainOrderBycard>
      <div className="divbycart">
        {/* <Navbar></Navbar> */}
        {/* <Header></Header> */}
        {/* <Canvas>
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
            <meshLambertMaterial attach="material" color="black" />
          </mesh>
        </Canvas> */}
      </div>
    </div>
  );
};

export default Mainbycart;

{
  /* <Canvas>
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
  <meshLambertMaterial attach="material" color="black" />
</mesh>
</Canvas> */
}
