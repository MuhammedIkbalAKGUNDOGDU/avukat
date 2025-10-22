import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "tr",
    lng: "tr",
    debug: true, // Debug'u açalım
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false, // Suspense'i kapatıp deneyelim
    },
  });

export default i18n;
