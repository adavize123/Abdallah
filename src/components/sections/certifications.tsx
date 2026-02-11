"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Certifications() {
  if (certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications & scholarships"
          description="Continuous learning with industry-recognized programs."
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {certifications.map((item) => (
            <div
              key={`${item.title}-${item.issuer}`}
              className="glass-card rounded-3xl p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {item.issuer}
              </p>
              <p className="mt-3 text-sm font-semibold text-violet-500">
                {item.year}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
