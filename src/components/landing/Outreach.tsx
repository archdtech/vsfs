'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const outreachSequence = [
  {
    tag: "Email 1 Intro (Day 0)",
    subjects: [
      "Portfolio-wide security & compliance at wholesale rates",
      "De-risk every startup in your portfolio without new headcount",
      "CCO/CISO-as-a-Service for studios & funds",
    ],
    body:
      "Hi [First Name],\nWe centralize security & compliance across portfolios so founders don't each hire their own CCO/CISO or chase vendors. You get:\n\n• Fractional officers (CCO, AML, CISO + support)\n• Portfolio pentesting & risk assessments\n• SOC 2 / HIPAA readiness playbooks\n\nAll at wholesale portfolio rates that save founders time and your team money. Open to a quick call to explore a 90-day pilot for [Studio/VC Name]?\n\nBest,\n[Your Name]",
  },
  {
    tag: "Email 2 Value Add (Day 3-5)",
    subjects: [
      "Faster time-to-market for your portfolio companies",
      "Pull forward enterprise deals by 1-2 quarters",
    ],
    body:
      "Hi [First Name],\nMany of your startups will hit enterprise/partner requirements (SOC 2, HIPAA, AML) before they're staffed. We embed fractional officers + pentesting at the portfolio level so every company is enterprise-ready sooner.\n\nWe propose a 90-day pilot: 1 pentest, quarterly scans for up to 5 companies, and 10 hours of officer advisory. Want me to send the one-pager + SOW?\n\nBest,\n[Your Name]",
  },
  {
    tag: "Email 3 Close (Day 10-12)",
    subjects: [
      "Let's de-risk your portfolio",
      "Standardize security across your next cohort",
    ],
    body:
      "Hi [First Name],\nQuick nudge—our portfolio pilot delivers CCO/CISO coverage, pentests, and a 90-day baseline without hiring overhead. If it lands, we convert to an annual program with tiered wholesale pricing and auditor alignment.\n\nOpen to trialing this with your next cohort or a subset of portfolio companies?\n\nBest,\n[Your Name]",
  },
];

export default function Outreach() {
  return (
    <section id="outreach" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8 max-w-3xl"
        >
          <h2 className="text-3xl font-black md:text-4xl mb-4">
            <span className="bg-gradient-to-r from-[#0032eb] to-[#0052ff] bg-clip-text text-transparent">Outreach Sequence</span>
          </h2>
          <p className="text-lg text-white/70">
            Copy-paste ready. Personalize the bracketed fields and ship.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {outreachSequence.map((x, i) => (
            <motion.div
              key={i}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Card className="rounded-3xl border-[#0032eb]/30 bg-[#0032eb]/5 hover:bg-[#0032eb]/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center rounded-full bg-[#0032eb]/20 text-white/90 border border-[#0032eb]/30 px-4 py-1.5 text-sm backdrop-blur">
                      {x.tag}
                    </div>
                    <span className="text-xs text-white/50">Copy-ready</span>
                  </div>
                  
                  <h4 className="text-sm font-semibold text-white mb-2">Subject options</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80 mb-4">
                    {x.subjects.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                  
                  <h4 className="text-sm font-semibold text-white mb-2">Body</h4>
                  <pre className="mt-2 whitespace-pre-wrap rounded-xl bg-black/30 p-4 text-xs leading-relaxed text-white/80 font-mono">
                    {x.body}
                  </pre>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* LinkedIn DM card spans full on large */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="rounded-3xl border-[#0032eb]/30 bg-gradient-to-r from-[#0032eb]/5 to-[#6DE1FF]/5 hover:bg-[#0032eb]/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-3">
                  <div className="inline-flex items-center rounded-full bg-[#0032eb]/20 text-white/90 border border-[#0032eb]/30 px-4 py-1.5 text-sm backdrop-blur">
                    LinkedIn DM (Short)
                  </div>
                </div>
                <pre className="whitespace-pre-wrap rounded-xl bg-black/30 p-4 text-sm leading-relaxed text-white/80 font-mono">
Hi [First Name]—love how [Studio/VC] scales founders. We run fractional CCO/CISO + pentests & risk management at wholesale portfolio rates. Funds de-risk investments; startups get enterprise-grade security from day one. Up for a 15-minute chat?
                </pre>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}