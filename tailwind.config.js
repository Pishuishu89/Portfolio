/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f0d17',
        paper: '#f7f5fb',
        plum: {
          50: '#f5f0fd',
          100: '#ebe1fb',
          300: '#c4a6f3',
          500: '#9058e6',
          600: '#7e22ce',
          700: '#5f1aa0',
          900: '#2a0d48',
        },
        mint: '#2dd4bf',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
