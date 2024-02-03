// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
});
