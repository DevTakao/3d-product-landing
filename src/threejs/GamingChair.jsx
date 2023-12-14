import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useProgress, useVideoTexture } from "@react-three/drei";
import { useModelStore } from "../store/modelStore";
import { easing } from "maath";
import { BackSide, CylinderGeometry, Mesh, MeshStandardMaterial, RepeatWrapping } from "three";

import GamingChairGLTF from "../assets/gaming-chair-kiiro/gaming_chair_kiiro.glb";
import VideoSrc from "../assets/video.mp4";

const screenMeshes = ["Circle002_1"];
const metalMeshes = ["Circle_1", "Circle_2"];
const seatMeshes = ["siedzisko_1", "siedzisko_2"];

const GamingChair = ({ pos }) => {
  const { setIsAppLoading, coatingColor, cushionColor } = useModelStore();
  const { scene } = useGLTF(GamingChairGLTF);

  const modelRef = useRef();
  const screenMeshRefs = useRef([]);
  const metalMeshRefs = useRef([]);
  const seatMeshRefs = useRef([]);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setIsAppLoading(false);
    }
  }, [progress, setIsAppLoading]);

  // Video Mesh
  if (screenMeshRefs.current.length === 0) {
    scene.traverse((child) => {
      if (child.isMesh && screenMeshes.includes(child.name)) {
        child.visible = false;
        screenMeshRefs.current.push(child);
      }
    });
  }

  const texture = useVideoTexture(VideoSrc);
  if (texture) {
    console.log("screenMeshRefs.current", screenMeshRefs.current);

    screenMeshRefs.current.forEach((child) => {
      const geo = new CylinderGeometry(2.6, 2.6, 1.4, 50, 1, true, 0, 3);
      const mat = new MeshStandardMaterial({ map: texture, side: BackSide });

      // flip the mirrored texture due to being backside
      mat.map.wrapS = RepeatWrapping;
      mat.map.repeat.x = -1;

      const mex = new Mesh(geo, mat);

      // stick the video to monitor mesh position
      mex.position.copy(child.position);
      mex.position.y = 3.05;
      mex.rotation.set(0.26, Math.PI / 1.9, 0);

      scene.add(mex);
    });
  } else {
    console.error("Video texture not loaded or invalid.");
  }

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
