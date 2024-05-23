import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        PANTONE_1: "#F1EEEB",
        PANTONE_2: "#E1DAD0",
        PANTONE_3: "#7B736B",
        PANTONE_4: "#555555",
        PANTONE_5: "#1C1C1C",
      },
    },
  },

  plugins: [],
};
export default config;
