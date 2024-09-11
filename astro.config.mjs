import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    robotsTxt({
      policy: [{ userAgent: '*', allow: '/' }],
      sitemap: 'https://edwindev6-portfolio.vercel.app/sitemap.xml',
    })
  ],
  site: 'https://edwindev6-portfolio.vercel.app'
})
