"use client";
import React from "react";
import SectionCard from "../SectionCard";

const ContactMe = () => {
  const contactMeContent = `I trust that my ideas and skills have left a positive impact on you. It's important to note that I'm continuously learning and that process won't cease. I'm eager to participate in discussions and team efforts. I'm genuinely excited about receiving your message, embracing fresh challenges, and collaborating effectively. If you have any queries or simply wish to connect, don't hesitate to reach out. You can easily contact me by clicking the buttons below my name or in the footer above.`;
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
