import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        header: "#7a8288",
        footer: "#f2f3f3",
        "footer-text": "#9ba1a6",
      },
      fontFamily: {
        sans: ["Times New Roman", "sans-serif"], // Add 'Roboto' as the default sans-serif font
        serif: ["Times New Roman", "serif"], // Example of adding a serif font
      },
    },
  },
  plugins: [],
} satisfies Config;
