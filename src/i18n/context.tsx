import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en } from "./locales/en";
import { es } from "./locales/es";
import { fr } from "./locales/fr";
import { de } from "./locales/de";
import { zh } from "./locales/zh";
import { ja } from "./locales/ja";
import { pt } from "./locales/pt";
import { ko } from "./locales/ko";
import { pl } from "./locales/pl";
import { LANGUAGE_CODES, type LanguageCode, type Translation } from "./types";

const TRANSLATIONS: Record<LanguageCode, Translation> = {
  en,
  es,
  fr,
  de,
  zh,
  ja,
  pt,
  ko,
  pl,
};

const STORAGE_KEY = "mattssoftware:lang";

interface LanguageContextValue {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: Translation;
  /// Substitutes `{key}` placeholders in a template string. Used for
  /// strings like "{count} apps, one launcher." where we don't want to
  /// hardcode the number into the translation file.
  format: (template: string, vars: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLang(): LanguageCode {
  if (typeof window === "undefined") return "en";
  // 1. Saved preference wins.
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && (LANGUAGE_CODES as readonly string[]).includes(saved)) {
      return saved as LanguageCode;
    }
  } catch {
    // localStorage can throw in private-browsing / sandboxed contexts;
    // fall through to navigator detection.
  }
  // 2. Browser language. We only check the 2-char prefix because
  // navigator.language is often "en-US" / "zh-CN" / "pt-BR".
  const nav = window.navigator?.language ?? "";
  const prefix = nav.slice(0, 2).toLowerCase();
  if ((LANGUAGE_CODES as readonly string[]).includes(prefix)) {
    return prefix as LanguageCode;
  }
  return "en";
}

/// Simple `{placeholder}` substitution — no nested expressions, no
/// pluralization rules (we don't need them for marketing copy).
export function format(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    const v = vars[key];
    return v === undefined ? `{${key}}` : String(v);
  });
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>(detectInitialLang);

  const setLang = useCallback((next: LanguageCode) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore storage failures — the in-memory state still updates.
    }
  }, []);

  // Keep <html lang="…"> and document title in sync with the active
  // language. Browsers + screen readers + SEO all key off the lang
  // attribute, so this is more than cosmetic.
  useEffect(() => {
    const t = TRANSLATIONS[lang];
    document.documentElement.lang = t.meta.htmlLang;
    document.documentElement.dir = t.meta.direction;
    document.title = t.meta.siteTitle;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute("content", t.meta.siteDescription);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: TRANSLATIONS[lang], format }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return ctx;
}

/// Convenience hook — returns just the strings + format helper.
/// Components that don't need to switch languages should use this.
export function useTranslation() {
  const { t, format: f } = useLanguage();
  return { t, format: f };
}
