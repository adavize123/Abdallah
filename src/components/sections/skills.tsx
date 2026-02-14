"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Skills"
          title="Modern tools for intelligent products"
          description="A balanced stack across front-end, data science, and machine learning—with the tools to ship fast and iterate confidently."
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="glass-card space-y-4 rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-black dark:text-white">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
          <div className="glass-card space-y-4 rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-black dark:text-white">
              Data Science
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.dataScience.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
          <div className="glass-card space-y-4 rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-black dark:text-white">
              Machine Learning
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.machineLearning.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
          <div className="glass-card space-y-4 rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-black dark:text-white">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
