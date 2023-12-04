import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useMotionValueEvent, useScroll } from "framer-motion";
import GamingChair from "./GamingChair";
import CameraControls from "./CameraControls";
import { useModelStore } from "../store/modelStore";

const ThreeApp = () => {
  console.log("ThreeApp");
  const { isViewSection } = useModelStore();

  const MAX_INTENSITY = 1;

  const INIT_MODEL_POS = [0, -2.5, 0];
  const MAX_MODEL_POS = [4, -2.5, 0];

  const INIT_CAMERA_POS = [0, 0, 6.5];
  const MAX_CAMERA_POS = [0, 0, 8.5];

  const [lightIntensity, setLightIntensity] = useState(0);
  const [modelPos, setModelPos] = useState(INIT_MODEL_POS);
  const [cameraPos, setCameraPos] = useState(INIT_CAMERA_POS);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const lightFactor = Math.min(1, latest / 500);
    const posFactor = isViewSection ? 0 : Math.min(1, latest / 500);

    setLightIntensity(lightFactor * MAX_INTENSITY);
    setCameraPos([
      posFactor * MAX_CAMERA_POS[0],
      posFactor * MAX_CAMERA_POS[1],
      Math.max(INIT_CAMERA_POS[2], posFactor * MAX_CAMERA_POS[2]),
    ]);
    setModelPos([posFactor * MAX_MODEL_POS[0], INIT_MODEL_POS[1], posFactor * MAX_MODEL_POS[2]]);
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
