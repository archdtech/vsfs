'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export default function WhyItWins() {
  return (
    <section id="why" className="py-20 md:py-28 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-black md:text-4xl text-gray-900">Why It Wins</h2>
          <p className="mt-3 text-gray-600">Hard ROI. Faster revenue. Cleaner audits. One accountable partner from policy to audit.</p>
        </div>
        <motion.ul variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Portfolio economics", sub: "Wholesale rates beat ad-hoc vendor spend by 30–60%." },
            { title: "Time to revenue", sub: "Pull forward enterprise deals by 1–2 quarters via faster readiness." },
            { title: "Risk visibility", sub: "One dashboard, consistent posture, fewer surprises in IC." },
            { title: "No vendor roulette", sub: "Single throat to choke from policy to audit." },
          ].map((x, idx) => (
            <motion.li key={idx} variants={fade} className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-[rgba(0,82,255,0.85)]"/>
              <div>
                <p className="font-semibold text-gray-900">{x.title}</p>
                <p className="text-sm text-gray-600">{x.sub}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}