import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="bg-white px-5 py-12 sm:px-6 sm:py-12">
      <div className="relative mx-auto max-w-esg-guarantee overflow-hidden rounded-xl border border-esg-mid bg-esg-light px-9 py-9 text-center">
        {/* Decorative accent */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-esg-mid/5 blur-2xl" />

        <div className="relative">
          <div className="mx-auto mb-3.5 flex h-14 w-14 items-center justify-center rounded-full bg-esg-green/10">
            <ShieldCheck className="h-7 w-7 text-esg-green" strokeWidth={2} />
          </div>
          <h2 className="text-[22px] font-bold text-esg-dark-bg">
            Full refund if you learn nothing new. No questions asked.
          </h2>
          <p className="mt-4 text-sm leading-[1.75] text-esg-mid-text">
            Attend the full webinar. If you walk away without a single new insight —
            a clearer picture of your options, a better sense of your next step —
            message us within 48 hours and we return every rupee. No forms. No
            waiting. In 4+ years and 7,200+ trained professionals, we have almost
            never been asked to honour this. The session earns its price. But we
            want you to register knowing the risk is entirely ours.
          </p>
        </div>
      </div>
    </section>
  );
}
