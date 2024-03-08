// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/image'],
  colorMode: {
    classSuffix: '',
  },
  image: {
    format: ['webp'],
    domains: ['portfolio.test'],
  },
})
