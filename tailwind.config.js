/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {},
    colors: {
      investa: {
        primary: {
          90: '#B0590C',
          70: '#D57415',
          50: '#F7941D',
          30: '#FCCC77',
          10: '#FEE1A5',
        },
        success: {
          90: '#53A711',
          70: '#6EC618',
          50: '#8CE823',
          30: '#B0F155',
          10: '#E0FCA7',
        },
        blue: {
          90: '#0B72B5',
          70: '#0D97D8',
          50: '#14C3FC',
          30: '#4EDDFD',
          10: '#A0FBFE',
        },
        warning: {
          90: '#B77D0F',
          70: '#DB9C17',
          50: '#FFBD22',
          30: '#FFD356',
          10: '#FFEDA3',
        },
        danger: {
          90: '#B83A52',
          70: '#DB5262',
          50: '#FF7176',
          30: '#FF9C96',
          10: '#FFD3C6',
        },
        netral: {
          90: '#252525',
          70: '#6D6D6D',
          50: '#B7B7B7',
          30: '#DCDCDC',
          10: '#FFFFFF',
          0: '#f5f5f5',
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin')],
};
