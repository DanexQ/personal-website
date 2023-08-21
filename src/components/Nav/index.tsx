import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

const LINKS = [
  { url: "about", label: "About" },
  { url: "projects", label: "Projects" },
  { url: "education", label: "Education" },
  { url: "contact", label: "Contact" },
];

const Nav = () => {
  const linksElements = LINKS.map(({ url, label }) => (
    <li key={url} className="transition-all active:scale-95">
      <Link
        href={`#${url}`}
        className="px-4 py-2 transition-all rounded-md hover:text-primary hover:bg-secondary"
      >
        {label}
      </Link>
    </li>
  ));

  return (
    <header className="sticky top-0 z-40">
      <nav className="relative flex items-center justify-between max-w-[1200px] sm:px-5 py-3 mx-auto text-base md:text-xl md:py-5 px-3 max-w-3 z-40 bg-background text-text lg:px-0 ">
        <h1 className="z-40">Daniel.</h1>
        <ul className="z-40 hidden gap-5 font-semibold sm:flex">
          {linksElements}
        </ul>
        <button className="z-40 px-4 py-2 font-semibold transition-all rounded-md md:font-base bg-text/80 sm:bg-transparent text-secondary sm:text-text hover:text-secondary hover:bg-text/80 hover:font-bold">
          CV
        </button>
        <MobileMenu linksElements={[...linksElements]} />
      </nav>
    </header>
  );
};

export default Nav;
