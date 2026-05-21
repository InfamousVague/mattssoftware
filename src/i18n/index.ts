/// i18n barrel — exports the provider, hook, and locale registry. The
/// system is self-contained (no react-i18next dependency) and keeps
/// the bundle small. Each locale file is a fully-typed `Translation`
/// object; the active language is selected by:
///   1. localStorage (if previously set)
///   2. browser navigator.language (first match against our 7 codes)
///   3. English fallback
///
/// Persistence lives in `mattssoftware:lang`.

export { LanguageProvider, useTranslation, useLanguage } from "./context";
export type { LanguageCode, Translation } from "./types";
export { LANGUAGE_CODES } from "./types";
