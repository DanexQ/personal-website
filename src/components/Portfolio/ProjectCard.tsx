import React from "react";
import Circle from "./Circle";
import { motion } from "framer-motion";

const ProjectCard = ({
  reverse,
  delayStart,
}: {
  reverse?: true;
  delayStart: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={`relative flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } items-center w-full gap-5 overflow-hidden`}
    >
      <div className="z-20 flex flex-col items-center justify-center p-3 bg-secondary/40 peer">
        <h3 className="font-semibold uppercase text-text">Prosta Matura</h3>
        <div className="h-36 w-96 " />
      </div>
      <div
        className={`absolute top-0  z-10 h-full transition-all ${
          reverse
            ? "-right-[100%] peer-hover:right-[420px]"
            : "-left-[100%] peer-hover:left-[420px]"
        } overflow-hidden   text-text origin-left duration-500 flex flex-col justify-center items-start`}
      >
        <h3>About Project</h3>
        <p>
          Something abodad sad asd asd asdasdasda dsa da dsa dasd asd asut
          project
        </p>
      </div>
      <div
        id="roadmap"
        className={`flex gap-20 text-text ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <Circle position="-translate-y-2" delay={delayStart} />
        <Circle
          position="translate-y-0 -translate-x-2"
          delay={0.4 + delayStart}
        />
        <Circle
          position="translate-y-5 -translate-x-2"
          delay={0.8 + delayStart}
        />
        <Circle
          position="translate-y-14 -translate-x-5"
          delay={1.2 + delayStart}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
