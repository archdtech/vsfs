'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faShieldAlt,
  faFileContract,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Animated timeline section for the 90‑Day Portfolio Pilot.
 *
 * This component presents the phases of the pilot as a sequence of cards
 * connected by a horizontal progress line on large screens and a stacked
 * vertical layout on small screens. Each card animates into view when
 * scrolled into the viewport. The theme color (#0032EB) is used throughout
 * for highlights and icons.
 */
const phases = [
  {
    title: "Day 0–7",
    description:
      "Kickoff, asset intake, target selection and playbook distribution.",
    icon: faPlayCircle,
  },
  {
    title: "Day 8–45",
    description:
      "Pentest execution, vulnerability scans, advisory sessions and remediation coaching.",
    icon: faShieldAlt,
  },
  {
    title: "Day 46–75",
    description:
      "Evidence collection, policy tailoring and KPI wiring.",
    icon: faFileContract,
  },
  {
    title: "Day 76–90",
    description:
      "Portfolio readout, scorecard, readiness plan and annual proposal.",
    icon: faFlagCheckered,
  },
];

const SowTimelineSection = () => {
  const containerRef = useRef(null);
  // Trigger animations once when the timeline enters the viewport.
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className="py-16 bg-black" id="sow-timeline-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0032EB] mb-2">
            90 Day Portfolio Pilot Scope of Work
          </h2>
          <p className="text-white/70">Low lift onboarding • Fixed fee</p>
        </div>
        {/* Timeline */}
        <div
          ref={containerRef}
          className="relative flex flex-col items-center lg:items-stretch lg:flex-row"
        >
          {/* Horizontal line for large screens */}
          <motion.div
            className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-white/20"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "left center" }}
          />
          {phases.map((phase, idx) => {
            // Delay each card animation slightly for a cascading effect
            const delay = 0.2 * idx;
            return (
              <motion.div
                key={phase.title}
                className="relative z-10 flex-1 flex flex-col items-center text-center lg:text-left lg:items-start p-4"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ delay, duration: 0.6, ease: "easeOut" }}
              >
                {/* Connector circle */}
                <div className="hidden lg:block absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <span
                    className="block w-4 h-4 rounded-full border-2 border-[#0032EB] bg-black"
                    style={{ zIndex: 20 }}
                  />
                </div>
                {/* Card */}
                <div className="bg-black border border-white/20 rounded-xl shadow-lg w-full px-6 py-8">
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <FontAwesomeIcon
                      icon={phase.icon}
                      className="text-[#0032EB] mr-2 text-xl"
                    />
                    <h3 className="text-xl font-semibold text-[#0032EB]">
                      {phase.title}
                    </h3>
                  </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Services and deliverables grid */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Services */}
          <div>
            <h4 className="text-2xl font-bold text-[#0032EB] mb-4">
              Services (included)
            </h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li>
                <strong className="text-[#0032EB]">Penetration Test</strong>
                <br />One selected portfolio company (web app or API).
              </li>
              <li>
                <strong className="text-[#0032EB]">Quarterly Vulnerability Scans</strong>
                <br />Up to 5 companies (external attack surface).
              </li>
              <li>
                <strong className="text-[#0032EB]">Shared Security Playbook</strong>
                <br />90 day baseline with controls, policies, training and SLAs.
              </li>
              <li>
                <strong className="text-[#0032EB]">Fractional Advisory (Trial)</strong>
                <br />10 hours of CCO/AML/CISO time.
              </li>
            </ul>
          </div>
          {/* Deliverables */}
          <div>
            <h4 className="text-2xl font-bold text-[#0032EB] mb-4">
              Deliverables
            </h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li>
                <strong className="text-[#0032EB]">Pentest report</strong> with
                executive summary, technical findings and remediation plan.
              </li>
              <li>
                <strong className="text-[#0032EB]">Scan reports</strong> with
                severity, asset inventory and ticket ready tasks.
              </li>
              <li>
                <strong className="text-[#0032EB]">Portfolio Playbook (PDF)</strong> plus
                implementation walkthrough.
              </li>
              <li>
                <strong className="text-[#0032EB]">Advisory summary</strong> with
                prioritized recommendations &amp; next steps.
              </li>
            </ul>
          </div>
        </div>
        {/* Commercials and Success Criteria */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h4 className="text-2xl font-bold text-[#0032EB] mb-4">Commercials</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Flat pilot fee: <span className="font-semibold text-white">[$X]</span> (wholesale). Travel/NRC at cost if required.
              <br />
              Conversion credit of <span className="font-semibold text-white">[$Y]</span> toward annual portfolio program (30 day window).
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-[#0032EB] mb-4">Success Criteria</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              ≥ 1 company pentested; 5 companies scanned; playbook adopted;
              KPIs live. Board/IC ready portfolio security scorecard delivered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SowTimelineSection;