import React from "react";
import Links from "../Links";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-10 mt-10 mb-20 sm:mt-0 text-text">
      <Links />
      2023 &copy; Daniel Szczepaniak
    </footer>
  );
};

export default Footer;
