import { type Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: "#FDB813",
      secondary: "#004A99",
      accent: "#00C896",
      background: "#F8F9FA",
      text: "#1A1A1A",
    },
    },
  },
  plugins: [
    require("tailwindcss-animate"), 
  ],
};

export default config;
