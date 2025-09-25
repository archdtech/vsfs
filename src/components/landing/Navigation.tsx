'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const palette = {
  primary: "#0032eb", // vibrant blue
  primaryDark: "#0026a8",
  ink: "#0B0E1A",
  inkMuted: "#0F1222",
  accent: "#0052ff", // brighter blue accent
  warm: "#FF9D66", // warm accent for contrast
};

const navigation = [
  { name: 'Solution', href: '#solution' },
  { name: 'Why It Wins', href: '#why' },
  { name: '90-Day Pilot', href: '#pilot' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070A16]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="group flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-[rgba(0,50,235,0.8)] to-[rgba(0,82,255,0.9)] shadow" />
          <span className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">AskDegree</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-white/70 hover:text-white transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            className="inline-flex items-center gap-2 rounded-full bg-[--btn] px-4 py-2 text-sm font-semibold shadow-lg ring-1 ring-white/10 transition hover:scale-[1.02]"
            style={{"--btn": `linear-gradient(90deg, ${palette.primary}, ${palette.accent})`}}
          >
            <a href="https://calendly.com/d/crjf-kqg-sp2/discovery-call" target="_blank" rel="noopener noreferrer">
              Let's Meet <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-[#070A16] border-white/10">
            <div className="flex flex-col gap-6 mt-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg text-white/90 hover:text-white transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                asChild
                className="inline-flex items-center gap-2 rounded-full bg-[--btn] px-4 py-2 text-sm font-semibold shadow-lg ring-1 ring-white/10 transition hover:scale-[1.02] w-full mt-4"
                style={{"--btn": `linear-gradient(90deg, ${palette.primary}, ${palette.accent})`}}
              >
                <a href="https://calendly.com/d/crjf-kqg-sp2/discovery-call" target="_blank" rel="noopener noreferrer" className="justify-center">
                  Let's Meet <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}