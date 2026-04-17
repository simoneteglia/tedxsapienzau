import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./resources/locales/en/translation.json";
import itTranslation from "./resources/locales/it/translation.json";

export const LANGUAGE_STORAGE_KEY = "tedxsapienzau_language";
export const SUPPORTED_LANGUAGES = ["it", "en"];

const normalizeLanguage = (language = "it") =>
  String(language).toLowerCase().startsWith("en") ? "en" : "it";

const getInitialLanguage = () => {
  if (typeof window === "undefined") {
    return "it";
  }

  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (SUPPORTED_LANGUAGES.includes(storedLanguage)) {
      return storedLanguage;
    }
  } catch {
    // Ignore storage access errors and fall back to the browser language.
  }

  return normalizeLanguage(window.navigator.language);
};

const resources = {
  en: {
    translation: enTranslation,
  },
  it: {
    translation: itTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    debug: false,
    fallbackLng: "it",
    supportedLngs: SUPPORTED_LANGUAGES,
    interpolation: {
      escapeValue: false,
    },
  });

if (typeof window !== "undefined") {
  const syncLanguage = (language) => {
    const normalizedLanguage = normalizeLanguage(language);

    document.documentElement.lang = normalizedLanguage;

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizedLanguage);
    } catch {
      // Ignore storage access errors and keep the in-memory language only.
    }
  };

  syncLanguage(i18n.resolvedLanguage || i18n.language);
  i18n.on("languageChanged", syncLanguage);
}

export default i18n;
