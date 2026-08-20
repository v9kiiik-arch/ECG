import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Disqualification from '@/components/Disqualification';
import BeforeAfter from '@/components/BeforeAfter';
import AlumniProof from '@/components/AlumniProof';
import Outcomes from '@/components/Outcomes';
import AboutViveck from '@/components/AboutViveck';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import Guarantee from '@/components/Guarantee';
import FinalCTA from '@/components/FinalCTA';
import StickyMobileBar from '@/components/StickyMobileBar';

export default function App() {
  return (
    <div className="min-h-screen bg-esg-dark-bg">
      <NavBar />
      <main>
        <Hero />
        <Disqualification />
        <BeforeAfter />
        <AlumniProof />
        <Outcomes />
        <AboutViveck />
        <Gallery />
        <FAQ />
        <Guarantee />
        <FinalCTA />
      </main>
      <footer className="border-t border-white/10 bg-esg-dark-bg px-5 py-8 sm:px-6">
        <div className="mx-auto max-w-esg-content text-center">
          <p className="text-sm font-bold text-white">
            ESGPro<span className="text-esg-mid"> Mastery</span>
          </p>
          <p className="mt-2 text-xs text-white/45">
            ESGPro Mastery Institute · 22+ years in corporate finance and sustainability advisory
          </p>
          <p className="mt-3 text-xs text-white/45">
            © 2026 ESGPro Mastery. All rights reserved.
          </p>
        </div>
      </footer>
      <StickyMobileBar />
    </div>
  );
}
