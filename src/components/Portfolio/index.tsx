"use client";
import { motion } from "framer-motion";
import React from "react";

const Projects = () => {
  return (
    <article className="flex flex-row items-center w-full p-10 bg-secondary/20">
      <p className="w-[60%]  text-text text-base rounded-lg text-justify">
        Here you can see how my coding journey started and how my code evolve
        for the entire time. Each project here represents a unique journey of
        problem-solving, creativity, and skill development. From creating really
        simple games to implementing more extensive user features for my web
        apps, these projects highlight my growth as a frontend enthusiast. Have
        fun with them!
      </p>
      <motion.h2
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
        }}
        className="w-[40%] text-7xl font-bold flex flex-col uppercase justify-end text-text "
      >
        <span className="translate-x-[100px]">My</span>
        <span className="self-center translate-x-[20px]">Projects</span>
      </motion.h2>
    </article>
  );
};

export default Projects;
