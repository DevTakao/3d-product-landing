import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useProgress } from "@react-three/drei";
import { useModelStore } from "../store/modelStore";
import { easing } from "maath";

import GamingChairGLTF from "../assets/gaming-chair-kiiro/gaming_chair_kiiro.glb";
const metalMeshes = ["Circle_1", "Circle_2"];
const seatMeshes = ["siedzisko_1", "siedzisko_2"];

const GamingChair = ({ pos }) => {
  const { setIsAppLoading, coatingColor, cushionColor } = useModelStore();
  const { scene } = useGLTF(GamingChairGLTF);
  const modelRef = useRef();
  const metalMeshRefs = useRef([]);
  const seatMeshRefs = useRef([]);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setIsAppLoading(false);
    }
  }, [progress, setIsAppLoading]);

  //  Meshes that can change color
  if (metalMeshRefs.current.length === 0) {
    scene.traverse((child) => {
      if (child.isMesh && metalMeshes.includes(child.name)) {
        metalMeshRefs.current.push(child);
      }
    });
  }

  if (seatMeshRefs.current.length === 0) {
    scene.traverse((child) => {
      if (child.isMesh && seatMeshes.includes(child.name)) {
        seatMeshRefs.current.push(child);
      }
    });
  }

  useFrame((state, delta) => {
    // Position change on scroll
    easing.damp3(modelRef.current.position, pos, 0.25, delta);

    // Auto rotation
    modelRef.current.rotation.y += Math.PI / 3140;

    // Color change smoothly
    metalMeshRefs.current.forEach((child) => {
      easing.dampC(child.material.color, coatingColor, 1, delta);
    });
    seatMeshRefs.current.forEach((child) => {
      easing.dampC(child.material.color, cushionColor, 1, delta);
    });
  });

  return <primitive object={scene} ref={modelRef} dispose={null} />;
};

export default GamingChair;
