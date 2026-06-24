"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Cloud,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/data/portfolio";
import { AnimatedSection, FadeIn } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  database: Database,
  cloud: Cloud,
  sparkles: Sparkles,
};

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-surface overflow-hidden border border-border">
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const category = skillCategories[activeCategory];
  const Icon = iconMap[category.icon] || Sparkles;

  return (
    <AnimatedSection id="skills" className="section-padding bg-surface/60">
      <div className="container-custom">
        <SectionHeading
          label="Skills"
          title="Technical expertise"
          description="A comprehensive toolkit for building modern, scalable web applications."
        />

        <FadeIn className="mt-10">
          <div className="flex flex-wrap gap-2 mb-6 p-1 bg-card rounded-xl border border-border w-fit">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.name}
                type="button"
                onClick={() => setActiveCategory(i)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  activeCategory === i
                    ? "bg-accent text-white shadow-sm"
                    : "text-muted hover:text-foreground"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="card p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-accent-muted text-accent">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{category.name}</h3>
                    <p className="text-xs text-muted">{category.skills.length} technologies</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </AnimatedSection>
  );
}
