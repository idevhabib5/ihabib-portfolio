"use client";

import Image from "next/image";
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
          description="Professional certifications validating expertise across leadership, databases, cloud, AI, and engineering."
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
                  {cert.logo ? (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border shrink-0 bg-surface">
                      <Image
                        src={cert.logo}
                        alt={`${cert.issuer} logo`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  ) : (
                    <div className="p-2.5 rounded-full bg-accent-muted text-accent shrink-0">
                      <Icon size={18} />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm leading-snug group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted mt-1">{cert.issuer}</p>
                    <p className="text-xs text-muted/70 mt-2 font-mono">
                      {cert.period ?? cert.year}
                    </p>
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
