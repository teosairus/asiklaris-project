import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import de from "./locales/de.json";
import el from "./locales/el.json";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import it from "./locales/it.json";

i18n
  .use(Backend)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass to react-i18next
  .init({
    fallbackLng: "gr",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      gr: { translation: el },
      de: { translation: de },
      fr: { translation: fr },
      it: { translation: it },
    },
    react: {
      useSuspense: false, // true by default - for async loading
    },
  });

export default i18n;
