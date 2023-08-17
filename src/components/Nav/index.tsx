import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

const LINKS = [
  { url: "about", label: "About" },
  { url: "portfolio", label: "Portfolio" },
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
    <nav className="sticky top-0 flex items-center justify-between max-w-[1200px] px-10 py-3 mx-auto text-base md:text-xl md:py-5 sm:px-3 max-w-3 bg-background/90 text-text lg:px-0  backdrop-blur z-40">
      <h1>Daniel.</h1>
      <ul className="hidden gap-5 font-semibold sm:flex">{linksElements}</ul>
      <button className="px-4 py-2 font-semibold transition-all rounded-md md:font-base bg-text/80 sm:bg-transparent text-secondary sm:text-text hover:text-secondary hover:bg-text/80 hover:font-bold">
        CV
      </button>
      <MobileMenu linksElements={[...linksElements]} />
    </nav>
  );
};

export default Nav;
