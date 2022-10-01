/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
      darkGray: '#222',
      lightGray: '#eee',
      red: '#FF0000',
      blue: '#0000ff',
      green: '#00FF00',
      sky: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },

      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#ffffff',
      },
      green: {
        light: '#6fcf97',
        DEFAULT: '#27AE60',
        dark: '#219653',
        darker: '#1e874b',
      },
      red: {
        light: '#FFEAEA',
        DEFAULT: '#EB5757',
        dark: '#C20D0D',
      },
      orange: {
        light: '#FFEBDA',
        DEFAULT: '#F66A0A',
        dark: '#A04100',
      },
      primary: {
        DEFAULT: '#24292E',
      },
      warning: {
        DEFAULT: '#D1711C',
      },
      blueGreen: '#14A2BA',
      sapphire: '#125d72',
      bubbles: '#e7f6f9',
      blackLight: '#252525',
    },
    typography: (theme) => ({}),
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
