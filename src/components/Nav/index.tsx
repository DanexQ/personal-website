import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

const LINKS = [
  { url: "about", label: "About" },
  { url: "portfolio", label: "Portfolio" },
  { url: "contact", label: "Contact" },
  { url: "experience", label: "Experience" },
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
    <nav className="flex items-center justify-between max-w-screen-lg px-3 py-5 mx-auto text-xl max-w-3 text-text z-5 lg:px-0">
      <h1>Daniel.</h1>
      <ul className="flex gap-5 font-semibold">{linksElements}</ul>
      <button className="px-4 py-2 transition-all rounded-md hover:text-secondary hover:bg-text/80 hover:font-bold">
        CV
      </button>
      <MobileMenu linksElements={linksElements} />
    </nav>
  );
};

export default Nav;
