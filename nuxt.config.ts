// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@pinia/nuxt', '@element-plus/nuxt', '@nuxtjs/i18n', 'nuxt-aos'],
  css: ['@/assets/iconfont/iconfont.css'],
  i18n: { locales: ['en', 'id', 'fr', 'ja', 'pt', 'de'], defaultLocale: 'en', vueI18n: './i18n.config.ts' },
  plugins: [
    { src: '@/plugins/vue3-carousel.client.js', mode: 'client' },
    { src: '@/assets/iconfont/iconfont.js', mode: 'client' },
    { src: '@/plugins/crisp.js', mode: 'client' },
  ],
  aos: {
    disable: 'mobile',
  },
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
      title: 'DET Practice:The best Duolingo English Test Practice platform',
      meta: [
        { charset: 'utf-8' },
        // {
        //   name: 'keywords',
        //   content:
        //     'DET Duolingo, DET Test, Duolingo DET, Duolingo Test, Duolingo Test Online, Duolingo English Language Test, Duolingo English Exam, Duolingo Proficiency Exam',
        // },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'msvalidate.01', content: 'AB8D0671C60241C25BF7B5B9E68F5683' },
        //
        { name: 'DC.title', content: 'Duolingo English Language Test Online, English Proficiency Exam' },
        { name: 'geo.region', content: 'GB-LND' },
        { name: 'geo.placename', content: 'England' },
        { name: 'geo.position', content: '54.702355;-3.276575' },
        { name: 'ICBM', content: '54.702355, -3.276575' },

        { property: 'og:locale', content: 'en_GB' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Duolingo English Language Test Online, English Proficiency Exam' },
        {
          property: 'og:description',
          content:
            'Prepare for the Duolingo english proficiency test online with DET Practice. Access mock exams, correction services, and comprehensive courses. Start practicing today!',
        },
        { property: 'og:url', content: 'https://www.detpractice.com/' },
        { property: 'og:site_name', content: 'DET Practice' },
        { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@det_practice' },
        { name: 'twitter:creator', content: 'DET Practice' },
        { name: 'twitter:title', content: 'Duolingo English Language Test Online, English Proficiency Exam' },
        {
          name: 'twitter:description',
          content:
            'Prepare for the Duolingo english proficiency test online with DET Practice. Access mock exams, correction services, and comprehensive courses. Start practicing today!',
        },
        { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
      ],
    },
  },
});
