import { Check, X } from 'lucide-react';

const FOR_YOU = [
  'You are a working professional in India, 26–42, in finance, CA, MBA, engineering, EHS, or consulting',
  'You want to know if the carbon market is real before committing time or money to it',
  'Your company is listed, exports to Europe, or operates in cement, aluminium, textiles, pulp and paper, refining or petrochemicals',
  'You feel behind on sustainability skills and want one clear map, not more options',
  'You want real job titles and salary bands — not vague promises about green careers',
];

const NOT_FOR_YOU = [
  'You are looking for a free overview — the ₹299 is intentional, it filters for serious people',
  'You have no intention of building a carbon career and are browsing casually',
  'You want a recording to "watch someday" but know you probably never will',
];

export default function Disqualification() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-esg-content">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-esg-green">
          IS THIS FOR YOU?
        </p>
        <h2 className="mt-2 text-[28px] font-bold leading-tight text-esg-dark">
          This webinar is built for one type of person.
        </h2>

        <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-esg-card border border-esg-border md:grid-cols-2">
          {/* For you */}
          <div className="bg-esg-xlight p-6 sm:p-7">
            <h3 className="flex items-center gap-2 text-base font-bold text-esg-green">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-esg-green/10">
                <Check className="h-4 w-4 shrink-0" strokeWidth={3} />
              </span>
              This IS for you if...
            </h3>
            <ul className="mt-5 space-y-4">
              {FOR_YOU.map((item, i) => (
                <li key={i} className="flex gap-3 text-[13px] leading-[1.6] text-esg-mid-text">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-esg-green/10">
                    <Check className="h-3 w-3 shrink-0 text-esg-green" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div className="border-t border-esg-border bg-esg-coral-light p-6 sm:p-7 md:border-t-0 md:border-l">
            <h3 className="flex items-center gap-2 text-base font-bold text-esg-coral">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-esg-coral/10">
                <X className="h-4 w-4 shrink-0" strokeWidth={3} />
              </span>
              This is NOT for you if...
            </h3>
            <ul className="mt-5 space-y-4">
              {NOT_FOR_YOU.map((item, i) => (
                <li key={i} className="flex gap-3 text-[13px] leading-[1.6] text-esg-mid-text">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-esg-coral/10">
                    <X className="h-3 w-3 shrink-0 text-esg-coral" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
