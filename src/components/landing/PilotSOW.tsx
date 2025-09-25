'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, FolderGit2, Building2, ArrowRight, Rocket, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
    <BadgeCheck className="h-3.5 w-3.5" /> {children}
  </span>
);

export default function PilotSOW() {
  return (
    <section id="pilot" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-black md:text-4xl">90 Day Portfolio Pilot Scope of Work</h2>
          <Badge>Low lift onboarding • Fixed fee</Badge>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="mb-4 text-xl font-bold">Services (included)</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4"/> Penetration Test for one selected portfolio company (web app or API).</li>
              <li className="flex items-start gap-2"><Zap className="mt-0.5 h-4 w-4"/> Quarterly Vulnerability Scans for up to 5 companies (external attack surface).</li>
              <li className="flex items-start gap-2"><FolderGit2 className="mt-0.5 h-4 w-4"/> Shared Security Playbook with 90 day baseline controls, policies, training, and SLAs.</li>
              <li className="flex items-start gap-2"><Building2 className="mt-0.5 h-4 w-4"/> Fractional Advisory (Trial) with 10 hours of CCO/AML/CISO time.</li>
            </ul>
            <h3 className="mt-6 text-xl font-bold">Deliverables</h3>
            <ul className="mt-2 space-y-3 text-sm text-white/80">
              <li>Executive pentest report, technical findings, remediation plan.</li>
              <li>Scan reports with severity, asset inventory, ticket ready tasks.</li>
              <li>Portfolio Playbook (PDF) + implementation walkthrough.</li>
              <li>Advisory summary with prioritized recommendations & next steps.</li>
            </ul>
          </motion.div>

          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="mb-4 text-xl font-bold">Timeline</h3>
            <ol className="space-y-3 text-sm text-white/80">
              <li><strong>Day 0–7:</strong> Kickoff, asset intake, target selection, playbook distribution.</li>
              <li><strong>Day 8–45:</strong> Pentest, scans, advisory sessions, remediation coaching.</li>
              <li><strong>Day 46–75:</strong> Evidence collection, policy tailoring, KPI wiring.</li>
              <li><strong>Day 76–90:</strong> Portfolio readout, scorecard, readiness plan, annual proposal.</li>
            </ol>
            <h3 className="mt-6 text-xl font-bold">Commercials</h3>
            <ul className="mt-2 space-y-3 text-sm text-white/80">
              <li>Flat pilot fee: <em>[$X]</em> (wholesale). Travel/NRC at cost if required.</li>
              <li>Conversion credit of <em>[$Y]</em> toward annual portfolio program (30 day window).</li>
            </ul>
            <h3 className="mt-6 text-xl font-bold">Success Criteria</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-white/80">
              <li>≥ 1 company pentested; 5 companies scanned; playbook adopted; KPIs live.</li>
              <li>Board/IC ready portfolio security scorecard delivered.</li>
            </ul>
          </motion.div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[rgba(0,50,235,1)] to-[rgba(0,82,255,1)] px-6 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 transition hover:scale-[1.02]"
          >
            <a id="cta" href="https://calendly.com/d/crjf-kqg-sp2/discovery-call" target="_blank" rel="noopener noreferrer">
              Schedule Kickoff <ArrowRight className="h-4 w-4"/>
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-all duration-300 hover:border-[#0032eb] hover:bg-[#0032eb] hover:text-white hover:shadow-lg hover:scale-[1.02]"
          >
            <a href="#faq">
              See FAQ <ArrowRight className="h-4 w-4"/>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}