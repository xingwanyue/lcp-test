// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@pinia/nuxt', '@element-plus/nuxt', '@nuxtjs/i18n', 'vue3-carousel-nuxt'],
  css: ['@/assets/iconfont/iconfont.css', 'aos/dist/aos.css'],
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
  },
  plugins: [
    { src: '@/plugins/aos.client.js', ssr: true },
    { src: '@/assets/iconfont/iconfont.js', ssr: false },
    { src: '@/plugins/crisp.js', mode: "client" },
  ],
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: '/css/main.css' }],
      title: 'Det',
      // title: '大牛多邻国 - 高效备考多邻国考试',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            '超全真题，难度分级；智能学习计划，高效备考；写作全名师批改指导；口语AI评分，纠正发音；性价比超高名师课程。',
        },
        { hid: 'keywords', name: 'keywords', content: '大牛多邻国，多邻国，DET考试，英语水平考试，留学考试，留学申请' },
      ],
    },
  },
});
