import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          main: "#57be6c",
          light: "#78cb89",
          dark: "#3c854b",
          contrastText: "#fff",
        },
        secondary: {
          main: "#3373BA",
          light: "#5b8fc7",
          dark: "#235082",
          contrastText: "#fff",
        },
      },
    },
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  important: "#tailwind-root",
  plugins: [],
};
export default config;
