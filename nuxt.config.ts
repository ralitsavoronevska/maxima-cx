// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

// When deploying to GitHub Pages the site is served from a sub-path
// (https://ralitsavoronevska.github.io/maxima-cx/), so every asset
// URL must be prefixed with the repo name. Production static builds
// (`nuxt generate`, run locally and in CI) set NODE_ENV=production and get the
// sub-path when no explicit base URL is supplied; `nuxt dev` keeps the root base.
const baseURL = "/maxima-cx/";

// Web3Forms access keys are public by design (sent from the browser) and each
// is domain-restricted in the Web3Forms dashboard, so they live in source.
// Use the GitHub Pages key here; an explicit NUXT_PUBLIC_WEB3FORMS_KEY env var
// still overrides this for local dev or one-off hosts.
const web3formsKey = "a3a06564-5f77-4298-b2e6-f7e451e31ba8";

// Canonical origin for the GitHub Pages deployment (the SEO module appends
// baseURL + path, so this is the origin only).
const siteUrl = "https://ralitsavoronevska.github.io";

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2026-07-12",

  modules: ["@nuxt/icon", "@nuxt/fonts", "@nuxtjs/seo"],

  // Fonts are self-hosted and optimized by @nuxt/fonts (it scans the CSS
  // `font-family` declarations and downloads the web fonts at build time), so the
  // brand font ships from our own origin with no render-blocking request to
  // Google. Declaring the family here pins the weights we actually use.
  fonts: {
    families: [
      { name: "Inter", provider: "google", weights: [400, 500, 600, 700, 800] },
    ],
  },

  // Tailwind CSS v4 is wired in as a Vite plugin (the old @nuxtjs/tailwindcss
  // module is v3-only). All theme config now lives CSS-first in main.css via
  // @theme, so there is no tailwind.config.ts.
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    // Pre-bundle these dev-only deps so Vite doesn't discover them mid-session
    // and trigger a full page reload (dependency re-optimization). Dev only —
    // Vite ignores optimizeDeps during `nuxt generate`/`build`.
    optimizeDeps: {
      include: [
        "@unhead/schema-org/vue",
        "@vue/devtools-core",
        "@vue/devtools-kit",
      ],
    },
  },

  // Read by @nuxtjs/seo to build per-page canonical URLs, og:url and the
  // sitemap. `url` is the origin only — the SEO modules append app.baseURL
  // (the GitHub Pages "/maxima-cx/" sub-path) automatically.
  site: {
    url: siteUrl,
    name: "Maxima CX",
  },

  // GitHub Pages serves the site from a sub-path, so it cannot own the domain-
  // root robots.txt. Skip the generated file there and rely on the per-page
  // robots meta tags instead.
  robots: {
    robotsTxt: false,
  },

  // No brand OG image yet — skip auto-generating placeholder ones. Re-enable
  // (delete this line) once a real share image / template exists.
  ogImage: { enabled: false },

  // Bundle icons into the client so they render offline on static hosting. The
  // site currently uses inline SVGs (no <Icon>), so no icon sets are needed yet
  // — add the relevant @iconify-json/* package once you start using <Icon>.
  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 512,
    },
  },

  // Web3Forms access key for the contact form, selected per deploy target above
  // (web3formsKey). Override per environment with NUXT_PUBLIC_WEB3FORMS_KEY.
  runtimeConfig: {
    public: {
      web3formsKey,
    },
  },

  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: "en" },
      // Title & description are set per page via useSeoMeta(); the site-wide
      // defaults and the title template live in app.vue.
      meta: [
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "theme-color", content: "#007dfe" },
      ],
      // Brand font (Inter) is self-hosted via @nuxt/fonts — no Google Fonts
      // <link> needed here.
      link: [
        { rel: "icon", href: `${baseURL}favicon.ico`, sizes: "any" },
        { rel: "icon", type: "image/png", href: `${baseURL}logo.png` },
      ],
    },
  },
});
