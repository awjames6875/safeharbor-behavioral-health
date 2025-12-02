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
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        teal: {
          50: '#f0fcff',
          100: '#c6f6ff',
          200: '#99f2ff',
          300: '#66eeff',
          400: '#33eaff',
          500: '#00e6ff',
          600: '#00b8cc',
          700: '#008a99',
          800: '#005c66',
          900: '#002e33',
        },
        cream: {
          50: '#fdfbf7',
          100: '#fbf7ef',
          200: '#f7efe2',
        },
        sage: {
          50: '#f4f7f6',
          100: '#e3e9e6',
          200: '#cdd8d3',
          500: '#8da399',
          900: '#2c3532',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
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