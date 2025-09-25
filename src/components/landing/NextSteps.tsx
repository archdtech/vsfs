'use client';

import { motion } from 'framer-motion';
import { Rocket, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
    <BadgeCheck className="h-3.5 w-3.5" /> {children}
  </span>
);

export default function NextSteps() {
  return (
    <section id="next" className="py-20 md:py-28 pb-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-black md:text-4xl">Next Steps</h2>
          <Badge>Fast path to value</Badge>
        </div>
        <motion.ol variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Select 3–5 target companies and a pilot cohort lead.",
            "Confirm budget [$X] and pilot start week.",
            "Schedule kickoff (60 mins) and asset intake.",
          ].map((step, i) => (
            <motion.li key={i} variants={fade} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-[rgba(0,50,235,0.7)] to-[rgba(0,82,255,0.7)] text-sm font-bold">{i + 1}</span>
              <p className="text-sm text-white/80">{step}</p>
            </motion.li>
          ))}
        </motion.ol>
        <div className="mt-8">
          <Button
            asChild
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[rgba(0,50,235,1)] to-[rgba(0,82,255,1)] px-6 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 transition hover:scale-[1.02]"
          >
            <a href="https://calendly.com/d/crjf-kqg-sp2/discovery-call" target="_blank" rel="noopener noreferrer">
              Run the 90‑Day Pilot <Rocket className="h-4 w-4"/>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}