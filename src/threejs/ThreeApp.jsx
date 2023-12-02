import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useMotionValueEvent, useScroll } from "framer-motion";
import GamingChair from "./GamingChair";
import CameraControls from "./CameraControls";

const ThreeApp = () => {
  const MAX_INTENSITY = 1;

  const INIT_MODEL_POS = [0, -2.5, 0];
  const MAX_MODEL_POS = [4, -2.5, 0];

  const INIT_CAMERA_POS = [0, 0, 6.5];
  const MAX_CAMERA_POS = [2.5, 0, 8.5];

  const [lightIntensity, setLightIntensity] = useState(0);
  const [modelPos, setModelPos] = useState(INIT_MODEL_POS);
  const [cameraPos, setCameraPos] = useState(INIT_CAMERA_POS);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const factor = Math.min(1, latest / 500);
    setLightIntensity(factor * MAX_INTENSITY);
    setCameraPos([
      factor * MAX_CAMERA_POS[0],
      factor * MAX_CAMERA_POS[1],
      Math.max(INIT_CAMERA_POS[2], factor * MAX_CAMERA_POS[2]),
    ]);
    setModelPos([factor * MAX_MODEL_POS[0], INIT_MODEL_POS[1], factor * MAX_MODEL_POS[2]]);
  });

  return (
    <Canvas>
      <directionalLight position={[0, -15, 0]} color={"white"} intensity={lightIntensity / 2} />
      <directionalLight position={[0, 15, 0]} color={"white"} intensity={lightIntensity} />
      <directionalLight position={[15, 15, 0]} color={"white"} intensity={lightIntensity} />
      <directionalLight position={[-15, 15, 0]} color={"white"} intensity={lightIntensity} />
      <directionalLight position={[-15, 15, 15]} color={"white"} intensity={lightIntensity} />
      <directionalLight position={[15, 15, 15]} color={"white"} intensity={lightIntensity} />

      <CameraControls pos={cameraPos}>
        <GamingChair pos={modelPos} />
      </CameraControls>
    </Canvas>
  );
};

export default ThreeApp;
