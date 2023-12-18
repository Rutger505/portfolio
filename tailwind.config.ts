import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    backgroundColor: {
      primary: "#121125",
      secondary: "#0E0E21",
      accent: "#FF365A",
      text: "#EDEDED",
      textSecondary: "#CAC8DC"
    }
  },
  plugins: []
};
export default config;
