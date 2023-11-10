import { Canvas } from "@react-three/fiber";
import GamingChairGLTF from "../assets/gaming-chair-kiiro/gaming_chair_kiiro.glb";
import { useGLTF } from "@react-three/drei";

const ThreeApp = () => {
  const { nodes, materials } = useGLTF(GamingChairGLTF);

  console.log(nodes, materials);
  return <Canvas></Canvas>;
};

export default ThreeApp;
