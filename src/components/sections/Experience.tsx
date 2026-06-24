"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Experience"
          title="Work history"
          description="Hands-on experience building production software in remote and collaborative environments."
        />

        <div className="mt-10 relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-accent/20 hidden sm:block" />

          <StaggerChildren className="space-y-6">
            {experience.map((job) => (
              <StaggerItem key={job.id}>
                <div className="relative flex gap-6">
                  <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-accent-muted border-2 border-accent items-center justify-center z-10">
                    <Briefcase size={16} className="text-accent" />
                  </div>

                  <motion.article
                    whileHover={{ y: -2 }}
                    className="card card-hover flex-1 p-6 md:p-7"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground">{job.role}</h3>
                        <p className="text-accent font-medium">{job.company}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-3 py-1 rounded-full bg-accent-muted text-accent font-medium">
                          {job.period}
                        </span>
                        <span className="text-xs px-3 py-1 rounded-full bg-surface text-muted border border-border">
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-muted mb-4">{job.location}</p>

                    <ul className="space-y-2.5 mb-5">
                      {job.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-md bg-surface text-muted border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </AnimatedSection>
  );
}
