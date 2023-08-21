import { motion } from "framer-motion";
import React from "react";

const SectionCard = ({
  content,
  header,
  id,
  children,
}: {
  content: string;
  header: string;
  id: string;
  children?: React.ReactNode;
}) => {
  return (
    <section
      id={id}
      className={`flex flex-col items-center w-full gap-3 sm:p-5 md:gap-5 md:p-10 rounded-xl scroll-mt-[100px] backdrop-blur-[6px]`}
    >
      <motion.h2
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
        }}
        className="flex flex-row items-center gap-4 text-4xl font-semibold md:text-5xl md:font-bold md:flex-col text-text"
      >
        {header}
      </motion.h2>
      {!!content && (
        <p className="md:w-[70%] text-base md:text-lg text-text rounded-lg text-center">
          {content}
        </p>
      )}
      {children}
    </section>
  );
};

export default SectionCard;

{
  /* <section
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
    </section> */
}
