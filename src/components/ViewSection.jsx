import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useModelStore } from "../store/modelStore";
import { motion } from "framer-motion";

const popupVariants = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: "100%",
  },
};

const ViewSection = () => {
  const { setIsViewSection } = useModelStore();
  const sectionRef = useRef();
  const inView = useInView(sectionRef);

  useEffect(() => {
    setIsViewSection(inView);
  }, [inView, setIsViewSection]);

  return (
    <>
      <div ref={sectionRef} className="z-0 min-h-[100vh] relative"></div>
      <motion.div
        variants={popupVariants}
        transition={{ duration: 1 }}
        initial="initial"
        whileInView="animate"
        exit="exit"
        className="relative bottom-0 z-20 w-1/2 px-10 py-5 mx-auto mb-10 text-center text-white bg-gray-500 bg-opacity-50 rounded-full select-non"
      >
        Click and drag to view from different angles
      </motion.div>
    </>
  );
};

export default ViewSection;
