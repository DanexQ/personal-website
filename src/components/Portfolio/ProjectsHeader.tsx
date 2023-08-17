"use client";
import { motion } from "framer-motion";
import React from "react";
import SectionCard from "../SectionCard";

const ProjectsHeader = () => {
  const content = `Here you can see how my coding journey started and how my code evolve
    for the entire time. Each project here represents a unique journey of
    problem-solving, creativity, and skill development. From creating really
    simple games to implementing more extensive user features for my web
    apps, these projects highlight my growth as a frontend enthusiast. Have
    fun with them!`;
  return (
    <SectionCard
      id="projects"
      content={content}
      reversed={false}
      background=""
      header={["My", "Projects"]}
    />
    // <section className="flex flex-col-reverse items-center w-full gap-3 px-5 py-5 md:gap-0 md:p-10 md:flex-row bg-secondary/20 ">
    //   <p className="md:w-[60%] text-text text-base rounded-lg text-justify">
    //     Here you can see how my coding journey started and how my code evolve
    //     for the entire time. Each project here represents a unique journey of
    //     problem-solving, creativity, and skill development. From creating really
    //     simple games to implementing more extensive user features for my web
    //     apps, these projects highlight my growth as a frontend enthusiast. Have
    //     fun with them!
    //   </p>
    //   <motion.h2
    //     animate={{ opacity: [1, 0.5, 1] }}
    //     transition={{
    //       repeat: Infinity,
    //       repeatType: "loop",
    //       duration: 5,
    //     }}
    //     className="md:w-[40%] text-4xl md:text-6xl gap-4 font-semibold md:font-bold flex lg:text-7xl flex-row md:flex-col uppercase text-center text-text items-center"
    //   >
    //     <span className="md:hidden">My Projects</span>
    //     <span className="hidden md:block md:-translate-x-[50px]">My</span>
    //     <span className="self-center hidden md:block ">Projects</span>
    //   </motion.h2>
    // </section>
  );
};

export default ProjectsHeader;
