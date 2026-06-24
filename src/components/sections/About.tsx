"use client";

import Image from "next/image";
import { GraduationCap, Sparkles, Code, Brain, Users, Database } from "lucide-react";
import { aboutContent, educationEntries } from "@/data/portfolio";
import { AnimatedSection, FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const strengthIcons = [Code, Brain, Users, Database];

function EducationCard({
  entry,
}: {
  entry: (typeof educationEntries)[number];
}) {
  return (
    <div className="card p-6 md:p-8 h-full">
      <div className="flex items-start gap-3 mb-4">
        {entry.logo ? (
          <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-border shrink-0 bg-surface">
            <Image
              src={entry.logo}
              alt={`${entry.institution} logo`}
              fill
              className="object-contain p-1.5"
            />
          </div>
        ) : (
          <div className="p-2.5 rounded-xl bg-accent-muted text-accent shrink-0">
            <GraduationCap size={20} />
          </div>
        )}
        <div className="min-w-0">
          <p className="text-xs text-muted uppercase tracking-wider">Education</p>
          <p className="font-semibold text-foreground">{entry.institution}</p>
        </div>
      </div>

      <p className="text-foreground font-medium">{entry.program}</p>

      {entry.period && (
        <p className="text-sm text-muted mt-1">{entry.period}</p>
      )}

      {entry.honors && (
        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-serif text-2xl sm:text-3xl font-bold text-accent">
            {entry.honors}
          </span>
          <span className="text-sm text-muted">Honors</span>
        </div>
      )}

      {entry.skills.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1 rounded-full bg-surface text-muted border border-border"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {entry.coursework.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.coursework.map((course) => (
            <span
              key={course}
              className="text-xs px-3 py-1 rounded-full bg-surface text-muted border border-border"
            >
              {course}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function About() {
  return (
    <AnimatedSection id="about" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="About Me"
          title="Professional journey"
          description="A developer who combines technical depth with a passion for building products that matter."
        />

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <FadeIn>
            <div className="card p-6 md:p-8 h-full">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-accent" />
                My Story
              </h3>
              <p className="text-muted leading-relaxed">{aboutContent.journey}</p>
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
                  Career Highlights
                </h4>
                <ul className="space-y-2.5">
                  {aboutContent.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="space-y-4">
            {educationEntries.map((entry) => (
              <EducationCard key={entry.id} entry={entry} />
            ))}
          </FadeIn>
        </div>

        <StaggerChildren className="mt-6 grid sm:grid-cols-2 gap-4">
          {aboutContent.strengths.map((strength, i) => {
            const Icon = strengthIcons[i] || Sparkles;
            return (
              <StaggerItem key={strength.title}>
                <div className="card card-hover p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-accent-muted text-accent">
                      <Icon size={16} />
                    </div>
                    <h4 className="font-semibold text-foreground">{strength.title}</h4>
                  </div>
                  <p className="text-sm text-muted leading-relaxed pl-11">
                    {strength.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </AnimatedSection>
  );
}
