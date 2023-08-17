import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  title,
  content,
  imageUrl,
  reverse,
}: {
  title: string;
  content: string;
  imageUrl: string;
  reverse?: true;
}) => {
  return (
    <div
      className={`flex items-center gap-5 py-5 flex-col border-t-[5px] border-background ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } `}
    >
      <Link
        href="https://prosta-matura.vercel.app/"
        target="_blank"
        className="border border-secondary/60 hover:border-text"
      >
        <Image src={imageUrl} alt={title} width={384} height={144} />
      </Link>
      <div
        className={`flex-1 flex flex-col items-center md:items-start justify-center transition-all px-4 text-text `}
      >
        <a
          href="https://prosta-matura.vercel.app/"
          className="text-lg font-semibold lg:hover:underline"
        >
          {title} <span className="lg:hidden">&#8599;</span>
        </a>
        <p className="text-center md:text-justify">{content}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
