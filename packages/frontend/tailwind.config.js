/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#27272a',
        secondary: '#65656d',
        tertiary: '#acacb4',
        quaternary: '#e4e4e7',
        link: '#1287A8',
      },
      fontFamily: {
        sans: ['Heebo', 'Roboto', 'system-ui', 'sans-serif'],
        mono: ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            color: '#27272a',
            a: {
              color: '#1287A8',
              '&:hover': {
                color: '#0f6988',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}