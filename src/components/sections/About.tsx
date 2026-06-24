"use client";

import Image from "next/image";
import { GraduationCap, Sparkles, Code, Brain, Users, Database } from "lucide-react";
import { aboutContent, education } from "@/data/portfolio";
import { AnimatedSection, FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const strengthIcons = [Code, Brain, Users, Database];

export function About() {
  const { leadershipProgram } = education;

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

          <FadeIn delay={0.1}>
            <div className="card p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-accent-muted text-accent shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted uppercase tracking-wider">Education</p>
                  <p className="font-semibold text-foreground">{education.institution}</p>
                </div>
              </div>

              <p className="text-foreground font-medium">{education.program}</p>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-accent">
                  {education.honors}
                </span>
                <span className="text-sm text-muted">Honors</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-xs px-3 py-1 rounded-full bg-surface text-muted border border-border"
                  >
                    {course}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border flex-1">
                <div className="flex items-start gap-3">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-border shrink-0 bg-surface">
                    <Image
                      src={leadershipProgram.logo}
                      alt={`${leadershipProgram.institution} logo`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm">
                      {leadershipProgram.institution}
                    </p>
                    <p className="text-sm text-muted">{leadershipProgram.program}</p>
                    <p className="text-xs text-muted mt-0.5">{leadershipProgram.period}</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {leadershipProgram.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full bg-accent-muted text-accent border border-accent/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
