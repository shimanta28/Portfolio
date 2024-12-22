import React from "react";
import { motion } from "framer-motion";

const AnimatedComponent = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Enables reset on scroll out
      transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
