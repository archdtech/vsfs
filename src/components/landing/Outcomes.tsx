'use client';

import { motion } from 'framer-motion';

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export default function Outcomes() {
  return (
    <section id="outcomes" className="relative py-20 md:py-28">
      {/* Cover Image Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/images/outcomes-cover.jpg" 
          alt="Business professionals reviewing compliance outcomes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/40" />
      </div>
      
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-black md:text-4xl text-white">Outcomes</h2>
          <p className="mt-3 text-white/80">Measure what matters. We wire KPIs, evidence, and SLAs portfolio‑wide.</p>
        </div>
        <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 md:grid-cols-2">
          {[
            { title: "SOC 2 Type I", sub: "Readiness in weeks; Type II cadence by 90–120d." },
            { title: "HIPAA Baseline", sub: "BAAs, risk register, and training complete." },
            { title: "Programmatic Testing", sub: "Pentests + quarterly scans with tracked SLAs." },
            { title: "Portfolio Scorecard", sub: "Coverage %, open risks, TTC, audit status." },
          ].map((o, i) => (
            <motion.div key={i} variants={fade} className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:shadow-lg">
              <p className="text-lg font-semibold text-gray-900">{o.title}</p>
              <p className="text-sm text-gray-700">{o.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}