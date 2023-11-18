import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-[100vh] bg-black">
        <HeroSection />
      </div>
      <div className="max-w-screen-lg mx-auto mt-10 border-t border-white rounded-full">
        <ul className="flex items-center my-5 font-serif font-thin text-center text-white text-normal justify-evenly">
          <li>Immersive Experience</li>
          <li>Ergonomic Comfort</li>
          <li>Durable Build Quality</li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
