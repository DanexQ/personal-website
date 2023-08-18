import React from "react";
import ProjectCard from "./ProjectCard";
import ProstaMaturaImg from "../../../public/ProstaMatura.png";
import ExamRepImg from "../../../public/ExamRepetition.png";
import RealChatApp from "../../../public/RealChatApp.png";
import WouldYouRather from "../../../public/WouldYouRather.png";
import PasswordGenerator from "../../../public/PasswordGenerator.png";
import Link from "next/link";

const ProjectsExamples = () => {
  return (
    <section className="flex flex-col gap-5">
      <ProjectCard
        title="Prosta Matura"
        url="https://prosta-matura.vercel.app/"
        repoUrl="https://github.com/DanexQ/matura-collection-next.js"
        imageUrl={ProstaMaturaImg.src}
        lastCommit="August 1 2023"
        content="I want you to present my first big project called Prosta Matura. This app was created for polish students studying for their advanced math matura exam. Throughout my career as a this year's high school graduate I couldn't find any type of website having all of the tasks of this exam in one place, so I did it. Everyone can use this app for free just sign in with google account. Prosta Matura is made with NextJS, React, NextAuth, Tailwind, Prisma and PlanetScale as database."
      />
      {/* <ProjectCard reverse={true} delayStart={1.5} /> */}
      <ProjectCard
        title="Professional qualifying exam repetition"
        url="https://infopraktycznyegzamin.netlify.app"
        imageUrl={ExamRepImg.src}
        repoUrl="https://github.com/DanexQ/repetition-for-exam"
        lastCommit="April 25 2023"
        content={
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
            . This is a quick information summary of one of the polish IT
            technician exam. It was very useful for me, because I could learn
            for it while I was making the website and for my friends that was
            using my &quot;blog&quot; and exercising before the exam. Pretty
            simple app without extended interactivity, nothing special, but I
            think it&apos;s good to mention that, because this proves my
            responsibility and that I am not scared of any challenges.
          </>
        }
      />
      <ProjectCard
        title="Real chat app"
        url="https://curious-scone-69863c.netlify.app"
        repoUrl="https://github.com/DanexQ/real-chat-app"
        imageUrl={RealChatApp.src}
        lastCommit="January 13 2023"
        content={
          "Simple example of real chat app using Firebase, React with Typescript and Styled Components. My first bigger project. I learn a lot of new stuff here and solved too much errors that I wasn't aware of before. The last commit was 13 January 2023. I won't change anything in my code here because it's good to see how my skills changed. There are errors(no logic for search page) or missing some features like sorting chats, creating grups and other that I wanted to do, because of focusing on other projects and school. Someday I will continue this app but with my today's knowledge."
        }
      />
      <ProjectCard
        title="Would you rather"
        url="https://darling-babka-dce39c.netlify.app"
        repoUrl="https://github.com/DanexQ/would-you-rather"
        imageUrl={WouldYouRather.src}
        lastCommit="November 14 2022"
        content={
          "This app was created for my friends group to not to be bored during breaks between school lessons. I am very proud of this, because it gave us a lot of laughs and fun playing the game. It's a basic would you rather game. Also you can add your own cards if you would like to. Firebase, React with Typescript and Styled Components"
        }
      />
      <ProjectCard
        title="Password generator"
        repoUrl="https://github.com/DanexQ/password-generator"
        url="https://velvety-gnome-b702e9.netlify.app"
        imageUrl={PasswordGenerator.src}
        lastCommit="September 30 2022"
        content={
          "My first React app that I made by myself. I think I don't have to say how password generator works. Choose your conditions, pick some amount of characters and click Create. Simple as that. React with Typescript"
        }
      />
    </section>
  );
};

export default ProjectsExamples;
