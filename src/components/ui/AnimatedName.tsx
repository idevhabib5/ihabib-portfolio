"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const nameWords = personalInfo.name.split(" ");

export function AnimatedName() {
  return (
    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight overflow-hidden">
      <span className="block overflow-hidden">
        <motion.span
          className="inline-block text-muted"
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Hi, I am{" "}
        </motion.span>
      </span>

      <span className="block mt-1 overflow-hidden">
        {nameWords.map((word, i) => (
          <motion.span
            key={word}
            className="inline-block text-gradient-name mr-[0.25em] last:mr-0"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.65,
              delay: 0.25 + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}
