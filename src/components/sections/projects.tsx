"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Projects"
          title="Case studies & intelligent systems"
          description="A curated selection of research-driven and production-grade projects. Each project is modular, reusable, and designed for impact."
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <Card key={project.id} className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm leading-7 text-black dark:text-white">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm font-semibold text-black dark:text-white">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-violet-500"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-violet-500"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </Card>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
