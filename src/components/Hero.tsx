import { ArrowRight, Video, ShieldCheck, Clock } from 'lucide-react';
import { CTA_URLS, CTA_LABEL, PRICE } from '@/content';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-esg-dark-bg px-5 py-20 sm:px-6 sm:py-[72px]">
      {/* Decorative accent */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-esg-green/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-esg-mid/10 blur-3xl" />

      <div className="relative mx-auto max-w-esg-hero text-left">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-esg-mid/30 bg-esg-mid/10 px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-esg-mid opacity-75 esg-pulse" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-esg-mid" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-esg-mid">
            Live webinar · Sunday 8:00 PM IST
          </span>
        </div>

        <h1 className="mt-5 text-[40px] font-bold leading-[1.18] tracking-[-0.02em] text-white">
          90 Minutes From Now, You Will Know Exactly Where You Stand in India's
          Fastest-Growing Career Market
        </h1>

        <p className="mt-5 max-w-[600px] text-base leading-[1.7] text-white/72">
          Right now, 6,000+ carbon and ESG roles are opening across India. Most
          professionals do not even know these jobs exist — let alone how to get
          one. This webinar changes that. You leave with a map, not more
          confusion.
        </p>

        {/* Quick info pills */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/70">
            <Clock className="h-3.5 w-3.5 text-esg-mid" /> 90 minutes
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/70">
            <Video className="h-3.5 w-3.5 text-esg-mid" /> Viveck J Suman, CFA
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/70">
            <ShieldCheck className="h-3.5 w-3.5 text-esg-mid" /> 30-day recording
          </span>
        </div>

        {/* Price block */}
        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-3">
            <span className="text-[32px] font-bold text-white">{PRICE.current}</span>
            <span className="text-base text-white/40 line-through">
              {PRICE.original}
            </span>
            <span className="rounded-full bg-esg-mid px-2.5 py-1 text-[11px] font-bold text-white esg-pulse">
              Save {PRICE.savings} — today only
            </span>
          </div>
          <p className="mt-2 text-xs text-white/45">
            Includes 30-day recording access · Full refund if you learn nothing new
          </p>
        </div>

        {/* CTA */}
        <a
          id="hero-cta"
          href={CTA_URLS.hero}
          className="group mt-6 flex w-full max-w-esg-cta items-center justify-center gap-2 rounded-esg-btn bg-esg-green px-6 py-[18px] text-base font-bold text-white transition-all hover:bg-esg-green-hover hover:shadow-lg hover:shadow-esg-green/20 active:scale-[0.98]"
        >
          {CTA_LABEL}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>

        {/* Trust line */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-esg-star text-sm">★★★★★</span>
          <span className="text-xs text-white/45">
            Viveck J Suman, CFA · 22+ years · 7,200+ professionals trained · 4.8 Google Reviews
          </span>
        </div>
      </div>
    </section>
  );
}
