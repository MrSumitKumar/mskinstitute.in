import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6fd',
          100: '#e1ecfb',
          200: '#c3d9f7',
          300: '#a5c6f2',
          400: '#87b3ed',
          500: '#4d8ce8',
          600: '#072b57',
          700: '#051f3f',
          800: '#041428',
          900: '#020a14',
        },
        accent: {
          50: '#fff8f3',
          100: '#ffecde',
          200: '#ffd9bc',
          300: '#ffc69b',
          400: '#ffb379',
          500: '#f47a20',
          600: '#e86e1a',
          700: '#d45d13',
          800: '#b8480d',
          900: '#9c3a09',
        },
        background: '#f8fafc',
        border: '#e5e7eb',
        text: {
          primary: '#1a1a2e',
          secondary: '#4b5563',
          light: '#6b7280',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
