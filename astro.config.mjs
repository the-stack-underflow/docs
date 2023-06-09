import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from 'remark-math'

import gyroLanguageGrammar from "./src/gyro.tmLanguage";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), mdx({
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathjax]
	})],
	trailingSlash: "never",
	markdown: {
		shikiConfig: {
			theme: "min-light",
			langs: [
				{
					id: "gyro",
					scopeName: 'source.gyro',
					grammar: gyroLanguageGrammar,
					aliases: ["gyro", "gy"],
				}
			]
		}
	}
});