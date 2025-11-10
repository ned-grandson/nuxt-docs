// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Load `nuxt-studio` only when ENABLE_NUXT_STUDIO is set to 'true'.
  // This prevents client-only code (that accesses `document`) from being
  // imported/executed on the server where `document` is not defined.
  modules: [
    '@nuxt/content',
    ...(process.env.ENABLE_NUXT_STUDIO === 'true' ? ['nuxt-studio'] : [])
  ],
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    }
  },
  studio: {
     repository: {
      owner: 'ned-grandson',
      repo: 'nuxt-docs',
      branch: process.env.STUDIO_GITHUB_BRANCH_NAME,
    },
    development: {
      sync: true
    }
  },
   nitro: {
    prerender: {
      // Pre-render the homepage
      routes: ['/'],
      // Then crawl all the links on the page
      crawlLinks: true
    }
  }
})