import { Canvas } from "@react-three/fiber";
import GamingChair from "./GamingChair";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const ThreeApp = () => {
  const initialPosition = [0, -2.5, -2];
  const MAX_INTENSITY = 3;
  const [lightIntensity, setLightIntensity] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const factor = latest / 500;
    setLightIntensity(factor * MAX_INTENSITY);
  });

  return (
    <Canvas>
      <ambientLight intensity={1} color={"white"} />
      <directionalLight position={[0, 5, 0]} color={"white"} intensity={lightIntensity} />
      <directionalLight position={[0, -5, 0]} color={"white"} intensity={lightIntensity} />
      <GamingChair pos={initialPosition} />
      <perspectiveCamera position={[0, 0, 0]} fov={5} near={0.1} far={1000} />
    </Canvas>
  );
};

export default ThreeApp;
