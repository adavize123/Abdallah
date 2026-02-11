import Link from "next/link";
import type { ReactNode } from "react";

type IconButtonProps = {
  href: string;
  label: string;
  icon: ReactNode;
};

export function IconButton({ href, label, icon }: IconButtonProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 text-slate-600 transition hover:border-violet-500 hover:text-violet-500 dark:border-slate-800 dark:text-slate-300"
    >
      {icon}
    </Link>
  );
}
