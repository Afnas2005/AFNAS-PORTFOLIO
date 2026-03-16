/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050a0f',
        bg2: '#0b1622',
        surface: '#0f1e2e',
        border: 'rgba(0, 210, 180, 0.12)',
        accent: '#00d2b4',
        accent2: '#00aaff',
        accent3: '#7b61ff',
        text: '#e8f4f2',
        muted: '#6a8fa0',
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
        sans: ['Syne', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        'grid-pattern': "linear-gradient(rgba(0,210,180,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,180,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-size': '60px 60px',
      },
      keyframes: {
        orbFloat: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        }
      },
      animation: {
        orbFloat: 'orbFloat 8s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
