import { useModelStore } from "../store/modelStore";

const CustomizeSection = () => {
  const { setCoatingColor, setCushionColor } = useModelStore();

  return (
    <div className="w-1/2 text-white">
      <div className={`coating__color__picker mb-20`}>
        <h2 className="mb-10 text-2xl font-medium">Metal Coating Color</h2>
        <div className="flex">
          <button
            onClick={() => setCoatingColor(0xffa9a9)}
            style={{ background: "#ffa9a9" }}
            className="w-[3vw] h-[3vw] rounded-full border-4 border-white mr-5"
          ></button>
          <button
            onClick={() => setCoatingColor(0xffe675)}
            style={{ background: "#ffe675" }}
            className="w-[3vw] h-[3vw] rounded-full border-4 border-white mr-5"
          ></button>
          <button
            onClick={() => setCoatingColor(0x004d2a)}
            style={{ background: "#004d2a" }}
            className="w-[3vw] h-[3vw] rounded-full border-4 border-white mr-5"
          ></button>
          <button
            onClick={() => setCoatingColor(0x002e67)}
            style={{ background: "#002e67" }}
            className="w-[3vw] h-[3vw] rounded-full border-4 border-white mr-5"
          ></button>
          <button
            onClick={() => setCoatingColor(0xffffff)}
            style={{ background: "white" }}
            className="w-[3vw] h-[3vw] rounded-full border-4 border-white mr-5"
          ></button>
        </div>
      </div>
      <div className={`cushion__color__picker mb-20`}>
        <h2 className="mb-10 text-2xl font-medium">Seat Cushion Color</h2>
        <div className="flex">
          <button
            onClick={() => setCushionColor(0xffd6d6)}
            style={{ background: "#ffd6d6" }}
            className="w-[3vw] h-[3vw] rounded-full border-4 border-white mr-5"
          ></button>
          <button
            onClick={() => setCushionColor(0xffe675)}
            style={{ background: "#ffe675" }}
            className="w-[3vw] h-[3vw] rounded-full border-4 border-white mr-5"
          ></button>
          <button
            onClick={() => setCushionColor(0x002e67)}
            style={{ background: "#002e67" }}
            className="w-[3vw] h-[3vw] rounded-full border-4 border-white mr-5"
          ></button>
          <button
            onClick={() => setCushionColor(0xffffff)}
            style={{ background: "white" }}
            className="w-[3vw] h-[3vw] rounded-full border-4 border-white mr-5"
          ></button>
          <button
            onClick={() => setCushionColor(0x333333)}
            style={{ background: "#333333" }}
            className="w-[3vw] h-[3vw] rounded-full border-4 border-white mr-5"
          ></button>
        </div>
      </div>
      <div className={`model__size__picker`}>
        <h2 className="mb-10 text-2xl font-medium">Monitor Options</h2>
        <div className="flex flex-wrap">
          <button className="px-6 py-3 mb-3 mr-5 transition duration-300 border-4 border-white rounded-full hover:bg-white hover:text-black">
            Full HD (1080p, 60 Hz)
          </button>
          <button className="px-6 py-3 mb-3 mr-5 transition duration-300 border-4 border-white rounded-full hover:bg-white hover:text-black">
            4K, 120 Hz
          </button>
          <button className="px-6 py-3 mb-3 mr-5 transition duration-300 border-4 border-white rounded-full hover:bg-white hover:text-black">
            4K OLED, 120 Hz
          </button>
          <button className="px-6 py-3 mb-3 mr-5 transition duration-300 border-4 border-white rounded-full hover:bg-white hover:text-black">
            4K, OLED 144 Hz
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeSection;
