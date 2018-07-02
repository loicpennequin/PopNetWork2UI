import i18next          from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

const cfg = {
    fallbackLng: 'fr-FR',
    ns: ['common'],
    defaultNS: 'common',
    debug: true,
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true
  },
  resources: {
      en: {
        common: {
          "Soon": 'Coming Soon...'
        }
      },
      fr: {
        common: {
          "Soon": 'Bientôt...'
        }
      }
    }
};

i18next
    // .use(Backend)
    .use(LanguageDetector)
    .init(cfg);

export { i18next as default }
