import ThreeApp from "../threejs/ThreeApp";

const HeroSection = () => {
  return (
    <div className="relative max-w-screen-lg mx-auto h-[100vh] bg-dark flex items-center border-b-4 mb-20 border-amber-300">
      <div className="relative z-10">
        <h1
          className="w-1/2 text-3xl font-thin leading-loose uppercase text-amber-400"
          style={{ textShadow: "1px 1px 2px #000" }}
        >
          The Future Of
          <br />
          <span className="text-6xl font-medium text-white capitalize">Full-Dive Technology</span>
        </h1>
      </div>
      <div className="absolute right-0 z-0 w-1/2 h-full">
        <ThreeApp />
      </div>
    </div>
  );
};

export default HeroSection;
