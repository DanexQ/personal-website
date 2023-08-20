"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useInterval } from "usehooks-ts";
import SectionCard from "../SectionCard";

const AboutMe = () => {
  const aboutMeText = `
          Hey there, I'm Daniel, a 20-year-old with an insatiable thirst for learning 
          and lofty aspirations of becoming a Frontend Developer. Freshly graduated 
          from CKZIU w Zbąszynku this year with a certification as an IT Technician, 
          my curiosity in coding, networking, and servers has been a long-standing 
          affair. While my journey into the world of coding is still unfolding, I'm 
          driven by the prospect of creating beautiful and interactive web experiences 
          that captivate users and solve real-world problems. Join me on my journey as 
          I work hard to turn my dreams into reality.`;
  const [index, setIndex] = useState(aboutMeText.length);

  useInterval(
    () => {
      setIndex(index + 1);
      console.log("test");
    },
    index === aboutMeText.length ? null : 40
  );

  return (
    <SectionCard
      id="about"
      content={aboutMeText}
      header={["About", "Me"]}
      reversed={true}
    />
    // <motion.article
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ delay: 6 }}
    //   id="about"
    //   className="flex flex-col-reverse items-center w-full gap-3 px-5 py-5 md:gap-0 md:p-10 md:flex-row-reverse bg-secondary/20"
    // >
    //   <p className="md:w-[60%] text-text text-base rounded-lg text-justify">
    //     {aboutMeText.slice(0, index)}
    //   </p>
    //   <motion.h2
    //     animate={{ opacity: [1, 0.5, 1] }}
    //     transition={{
    //       repeat: Infinity,
    //       repeatType: "loop",
    //       duration: 5,
    //     }}
    //     className="items-center md:w-[40%] text-4xl md:text-6xl lg:text-7xl gap-4 font-semibold md:font-bold flex flex-row md:flex-col uppercase text-center text-text "
    //   >
    //     <span className="md:hidden">About Me</span>
    //     <span className="hidden md:block md:-translate-x-[50px]">About</span>
    //     <span className="hidden md:block md:translate-x-[70px]">Me</span>
    //   </motion.h2>
    // </motion.article>
  );
};

export default AboutMe;
