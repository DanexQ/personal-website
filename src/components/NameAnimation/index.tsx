"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Links from "../Links";

const NameAnimation = () => {
  const [nameStatus, setNameStatus] = useState({
    firstName: false,
    lastName: false,
    title: false,
    links: false,
    gh: false,
  });
  const firstName = "Daniel";
  const lastName = "Szczepaniak";
  const title = "Your Frontend Developer!";

  const firstNameElements = firstName.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className=" text-primary  text-5xl   sm:text-8xl  lg:text-[150px]"
    >
      {char}
    </motion.span>
  ));
  const lastNameElements = lastName.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className=" text-primary  text-5xl  sm:text-8xl lg:text-[150px]"
    >
      {char}
    </motion.span>
  ));
  const titleElements = title.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="text-lg sm:text-3xl text-text "
    >
      {char}
    </motion.span>
  ));

  return (
    <motion.section
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        delay: 5,
      }}
      className="flex flex-col items-center justify-center min-h-[90dvh] md:min-h-[85vh] font-bold text-primary "
    >
      <motion.div layout key="firstName">
        {firstNameElements}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onAnimationComplete={() =>
            setNameStatus((prev) => ({ ...prev, firstName: true }))
          }
        />
      </motion.div>

      <motion.div layout key="lastName" className="">
        {nameStatus.firstName && lastNameElements}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          onAnimationComplete={() =>
            setNameStatus((prev) => ({ ...prev, lastName: true }))
          }
        />
      </motion.div>
      <motion.div layout key="title" className="py-3 lg:py-5">
        {nameStatus.lastName && titleElements}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5.5 }}
          onAnimationComplete={() =>
            setNameStatus((prev) => ({ ...prev, title: true }))
          }
        />
      </motion.div>
      {nameStatus.title && (
        <motion.div
          layout
          key="links"
          className="flex gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Links />
        </motion.div>
      )}
    </motion.section>
  );
};

export default NameAnimation;
