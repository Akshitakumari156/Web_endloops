/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#0B132B',
            dark: '#070D1F',
            light: '#1C2541',
            muted: '#475569',
          },
          teal: {
            DEFAULT: '#00A884',
            dark: '#008568',
            light: '#2DD4BF',
            subtle: '#E6F8F3',
          },
          blue: {
            DEFAULT: '#2563EB',
            light: '#3B82F6',
            subtle: '#EFF6FF',
          },
          purple: {
            DEFAULT: '#7C3AED',
            light: '#8B5CF6',
            subtle: '#F5F3FF',
          },
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-teal': '0 0 25px -5px rgba(0, 168, 132, 0.25)',
        'glow-purple': '0 0 25px -5px rgba(124, 58, 237, 0.25)',
        'elevated': '0 20px 40px -15px rgba(11, 19, 43, 0.08)',
      },
    },
  },
  plugins: [],
}

