"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <AnimatedSection id="contact" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Contact"
          title="Let's connect"
          description="Open to full-time roles, freelance projects, and collaboration opportunities."
        />

        <div className="mt-10 max-w-2xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card p-10 text-center"
            >
              <CheckCircle size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground">Message ready!</h3>
              <p className="text-muted mt-2 text-sm">
                Your email client should open shortly. Or reach me at{" "}
                <a href={`mailto:${personalInfo.email}`} className="text-accent hover:underline">
                  {personalInfo.email}
                </a>
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-5 text-sm text-accent hover:text-accent-light"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all outline-none"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all outline-none resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button type="submit" disabled={loading} className="btn-primary gap-2">
                {loading ? "Opening email..." : (
                  <>
                    Send Message
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
