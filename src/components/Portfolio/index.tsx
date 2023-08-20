"use client";
import { motion } from "framer-motion";
import React from "react";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsExamples from "./ProjectsExamples";

const Projects = () => {
  return (
    <motion.section
      id="portfolio"
      className="flex flex-col items-center w-full gap-5 md:gap-6scroll-mt-[100px]"
    >
      <ProjectsHeader />
      <ProjectsExamples />
    </motion.section>
  );
};

export default Projects;
