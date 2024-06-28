import en from '@/locales/en.json';
import de from '@/locales/de.json';
import pt from '@/locales/pt.json';
import ja from '@/locales/ja.json';
import fr from '@/locales/fr.json';
import id from '@/locales/id.json';
import es from '@/locales/es.json';
import it from '@/locales/it.json';
import th from '@/locales/th.json';
import pl from '@/locales/pl.json';
import ko from '@/locales/ko.json';
import ar from '@/locales/ar.json';
import nl from '@/locales/nl.json';
import tr from '@/locales/tr.json';
import nb from '@/locales/nb.json';
import da from '@/locales/da.json';
import ru from '@/locales/ru.json';
import zh from '@/locales/zh.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  seo: true,
  messages: {
    en,
    de,
    pt,
    ja,
    fr,
    id,
    es,
    it,
    th,
    pl,
    ko,
    ar,
    nl,
    tr,
    nb,
    da,
    ru,
    zh,
  },
}));
