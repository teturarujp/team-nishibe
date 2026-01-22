import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInOnScrollProps = {
  children: ReactNode;
};

export const FadeIn = ({ children }: FadeInOnScrollProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export const FadeInUp = ({ children }: FadeInOnScrollProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
