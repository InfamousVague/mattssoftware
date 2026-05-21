import { useEffect, useRef, useState } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useLanguage } from "../i18n/context";
import { LANGUAGE_CODES, type LanguageCode } from "../i18n/types";
import "./LanguageSelector.css";

/// Globe-icon dropdown that sits in the nav. Opens a small menu listing
/// all seven supported languages by their native names; clicking one
/// updates the active language (which the LanguageProvider persists to
/// localStorage + the <html lang> attribute).
///
/// Keyboard nav: Esc closes, ↑/↓ moves focus among items, Enter selects.
/// Outside-click closes. Trigger shows the current language's 2-letter
/// code so it stays narrow in the nav.
export function LanguageSelector() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    function onMouseDown(e: MouseEvent) {
      const target = e.target as Node | null;
      if (!target) return;
      if (wrapRef.current?.contains(target)) return;
      setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function selectLang(next: LanguageCode) {
    setLang(next);
    setOpen(false);
  }

  return (
    <div className="lang-selector" ref={wrapRef}>
      <button
        type="button"
        className={`lang-selector__trigger${open ? " lang-selector__trigger--open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={t.langSelector.selectLanguage}
        title={t.langSelector.label}
      >
        <Globe size={14} aria-hidden />
        <span className="lang-selector__code">{lang.toUpperCase()}</span>
        <ChevronDown
          size={12}
          aria-hidden
          className="lang-selector__chev"
        />
      </button>

      {open && (
        <div
          className="lang-selector__menu"
          role="menu"
          aria-label={t.langSelector.label}
        >
          {LANGUAGE_CODES.map((code) => {
            const isActive = code === lang;
            return (
              <button
                key={code}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                className={`lang-selector__item${isActive ? " lang-selector__item--active" : ""}`}
                onClick={() => selectLang(code)}
              >
                <span className="lang-selector__item-code">
                  {code.toUpperCase()}
                </span>
                <span className="lang-selector__item-name">
                  {t.languageNames[code]}
                </span>
                {isActive && (
                  <Check
                    size={14}
                    aria-hidden
                    className="lang-selector__item-check"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
