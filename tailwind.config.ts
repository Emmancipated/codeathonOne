import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        fm: {
          red: "#FF000B",
          blue: "#5891CA",


          "neutral-900": "#121826",
          "primary": "#18243A",
          "blue-400": "#1D5AA5",
          "blue-600": "#4D5562",
          "success-bg": "#EFFDF6",

          "error-red": "#DE524C",
          "error-50": "#FCF3F2",
          "error-500": "#DE524C",

          "slate-50": "#F9FAFB",
          "slate-100": "#E8EAED",
          "slate-200": "#E3E8EF",
          "slate-300": "#A4ABB7",
          "slate-400": "#818B9C",
          "slate-500": "#636C7E",
          // "slate-600": "#484F5B",
          // "slate-700": "#2D3139",
          "slate-800": "#D91D1D",
        },
      },
      transitionDuration: {
        "400": "400ms",
      }
    },
    boxShadow: {
      "1xl": "0 1.9999998807907104px 3.999999761581421px 0px rgb(0 0 0 / 0.25)",
      "2xl": "0px 4px 4px 0px rgba(0, 0, 0, 0.251)"
    },
    gridTemplateColumns: {
      "18": '0.3fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
