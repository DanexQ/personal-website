import React from "react";
import Image from "next/image";
import Link from "next/link";

export type ProjectCardType = {
  title: string;
  content: string | React.ReactNode;
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
  lastCommit: string;
  tools: string[];
};

const ProjectCard = ({
  title,
  content,
  imageUrl,
  liveUrl,
  lastCommit,
  repoUrl,
  tools,
}: ProjectCardType) => {
  return (
    <li className="flex flex-col items-center gap-5 rounded-lg sm:p-5 bg-secondary/20 md:flex-row">
      <Link
        href={liveUrl}
        target="_blank"
        className="relative border border-transparent hover:border-text max-w-[384px] max-h-[202px]"
      >
        <Image
          src={imageUrl}
          alt={title}
          objectFit="contain"
          width={384}
          height={202}
        />
      </Link>
      <div
        className={`flex-1 flex flex-col items-center sm:gap-2 md:items-start justify-center transition-all sm:px-4 text-text`}
      >
        <h3 className="text-lg font-semibold ">
          {title}{" "}
          <span className="block text-sm text-center sm:inline-block text-text/50">
            {lastCommit}
          </span>
        </h3>
        <p className="text-center md:text-justify">{content}</p>
        <div className="flex flex-col-reverse items-center justify-between w-full gap-3 mt-3 font-semibold sm:items-start sm:flex-row sm:gap-0 sm:mt-0">
          <ul className="flex gap-5 ">
            <li>
              <Link href={repoUrl} className="underline" target="_blank">
                GitHub
              </Link>
            </li>
            <li>
              <Link href={liveUrl} className="underline" target="_blank">
                Live
              </Link>
            </li>
          </ul>
          <ul className="flex flex-wrap justify-center gap-2">
            {tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
