import React from "react";
import ThreeApp from "../threejs/ThreeApp";

const HeroSection = () => {
  return (
    <div className="relative h-[50vh] bg-white flex items-center">
      <h1 className="absolute text-6xl leading-loose font-medium ml-20">
        The Perfect Setup
        <br />
        For Immersive Experience
      </h1>
      <ThreeApp />
    </div>
  );
};

export default HeroSection;
