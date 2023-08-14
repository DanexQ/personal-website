"use client";
import { wordAnimation } from "@/lib/letterAnimation";
import { motion } from "framer-motion";
import React, { useState } from "react";

const NameAnimation = () => {
  const [nameStatus, setNameStatus] = useState({
    firstName: false,
    lastName: false,
    title: false,
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
      className="text-[150px] text-primary leading-[100px]"
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
      className="text-[150px] text-primary leading-[100px]"
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
      className="text-3xl leading-[120px] text-text"
    >
      {char}
    </motion.span>
  ));
  return (
    <motion.div
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        delay: 5,
      }}
      className="flex flex-col w-3/4  font-bold items-center text-primary min-h-[55vh] justify-center pt-[30px]"
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

      <motion.div layout key="lastName">
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
      <motion.div layout key="title">
        {nameStatus.lastName && titleElements}
      </motion.div>
    </motion.div>
  );
};

export default NameAnimation;
