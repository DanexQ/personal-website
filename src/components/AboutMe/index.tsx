"use client";
import React from "react";
import SectionCard from "../SectionCard";

const AboutMe = () => {
  const aboutMeText = `
          Hey there, I'm 20 year old perfectionist with an intense eye for detail.  
          and lofty aspirations of becoming a Frontend Developer. Freshly graduated 
          from CKZIU w Zbąszynku this year with a certification as an IT Technician, 
          my curiosity in coding, networking, and servers has been a long-standing 
          affair. While my journey into the world of programming is still unfolding, I'm 
          driven by the hope of creating beautiful and interactive web experiences 
          that catch users' eyes and solve real-world problems. Join me on my journey as 
          I work hard to turn my dreams into reality.`;

  return <SectionCard id="about" content={aboutMeText} header="About Me" />;
};

export default AboutMe;
