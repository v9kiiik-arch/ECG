import { ArrowRight, Lock, Video, ShieldCheck } from 'lucide-react';
import { CTA_URLS, CTA_LABEL, PRICE } from '@/content';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-esg-dark-bg px-5 py-20 sm:px-6 sm:py-20">
      {/* Decorative accents */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-esg-green/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-esg-mid/10 blur-3xl" />

      <div className="relative mx-auto max-w-esg-final text-center">
        <h2 className="text-[30px] font-bold leading-tight tracking-[-0.02em] text-white">
          ₹299 to find out if this is the right move for you.
        </h2>
        <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.7] text-white/72">
          90 minutes. Live session. Full refund if it is not worth your time. Every
          quarter, another cohort of certified professionals enters the market.
          The only question is whether you are in it.
        </p>

        <div className="mt-6 flex items-center justify-center gap-2.5">
          <span className="text-[28px] font-bold text-white">{PRICE.current}</span>
          <span className="text-[15px] text-white/40 line-through">
            {PRICE.original}
          </span>
          <span className="rounded-full bg-esg-mid px-2.5 py-1 text-[11px] font-bold text-white">
            Save {PRICE.savings}
          </span>
        </div>

        <a
          id="final-cta"
          href={CTA_URLS.footer}
          className="group mt-7 flex w-full max-w-esg-cta items-center justify-center gap-2 rounded-esg-btn bg-esg-green px-6 py-[18px] text-base font-bold text-white transition-all hover:bg-esg-green-hover hover:shadow-lg hover:shadow-esg-green/20 active:scale-[0.98] mx-auto"
        >
          {CTA_LABEL}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-white/45">
          <span className="inline-flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5 text-esg-mid" /> Secure payment via Razorpay
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Video className="h-3.5 w-3.5 text-esg-mid" /> Recording for 30 days
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-esg-mid" /> Full refund guarantee
          </span>
        </div>
      </div>
    </section>
  );
}
