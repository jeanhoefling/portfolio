/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#08090D',
          surface: '#12141C',
          raised: '#181B26',
        },
        border: {
          DEFAULT: '#20232F',
          soft: 'rgba(245, 245, 247, 0.08)',
        },
        text: {
          primary: '#F5F5F7',
          muted: '#9498A6',
          dim: '#5D6072',
        },
        accent: {
          DEFAULT: '#6C82F5', // indigo-blue
          teal: '#33D6C0',
          violet: '#9D7CFF',
          soft: 'rgba(108, 130, 245, 0.12)',
        },
      },
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        aurora:
          'radial-gradient(45% 45% at 20% 15%, rgba(108,130,245,0.16) 0%, rgba(108,130,245,0) 70%), radial-gradient(40% 40% at 85% 10%, rgba(157,124,255,0.14) 0%, rgba(157,124,255,0) 70%), radial-gradient(50% 50% at 50% 100%, rgba(51,214,192,0.10) 0%, rgba(51,214,192,0) 70%)',
        'gradient-brand': 'linear-gradient(135deg, #33D6C0 0%, #6C82F5 55%, #9D7CFF 100%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(108,130,245,0.15), 0 8px 30px -8px rgba(108,130,245,0.35)',
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 20px 40px -24px rgba(0,0,0,0.6)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'aurora-drift': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(-1.5%, 1.5%, 0) scale(1.04)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'aurora-drift': 'aurora-drift 26s ease-in-out infinite',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
