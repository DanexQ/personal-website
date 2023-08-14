"use client";
import React, { useState } from "react";
import Burger from "./Burger";

const MobileMenu = ({
  linksElements,
}: {
  linksElements: React.ReactNode[];
}) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} setActive={() => setActive((prev) => !prev)} />
      <ul
        className={`grid grid-cols-2 grid-rows-2 py-5 transition-all z-10 [&>li]:text-center gap-4 absolute content-center font-semibold sm:hidden left-0 bg-background/80 w-full ${
          active ? "top-[80px]" : "-top-[100px]"
        }`}
      >
        {linksElements}
      </ul>
    </>
  );
};

export default MobileMenu;
