import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0C0A08',
          50: '#1C1916',
          100: '#141210',
          200: '#0C0A08',
        },
        cream: {
          DEFAULT: '#F2EDE4',
          50: '#FDFCF9',
          100: '#F8F4EE',
          200: '#F2EDE4',
          300: '#E8DDD0',
          400: '#D4C4B0',
          500: '#B8A090',
        },
        gold: {
          DEFAULT: '#C4943A',
          light: '#D4A84B',
          dark: '#A67B25',
          muted: '#8B6520',
        },
        leather: {
          DEFAULT: '#8B4513',
          light: '#A0522D',
          dark: '#5C2D0A',
          muted: '#7A5C4A',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-in-right': 'slideInRight 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}

export default config
