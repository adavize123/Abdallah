import { socials } from "@/data/socials";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 py-8 text-sm text-black dark:border-slate-800/60 dark:text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p>© {new Date().getFullYear()} ABUHUB. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-violet-500"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
