import React from "react";
import { motion } from "framer-motion";

const AnimatedScaleComponent = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0 }, // Start from smaller size (50%)
    visible: { opacity: 1, scale: 1 }, // End at normal size (100%)
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.8, // Duration of the animation
        type: "spring", // Use spring for a bounce effect
        damping: 15, // Controls how much the spring bounces
        stiffness: 100, // Controls the speed of the bounce
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedScaleComponent;
