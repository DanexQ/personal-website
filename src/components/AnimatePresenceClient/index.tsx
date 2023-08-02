"use client";
import { AnimatePresence } from "framer-motion";

const AnimatePresenceClient = ({ children }: { children: React.ReactNode }) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};

export default AnimatePresenceClient;
