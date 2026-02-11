"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { socials } from "@/data/socials";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-20 pt-16">
      <Container className="no-hover">
        <div className="absolute inset-0 -z-10">
          <div className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />
        </div>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <div className="role-marquee">
              <div className="role-track">
                {siteConfig.roles.map((role) => (
                  <Badge key={`role-primary-${role}`}>{role}</Badge>
                ))}
                {siteConfig.roles.map((role) => (
                  <Badge key={`role-dup-${role}`}>{role}</Badge>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-500">
                {siteConfig.brand}
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl">
                {siteConfig.name}
              </h1>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                {siteConfig.bio}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <span
                  className="pointer-hand mr-2 text-2xl"
                  aria-hidden="true"
                >
                  👉
                </span>
                <a href={siteConfig.resumeUrl} download>
                  <Button>Download CV</Button>
                </a>
              </div>
              <a href="#contact">
                <Button variant="secondary">Contact Me</Button>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex items-center gap-3">
                {socials.slice(0, 2).map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 transition hover:text-violet-500"
                  >
                    {social.label === "GitHub" ? (
                      <Github size={16} />
                    ) : (
                      <Linkedin size={16} />
                    )}
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-portrait-wrapper max-w-sm">
            <div className="hero-portrait">
              <img
                src="/my image.jpeg"
                alt="Portrait illustration"
                className="hero-portrait-image"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
