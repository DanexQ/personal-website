import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  title,
  content,
  imageUrl,
  url,
  reverse,
  lastCommit,
  repoUrl,
  tools,
}: {
  title: string;
  content: string | React.ReactNode;
  imageUrl: string;
  url: string;
  repoUrl: string;
  lastCommit: string;
  reverse?: true;
  tools: string[];
}) => {
  return (
    <div className="flex flex-col items-center gap-5 rounded-lg sm:p-5 bg-secondary/20 md:flex-row">
      <Link
        href={url}
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
          <div className="flex gap-5 ">
            <Link href={repoUrl} className="underline" target="_blank">
              GitHub
            </Link>
            <Link href={url} className="underline" target="_blank">
              Live
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {tools.map((tool, index) => (
              <span key={index}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
