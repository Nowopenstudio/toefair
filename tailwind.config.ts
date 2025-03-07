import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '800px',
      'lg': '1000px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [plugin(({ addUtilities }:any) => {
    addUtilities({
      ".x-center": { left: "50%", transform: "translateX(-50%)" },
      ".y-center": { top: "50%", transform: "translateY(-50%)" },
      ".xy-center": {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
    });
  })],
};
export default config;
