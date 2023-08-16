"use client";
import React from "react";
import SectionCard from "../SectionCard";

const ContactMe = () => {
  const contactMeContent = `I hope my abilities have made a good impression on you, but don't forget that I'm still learning and I won't stop it!
    I'm always open to engaging conversations and collaborations. I'm really looking forward to
    message from you, finding new challenges and working together! Feel free to reach out if you have any questions, 
    or if you'd simply like to connect. Click the buttons below my name or in the footer above to contact me!`;
  return (
    <SectionCard
      id="contact"
      content={contactMeContent}
      reversed={true}
      header={["Contact", "Me"]}
    />
  );
};

export default ContactMe;
