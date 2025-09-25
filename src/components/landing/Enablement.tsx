'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const enablementAddOns = [
  { 
    title: "One-slide pitch", 
    sub: "ROI math + pilot CTA for partner decks." 
  },
  { 
    title: "Founder FAQ", 
    sub: "Cost, timelines, SOC 2 speed: answers that land." 
  },
  { 
    title: "Scorecard template", 
    sub: "KPIs, SLAs, evidence trackers: ready to wire." 
  },
  { 
    title: "Auditor short-list", 
    sub: "Aligned to your sectors for frictionless audits." 
  },
];

export default function Enablement() {
  return (
    <section id="enablement" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8 max-w-3xl"
        >
          <h2 className="text-3xl font-black md:text-4xl mb-4">
            <span className="bg-gradient-to-r from-[#0032eb] to-[#0052ff] bg-clip-text text-transparent">Enablement Add-Ons</span>
          </h2>
          <p className="text-lg text-white/70">
            Plug-and-play artifacts to accelerate partner alignment.
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {enablementAddOns.map((addOn, i) => (
            <motion.div key={i} variants={fade}>
              <Card className="rounded-3xl border-[#0032eb]/30 bg-[#0032eb]/5 hover:bg-[#0032eb]/10 hover:border-blue-400/50 transition-all duration-300 h-full hover:scale-105 hover:shadow-lg">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-white mb-2">{addOn.title}</p>
                  <p className="text-sm text-white/70 leading-relaxed">{addOn.sub}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}