import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, id, className = "", ...props }: InputProps) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
      {label}
      <input
        id={id}
        className={`h-12 rounded-2xl border border-slate-200/70 bg-white px-4 text-slate-900 shadow-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:ring-violet-900/40 ${className}`}
        {...props}
      />
    </label>
  );
}
