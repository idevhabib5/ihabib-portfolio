"use client";

import { achievements } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Achievements() {
  return (
    <AnimatedSection id="achievements" className="section-padding bg-surface/60">
      <div className="container-custom">
        <SectionHeading
          label="Achievements"
          title="Key milestones"
          description="Measurable accomplishments across academics, competitions, and professional development."
          align="center"
        />

        <div className="mt-10 card p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
            {achievements.map((item, i) => (
              <div
                key={item.label}
                className={`text-center ${i < achievements.length - 1 ? "md:border-r md:border-border md:pr-4" : ""}`}
              >
                <p className="font-serif text-2xl md:text-3xl font-bold text-accent">
                  {item.value}
                </p>
                <p className="text-sm font-semibold text-foreground mt-1">{item.label}</p>
                <p className="text-xs text-muted mt-1 leading-relaxed hidden sm:block">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
