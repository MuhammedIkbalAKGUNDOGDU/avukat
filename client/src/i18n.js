import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "tr",
    lng: localStorage.getItem("i18nextLng") || "tr",
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
    saveMissing: false,
    missingKeyHandler: false,
  });

// Dil değişikliğini localStorage'a kaydet
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("i18nextLng", lng);
  // HTML elementlerini güncelle
  document.documentElement.lang = lng;
  if (lng === "ar") {
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.dir = "ltr";
  }
});

export default i18n;
