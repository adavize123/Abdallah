"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/data/site";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = useMemo(
    () => ["hero", ...navItems.map((item) => item.id)],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#hero" className="text-lg font-semibold text-black dark:text-white">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-black dark:text-white md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`transition hover:text-violet-500 ${
                activeSection === item.id ? "text-violet-500" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden rounded-full border border-slate-300/60 px-4 py-2 text-sm font-semibold text-black transition hover:border-violet-500 hover:text-violet-600 dark:border-slate-700 dark:text-white sm:inline-flex"
          >
            Let&apos;s talk
          </Link>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 text-black transition hover:border-violet-500 hover:text-violet-500 dark:border-slate-800 dark:text-white md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div className="border-t border-slate-200/60 bg-white/95 px-6 py-4 text-sm font-medium text-black dark:border-slate-800/60 dark:bg-slate-950/90 dark:text-white md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className={`transition hover:text-violet-500 ${
                  activeSection === item.id ? "text-violet-500" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-black dark:text-white"
            >
              Let&apos;s talk
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
