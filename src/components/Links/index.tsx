import Link from "next/link";
import React from "react";
import Image from "next/image";

const Links = () => {
  return (
    <ul className="flex gap-5">
      <li>
        <Link
          href="https://github.com/DanexQ"
          className="text-secondary hover:brightness-90"
        >
          <Image src="./GithubIcon.svg" alt="Github" width={48} height={48} />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/daniel-szczepaniak-16456a26a/"
          className="text-secondary hover:brightness-90"
        >
          <Image
            src="./LinkedInIcon.svg"
            alt="LinkedIn"
            width={48}
            height={48}
          />
        </Link>
      </li>
      <li>
        <Link
          href="mailto:daniel.szcz03@gmail.com"
          className="text-secondary hover:brightness-90"
        >
          <Image src="./GmailIcon.svg" alt="Gmail" width={48} height={48} />
        </Link>
      </li>
    </ul>
  );
};

export default Links;
