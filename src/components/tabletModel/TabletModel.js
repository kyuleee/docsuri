import { Canvas, useThree } from "@react-three/fiber";
import { Lights, Model } from "./parts";
import "./TabletModel.css";
import { useEffect } from "react";

function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    if (size.width < 1400) {
      camera.position.set(0, 0, 20);
    }
    if (size.width >= 1400) {
      camera.position.set(0, 0, 11);
    }
  }, [camera, size.width]);
}
const TabletModel = () => {
  return (
    <>
      <Canvas camera={{ fov: 60, near: 0.1, far: 1000 }}>
        <ResponsiveCamera />
        <Lights />
        <Model />
      </Canvas>
    </>
  );
};

export default TabletModel;
