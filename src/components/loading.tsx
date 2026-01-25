import { motion } from "framer-motion";
import { publicPath } from '../utils/publicPath';

export const Loading = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
        <img src={publicPath("img/icon.png")} alt="" className="w-[90px] h-[90px]" />
      </motion.div>
    </motion.div>
  );
};