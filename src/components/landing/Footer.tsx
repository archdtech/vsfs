'use client';

import { motion } from 'framer-motion';

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070A16] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-xs text-white/60 sm:flex-row lg:px-8">
        <p>© {new Date().getFullYear()} AskDegree — Your Trusted Compliance Partner</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#top" className="hover:text-white">Back to top</a>
        </div>
      </div>
    </footer>
  );
}