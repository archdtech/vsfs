'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Target, FileText, LineChart, BadgeCheck } from 'lucide-react';

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

export default function Solution() {
  return (
    <section id="solution" className="relative py-20 md:py-28">
      {/* Cover Image Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/images/solution-cover.jpg" 
          alt="Security and Compliance Solution Dashboard" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>
      
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black md:text-4xl text-white">Our Solution</h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            <BadgeCheck className="h-3.5 w-3.5" /> Centralized Coverage for the Entire Portfolio
          </span>
        </div>
        <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: ShieldCheck,
              title: "Fractional Officers",
              copy: "On-demand CCO, AML Officer, CISO + analyst/manager bandwidth. Elastic consumption with zero fixed overhead.",
            },
            {
              icon: Target,
              title: "Penetration Testing",
              copy: "On-demand or programmatic web/app/API pentests, risk reviews, and vuln mgmt with consolidated reporting.",
            },
            {
              icon: FileText,
              title: "SOC 2 & HIPAA Readiness",
              copy: "Control mapping, policy authoring, auditor coordination, and evidence rooms orchestrated end-to-end.",
            },
            {
              icon: LineChart,
              title: "Standardized Playbooks",
              copy: "Unified controls, KPIs, SLAs, and alerting; single view for GPs and operating partners.",
            },
          ].map(({ icon: Icon, title, copy }, i) => (
            <motion.div key={i} variants={fade} className="group rounded-3xl border border-gray-200 bg-white p-6 transition hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-tr from-[rgba(0,50,235,0.5)] to-[rgba(0,82,255,0.5)] p-2.5">
                <Icon className="h-5 w-5 text-white"/>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-700">{copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}