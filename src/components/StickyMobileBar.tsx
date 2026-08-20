import { ArrowRight } from 'lucide-react';
import { CTA_URLS, PRICE } from '@/content';

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-between border-t border-white/10 bg-esg-dark-bg/95 px-4 shadow-[0_-2px_8px_rgba(0,0,0,0.3)] backdrop-blur-sm md:hidden">
      <div className="flex items-baseline gap-2">
        <span className="text-lg font-bold text-white">{PRICE.current}</span>
        <span className="text-[13px] text-white/40 line-through">
          {PRICE.original}
        </span>
      </div>
      <a
        href={CTA_URLS.stickyMobile}
        className="group flex items-center gap-1.5 rounded-esg-nav-btn bg-esg-green px-[18px] py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-esg-green-hover active:scale-[0.97]"
      >
        Register
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
