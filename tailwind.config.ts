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
        navy: {
          50: '#f0f4ff',
          100: '#dce4ff',
          500: '#3b5fc0',
          600: '#2f54b5',
          700: '#2d4a9f',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        teal: {
          500: '#14b8a6',
          600: '#0d9488',
        },
        cream: {
          50: '#fffbf0',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
        },
        primary: {
          50: '#eefcf9',
          100: '#d6f7f1',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        serif: ['"Georgia"', '"Times New Roman"', 'serif'],
        sans: ['"Segoe UI"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(141, 163, 153, 0.3)',
      }
    },
  },
  plugins: [],
}
export default config
