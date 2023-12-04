import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useModelStore } from "../store/modelStore";

const CameraControls = ({ pos, children }) => {
  const { isDragging } = useModelStore();

  useFrame((state, delta) => {
    !isDragging && easing.damp3(state.camera.position, pos, 0.5, delta);
  });

  return (
    <group>
      <OrbitControls makeDefault position={pos} enableZoom={false} />
      {children}
    </group>
  );
};

export default CameraControls;
