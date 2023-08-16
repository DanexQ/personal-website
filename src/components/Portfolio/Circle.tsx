import { motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

const Circle = ({ position, delay }: { position?: string; delay: number }) => {
  return (
    <motion.div
      animate={{ opacity: [0, 1, 0.2, 0] }}
      transition={{
        duration: 5,
        delay: delay,
        repeat: Infinity,
        repeatType: "mirror",
      }}
      className={twMerge(
        "w-2 h-2 rounded-full bg-primary translate-y-0",
        position
      )}
    />
  );
};

export default Circle;
