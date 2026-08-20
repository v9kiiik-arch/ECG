const CREDENTIALS = [
  'CFA Charterholder',
  'Sustainable Investing Cert — CFA Institute (USA)',
  'ESG Risk & Opportunity Cert — Univ. of Pennsylvania',
  'Ex–Grant Thornton ME',
  'CFO at LML EV and NEC Solar',
];

const COMPANIES = [
  'Protiviti',
  'KPMG',
  'Barclays',
  'Bayer',
  'Genpact',
  'WWF',
  'Federal Bank',
  'HP Enterprises',
  'Suzlon',
];

export default function AboutViveck() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-esg-content">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-esg-green">
          YOUR HOST FOR THIS SESSION
        </p>

        <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
          {/* Photo */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-esg-green/10 blur-xl" />
            <div
              className="relative flex h-40 w-40 items-center justify-center rounded-full border-[3px] border-esg-green bg-esg-light bg-cover bg-center bg-no-repeat text-center text-[13px] text-transparent shadow-lg shadow-esg-green/10"
              style={{ backgroundImage: "url('/images/profile/vivek_photo.jpeg')" }}
            >
              [Viveck's photo]
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-[22px] font-bold text-esg-dark">
              Viveck J Suman, CFA
            </h2>
            <p className="mt-1 text-[13px] text-esg-muted">
              Founder and Managing Director · ESGPro Mastery Institute
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
              {CREDENTIALS.map((cred, i) => (
                <span
                  key={i}
                  className="rounded-esg-pill bg-esg-light px-2.5 py-1 text-[11px] font-bold text-esg-green"
                >
                  {cred}
                </span>
              ))}
            </div>

            <p className="mt-5 text-[13px] leading-[1.7] text-esg-mid-text">
              22+ years in corporate finance and sustainability advisory. Viveck
              has trained 7,200+ professionals across India and the Middle East —
              from Air Force pilots moving into ESG auditing to finance
              professionals building carbon advisory practices. He teaches from
              live mandates — including ESG rating improvement for an oil and gas
              conglomerate and a USD 1-billion PPP infrastructure pipeline.
            </p>

            <p className="mt-6 text-[10px] font-semibold uppercase tracking-wider text-esg-green">
              CCMP alumni work at
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
              {COMPANIES.map((company, i) => (
                <span
                  key={i}
                  className="rounded-md border border-esg-border bg-esg-stripe px-2.5 py-1 text-[11px] text-esg-muted"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
