import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: 'I am not from an environmental background. Will I understand this?',
    a: 'Yes — and actually you are better placed than you think. Carbon accounting is a financial and analytical skill as much as an environmental one. Finance, CA, MBA, engineering, and EHS professionals are exactly the people companies are trying to hire for carbon roles. Viveck will address this directly in the session.',
  },
  {
    q: 'I have 10+ years of experience. Will this be too basic for me?',
    a: "No — because India's CCTS, BRSR, and EU CBAM are all less than 3 years old. Your experience in your current field does not transfer to carbon compliance automatically. Viveck will show you how to bridge the gap quickly — not start from zero.",
  },
  {
    q: 'Is this a sales pitch for the CCMP programme?',
    a: 'The CCMP programme is mentioned in the last 10 minutes as one clear path forward. The 80 minutes before that are pure education — how the market works, which roles exist, what they pay, and how to get certified. You will get real value from this webinar whether or not you ever consider CCMP.',
  },
  {
    q: 'What if I cannot attend the live session?',
    a: 'You get the recording for 30 days. Watch it at your own pace. The only thing you miss by not attending live is the real-time Q&A — which is the main reason to attend live if you can.',
  },
  {
    q: 'Does the ₹299 come off the CCMP price if I join later?',
    a: 'The ₹999 strategy call fee is fully credited to CCMP fees at enrolment. Elite Pass buyers (₹1,499) get the strategy call at no extra cost — their pass covers it. The ₹299 is the first step to qualifying for that call.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-esg-stripe px-5 py-16 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-esg-content">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-esg-green">
          COMMON QUESTIONS
        </p>
        <h2 className="mt-2 text-[28px] font-bold leading-tight text-esg-dark">
          Answered honestly.
        </h2>

        <div className="mt-8 divide-y divide-esg-border overflow-hidden rounded-esg-card border border-esg-border bg-white">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`transition-colors ${isOpen ? 'bg-esg-light' : ''}`}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-[18px] py-4 text-left"
                >
                  <span className="text-sm font-bold text-esg-dark">{faq.q}</span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-esg-green" strokeWidth={2.5} />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-esg-green" strokeWidth={2.5} />
                  )}
                </button>
                <div
                  className="grid transition-all duration-200 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-[18px] pb-4 text-[13px] leading-[1.7] text-esg-mid-text">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
