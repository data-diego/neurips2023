/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}"
    ],
    theme: {
      extend:{
        colors: {
          'wsp': '#00D95F',
          'brand': '#00D95F',
        },
        boxShadow:{
          'custom': '0 0 14px 0 rgba(0,0,0,0.15)'
        },
        fontFamily: {
          'libre': ['"Libre Baskerville"'],
          'redhat': ['"Red Hat Display"'],
          'sans': ["Red Hat Display", 'ui-sans-serif', 'system-ui', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
        },
        height: {
          "10v": "10vh",
          "20v": "20vh",
          "30v": "30vh",
          "40v": "40vh",
          "50v": "50vh",
          "60v": "60vh",
          "70v": "70vh",
          "80v": "80vh",
          "90v": "90vh",
          "100v": "100vh",
        },
        width: {
          "10v": "10vw",
          "20v": "20vw",
          "30v": "30vw",
          "40v": "40vw",
          "50v": "50vw",
          "60v": "60vw",
          "70v": "70vw",
          "80v": "80vw",
          "90v": "90vw",
          "100v": "100vw",
        },
        animation: {
          blob: "blob 15s infinite",
          tilt: 'tilt 10s infinite linear',
        },
        keyframes: {
          blob: {
            "0%": {
              transform: "translate(0px, 0px) scale(1)",
            },
            "33%": {
              transform: "translate(-500px, -500px) scale(1.1)",
            },
            "66%": {
              transform: "translate(-1000px, 0px) scale(1)",
            },
            "100%": {
              transform: "tranlate(0px, 0px) scale(1)",
            },
          },
          tilt: {
            '0%, 50%, 100%': {
              transform: 'rotate(0deg)',
            },
            '25%': {
              transform: 'rotate(0.5deg)',
            },
            '75%': {
              transform: 'rotate(-0.5deg)',
            },
          },
        },
      },
    },
  plugins: [ 
    require('@tailwindcss/typography'),
   ],
}
