"use client";
import { randomXYStyle } from "@/lib/randomXYStyle";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Intro = ({ handleClick }: { handleClick: () => void }) => {
  const [hideWelcome, setHideWelcome] = useState(false);

  const welcomeElements = "Hi traveler!".split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{
        x: `${randomXYStyle(200, 100)}%`,
        y: `${randomXYStyle(200, 100)}%`,
        opacity: 0,
        letterSpacing: index === 1 ? "30px" : "1px",
      }}
      animate={{ x: "0%", y: "0%", opacity: 1 }}
      transition={{ delay: index * 0.2 }}
      className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent "
    >
      {char}
    </motion.span>
  ));
  const nameElements =
    hideWelcome &&
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
        className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent"
      >
        {char}
      </motion.span>
    ));

  return (
    <motion.div
      exit={{ x: "-100%" }}
      key="intro"
      className="relative flex items-center justify-center w-full h-full overflow-hidden "
    >
      <AnimatePresence mode="wait">
        {/* HI ANIMATION */}
        {!hideWelcome && (
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
              transition={{ duration: 3 }}
              onAnimationComplete={() => setHideWelcome(true)}
            />
            <motion.div
              animate={{
                x: [
                  `${randomXYStyle(2, 1)}%`,
                  `${randomXYStyle(2, 1)}%`,
                  `${randomXYStyle(2, 1)}%`,
                  `${randomXYStyle(2, 1)}%`,
                ],
                y: [
                  `${randomXYStyle(10, 5)}%`,
                  `${randomXYStyle(10, 5)}%`,
                  `${randomXYStyle(10, 5)}%`,
                  `${randomXYStyle(10, 5)}%`,
                ],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 5,
                ease: "linear",
              }}
            >
              {welcomeElements}
            </motion.div>
          </motion.div>
        )}

        {hideWelcome && (
          <motion.div className="flex items-center flex-col gap-2 justify-center w-full h-full font-bold  text-primary drop-shadow-[5px_10px_10px_rgba(22,233,212,0.4)]">
            {/* I'm Daniel */}
            <motion.div
              className="flex items-center justify-center w-full overflow-hidden font-[800] sm:font-bold text-5xl sm:text-8xl"
              animate={{
                x: [
                  `${randomXYStyle(2, 1)}%`,
                  `${randomXYStyle(2, 1)}%`,
                  `${randomXYStyle(2, 1)}%`,
                  `${randomXYStyle(2, 1)}%`,
                ],
                y: [
                  `${randomXYStyle(10, 5)}%`,
                  `${randomXYStyle(10, 5)}%`,
                  `${randomXYStyle(10, 5)}%`,
                  `${randomXYStyle(10, 5)}%`,
                ],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 5,
                ease: "linear",
              }}
            >
              {nameElements}
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.75 }}
            />
            {/* Come and see my world */}
            <motion.div
              key="comesee"
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.75 }}
            >
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ color: "#d5fbf7", scale: 1.05 }}
                onClick={handleClick}
                animate={{
                  x: [
                    `${randomXYStyle(7, 5)}%`,
                    `${randomXYStyle(7, 5)}%`,
                    `${randomXYStyle(7, 5)}%`,
                    `${randomXYStyle(7, 5)}%`,
                  ],
                  y: [
                    `${randomXYStyle(20, 10)}%`,
                    `${randomXYStyle(20, 10)}%`,
                    `${randomXYStyle(20, 10)}%`,
                    `${randomXYStyle(20, 10)}%`,
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 5,
                  ease: "linear",
                  color: { duration: 0.2 },
                  scale: { duration: 0.2 },
                }}
                className="text-base underline md:text-2xl"
              >
                Come and see my world! &rarr;
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Intro;
