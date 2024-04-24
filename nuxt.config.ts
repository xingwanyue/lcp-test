// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@pinia/nuxt', '@element-plus/nuxt', '@nuxtjs/i18n'],
  css: ['@/assets/iconfont/iconfont.css'],
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
  },
  plugins: [
    { src: '@/plugins/aos.client.js', mode: 'client' },
    { src: '@/plugins/vue3-carousel.client.js', mode: 'client' },
    { src: '@/assets/iconfont/iconfont.js', mode: 'client' },
    { src: '@/plugins/crisp.js', mode: 'client' },
  ],
  features: {
    inlineStyles: false,
  },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: '/css/main.css' },
        { rel: 'stylesheet', href: '/css/aos.css' },
        { rel: 'stylesheet', href: '/css/carousel.css' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Nunito',
        },
      ],
      title: 'Det',
      // title: '大牛多邻国 - 高效备考多邻国考试',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Your one-stop learning hub for mastering the Duolingo English Test. We have the largest test bank, full-scale mock exam, correction service powered by AI, and professional courses.',
        },
        // { hid: 'keywords', name: 'keywords', content: '大牛多邻国，多邻国，DET考试，英语水平考试，留学考试，留学申请' },
      ],
    },
  },
});
