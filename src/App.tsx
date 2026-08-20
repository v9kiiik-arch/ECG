import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Disqualification from '@/components/Disqualification';
import BeforeAfter from '@/components/BeforeAfter';
import AlumniProof from '@/components/AlumniProof';
import Outcomes from '@/components/Outcomes';
import AboutViveck from '@/components/AboutViveck';
import FAQ from '@/components/FAQ';
import Guarantee from '@/components/Guarantee';
import FinalCTA from '@/components/FinalCTA';
import StickyMobileBar from '@/components/StickyMobileBar';

export default function App() {
  return (
    <div className="min-h-screen bg-esg-page">
      <NavBar />
      <main>
        <Hero />
        <Disqualification />
        <BeforeAfter />
        <AlumniProof />
        <Outcomes />
        <AboutViveck />
        <FAQ />
        <Guarantee />
        <FinalCTA />
      </main>
      <footer className="border-t border-esg-border bg-white px-5 py-8 sm:px-6">
        <div className="mx-auto max-w-esg-content text-center">
          <p className="text-sm font-bold text-esg-dark-bg">
            ESGPro<span className="text-esg-green"> Mastery</span>
          </p>
          <p className="mt-2 text-xs text-esg-muted">
            ESGPro Mastery Institute · 22+ years in corporate finance and sustainability advisory
          </p>
          <p className="mt-3 text-xs text-esg-muted">
            © 2026 ESGPro Mastery. All rights reserved.
          </p>
        </div>
      </footer>
      <StickyMobileBar />
    </div>
  );
}
