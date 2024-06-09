// https://nuxt.com/docs/api/configuration/nuxt-config
// https://image.nuxt.com/advanced/static-images
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true
  },
  modules: ["@nuxt/image"],
  ssr: true,
  nitro: {
      prerender: {
          routes: [
              '/_ipx/**',
              '/'
          ],
          crawlLinks: true
      },
    }
})
