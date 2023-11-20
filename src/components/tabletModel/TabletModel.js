import { Canvas } from "@react-three/fiber";
import { Lights, Model } from "./parts";
import "./TabletModel.css";
import { useRef, useState } from "react";

const TabletModel = () => {
  const [wheelDirect, setWheelDirect] = useState(false);
  const modelRef = useRef();

  function handleRotate(e) {
    if (e.deltaY < 0) {
      modelRef.current.rotation.y += 0.3;
      modelRef.current.position.x += 0.3;
      console.log(modelRef.current.rotation.x);
    }
  }

  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 11], fov: 60, near: 0.1, far: 1000 }}
        onWheel={handleRotate}
      >
        <Lights />
        <Model modelRef={modelRef} />
      </Canvas>
    </>
  );
};

export default TabletModel;
