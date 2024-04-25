// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@pinia/nuxt', '@element-plus/nuxt', '@nuxtjs/i18n'],
  css: ['@/assets/iconfont/iconfont.css', 'aos/dist/aos.css'],
  i18n: { locales: ['en', 'id'], defaultLocale: 'en', vueI18n: './i18n.config.ts' },
  plugins: [
    { src: '@/plugins/aos.client.js', mode: 'client' },
    { src: '@/plugins/vue3-carousel.client.js', mode: 'client' },
    { src: '@/assets/iconfont/iconfont.js', mode: 'client' },
    { src: '@/plugins/crisp.js', mode: 'client' },
  ],
  features: {
    inlineStyles: false,
  },
  experimental: {
    writeEarlyHints: true,
  },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: '/css/main.css' },
        { rel: 'stylesheet', href: '/css/carousel.css' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Nunito',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-BTN96NLD4D',
          async: true,
        },
        {
          src: '/js/googleAnalytics.js',
          async: true,
        },
      ],
      title: 'DetPractice',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Your one-stop learning hub for mastering the Duolingo English Test. We have the largest test bank, full-scale mock exam, correction service powered by AI, and professional courses.',
        },
      ],
    },
  },
});
