import en from '@/locales/en.json';
import id from '@/locales/id.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  seo: true,
  messages: {
    en,
    id,
  },
}));
