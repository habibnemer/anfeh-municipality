import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A2E4A',
          light: '#243D5F',
          dark: '#111E30',
        },
        blue: {
          brand: '#2A6DB5',
          light: '#4B8EC8',
          muted: '#7BAFD4',
        },
        'warm-white': '#FAF8F5',
        cream: '#F3EFE8',
        stone: '#E2DAD0',
        limestone: '#C4BAA8',
        sand: '#A89880',
        olive: {
          DEFAULT: '#6B7D5A',
          light: '#8A9E78',
        },
        terracotta: '#B85C38',
        charcoal: '#1C1C1A',
        muted: '#6B6B6B',
        silver: '#9CA3AF',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
    },
  },
  plugins: [],
}

export default config
