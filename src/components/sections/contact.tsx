"use client";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const isEmailJsConfigured = [serviceId, templateId, publicKey].every(
  (value) => value && !value.startsWith("your_")
);

export function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");
    setErrorMessage(null);
    try {
      if (!isEmailJsConfigured) {
        throw new Error("EmailJS is not configured");
      }
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      formRef.current.reset();
      setStatus("success");
    } catch (error) {
      console.error("EmailJS send failed", error);
      setStatus("error");
      setErrorMessage(
        !isEmailJsConfigured
          ? "Email service isn't configured yet. Please email directly."
          : "Unable to send. Please try again or email directly."
      );
    }
  };

  return (
    <section id="contact" className="py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something impactful"
          description="Have a project or collaboration in mind? Send a message and we’ll respond promptly."
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-[1.2fr_1fr]"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-card space-y-5 rounded-3xl p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Input label="Name" name="user_name" required />
              <Input label="Email" name="user_email" type="email" required />
            </div>
            <Input label="Subject" name="subject" required />
            <Textarea label="Message" name="message" required />
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>
            {status === "success" && (
              <p className="text-sm text-emerald-500">
                Message sent successfully. Thanks for reaching out!
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-rose-500">
                {errorMessage ??
                  "Unable to send. Please try again or email directly."}
              </p>
            )}
          </form>
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Reach out directly
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Prefer email? Contact {siteConfig.name} at
              </p>
              <p className="mt-2 text-sm font-semibold text-violet-500">
                {siteConfig.email}
              </p>
            </div>
            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Availability
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {siteConfig.availability}
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
