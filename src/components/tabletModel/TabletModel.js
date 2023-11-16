import { Canvas } from "@react-three/fiber";
import { Lights, Model } from "./parts";
import { OrbitControls } from "@react-three/drei";
import "./TabletModel.css";

const TabletModel = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 11], fov: 60, near: 0.1, far: 1000 }}>
        <Lights />
        <Model />
        {/* <OrbitControls /> */}
      </Canvas>
    </>
  );
};

export default TabletModel;
