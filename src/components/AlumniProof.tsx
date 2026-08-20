import { ArrowDown } from 'lucide-react';

const ALUMNI = [
  {
    before: 'Air Force pilot. No ESG or carbon background whatsoever.',
    after: 'Now Head of Quality at Air India — running corporate ESG audits.',
    name: 'G Murali Achary',
    role: 'Head, Quality Centre of Excellence · Air India',
  },
  {
    before: 'Environmental science degree. Zero carbon credentials or industry recognition.',
    after: 'Certified ESG professional — credentialed in GRI, BRSR, and GHG accounting.',
    name: 'Indrani Kabiraj',
    role: 'Environmental Professional · Sunanda Environmental',
  },
  {
    before: 'Construction technology background. No idea what embodied carbon meant.',
    after: 'Now Partner at Hi-Tech Systems, leading ESG project management.',
    name: 'Dhairya Joshi',
    role: 'Partner · Hi-Tech Systems · M.Tech (CTM), Nirma',
  },
];

export default function AlumniProof() {
  return (
    <section className="bg-esg-dark-bg px-5 py-16 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-esg-content">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-esg-mid">
          PROFESSIONALS WHO WERE EXACTLY WHERE YOU ARE
        </p>
        <h2 className="mt-2 text-[28px] font-bold leading-tight text-white">
          Different backgrounds. Same result.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {ALUMNI.map((alum, i) => (
            <div
              key={i}
              className="group rounded-esg-card border border-white/10 border-t-[3px] border-t-esg-green bg-white/5 p-[18px] transition-all hover:border-esg-green/30 hover:shadow-md hover:shadow-esg-green/10"
            >
              <span className="inline-block rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-white/45">
                Before
              </span>
              <p className="mt-3 text-[13px] leading-[1.6] text-white/72">
                {alum.before}
              </p>

              <div className="my-3 flex justify-center">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-esg-green/20">
                  <ArrowDown className="h-4 w-4 text-esg-mid esg-bounce" strokeWidth={2.5} />
                </span>
              </div>

              <span className="text-[9px] font-bold uppercase tracking-wider text-esg-mid">
                After
              </span>
              <p className="mt-2 text-[13px] font-bold leading-[1.5] text-white">
                {alum.after}
              </p>

              <div className="my-4 border-t border-white/10" />

              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-esg-green/20 text-[11px] font-bold text-esg-mid">
                  {alum.name.charAt(0)}
                </span>
                <div>
                  <p className="text-[13px] font-bold leading-tight text-white">{alum.name}</p>
                  <p className="mt-0.5 text-[11px] leading-tight text-white/45">{alum.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
