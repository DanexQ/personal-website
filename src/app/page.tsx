"use client";
import Intro from "@/components/Intro";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [hideIntro, setHideIntro] = useState(false);
  const router = useRouter();
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[100vh]">
      <AnimatePresence mode="wait">
        {!hideIntro && (
          <Intro
            handleClick={() => {
              setHideIntro(true);
              setTimeout(() => {
                return router.push("/home");
              }, 1000);
            }}
          />
        )}
        {hideIntro && <motion.div key="faktyczna" />}
      </AnimatePresence>
    </div>
  );
}
