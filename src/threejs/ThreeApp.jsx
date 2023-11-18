import { Canvas } from "@react-three/fiber";

import GamingChair from "./GamingChair";

const ThreeApp = () => {
  const initialPosition = [0, -2.5, -2];
  return (
    <Canvas>
      <ambientLight intensity={1} color={"white"} />
      <directionalLight position={[0, 5, 0]} color={"grey"} intensity={4} />
      <GamingChair pos={initialPosition} />
      <perspectiveCamera position={[0, 0, 0]} fov={5} near={0.1} far={1000} />
    </Canvas>
  );
};

export default ThreeApp;
