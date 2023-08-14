import { motion } from "framer-motion";

export const wordAnimation = (word: string) => {
  return word.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}
    >
      {char}
    </motion.span>
  ));
};
