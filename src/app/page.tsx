import Navigation from '@/components/landing/Navigation';
import Hero from '@/components/landing/Hero';
import Problem from '@/components/landing/Problem';
import Solution from '@/components/landing/Solution';
import WhyItWins from '@/components/landing/WhyItWins';
import Outcomes from '@/components/landing/Outcomes';
import PilotSOW from '@/components/landing/PilotSOW';
import FAQ from '@/components/landing/FAQ';
import NextSteps from '@/components/landing/NextSteps';
import Footer from '@/components/landing/Footer';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Separator className="border-white/10" />
        <Solution />
        <WhyItWins />
        <Separator className="border-white/10" />
        <Outcomes />
        <PilotSOW />
        <Separator className="border-white/10" />
        <FAQ />
        <NextSteps />
      </main>
      <Footer />
    </div>
  );
}