"use client";
import { randomXYStyle } from "@/lib/randomXYStyle";
import { motion } from "framer-motion";
import React, { useCallback, useMemo } from "react";
import { useWindowSize } from "usehooks-ts";

const Particles = () => {
  const { width, height } = useWindowSize();

  const createParticles = useCallback((width: number, height: number) => {
    return new Array(25).fill(0).map((_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{
          x: [
            `${randomXYStyle(width, width / 2)}px`,
            `${randomXYStyle(width, width / 2)}px`,
            `${randomXYStyle(width, width / 2)}px`,
            `${randomXYStyle(width, width / 2)}px`,
          ],
          y: [
            `${randomXYStyle(height, height / 2)}px`,
            `${randomXYStyle(height, height / 2)}px`,
            `${randomXYStyle(height, height / 2)}px`,
            `${randomXYStyle(height, height / 2)}px`,
          ],
          opacity: 1,
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          opacity: { duration: 5 },
          duration: Math.ceil(Math.random() * 100) + 20,
        }}
        className="fixed w-1 h-1 rounded-full bg-text top-1/2 left-1/2 blur-sm"
      />
    ));
  }, []);
  const particles = useMemo(
    () => createParticles(width, height),
    [width, height, createParticles]
  );
  return <>{particles}</>;
};

export default Particles;
