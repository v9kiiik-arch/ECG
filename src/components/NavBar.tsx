import { Leaf } from 'lucide-react';
import { CTA_URLS } from '@/content';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 h-[60px] border-b border-white/10 bg-esg-dark-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-esg-content items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-esg-green">
            <Leaf className="h-4 w-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-white">ESGPro</span>
            <span className="text-esg-mid"> Mastery</span>
          </span>
        </div>
        <a
          href={CTA_URLS.nav}
          className="rounded-esg-nav-btn bg-esg-green px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-esg-green-hover hover:shadow-sm active:scale-[0.97]"
        >
          Register — ₹299
        </a>
      </div>
    </header>
  );
}
