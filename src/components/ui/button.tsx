import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-violet-600 text-white hover:bg-violet-500 shadow-[0_12px_32px_-12px_rgba(124,58,237,0.7)]",
  secondary:
    "border border-slate-300/60 text-black hover:border-violet-400 hover:text-violet-600 dark:border-slate-700 dark:text-white",
  ghost: "text-black hover:text-violet-600 dark:text-white",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
