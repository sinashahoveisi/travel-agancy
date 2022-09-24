/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1224px',
        xl: '1400px',
        '2xl': '1536px'
      }
    },
    extend: {
      fontFamily: {
        body: [
          'Vazirmatn',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ]
      },
    }
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp'),
    function ({addComponents}) {
      addComponents({
        '.container': {
          width: '100%',
          paddingRight: '15px',
          paddingLeft: '15px',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen sm': {
            maxWidth: '540px'
          },
          '@screen md': {
            maxWidth: '720px'
          },
          '@screen lg': {
            maxWidth: '960px'
          },
          '@screen xl': {
            maxWidth: '1140px'
          },
          '@screen 2xl': {
            maxWidth: '1140px'
          }
        }
      });
    }
  ]
};
