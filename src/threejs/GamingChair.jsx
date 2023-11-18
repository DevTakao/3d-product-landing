import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import GamingChairGLTF from "../assets/gaming-chair-kiiro/gaming_chair_kiiro.glb";

const GamingChair = ({ pos }) => {
  const { scene } = useGLTF(GamingChairGLTF);
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += Math.PI / 3140;
  });

  return <primitive ref={modelRef} position={pos} object={scene} />;
};

export default GamingChair;
