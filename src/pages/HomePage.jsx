import BladeSection from "../components/BladeSection";
import CustomizeSection from "../components/CustomizeSection";
import HeroSection from "../components/HeroSection";
import ThreeApp from "../threejs/ThreeApp";

const HomePage = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full h-full">
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
      <div className="relative z-20" style={{ clipPath: "polygon(0 0, 50% 0, 50% 85%, 100% 85%, 100% 100%, 0 100%)" }}>
        <CustomizeSection />
      </div>
    </>
  );
};

export default HomePage;
