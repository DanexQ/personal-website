import React from "react";
import ProjectCard from "./ProjectCard";
import ProstaMaturaImg from "../../../public/ProstaMatura.png";

const ProjectsExamples = () => {
  return (
    <section className="flex flex-col gap-10">
      <ProjectCard
        title="Prosta Matura"
        imageUrl={ProstaMaturaImg.src}
        content=" I want you to present my first big project called Prosta Matura. This app was created for polish students studying for their advanced math matura exam. Throughout my career as a this year's high school graduate I couldn't find any type of website having all of the tasks of this exam in one place, so I did it. Everyone can use this app for free just sign in with google account. Prosta Matura is made with NextJS, React, NextAuth, Tailwind, Prisma and PlanetScale as database."
      />
      {/* <ProjectCard reverse={true} delayStart={1.5} />
      <ProjectCard delayStart={3} /> */}
    </section>
  );
};

export default ProjectsExamples;
