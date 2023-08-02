"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function page() {
  return (
    <motion.div
      initial={{ width: "0%" }}
      animate={{ width: "50%" }}
      exit={{ width: "0%" }}
      className="bg-background"
    >
      <Link href="/">sas</Link>
    </motion.div>
  );
}
