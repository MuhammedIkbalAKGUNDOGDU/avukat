import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "tr",
    lng: "tr",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
      allowMultiLoading: false,
      requestOptions: {
        cache: "default",
      },
      load: "languageOnly",
      cleanCode: true,
    },
    react: {
      useSuspense: false,
    },
    preload: ["tr", "en", "ar"],
    ns: ["translation"],
    defaultNS: "translation",
  });

export default i18n;
