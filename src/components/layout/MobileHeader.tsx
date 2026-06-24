"use client";

import { Menu } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useSidebar } from "./SidebarContext";

export function MobileHeader() {
  const { toggleMobile } = useSidebar();

  return (
    <header className="lg:hidden sticky top-0 z-30 bg-card/90 backdrop-blur-md border-b border-border px-4 py-3 flex items-center justify-between">
      <div>
        <p className="font-serif font-bold text-foreground text-sm leading-tight">
          {personalInfo.name}
        </p>
        <p className="text-xs text-accent">{personalInfo.title}</p>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <button
          type="button"
          onClick={toggleMobile}
          className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
