"use client";
import { motion } from "framer-motion";
import React from "react";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsExamples from "./ProjectsExamples";

const Projects = () => {
  return (
    <motion.article
      id="portfolio"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ delay: 6 }}
      className="flex flex-col items-center w-full md:gap-10"
    >
      <ProjectsHeader />
      <ProjectsExamples />
    </motion.article>
  );
};

export default Projects;
