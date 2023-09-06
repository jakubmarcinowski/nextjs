import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const files = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];

const config: Config = {
  content: files,
  theme: {
    extend: {
      colors: {
        primary: { ...colors.indigo, DEFAULT: colors.indigo[600] },
        secondary: { ...colors.gray, DEFAULT: colors.gray[500] },
        skeleton: { ...colors.gray, DEFAULT: colors.gray[200] },
      },
      height: {
        screen: "100dvh",
      },
      width: {
        screen: "100dvw",
      },
    },
  },
  plugins: [],
};
export default config;
