import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        corTurquesa: '#00C7B1',
        corTurquesaHover: '#33D1C4',
        corCinza: '#2E2E2E',
        corCinzaClaro: '#F5F5F5',
        corVerdeFolha: '#4CAF50',
        corVerdeFolhaHover: '#66BB6A',
        corAmarelo: '#EAB308',
      },
    },
  },
  plugins: [],
};
export default config;
