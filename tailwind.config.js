/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'esg-green': '#0F6E56',
        'esg-green-hover': '#0D5E49',
        'esg-mid': '#1D9E75',
        'esg-light': '#E8F7F2',
        'esg-xlight': '#F2FBF8',
        'esg-dark-bg': '#1A2E26',
        'esg-dark': '#1A1A1A',
        'esg-mid-text': '#4A4A4A',
        'esg-muted': '#888888',
        'esg-amber-dark': '#854F0B',
        'esg-amber-light': '#FFF8EC',
        'esg-amber-border': '#EF9F27',
        'esg-coral': '#993C1D',
        'esg-coral-light': '#FFF8F7',
        'esg-border': '#E0E0E0',
        'esg-stripe': '#F8F8F6',
        'esg-page': '#F4F4F2',
        'esg-after-even': '#DFF3EC',
        'esg-before-head': '#EBEBEB',
        'esg-star': '#F4C753',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'esg-content': '780px',
        'esg-hero': '680px',
        'esg-cta': '480px',
        'esg-final': '600px',
        'esg-guarantee': '680px',
      },
      borderRadius: {
        'esg-card': '10px',
        'esg-btn': '8px',
        'esg-nav-btn': '6px',
        'esg-pill': '12px',
      },
    },
  },
  plugins: [],
};
