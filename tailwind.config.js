// import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E60012',
        'secondary': '#484848',
        'third': "#EFEFEF"
      },
      spacing: {
        'header': '52px',
      },
      fontFamily: {
        // 'museoModerno': ['"MuseoModerno"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

