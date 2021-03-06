import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationMK from "./locales/mk/translation.json";
import translationEN from "./locales/en/translation.json";
import translationAL from "./locales/al/translation.json";

let lng;
const fallbackLng = "mk";
const availableLanguages = ["mk", "en", "al"];

if (typeof window !== "undefined") {
  lng = localStorage.getItem("i18nextLng") || "mk";
}

const resources = {
  mk: {
    translation: translationMK,
  },
  en: {
    translation: translationEN,
  },
  al: {
    translation: translationAL,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng,
    fallbackLng,
    resources,

    detection: {
      checkWhitelist: true,
    },
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
