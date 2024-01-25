import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@astrojs/react";
const env = loadEnv("", process.cwd(), "STORYBLOK");

export default defineConfig({
  site: "https://portfolio-blog-snowy-delta.vercel.app/",
  adapter: vercel(),
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      apiOptions: {
        region: "",
      },
      bridge: env.STORYBLOK_IS_PREVIEW === "yes",
      components: {
        page: "storyblok/Page",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        header: "storyblok/Header",
        config: "storyblok/Config",
        hero: "storyblok/Hero",
        cta: "storyblok/Cta",
        footer: "storyblok/Footer",
        article: "storyblok/Article",
        "featured-articles": "storyblok/FeaturedArticles",
        "all-articles": "storyblok/AllArticles",
        services: "storyblok/Services",
        casestudy: "storyblok/CaseStudy",
        "featured-casestudies": "storyblok/FeaturedCaseStudies",
        "all-casestudies": "storyblok/AllCaseStudies",
      },
    }),
    tailwind(),
    react(),
  ],
  output: env.STORYBLOK_IS_PREVIEW === "yes" ? "server" : "static",
  ...(env.STORYBLOK_ENV === "development" && {
    vite: {
      plugins: [basicSsl()],
      server: {
        https: true,
      },
    },
  }),
});
