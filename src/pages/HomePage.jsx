import BladeSection from "../components/BladeSection";
import CustomizeSection from "../components/CustomizeSection";
import HeroSection from "../components/HeroSection";
import ThreeApp from "../threejs/ThreeApp";

const HomePage = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-0 w-full h-full">
        <ThreeApp />
      </div>
      <div className="relative z-10">
        <div className="w-full h-[100vh]">
          <HeroSection />
        </div>
        <div className="max-w-screen-lg mx-auto mt-10">
          <BladeSection />
        </div>
        <div className="max-w-screen-lg mx-auto mt-20">
          <CustomizeSection />
        </div>
      </div>
    </>
  );
};

export default HomePage;
