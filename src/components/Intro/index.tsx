"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import { useWindowSize } from "usehooks-ts";

const Intro = () => {
  const [hideElement, setHideElement] = useState(false);
  const { width, height } = useWindowSize();
  console.log(width, height);
  const randomXYStyle = (max: number, min: number) => {
    const negativeOrPositive = Math.random() < 0.9 ? -1 : 1;
    const randomNumber =
      Math.ceil(Math.random() * max) + min * negativeOrPositive;
    return randomNumber;
  };
  const createParticles = useCallback((width: number, height: number) => {
    return new Array(100).fill(0).map((_, index) => (
      <motion.div
        key={index}
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
          opacity: [0, 1, 0, 1],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: Math.ceil(Math.random() * 100) + 20,
        }}
        className="absolute w-1 h-1 bg-text/50 top-1/2 left-1/2"
      />
    ));
  }, []);
  const particles = useMemo(
    () => createParticles(width, height),
    [width, height, createParticles]
  );
  const welcomeElements = "Hi traveler!".split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{
        x: `${randomXYStyle(200, 100)}%`,
        y: `${randomXYStyle(200, 100)}%`,
        opacity: 0,
        letterSpacing: index === 1 ? "30px" : "1px",
      }}
      transition={{ delay: index * 0.2 }}
      animate={{ x: "0%", y: "0%", opacity: 1 }}
      className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent "
    >
      {char}
    </motion.span>
  ));
  const nameElements =
    hideElement &&
    "I'm Daniel!".split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{
          x: `${randomXYStyle(200, 100)}%`,
          y: `${randomXYStyle(200, 100)}%`,
          opacity: 0,
          letterSpacing: index === 2 ? "30px" : "1px",
        }}
        transition={{ delay: index * 0.2 }}
        animate={{ x: "0%", y: "0%", opacity: 1 }}
        className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent "
      >
        {char}
      </motion.span>
    ));

  return (
    <div className="relative flex items-center justify-center w-full h-full overflow-hidden ">
      {particles}
      <AnimatePresence mode="wait">
        {!hideElement && (
          <motion.div
            key="Hi"
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center w-full h-full overflow-hidden font-bold text-8xl text-primary drop-shadow-[5px_10px_10px_rgba(22,233,212,0.4)]"
          >
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
              onAnimationComplete={() => setHideElement(true)}
            />
            {welcomeElements}
          </motion.div>
        )}

        {hideElement && (
          <h1 className="flex items-center justify-center w-full h-full overflow-hidden font-bold text-8xl text-primary drop-shadow-[5px_10px_10px_rgba(22,233,212,0.4)]">
            {nameElements}
          </h1>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Intro;
