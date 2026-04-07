export interface Language {
  code: string;
  name: string;
  google: { source: string; target: string };
  deepl: { source: string; target: string };
}

export const languages: Language[] = [
  {
    code: "en",
    name: "English",
    google: { source: "en", target: "en" },
    deepl: { source: "EN", target: "EN-GB" },
  },
  {
    code: "de",
    name: "German",
    google: { source: "de", target: "de" },
    deepl: { source: "DE", target: "DE" },
  },
  {
    code: "fr",
    name: "French",
    google: { source: "fr", target: "fr" },
    deepl: { source: "FR", target: "FR" },
  },
  {
    code: "es",
    name: "Spanish",
    google: { source: "es", target: "es" },
    deepl: { source: "ES", target: "ES" },
  },
  {
    code: "zh-CN",
    name: "Chinese (Simplified)",
    google: { source: "zh-CN", target: "zh-CN" },
    deepl: { source: "ZH", target: "ZH-HANS" },
  },
  {
    code: "zh-TW",
    name: "Chinese (Traditional)",
    google: { source: "zh-TW", target: "zh-TW" },
    deepl: { source: "ZH", target: "ZH-HANT" },
  },
  {
    code: "ru",
    name: "Russian",
    google: { source: "ru", target: "ru" },
    deepl: { source: "RU", target: "RU" },
  },
  {
    code: "it",
    name: "Italian",
    google: { source: "it", target: "it" },
    deepl: { source: "IT", target: "IT" },
  },
  {
    code: "pt",
    name: "Portuguese",
    google: { source: "pt", target: "pt" },
    deepl: { source: "PT", target: "PT-PT" },
  },
  {
    code: "ro",
    name: "Romanian",
    google: { source: "ro", target: "ro" },
    deepl: { source: "RO", target: "RO" },
  },
  {
    code: "ja",
    name: "Japanese",
    google: { source: "ja", target: "ja" },
    deepl: { source: "JA", target: "JA" },
  },
  {
    code: "ko",
    name: "Korean",
    google: { source: "ko", target: "ko" },
    deepl: { source: "KO", target: "KO" },
  },
  {
    code: "vi",
    name: "Vietnamese",
    google: { source: "vi", target: "vi" },
    deepl: { source: "VI", target: "VI" },
  },
  {
    code: "id",
    name: "Indonesian",
    google: { source: "id", target: "id" },
    deepl: { source: "ID", target: "ID" },
  },
  {
    code: "bg",
    name: "Bulgarian",
    google: { source: "bg", target: "bg" },
    deepl: { source: "BG", target: "BG" },
  },
  {
    code: "cs",
    name: "Czech",
    google: { source: "cs", target: "cs" },
    deepl: { source: "CS", target: "CS" },
  },
];
