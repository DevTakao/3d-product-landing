const HeroSection = () => {
  return (
    <div className="relative max-w-screen-lg mx-auto h-[100vh] flex items-center mb-20">
      <div className="relative z-10">
        <h1
          className="w-full ml-10 text-3xl font-thin leading-loose uppercase text-amber-400"
          style={{ textShadow: "1px 1px 2px #000" }}
        >
          The Future Of
          <br />
          <span className="text-6xl font-medium text-white capitalize">Full-Dive Technology</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
