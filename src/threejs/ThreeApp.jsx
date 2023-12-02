import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useMotionValueEvent, useScroll } from "framer-motion";
import GamingChair from "./GamingChair";
import CameraControls from "./CameraControls";

const ThreeApp = () => {
  const initialPosition = [0, -2.5, 0];
  const MAX_INTENSITY = 3;
  const [lightIntensity, setLightIntensity] = useState(0);
  const [cameraPos, setCameraPos] = useState([0, 0, 6.5]);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const factor = Math.min(1, latest / 500);
    setLightIntensity(factor * MAX_INTENSITY);
    setCameraPos([factor * -2.5, 0, Math.max(7, factor * 8)]);
  });

  return (
    <Canvas>
      <ambientLight intensity={1} color={"white"} />
      <directionalLight position={[0, 5, 0]} color={"white"} intensity={lightIntensity} />
      <directionalLight position={[0, -5, 0]} color={"white"} intensity={lightIntensity} />
      <CameraControls pos={cameraPos}>
        <GamingChair pos={initialPosition} />
      </CameraControls>
    </Canvas>
  );
};

export default ThreeApp;
