import { AnimatePresence, motion } from "framer-motion";
import { useModelStore } from "../store/modelStore";
import { RingLoader } from "react-spinners";

const loadingVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
  },
  exit: {
    y: "-100%",
  },
};

const Loading = () => {
  const { isAppLoading } = useModelStore();

  return (
    <AnimatePresence>
      {isAppLoading && (
        <motion.div
          variants={loadingVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 1,
          }}
          className="fixed z-50 bg-amber-500 w-full h-[100vh] text-3xl text-black items-center justify-center flex flex-col"
        >
          <RingLoader />
          <span className="text-sm font-medium">Starting the app...</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
