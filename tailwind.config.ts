import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#dcebf6',
          200: '#bbd7ed',
          300: '#99c3e5',
          400: '#6598ce',
          500: '#316eb7',
          600: '#072b57',
          700: '#061f43',
          800: '#04152f',
          900: '#020a18',
        },
        accent: {
          50: '#fff4ed',
          100: '#ffe4d2',
          200: '#ffd1ab',
          300: '#ffb47f',
          400: '#ffa065',
          500: '#f47a20',
          600: '#df6c19',
          700: '#c55a14',
          800: '#a34a0e',
          900: '#823d0b',
        },
        surface: {
          50: '#f8fafc',
          100: '#edf2f7',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#667085',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        border: '#e5e7eb',
      },
      boxShadow: {
        card: '0 4px 24px rgba(7, 43, 87, 0.06)',
        cardHover: '0 16px 48px rgba(7, 43, 87, 0.15)',
        button: '0 4px 16px rgba(244, 122, 32, 0.35)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Inter', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        marquee: 'marquee 24s linear infinite',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
