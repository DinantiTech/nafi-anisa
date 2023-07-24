import { FONT_CTA, FONT_NAME, FONT_TITLE, FONT_PRIMARY, FONT_SECONDARY, FONT_NAME_SECONDARY } from './src/contants/fonts.const';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      title: [FONT_TITLE],
      primary: [FONT_PRIMARY],
      secondary: [FONT_SECONDARY],
      cta: [FONT_CTA],
      name: [FONT_NAME],
      "name-secondary":[FONT_NAME_SECONDARY],
    },
    extend: {
      screens: {
        xxs: "330px",
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      }
    },
  },
  plugins: [],
}


