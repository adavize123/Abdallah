import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`glass-card rounded-3xl p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-35px_rgba(124,58,237,0.45)] ${className}`}
    >
      {children}
    </div>
  );
}
