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
				'dos-puntos-brown-light': "#EBCD92",
				'dos-puntos-yellow': "#DD9C2C",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
			backgroundImage: {
				'layout-pattern': "url('/fondo.jpeg')"
			},
    },
  },
  plugins: [],
} satisfies Config;
