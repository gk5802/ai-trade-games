import { type Config } from "tailwindcss";

const themeColors = {
  brand: {
    DEFAULT: "#1E40AF",
    light: "#3B82F6",
    dark: "#1E3A8A",
  },
  theme1: "#F43F5E",
  theme2: "#10B981",
  theme3: "#F59E0B",
  theme4: "#6366F1",
  theme5: "#EC4899",
  theme6: "#22D3EE",
  theme7: "#A78BFA",
  theme8: "#F87171",
  theme9: "#34D399",
  theme10: "#EAB308",
};

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: themeColors,
    },
  },
  plugins: [],
};

export default config;
