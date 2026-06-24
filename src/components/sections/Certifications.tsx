"use client";

import { motion } from "framer-motion";
import {
  Award,
  Cloud,
  Code,
  Database,
  GitBranch,
  Sparkles,
  Users,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { certifications } from "@/data/portfolio";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const certIcons: Record<string, LucideIcon> = {
  database: Database,
  cloud: Cloud,
  sparkles: Sparkles,
  code: Code,
  git: GitBranch,
  users: Users,
  award: Award,
};

export function Certifications() {
  return (
    <AnimatedSection id="certifications" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Certifications"
          title="Credentials & learning"
          description="Professional certifications validating expertise across databases, cloud, AI, and leadership."
        />

        <StaggerChildren className="mt-10 grid sm:grid-cols-2 gap-4">
          {certifications.map((cert) => {
            const Icon = certIcons[cert.icon] || Award;
            return (
              <StaggerItem key={cert.title}>
                <motion.a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="card card-hover p-5 flex items-start gap-4 group"
                >
                  <div className="p-2.5 rounded-full bg-accent-muted text-accent shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm leading-snug group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted mt-1">{cert.issuer}</p>
                    <p className="text-xs text-muted/70 mt-2 font-mono">{cert.year}</p>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1"
                  />
                </motion.a>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </AnimatedSection>
  );
}
