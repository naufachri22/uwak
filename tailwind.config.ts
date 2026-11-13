import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "#123C32",
        leaf: "#26745C",
        cream: "#F6F3EA",
        gold: "#D6AE68",
        ink: "#1E2B27"
      },
      boxShadow: {
        soft: "0 12px 36px rgba(18, 60, 50, 0.08)"
      }
    }
  },
  plugins: []
};
export default config;
