/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './app.vue'],
  theme: {
    extend: {
      height: {
        section: 'calc(100vh - 80px)',
      },
      colors: {
        lime: {
          50: '#f6f7f6',
          100: '#e4e7e0',
          200: '#c7cec1',
          300: '#a2ae9a',
          400: '#7d8c75',
          500: '#62715b',
          600: '#4d5a47',
          700: '#414a3b',
          800: '#333a30',
          900: '#2f352c',
          950: '#181c17',
        },
        black: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#1d1d1d',
        },
      },
      animation: {
        blob: 'blob 8s infinite',
        height: 'height 4s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '50%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },

        height: {
          '0%': {
            top: '0%',
            bottom: '100%',
            height: '0%',
          },
          '20%': {
            top: '0%',
            bottom: '65%',
            height: '35%',
          },
          '80%': {
            bottom: '0%',
            top: '65%',
            height: '35%',
          },
          '100%': {
            bottom: '0%',
            top: '100%',
            height: '0%',
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
