import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted">
        © {year} {personalInfo.name}. All rights reserved.
      </p>
      <div className="flex items-center gap-3">
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
    </footer>
  );
}
