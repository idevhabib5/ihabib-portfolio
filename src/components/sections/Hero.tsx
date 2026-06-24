"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroContent, personalInfo } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedName } from "@/components/ui/AnimatedName";

export function Hero() {
  return (
    <AnimatedSection className="section-padding pt-10 md:pt-16" aria-label="Hero">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="card p-8 md:p-10 lg:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />

          <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
            <div>
              <AnimatedName />

              <motion.p
                className="text-lg md:text-xl text-accent font-medium mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                {personalInfo.title}
              </motion.p>

              <motion.div
                className="mt-4 h-0.5 bg-accent rounded-full origin-left"
                initial={{ scaleX: 0, width: 64 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.85, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />

              <motion.p
                className="mt-6 text-lg text-foreground font-medium max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.5 }}
              >
                {heroContent.headline}
              </motion.p>

              <motion.p
                className="mt-3 text-base text-muted max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.5 }}
              >
                {heroContent.summary}
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15, duration: 0.5 }}
              >
                <a href="#projects" className="btn-primary">
                  View Projects
                </a>
                <a href="#contact" className="btn-secondary">
                  Contact Me
                </a>
              </motion.div>
            </div>

            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden border border-border shadow-xl shrink-0"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent z-10 pointer-events-none" />
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 224px, 256px"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
