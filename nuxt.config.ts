// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.css',
  ],

  runtimeConfig: {
    public: {
      apiUrl:'http://localhost:8000',
    }
  },

  compatibilityDate: '2025-03-28',
})