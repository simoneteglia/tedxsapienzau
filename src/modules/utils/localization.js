export function localized(it, en = it) {
  return { it, en };
}

export function isEnglishLanguage(language = "it") {
  return String(language).toLowerCase().startsWith("en");
}

export function getLocalizedText(value, language = "it") {
  if (typeof value === "string") {
    return value;
  }

  if (!value) {
    return "";
  }

  return isEnglishLanguage(language)
    ? (value.en ?? value.it ?? "")
    : (value.it ?? value.en ?? "");
}
