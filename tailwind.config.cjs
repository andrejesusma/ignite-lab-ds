/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      xxl: 32,
    },
    colors: {
      transparent:'transparent',
      black:'#000',
      white:'#fff',
      gray: {
          900: '#121214',
          800: '#202024',
          400: '#7c7c8a',
          100: '#c4c4cc',
          200: '#e1e1e6',
      },
      
      ciano:{
        500: '#61DAFB',
        300: '#9be1fb',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
