import i18next          from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

const cfg = {
    debug: true,
    fallbackLng: 'fr',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true
    }
};

i18next
    .use(Backend)
    .use(LanguageDetector)
    .init(cfg);

export { i18next as default }
