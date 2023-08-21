"use client";
import React from "react";
import Image from "next/image";
import CKZIU from "../../../public/CKZIU-Transparent.png";
import SectionCard from "../SectionCard";

const Education = () => {
  return (
    <SectionCard id="education" header="Education" content="">
      <div className="grid items-center content-center grid-cols-2 grid-rows-6 text-text md:max-w-[70%]">
        <h3 className="col-span-2 text-lg font-semibold text-center">
          Centrum for Vocational and Continuing Education in Zbąszynek
        </h3>
        <Image
          src={CKZIU.src}
          alt="Logo"
          width={200}
          height={10}
          style={{ objectFit: "contain" }}
          className="col-span-2 col-start-1 row-start-1 sm:mt-1 sm:col-start-2 sm:row-start-2 sm:row-end-4 justify-self-center sm:justify-self-end invert"
        />{" "}
        <span className="col-start-1 row-start-3 justify-self-center sm:justify-self-start sm:row-start-2 sm:row-end-3">
          IT Technician
        </span>
        <span className="col-start-2 row-start-3 justify-self-center sm:justify-self-start sm:col-start-1 sm:row-start-3 sm:row-end-4 text-text/80">
          Sep 2019 - Apr 2023
        </span>
        <p className="col-span-2 row-span-3 text-center sm:ol-start-1 sm:col-end-3 sm:row-span-3">
          I&apos;ve recently completed my studies at this school, earning my IT
          Technician degree. I&apos;ve gained a good understanding of areas such
          as local networks, servers, databases (SQL), hardware and software
          troubleshooting. Additionally, I possess strong problem-solving
          abilities and a keen eye for detail.
        </p>
      </div>
    </SectionCard>
  );
};

export default Education;
