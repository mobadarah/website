import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	experimental: {
		fonts: [
			{
				provider: "local",
				name: "masmak",
				cssVariable: "--font-masmak",
				variants: [
					{
						display: "swap",
						weight: 700,
						style: "normal",
						src: ["./src/assets/fonts/MasmakBHD.woff2"],
					},
				],
			},
		],
	},
});
