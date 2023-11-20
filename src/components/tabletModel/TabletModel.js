import { Canvas } from "@react-three/fiber";
import { Lights, Model } from "./parts";
import "./TabletModel.css";
import { useEffect, useRef, useState } from "react";

const TabletModel = () => {
  const [wheelDirect, setWheelDirect] = useState(0);
  const [positionX, setPositionX] = useState(-6);
  const [rotationY, setRotationY] = useState(1.2);
  const modelRef = useRef();

  function handleRotate(e) {
    if (e.deltaY > 0) {
      setWheelDirect((prev) => prev + 8);
      setPositionX(6);
      setRotationY(12);
    }
    if (e.deltaY < 0) {
      setWheelDirect((prev) => prev + 8);
      setPositionX(-6);
      setRotationY(1.2);
    }
  }

  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 11], fov: 60, near: 0.1, far: 1000 }}
        onWheel={handleRotate}
      >
        <Lights />
        <Model
          modelRef={modelRef}
          positionX={positionX}
          rotationY={rotationY}
        />
      </Canvas>
    </>
  );
};

export default TabletModel;
