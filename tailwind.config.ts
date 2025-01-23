import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      boxShadow: {
        magenta: "0 4px 10px rgba(255, 0, 255, 0.5)", // Adjust values as needed
      },
      fontFamily: {
        lato: ["var(--footer-font)"],
        inria: ["var(--main-font)"],
      },
      colors: {
        Green: "var(--green)",
        DarkGreen: "var(--darkGreen)",
        Blue: "var(--blue)",
        DarkBlue: "var(--darkBlue)",
        Beige: "var(--beige)",
        Idk: "var(--idk)",
      },
    },
  },
  plugins: [],
} satisfies Config;
