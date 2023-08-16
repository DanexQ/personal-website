import Link from "next/link";
import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <>
      <Link
        href="https://github.com/DanexQ"
        className="text-secondary hover:brightness-90"
      >
        <Image src="./GithubIcon.svg" alt="Github" width={48} height={48} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/daniel-szczepaniak-16456a26a/"
        className="text-secondary hover:brightness-90"
      >
        <Image src="./LinkedInIcon.svg" alt="LinkedIn" width={48} height={48} />
      </Link>
      <Link
        href="mailto:daniel.szcz03@gmail.com"
        className="text-secondary hover:brightness-90"
      >
        <Image src="./GmailIcon.svg" alt="Gmail" width={48} height={48} />
      </Link>
    </>
  );
};

export default index;
