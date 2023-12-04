import BladeSection from "../components/BladeSection";
import CustomizeSection from "../components/CustomizeSection";
import HeroSection from "../components/HeroSection";
import ViewSection from "../components/ViewSection";
import { useModelStore } from "../store/modelStore";
import ThreeApp from "../threejs/ThreeApp";
import { useDrag } from "@use-gesture/react";

const HomePage = () => {
  const { setIsDragging } = useModelStore();
  const bind = useDrag(({ down }) => {
    setIsDragging(down);
  }, {});

  return (
    <>
      <div {...bind()} className="fixed top-0 left-0 z-10 w-full h-full cursor-grab">
        <ThreeApp />
      </div>
      <div className="relative z-20">
        <div className="w-full h-[100vh] ">
          <HeroSection />
        </div>
        <div className="max-w-screen-lg mx-auto mt-10 ">
          <BladeSection />
        </div>
      </div>
      <div className="relative z-20 mb-10">
        <CustomizeSection />
      </div>
      <ViewSection />
    </>
  );
};

export default HomePage;
