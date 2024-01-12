// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  title: "فیک کده",
  devtools: { enabled: true },
  buildModules: [
    // Add the following line to enable the Tailwind CSS module
    '@nuxt/image',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  css: [
    // Include your Tailwind CSS file
    'assets/css/main.css'
  ],

  // Add a reference to your Tailwind CSS config
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  router: {
    base: '/'
  }
})
