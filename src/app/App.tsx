import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { AboutSection } from '@/app/components/AboutSection';
import { ProblemSolution } from '@/app/components/ProblemSolution';
import { ProgramDetails } from '@/app/components/ProgramDetails';
import { ImpactSection } from '@/app/components/ImpactSection';
import { WhyDonors } from '@/app/components/WhyDonors';
import { DonateSection } from '@/app/components/DonateSection';
import { Footer } from '@/app/components/Footer';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { Toaster } from '@/app/components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProblemSolution />
        <ProgramDetails />
        <ImpactSection />
        <WhyDonors />
        <DonateSection />
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster />
    </div>
  );
}