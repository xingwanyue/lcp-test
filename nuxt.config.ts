// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@pinia/nuxt', '@element-plus/nuxt', '@nuxtjs/i18n', 'vue3-carousel-nuxt'],
  css: ['@/assets/iconfont/iconfont.css'],
  pages: true,
  sourcemap: false,
  i18n: {
    locales: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh'].map((locale) => ({
      code: locale,
      file: `${locale}.json`,
    })),
    lazy: true,
    defaultLocale: 'en',
    langDir: 'locales',
    compilation: {
      strictMessage: false,
    },
    detectBrowserLanguage: false,
  },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  plugins: [
    { src: '@/assets/iconfont/iconfont.js', mode: 'client' },
    { src: '@/plugins/tidio.js', mode: 'client' },
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
        {
          rel: 'stylesheet',
          href: '/font/index.css',
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
        {
          type: 'application/ld+json',
          innerHTML: `
{
 "@context": "http://schema.org",
 "@type": "LocalBusiness",
 "name": "AITOGETHER LTD",
 "url": "https://www.detpractice.com/",
 "logo": "https://www.detpractice.com/img/footer/small_logo.svg",
 "image": "https://www.detpractice.com/store/portal/products/bank_picture1.png",
 "description": "DET Practice is the best platform for Duolingo English Test Practice. We have the largest test bank, full-length mock exam, correction service, and DET courses.",
 "pricerange":"£", 
 "telephone": "7518886018",
 "email" : "support@detpractice.com",
 "address": {
   "@type": "PostalAddress",
   "streetAddress": "71-75 Shelton Street, Covent Garden",
   "addressLocality": "England",
   "addressRegion": "London",
   "postalCode": "WC2H 9JQ",
   "addressCountry": "UK"
 },
"aggregateRating": {
       "@type": "AggregateRating",
       "ratingValue": "4.9",
       "reviewCount": "880"
 },
   "review": {
   "@type": "Review",
   "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.9",
    "bestRating": "5"
  },
     "author": {
     "@type": "Person",
     "name": "AITOGETHER LTD"
   }
     },
 "sameAs": [
   "https://www.facebook.com/detpractice",
   "https://x.com/det_practice",
   "https://www.instagram.com/detpractice/ ",
   "https://www.detpractice.com/"
 ]
}`,
        },
      ],
      title: 'DET Practice - Ace the Duolingo English Test',
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
        { name: 'DC.title', content: 'DET Practice - Ace the Duolingo English Test' },
        { name: 'geo.region', content: 'GB-LND' },
        { name: 'geo.placename', content: 'England' },
        { name: 'geo.position', content: '54.702355;-3.276575' },
        { name: 'ICBM', content: '54.702355, -3.276575' },

        { property: 'og:locale', content: 'en_GB' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'DET Practice - Ace the Duolingo English Test' },
        {
          property: 'og:description',
          content:
            'DET Practice is the best platform for Duolingo English Test Practice. We have the largest test bank, full-length mock exam, correction service, and DET courses.',
        },
        { property: 'og:url', content: 'https://www.detpractice.com/' },
        { property: 'og:site_name', content: 'DET Practice' },
        { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@det_practice' },
        { name: 'twitter:creator', content: 'DET Practice' },
        { name: 'twitter:title', content: 'DET Practice - Ace the Duolingo English Test' },
        {
          name: 'twitter:description',
          content:
            'DET Practice is the best platform for Duolingo English Test Practice. We have the largest test bank, full-length mock exam, correction service, and DET courses.',
        },
        { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
      ],
    },
  },

  compatibilityDate: '2024-10-25',
});
