"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroContent, personalInfo } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Hero() {
  return (
    <AnimatedSection className="section-padding pt-10 md:pt-16" aria-label="Hero">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card p-8 md:p-10 lg:p-12"
        >
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-sm text-muted mb-2">{heroContent.greeting}</p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-lg md:text-xl text-accent font-medium mt-2">
                {personalInfo.title}
              </p>
              <div className="mt-4 h-0.5 w-16 bg-accent rounded-full" />
              <p className="mt-6 text-lg text-foreground font-medium max-w-2xl leading-relaxed">
                {heroContent.headline}
              </p>
              <p className="mt-3 text-base text-muted max-w-2xl leading-relaxed">
                {heroContent.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="btn-primary">
                  View Projects
                </a>
                <a href="#contact" className="btn-secondary">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden border border-border shadow-lg shrink-0">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 224px, 256px"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
