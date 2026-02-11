"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function About() {
  return (
    <section id="about" className="py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="About"
          title="Building human-centered, intelligent experiences"
          description="Ismaila blends data science with front-end craft to deliver products that feel intuitive, insightful, and reliable. From research to polished UI, he bridges intelligence and experience."
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 rounded-3xl border border-slate-200/70 bg-white/80 p-8 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 md:grid-cols-3"
        >
          <div>
            <p className="text-base font-semibold text-slate-900 dark:text-white">
              Background
            </p>
            <p className="mt-3 leading-7">
              Computer Science graduate with hands-on experience in machine
              learning, data analysis, and building modern web products.
            </p>
          </div>
          <div>
            <p className="text-base font-semibold text-slate-900 dark:text-white">
              What I do
            </p>
            <p className="mt-3 leading-7">
              Design and deploy ML-powered solutions, build responsive UIs, and
              lead product delivery through ABUHUB initiatives.
            </p>
          </div>
          <div>
            <p className="text-base font-semibold text-slate-900 dark:text-white">
              Career focus
            </p>
            <p className="mt-3 leading-7">
              Crafting trustworthy AI systems, data storytelling, and
              high-performance front-end experiences.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
