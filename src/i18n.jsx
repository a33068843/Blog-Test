import i18n from 'i18next';
import tw from 'locales/zh-TW.json';
import en from 'locales/en.json';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    'zh-TW': {
      translation: tw,
    },
    en: {
      translation: en,
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});
