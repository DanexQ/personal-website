import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsExamples = () => {
  return (
    <section className="flex flex-col w-5/6 gap-10">
      <ProjectCard delayStart={0} />
      <ProjectCard reverse={true} delayStart={1.5} />
      <ProjectCard delayStart={3} />
    </section>
  );
};

export default ProjectsExamples;
