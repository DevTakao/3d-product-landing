import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const CameraControls = ({ pos, children }) => {
  console.log(pos);
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, pos, 0.25, delta);
    // set the model rotation smoothly
    // easing.dampE(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta);
  });

  return (
    <group>
      <OrbitControls enabled={true} enableZoom={false} />
      {children}
    </group>
  );
};

export default CameraControls;
