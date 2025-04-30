import tailwindcssAnimate from "tailwindcss-animate"
import withMT from "@material-tailwind/react/utils/withMT"
 
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
			backgroundImage: {
  			'layout-pattern': "url('/portada con logo chico.png')",
				'fondo-tres': "url('/fondo.png')"
  		},
			colors: {
  			'dos-puntos-brown-light': '#EBCD92',
  			'dos-puntos-yellow': '#DD9C2C',
  			'dos-puntos-pink': '#B13463',
  			'dos-puntos-gray': '#1C2544',
				'dos-puntos-blue': '#55B6C6'
			},
		},
  },
  plugins: [tailwindcssAnimate],
});