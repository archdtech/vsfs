'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Rocket, ArrowRight, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const palette = {
  primary: "#0032eb", // vibrant blue
  primaryDark: "#0026a8",
  ink: "#0B0E1A",
  inkMuted: "#0F1222",
  accent: "#0052ff", // brighter blue accent
  warm: "#FF9D66", // warm accent for contrast
};

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

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-white/10 to-white/5 px-4 py-1.5 text-[13px] text-white/80 ring-1 ring-white/10 backdrop-blur">
    {children}
  </span>
);

export default function Hero() {
  return (
    <section id="top" className="relative pt-10 pb-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-1">
        <div className="relative rounded-3xl bg-[#090F22]/60 p-10 md:p-16">
          {/* Animated orbs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="pointer-events-none absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full bg-gradient-to-tr from-[rgba(0,50,235,0.65)] to-[rgba(0,82,255,0.6)] blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="pointer-events-none absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-[rgba(255,157,102,0.35)] to-[rgba(0,82,255,0.35)] blur-3xl"
          />

          <motion.div variants={fade} initial="hidden" animate="show" className="max-w-3xl">
            <Badge>Compliance & Security Ops Management</Badge>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] md:text-6xl">
              CCO/CISO-as-a-Service for Venture Studios & Funds<br/>
              <span className="bg-gradient-to-r from-[#0032eb] to-[#0052ff] bg-clip-text text-transparent"> Scale Coverage, Slash Cost</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base/7 text-white/70 md:text-lg/8">
              AskDegree centralizes security and compliance across your studio or fund so every company meets enterprise and regulatory requirements—without the headcount, vendor sprawl, or delays.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Pill>Wholesale portfolio pricing</Pill>
              <Pill>Auditor-aligned</Pill>
              <Pill>Turnkey execution</Pill>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[rgba(0,50,235,1)] to-[rgba(0,82,255,1)] px-6 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 transition hover:scale-[1.02]"
              >
                <a href="https://calendly.com/d/crjf-kqg-sp2/discovery-call" target="_blank" rel="noopener noreferrer">
                  Run the 90 Day Pilot <Rocket className="h-4 w-4"/>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-all duration-300 hover:border-[#0032eb] hover:bg-[#0032eb] hover:text-white hover:shadow-lg hover:scale-[1.02]"
              >
                <a href="#solution">
                  Explore Solution <ArrowRight className="h-4 w-4"/>
                </a>
              </Button>
            </div>
          </motion.div>

          {/* KPI cards */}
          <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Cost Advantage", value: "30–60%", sub: "vs ad‑hoc vendors" },
              { label: "Time to Revenue", value: "1–2 qtrs", sub: "pulled forward" },
              { label: "SOC 2 Type II", value: "90–120d", sub: "operating cadence" },
              { label: "Coverage", value: "Portfolio", sub: "single dashboard" },
            ].map((k, i) => (
              <motion.div key={i} variants={fade} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                <p className="text-xs text-white/60">{k.label}</p>
                <p className="mt-1 text-2xl font-extrabold tracking-tight">{k.value}</p>
                <p className="text-xs text-white/60">{k.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}