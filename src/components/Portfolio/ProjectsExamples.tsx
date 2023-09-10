import React from "react";
import ProjectCard, { ProjectCardType } from "./ProjectCard";
import Link from "next/link";

const projectsDetails: ProjectCardType[] = [
  {
    title: "Sudoku game",
    liveUrl: "https://unrivaled-babka-d8cb0c.netlify.app/",
    repoUrl: "https://github.com/DanexQ/sudoku",
    imageUrl: "/Sudoku.png",
    lastCommit: "September 9 2023",
    content: `Sudoku game created based on the Dosuku API. An application created to practice Axios, SASS and the Redux state management system. The game has different difficulty levels and an undo function.`,
    tools: ["React", "Typescript", "SASS", "Redux", "Axios"],
  },
  {
    title: "Prosta Matura",
    liveUrl: "https://prosta-matura.vercel.app/",
    repoUrl: "https://github.com/DanexQ/matura-collection-next.js",
    imageUrl: "/ProstaMatura.png",
    lastCommit: "August 1 2023",
    content:
      "Let me introduce you to my significant debut project, Prosta Matura. This initiative is designed to assist Polish students who are preparing for their advanced math matura examination. During my time as a high school graduate this year, I faced a challenge – there wasn't a comprehensive platform consolidating all the exam tasks in one location. Driven by this need, I took it upon myself to create Prosta Matura.  Everyone can use this app for free just sign in with google account.",
    tools: [
      "React",
      "Typescript",
      "NextJS",
      "Tailwind",
      "Prisma",
      "PlanetScale",
    ],
  },
  {
    title: "Professional qualifying exam repetition",
    liveUrl: "https://infopraktycznyegzamin.netlify.app",
    imageUrl: "/ExamRepetition.png",
    repoUrl: "https://github.com/DanexQ/repetition-for-exam",
    lastCommit: "April 25 2023",
    content: (
      <>
        This website was created for the purpose of receiving a scholarship
        called{" "}
        <Link
          target="_blank"
          href="https://lubuskie.pl/cms/353/aktualnosci_zawodowcy"
          className="font-semibold underline"
        >
          Lubuscy Zawodowcy
        </Link>
        . This is a quick information summary of one of the polish IT technician
        exam. It was very useful for me, because I could learn for it while I
        was making the website and for my friends that was using my
        &quot;blog&quot; and exercising before the exam. Pretty simple app
        without extended interactivity, nothing special, but I think it&apos;s
        good to mention that, because it underscored my sense of responsibility
        and willingness to confront challenges head-on.
      </>
    ),

    tools: ["React", "Typescript", "Styled-Components"],
  },
  {
    title: "Real chat app",
    liveUrl: "https://curious-scone-69863c.netlify.app",
    repoUrl: "https://github.com/DanexQ/real-chat-app",
    imageUrl: "/RealChatApp.png",
    lastCommit: "January 13 2023",
    content:
      "Simple example of real chat app - my first bigger project. I encountered and solved various errors that were new to me. There are a few issues with the app, like missing logic for the search page and features such as chat sorting and creating groups. These were left out because I was focused on other projects and school commitments. I plan to come back to this app someday with my updated knowledge and continue working on it.",
    tools: ["React", "Typescript", "Styled-Components"],
  },
  {
    title: "Would you rather",
    liveUrl: "https://darling-babka-dce39c.netlify.app",
    repoUrl: "https://github.com/DanexQ/would-you-rather",
    imageUrl: "/WouldYouRather.png",
    lastCommit: "November 14 2022",
    content: `I made this app for my friends' group to keep us entertained during school breaks. I take pride in it because it brought us much laughter and enjoyment while playing the simple "Would You Rather" game. The app also lets you create your own cards if you're interested.`,
    tools: ["React", "Typescript", "Styled-Components"],
  },
  {
    title: "Password generator",
    repoUrl: "https://github.com/DanexQ/password-generator",
    liveUrl: "https://velvety-gnome-b702e9.netlify.app",
    imageUrl: "/PasswordGenerator.png",
    lastCommit: "September 30 2022",
    content:
      "Here's my first self-made React app. It's a password generator, and the mechanics are pretty straightforward. Just set your criteria, choose the character count, and hit Create. It's as simple as that.",
    tools: ["React", "Typescript", "Styled-Components"],
  },
];

const ProjectsExamples = () => {
  return (
    <ul className="flex flex-col gap-5 backdrop-blur-[6px] mt-5">
      {projectsDetails.map((details) => (
        <ProjectCard key={details.title} {...details} />
      ))}
    </ul>
  );
};

export default ProjectsExamples;
