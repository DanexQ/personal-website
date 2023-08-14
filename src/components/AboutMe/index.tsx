"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useInterval } from "usehooks-ts";

const AboutMe = () => {
  const aboutMeText = `I'm Daniel, I'm 20-year-old and type of guy
          with inexhaustible willingness to educate myself and big ambitions to
          become Frontend Developer someday. I have graduated CKZIU w Zbąszynku
          this year and I'm certificated IT Technician so my interest and
          curiosity to coding, networking or servers is for a long time. While my journey 
          into the world of coding is still unfolding, I'm driven by the prospect of 
          creating beautiful and interactive web experiences that captivate users and 
          solve real-world problems. Join me on my journey as I work hard to turn my 
          dreams into reality.`;
  const [index, setIndex] = useState(aboutMeText.length);

  useInterval(
    () => {
      setIndex(index + 1);
      console.log("test");
    },
    index === aboutMeText.length ? null : 40
  );

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 6 }}
      className="flex flex-row-reverse items-center w-full p-10 bg-secondary/20"
    >
      <p className="w-[60%]  text-text text-base rounded-lg text-justify">
        {aboutMeText.slice(0, index)}
      </p>
      <motion.h2
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
        }}
        className="w-[40%] text-7xl font-bold flex flex-col uppercase text-center  text-text "
      >
        <span className="-translate-x-[50px]">About</span>
        <span className="translate-x-[70px]">Me</span>
      </motion.h2>
    </motion.article>
  );
};

export default AboutMe;
