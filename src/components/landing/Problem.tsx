'use client';

import { motion } from 'framer-motion';
import { Layers, Gauge, Users, TimerReset } from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Problem() {
  return (
    <section id="problem" className="py-20 md:py-28 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black md:text-4xl text-gray-900">The Problem</h2>
            <p className="mt-4 max-w-xl text-gray-600">
              Early teams drown in fragmented, expensive asks (SOC 2, HIPAA, AML, PCI, investor DDQs) and burn months reinventing basics. Studios and funds can't see portfolio risk in one pane of glass or enforce baseline readiness consistently. Point vendors and one‑off hires inflate cost, elongate sales cycles, and create audit churn.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              { icon: Layers, title: "Fragmented Requests", copy: "Founders juggle SOC2/HIPAA/AML with no leverage." },
              { icon: Gauge, title: "No Portfolio View", copy: "Zero risk telemetry across companies." },
              { icon: Users, title: "Hiring Overhead", copy: "One-off CCO/CISO hires stall velocity." },
              { icon: TimerReset, title: "Audit Churn", copy: "Evidence chaos, rework, and delays." },
            ].map(({ icon: Icon, title, copy }, idx) => (
              <div key={idx} className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <div className="mt-1 rounded-xl bg-gradient-to-br from-[rgba(0,50,235,0.4)] to-[rgba(0,82,255,0.3)] p-2">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{title}</p>
                  <p className="text-sm text-gray-600">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}