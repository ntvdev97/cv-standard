// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  future: {
    compatibilityVersion: 4,
  },

  spaLoadingTemplate: "./spa-loading-template.html",

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "VinhNT | Full-Stack Developer & Architect",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Professional CV and Portfolio website of a Full-Stack Developer specializing in Vue.js, Nuxt, TypeScript, Java Spring Boot, AWS, and Docker.",
        },

        // OpenGraph
        {
          property: "og:title",
          content: "VinhNT | Full-Stack Developer",
        },
        {
          property: "og:description",
          content:
            "Professional CV & portfolio detailing results-oriented software engineering work.",
        },
        { property: "og:type", content: "website" },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "VinhNT | Full-Stack Developer",
        },
        {
          name: "twitter:description",
          content:
            "Professional CV & portfolio detailing results-oriented software engineering work.",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // Preconnect to Google Fonts
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
        },
      ],
    },
  },

  typescript: {
    strict: true,
    typeCheck: false, // We will run typecheck manually in script, speed up dev builds
  },

  compatibilityDate: "2026-07-14",
});
