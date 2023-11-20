import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ModelURL from "../../../asset/3d/tabletModel.gltf";
import { Euler, Vector3 } from "three";
import { lerp } from "three/src/math/MathUtils";

const Model = ({ modelRef, positionX, rotationY }) => {
  const tabletGLTF = useLoader(GLTFLoader, ModelURL);

  useFrame(() => {
    modelRef.current.position.lerp(new Vector3(positionX, 0, -3), 0.1);
    // modelRef.current.rotation.set(new Euler(-0.3, rotationY, 0.3), 0.1);
    modelRef.current.rotation.y = lerp(
      modelRef.current.rotation.y,
      rotationY,
      0.1
    );
  });

  return (
    <primitive
      ref={modelRef}
      object={tabletGLTF.scene}
      position={[-6, 0, -3]}
      rotation={[-0.3, 1.2, 0.3]}
    />
  );
};

export { Model };
