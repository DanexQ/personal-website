"use client";
import Intro from "@/components/Intro";
import Particles from "@/components/Particles";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [hideIntro, setHideIntro] = useState(false);
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full bg-background">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Particles />
      </div>
      <AnimatePresence mode="wait">
        {!hideIntro && <Intro handleClick={() => setHideIntro(true)} />}
        {hideIntro && <motion.div key="faktyczna">PAGE</motion.div>}
      </AnimatePresence>
    </div>
  );
}
