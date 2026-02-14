import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-slate-200/70 bg-white/85 px-3 py-1 text-xs font-medium text-black shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-white ${className}`}
    >
      {children}
    </span>
  );
}
