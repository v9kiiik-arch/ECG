export const RAZORPAY_BASE = 'https://pages.razorpay.com/1-to-1viv';

export const CTA_URLS = {
  nav: `${RAZORPAY_BASE}?src=nav_cta`,
  hero: `${RAZORPAY_BASE}?src=hero_cta`,
  footer: `${RAZORPAY_BASE}?src=footer_cta`,
  stickyMobile: `${RAZORPAY_BASE}?src=sticky_mobile_cta`,
} as const;

export const CTA_LABEL = 'Yes — I want my career map for ₹299 →';

export const PRICE = {
  current: '₹299',
  original: '₹999',
  savings: '₹700',
} as const;
