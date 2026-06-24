"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  X,
} from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolio";
import { Avatar } from "@/components/ui/Avatar";
import { cn } from "@/lib/utils";
import { formatPhoneForTel } from "@/lib/utils";
import { useSidebar } from "./SidebarContext";

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="text-center pb-6 border-b border-border">
        <div className="flex justify-center mb-4">
          <Avatar size="lg" />
        </div>
        <h1 className="font-serif text-xl font-bold text-foreground leading-tight">
          {personalInfo.name}
        </h1>
        <p className="text-sm text-accent font-medium mt-1">{personalInfo.title}</p>
        <p className="text-xs text-muted mt-2 flex items-center justify-center gap-1">
          <MapPin size={12} />
          {personalInfo.location}
        </p>
        <span className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-accent-muted text-xs font-medium text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {personalInfo.availability}
        </span>
      </div>

      <div className="py-5 border-b border-border space-y-3">
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors"
        >
          <Mail size={15} className="shrink-0 text-accent" />
          <span className="truncate">{personalInfo.email}</span>
        </a>
        <a
          href={`tel:${formatPhoneForTel(personalInfo.phone)}`}
          className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors"
        >
          <Phone size={15} className="shrink-0 text-accent" />
          {personalInfo.phone}
        </a>
        <div className="flex items-center gap-2 pt-1">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent-muted transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent-muted transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      <nav className="flex-1 py-5" aria-label="Section navigation">
        <ul className="space-y-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onNavigate}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all border-l-2",
                    isActive
                      ? "border-accent bg-accent-muted text-accent"
                      : "border-transparent text-muted hover:text-foreground hover:bg-surface"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <a
        href={personalInfo.resumeUrl}
        download
        className="btn-primary w-full gap-2 mt-auto"
      >
        <Download size={16} />
        Download Resume
      </a>
    </div>
  );
}

export function Sidebar() {
  const { mobileOpen, setMobileOpen } = useSidebar();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[300px] z-40 bg-card border-r border-border p-6 flex-col">
        <SidebarContent />
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/30 z-50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-[300px] z-50 bg-card border-r border-border p-6 flex flex-col shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
              <SidebarContent onNavigate={() => setMobileOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
