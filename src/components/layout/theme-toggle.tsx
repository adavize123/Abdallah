"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="h-10 w-10 rounded-full border border-slate-200/70"
      />
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 text-black transition hover:border-violet-500 hover:text-violet-500 dark:border-slate-800 dark:text-white"
    >
      {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
