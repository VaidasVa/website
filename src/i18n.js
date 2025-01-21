import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './i18n/en.json'
import translationNL from './i18n/nl.json'
import translationLT from './i18n/lt.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lowerCaseLng: true,
        resources: {
            en: {
                translation: translationEN,
            },
            nl: {
                translation: translationNL,
            },
            lt: {
                translation: translationLT,
            },
        },
        fallbackLng: 'lt',
        debug: true,
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    });

export default i18n;
