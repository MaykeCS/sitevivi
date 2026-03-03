/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './assets/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F4',
        sage: {
          50:  '#F2F7F3',
          100: '#E4EEE6',
          200: '#C8DECC',
          300: '#9EC4A4',
          400: '#6B9972',
          500: '#4A7050',
          600: '#3A5840',
          700: '#2E4632',
          800: '#253829',
          900: '#1C2B1F',
        },
        gold: {
          50:  '#FDF8EE',
          100: '#FAEFD5',
          200: '#F3DAA0',
          300: '#E9C168',
          400: '#C4943E',
          500: '#A67B2A',
          600: '#876220',
          700: '#6A4C19',
        },
        blush: '#F0E6E0',
        charcoal: '#2D2825',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Nunito', 'sans-serif'],
      },
      animation: {
        'float':        'float 7s ease-in-out infinite',
        'float-slow':   'float 10s ease-in-out infinite 1.5s',
        'float-slower': 'float 12s ease-in-out infinite 3s',
        'pulse-ring':   'pulse-ring 2.5s ease-in-out infinite',
        'fade-in-up':   'fadeInUp 0.8s ease-out forwards',
        'slide-in-left':'slideInLeft 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':       { transform: 'translateY(-18px) rotate(6deg)' },
        },
        'pulse-ring': {
          '0%, 100%': { transform: 'scale(1)',   opacity: '0.7' },
          '50%':       { transform: 'scale(1.08)', opacity: '0.3' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
