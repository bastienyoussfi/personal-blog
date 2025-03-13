import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: '#000',
              },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h2: {
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: '#1a1a1a',
              backgroundColor: '#f5f5f5',
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            pre: {
              backgroundColor: '#1a1a1a',
              color: '#ffffff',
              fontSize: '0.875rem',
              lineHeight: '1.5',
              overflowX: 'auto',
              borderRadius: '0.375rem',
            },
            img: {
              borderRadius: '0.375rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
};

export default config; 