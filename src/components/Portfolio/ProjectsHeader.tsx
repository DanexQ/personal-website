"use client";
import { motion } from "framer-motion";
import React from "react";
import SectionCard from "../SectionCard";

const ProjectsHeader = () => {
  const content = `Here you can see how my coding journey started and how my code evolve
    from a recent projects. Each project here represents a unique journey of
    problem-solving, creativity, and skill development. From creating really
    simple password generator to implementing more extensive user features for my web
    app like Prosta Matura, these all highlight my growth as a frontend enthusiast. 
    The date next to the title means the last commit of specific project. Have fun with them!`;
  return (
    <SectionCard
      id="projects"
      content={content}
      reversed={false}
      background=""
      header={["My", "Projects"]}
    />
  );
};

export default ProjectsHeader;
