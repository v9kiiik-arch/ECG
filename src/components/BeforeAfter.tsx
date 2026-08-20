const ROWS = [
  {
    before:
      'You know climate is becoming a career but have no idea how to turn that into a job or a raise in your specific situation.',
    after:
      'You know exactly which role fits your background, what it pays, and what you need to do next week to move toward it.',
  },
  {
    before:
      'You have heard of BRSR and CCTS but if someone asked you to explain them right now, you could not do it confidently.',
    after:
      "You can explain India's carbon regulations clearly to anyone — a colleague, a hiring manager, or your own boss.",
  },
  {
    before:
      'You feel behind. Everyone seems to be upskilling and you are not sure where to even start without wasting money on the wrong thing.',
    after:
      'You have a step-by-step certification roadmap specific to your current role and background — not a generic slide.',
  },
  {
    before:
      '₹54,999 for a programme feels like a big risk when you are not even sure the market is real or that you will get a job from it.',
    after:
      'You have seen the job listings, salary data (₹12L–50L), and alumni proof. You can now make a confident decision — yes or no.',
  },
];

export default function BeforeAfter() {
  return (
    <section className="bg-esg-stripe px-5 py-16 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-esg-content">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-esg-green">
          WHAT CHANGES IN 90 MINUTES
        </p>
        <h2 className="mt-2 text-[28px] font-bold leading-tight text-esg-dark">
          You walk in confused. You walk out with a plan.
        </h2>

        {/* Desktop table */}
        <div className="mt-8 hidden overflow-hidden border border-esg-border sm:block">
          <div className="grid grid-cols-2">
            <div className="bg-esg-before-head px-[18px] py-3.5 text-[11px] font-bold uppercase tracking-wider text-esg-muted">
              Where you are right now
            </div>
            <div className="border-l-[3px] border-esg-green bg-esg-green px-[18px] py-3.5 text-[11px] font-bold uppercase tracking-wider text-white">
              Where you are after 90 minutes
            </div>
          </div>
          {ROWS.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 border-t border-esg-border"
            >
              <div
                className={`px-[18px] py-3.5 text-[13px] leading-[1.6] ${
                  i % 2 === 0 ? 'bg-white' : 'bg-esg-stripe'
                } text-esg-mid-text`}
              >
                {row.before}
              </div>
              <div
                className={`border-l-[3px] border-esg-green px-[18px] py-3.5 text-[13px] leading-[1.6] ${
                  i % 2 === 0 ? 'bg-esg-light' : 'bg-esg-after-even'
                } text-esg-dark`}
              >
                {row.after}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile stacked blocks */}
        <div className="mt-8 space-y-4 sm:hidden">
          {ROWS.map((row, i) => (
            <div key={i}>
              <div className="bg-esg-before-head px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-esg-muted">
                Before
              </div>
              <div className="border border-b-0 border-esg-border bg-white px-4 py-3.5 text-[13px] leading-[1.6] text-esg-mid-text">
                {row.before}
              </div>
              <div className="border-l-[3px] border-esg-green bg-esg-green px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-white">
                After
              </div>
              <div className="border border-t-0 border-esg-border bg-esg-light px-4 py-3.5 text-[13px] leading-[1.6] text-esg-dark">
                {row.after}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
