'use client';

import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
    <BadgeCheck className="h-3.5 w-3.5" /> {children}
  </span>
);

const faqData = [
  {
    question: "What makes AskDegree different from traditional security consultants?",
    answer: "We provide portfolio-wide coverage at wholesale rates, eliminating the need for each portfolio company to hire individual CCO/CISO consultants. Our centralized approach ensures consistent security posture, shared resources, and significant cost savings of 30–60% compared to ad-hoc vendor engagements."
  },
  {
    question: "How quickly can our portfolio companies become SOC 2 compliant?",
    answer: "Our streamlined approach enables SOC 2 Type I readiness in weeks and establishes a Type II operating cadence within 90–120 days. We provide end-to-end support including control mapping, policy authoring, evidence collection, and auditor coordination."
  },
  {
    question: "What types of compliance frameworks do you support?",
    answer: "We support major compliance frameworks including SOC 2 Type I/II, HIPAA, PCI DSS, AML, and various investor due diligence requirements. Our standardized playbooks can be customized to meet specific industry and regulatory needs."
  },
  {
    question: "How does the 90-day pilot program work?",
    answer: "The pilot includes penetration testing for one portfolio company, quarterly vulnerability scans for up to 5 companies, a shared security playbook, and 10 hours of fractional advisory time. We deliver a comprehensive portfolio scorecard and readiness plan within 90 days."
  },
  {
    question: "What happens after the pilot program?",
    answer: "Following the pilot, we offer tiered annual portfolio programs with continued fractional CCO/CISO coverage, programmatic testing, compliance management, and portfolio-wide risk monitoring. Pilot participants receive a conversion credit toward annual programs."
  },
  {
    question: "How do you ensure consistent security across different portfolio companies?",
    answer: "We implement standardized playbooks, unified controls, and consistent KPIs across all portfolio companies. Our single dashboard provides real-time visibility into security posture, compliance status, and risk metrics across the entire portfolio."
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
          <Badge>Common Questions</Badge>
          <h2 className="text-3xl font-black md:text-4xl mt-4 mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our portfolio security and compliance services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-gray-200 rounded-xl px-4 data-[state=open]:bg-white transition-all hover:bg-gray-100 hover:border-gray-300"
                >
                  <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700 hover:no-underline transition-colors duration-300">
                    <span className="text-base font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            Still have questions?
          </p>
          <a
            href="https://calendly.com/d/crjf-kqg-sp2/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0032eb] to-[#0052ff] px-8 py-4 text-sm font-semibold text-white shadow-lg ring-1 ring-gray-200 transition hover:scale-[1.02]"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}