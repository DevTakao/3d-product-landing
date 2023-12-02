import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

const CameraControls = ({ pos, children }) => {
  const group = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, pos, 0.25, delta);
    // set the model rotation smoothly
    // easing.dampE(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta);
  });

  return <group ref={group}>{children}</group>;
};

export default CameraControls;
