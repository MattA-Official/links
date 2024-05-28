// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/seo", "@nuxt/image", "nuxt-icons"],
  css: ["~/assets/styles/global.css"],
  site: {
    url: 'https://matt-is.gay',
    name: 'Matt\'s Links',
    description: 'Welcome to my corner of the internet - this is the portal to all things me :)',
    defaultLocale: 'en'
  },
  seo: {
    redirectToCanonicalSiteUrl: true
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt']
    }  
  }
})