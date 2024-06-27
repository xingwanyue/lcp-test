import en from '@/locales/en.json';
import id from '@/locales/id.json';
import fr from '@/locales/fr.json';
import ja from '@/locales/ja.json';
import pt from '@/locales/pt.json';
import de from '@/locales/de.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  seo: true,
  messages: {
    en,
    id,
    fr,
    ja,
    pt,
    de,
  },
}));
