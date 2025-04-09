import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        secondary: '#FF6B6B',
        accent: '#FF69B4',
        dark: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}