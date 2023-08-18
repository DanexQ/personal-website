import { motion } from "framer-motion";
import React from "react";

const SectionCard = ({
  content,
  header,
  reversed,
  id,
  background = "bg-secondary/60",
}: {
  content: string;
  header: string[];
  reversed: boolean;
  id: string;
  background?: string;
}) => {
  const headerMobile = header[0] + " " + header[1];
  return (
    <section
      id={id}
      className={`flex flex-col-reverse items-center w-full gap-3 px-5 py-5 md:gap-2 md:p-10 rounded-xl scroll-mt-[100px] ${
        reversed ? "md:flex-row-reverse " : "md:flex-row"
      } ${background}`}
    >
      <p className="md:w-[70%] text-text rounded-lg text-justify">{content}</p>
      <motion.h2
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
        }}
        className="md:w-[30%] text-4xl md:text-5xl gap-4 font-semibold md:font-bold flex flex-row md:flex-col uppercase text-text items-center"
      >
        <span className="md:hidden">{headerMobile}</span>
        <span className="hidden md:block">{header[0]}</span>
        <span className="hidden md:block">{header[1]}</span>
      </motion.h2>
    </section>
  );
};

export default SectionCard;
