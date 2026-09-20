/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#123B70',
        blue: {
          DEFAULT: '#1769C2',
          bright: '#2F80ED',
        },
        yellow: {
          DEFAULT: '#FFD21F',
        },
        surface: '#F7FAFD',
        ink: '#172B4D',
        muted: '#64748B',
        edge: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1360px',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(18, 59, 112, 0.08)',
        card: '0 2px 10px rgba(18, 59, 112, 0.06)',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        pulseSoft: 'pulseSoft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
