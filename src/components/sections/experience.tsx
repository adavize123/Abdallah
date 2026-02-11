"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Experience"
          title="Education & leadership"
          description="A timeline of academic achievements and ABUHUB leadership milestones."
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {experience.map((item) => (
            <div
              key={`${item.title}-${item.organization}`}
              className="glass-card rounded-3xl p-6"
            >
              <div className="flex flex-col justify-between gap-3 md:flex-row">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {item.organization}
                  </p>
                </div>
                <p className="text-sm font-semibold text-violet-500">
                  {item.period}
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
