const OUTCOMES = [
  {
    icon: '📈',
    title: 'You understand why this market is real — right now',
    body: "India's CCTS, SEBI BRSR, and EU CBAM are live regulations with deadlines. You will understand exactly what they require, which companies are affected, and why 6,000+ roles are opening in the next 3 years.",
  },
  {
    icon: '💼',
    title: 'You know which role fits your background specifically',
    body: 'Carbon Accountant (₹12–25L), Climate Risk Analyst (₹15–30L), ESG Consultant (₹20–50L). Real salary bands, real job descriptions. You will know exactly which one your experience positions you for.',
  },
  {
    icon: '🗺️',
    title: 'You have your certification roadmap — no guessing',
    body: 'GHG Bootcamp to ISO 14064 to CCMP. In what order, how long each takes, what each costs, and what it unlocks on your resume. A clear sequence — not a list of options.',
  },
  {
    icon: '💬',
    title: 'Your actual question gets answered — live',
    body: 'The last 25 minutes is live Q&A with Viveck. Tell him your background — finance, engineering, EHS, MBA — and he tells you your exact next step. Not a pre-recorded answer. A real conversation.',
  },
];

export default function Outcomes() {
  return (
    <section className="bg-esg-dark-bg px-5 py-16 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-esg-content">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-esg-mid">
          YOUR 90 MINUTES, ACCOUNTED FOR
        </p>
        <h2 className="mt-2 text-[28px] font-bold leading-tight text-white">
          Not a lecture. A decision-making session.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {OUTCOMES.map((item, i) => (
            <div
              key={i}
              className="group rounded-esg-card border border-white/10 border-t-[3px] border-t-esg-green bg-white/5 p-5 transition-all hover:shadow-md hover:shadow-esg-green/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-esg-green/15 text-2xl">
                {item.icon}
              </div>
              <h3 className="mt-4 text-[15px] font-bold leading-tight text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.7] text-white/72">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
