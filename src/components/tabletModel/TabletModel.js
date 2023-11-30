import { Canvas, useThree } from "@react-three/fiber";
import { Lights, Model } from "./parts";
import "./TabletModel.css";
import { useEffect, useRef } from "react";
import { render } from "@testing-library/react";

function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    if (size.width >= 1441) {
      camera.position.set(0, 0, 11);
    }
    if (size.width <= 1440 && size.width >= 1025) {
      camera.position.set(0, 0, 16);
    }
    if (size.width <= 1024 && size.width >= 765) {
      camera.position.set(0, 0, 21);
    }
    if (size.width < 768 && size.width >= 461) {
      camera.position.set(0, 0, 35);
    }
    if (size.width <= 460) {
      camera.position.set(0, 0, 40);
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
