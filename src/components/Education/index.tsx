"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import CKZIU from "../../../public/CKZIU-Transparent.png";

const Education = () => {
  return (
    <section
      id="Education"
      className={`flex flex-col items-center w-full gap-3 p-1 sm:p-5 md:gap-5 md:p-10 rounded-xl scroll-mt-[100px] backdrop-blur-[6px] md:max-w-[70%] text-text`}
    >
      <motion.h2
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
        }}
        className="md:w-[30%] text-4xl md:text-5xl gap-4 font-semibold md:font-bold flex flex-row md:flex-col  items-center"
      >
        Education
      </motion.h2>
      <div className="grid items-center content-center grid-cols-2 grid-rows-6">
        <h3 className="col-span-2 text-lg font-semibold text-center">
          Centrum for Vocational and Continuing Education in Zbąszynek
        </h3>
        <Image
          src={CKZIU.src}
          alt="Logo"
          width={200}
          height={10}
          style={{ objectFit: "contain" }}
          className="col-span-2 col-start-1 row-start-1 sm:mt-1 sm:col-start-2 sm:row-start-2 sm:row-end-4 justify-self-center sm:justify-self-end invert"
        />{" "}
        <span className="col-start-1 row-start-3 justify-self-center sm:justify-self-start sm:row-start-2 sm:row-end-3">
          IT Technician
        </span>
        <span className="col-start-2 row-start-3 justify-self-center sm:justify-self-start sm:col-start-1 sm:row-start-3 sm:row-end-4 text-text/80">
          Sep 2019 - Apr 2023
        </span>
        <p className="col-span-2 row-span-3 text-center sm:ol-start-1 sm:col-end-3 sm:row-span-3">
          I&apos;ve recently completed my studies at this school, earning my IT
          Technician degree. I&apos;ve gained a good understanding of areas such
          as local networks, servers, databases (SQL), hardware and software
          troubleshooting. Additionally, I possess strong problem-solving
          abilities and a keen eye for detail.
        </p>
      </div>
    </section>
  );
};

export default Education;
