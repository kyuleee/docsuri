import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ModelURL from "../../../asset/3d/tabletModel.gltf";
import { Euler, Vector3 } from "three";
import { lerp } from "three/src/math/MathUtils";
import { useContext, useRef } from "react";
import { introContext } from "../../../pages/MainPage/Page";

const Model = () => {
  const modelRef = useRef();
  const tabletGLTF = useLoader(GLTFLoader, ModelURL);
  const ctx = useContext(introContext);
  useFrame(() => {
    modelRef.current.position.lerp(new Vector3(ctx.positionX, 0, -3), 0.06);
    // modelRef.current.rotation.set(new Euler(-0.3, ctx.rotationY, 0.3), 0.1);
    modelRef.current.rotation.y = lerp(
      modelRef.current.rotation.y,
      ctx.rotationY,
      0.06
    );
    modelRef.current.rotation.z = lerp(
      modelRef.current.rotation.z,
      ctx.rotationZ,
      0.06
    );
  });

  return (
    <primitive
      ref={modelRef}
      object={tabletGLTF.scene}
      position={[-7, 0, -3]}
      rotation={[-0.5, 1, 0.5]}
    />
  );
};

export { Model };
