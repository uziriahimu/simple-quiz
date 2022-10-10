/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4a5ddb",

          "secondary": "#5aed94",

          "accent": "#b0f771",

          "neutral": "#232E38",

          "base-100": "#F3E7F4",

          "info": "#61A5CC",

          "success": "#1CB559",

          "warning": "#F9C006",

          "error": "#FC1D67",
        },
      },
    ],
  },

  plugins: [
    require('daisyui'),
  ],

}
