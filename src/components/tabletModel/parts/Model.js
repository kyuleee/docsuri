import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ModelURL from "../../../asset/3d/tabletModel.gltf";

const Model = () => {
  const tabletGLTF = useLoader(GLTFLoader, ModelURL);
  return (
    <primitive
      object={tabletGLTF.scene}
      position={[-6, 0, -3]}
      rotation={[-0.3, 1.2, 0.3]}
    />
  );
};

export { Model };
