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
}: {
  title: string;
  content: string | React.ReactNode;
  imageUrl: string;
  url: string;
  repoUrl: string;
  lastCommit: string;
  reverse?: true;
}) => {
  return (
    <div
      className={`flex items-center gap-5 p-5 flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } `}
    >
      <Link
        href={url}
        target="_blank"
        className="border border-secondary/60 hover:border-text"
      >
        <Image src={imageUrl} alt={title} width={384} height={144} />
      </Link>
      <div
        className={`flex-1 flex flex-col items-center md:items-start justify-center transition-all px-4 text-text`}
      >
        <h3 className="text-lg font-semibold">
          {title} <span className="text-sm text-text/50">{lastCommit}</span>
        </h3>
        <p className="text-center md:text-justify">{content}</p>
        <div className="flex gap-5 font-bold ">
          <Link href={repoUrl} className="underline">
            GitHub
          </Link>
          <Link href={url} className="underline">
            Live
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
