"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <AnimatedSection id="projects" className="section-padding bg-surface/60">
      <div className="container-custom">
        <SectionHeading
          label="Projects"
          title="Featured work"
          description="End-to-end applications spanning cross-university platforms, marketplaces, AI SaaS, and social apps."
        />

        <StaggerChildren className="mt-10 grid md:grid-cols-2 gap-6">
          {featured.map((project) => (
            <StaggerItem key={project.id}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="card card-hover overflow-hidden flex flex-col h-full"
              >
                <div
                  className="h-36 flex items-center justify-center"
                  style={{ backgroundColor: `${project.accent}12` }}
                >
                  <span
                    className="font-serif text-5xl font-bold opacity-30"
                    style={{ color: project.accent }}
                  >
                    {project.title.charAt(0)}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-muted font-medium uppercase tracking-wider">
                    {project.tagline}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-foreground mt-1">
                    {project.title}
                  </h3>
                  {"period" in project && project.period && (
                    <p className="text-xs text-accent font-medium mt-1">{project.period}</p>
                  )}
                  <p className="text-sm text-muted mt-2 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {project.impact.slice(0, 2).map((item, i) => (
                      <li key={i} className="text-xs text-muted flex items-start gap-2">
                        <span
                          className="mt-1 w-1 h-1 rounded-full shrink-0"
                          style={{ backgroundColor: project.accent }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded bg-surface text-muted border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors"
                    >
                      <Github size={15} />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-white px-4 py-2 rounded-lg transition-opacity hover:opacity-90"
                        style={{ backgroundColor: project.accent }}
                      >
                        Live Demo
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {other.length > 0 && (
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {other.map((project) => (
              <article key={project.id} className="card card-hover p-5">
                <h3 className="font-semibold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted mt-2">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded bg-surface text-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm text-accent hover:text-accent-light"
                >
                  <Github size={14} />
                  View Code
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
