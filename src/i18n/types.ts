/// The Translation shape — single source of truth for every locale.
/// If you add a key, add it to en.ts AND every other locale (TS will
/// fail the build if you forget). Strings can include `{placeholder}`
/// tokens that the `t()` helper substitutes at render time.

export interface AppFeature {
  title: string;
  body: string;
}

export interface ShowcaseFeature {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  imageAlt: string;
}

export interface BaseAppCopy {
  /// Marketing page tagline (one line).
  tagline: string;
  /// Marketing page 2–4 sentence elevator pitch.
  description: string;
  /// Home/launcher catalog tagline (sometimes shorter).
  catalogTagline: string;
  /// Home/launcher catalog longer description.
  catalogDescription: string;
  /// Requirements line under the hero CTAs ("macOS 14+  ·  …").
  requirements: string;
  /// Section heading above the 3 hero feature cards.
  featuresHeading: string;
  /// The 3 hero feature cards (title + body).
  features: AppFeature[];
  /// Optional deeper showcase rows (badge + title + bullets).
  showcase?: ShowcaseFeature[];
}

export interface TapStat {
  value: string;
  label: string;
}

export interface SecurityCard {
  title: string;
  body: string;
}

export interface TechItem {
  label: string;
  value: string;
}

/// Tap is the biggest app page; it has dedicated extras (architecture,
/// security model, template categories, use cases, tech stack). Keep
/// them inline so the page's chrome is fully translatable.
export interface TapAppCopy extends BaseAppCopy {
  stats: TapStat[];
  threeSecondsHeading: string;
  threeSecondsSub: string;
  stepTap: string;
  stepConfirm: string;
  stepDone: string;
  archHeading: string;
  archWatch: string;
  archRelay: string;
  archServers: string;
  archCompanion: string;
  archMac: string;
  securityHeading: string;
  securityCards: SecurityCard[];
  templatesHeading: string;
  templatesSub: string;
  templateCategories: {
    system: string;
    docker: string;
    systemd: string;
    deploy: string;
    nginx: string;
    network: string;
  };
  useCasesHeading: string;
  useCases: string[];
  techHeading: string;
  techStack: {
    watch: TechItem;
    macos: TechItem;
    companion: TechItem;
    relay: TechItem;
    encryption: TechItem;
    tls: TechItem;
    notifications: TechItem;
  };
  quickSetup: string;
  relayConfig: string;
  ctaHeading: string;
  ctaSub: string;
  ctaGithub: string;
}

export interface BaseLibraryCopy extends BaseAppCopy {
  /// Primary CTA label for the library channel (Base only).
  ctaLabel: string;
}

export interface Translation {
  meta: {
    siteTitle: string;
    siteDescription: string;
    htmlLang: string;
    direction: "ltr" | "rtl";
  };

  langSelector: {
    label: string;
    selectLanguage: string;
  };

  languageNames: {
    en: string;
    es: string;
    fr: string;
    de: string;
    zh: string;
    ja: string;
    pt: string;
    ko: string;
    pl: string;
  };

  nav: {
    brand: string;
    apps: string;
    appsAllLabel: string;
    launcher: string;
    githubAria: string;
    suiteFooter: string;
    getLauncher: string;
    tipLabel: string;
    tipTitle: string;
    tipCopy: string;
    tipCopied: string;
  };

  footer: {
    mascotAlt: string;
    line: string;
    sub: string;
    github: string;
    allApps: string;
    contact: string;
  };

  channels: {
    appstore: string;
    library: string;
    source: string;
    download: string;
  };

  platforms: {
    macos: string;
    windows: string;
    linux: string;
    watchos: string;
    ios: string;
    ipados: string;
  };

  categories: {
    all: string;
    developerTools: string;
    privacySecurity: string;
    utilities: string;
    learning: string;
    design: string;
  };

  home: {
    eyebrow: string;
    title: string;
    sub: string;
    downloadLauncher: string;
    browseSuite: string;
    metaLine: string;
    brandName: string;
    brandSub: string;
    searchPlaceholder: string;
    searchAria: string;
    categoriesAria: string;
    noResults: string;
    view: string;
  };

  appPage: {
    downloadBtn: string;
    viewGithub: string;
    openInBrowser: string;
    featuresHeadingDefault: string;
    suiteEyebrow: string;
    suiteHeading: string;
    suiteSub: string;
    bottomAddToMenuBar: string;
    bottomGet: string;
  };

  featureShowcase: {
    screenshotComingSoon: string;
  };

  apps: {
    espresso: BaseAppCopy;
    stickykeys: BaseAppCopy;
    stats: BaseAppCopy;
    port: BaseAppCopy;
    alfred: BaseAppCopy;
    blip: BaseAppCopy;
    diane: BaseAppCopy;
    peephole: BaseAppCopy;
    quarantine: BaseAppCopy;
    sentry: BaseAppCopy;
    fishbones: BaseAppCopy;
    tap: TapAppCopy;
    base: BaseLibraryCopy;
  };

  legal: {
    privacyTitle: string;
    termsTitle: string;
    eulaTitle: string;
    tapTagline: string;
    effectiveDate: string;
    navPrivacy: string;
    navTerms: string;
    navEula: string;

    privacy: {
      intro: string;
      collectHeading: string;
      accountHeading: string;
      accountBody: string;
      relayHeading: string;
      relayBody: string;
      useHeading: string;
      useBody: string;
      storageHeading: string;
      storageBody1: string;
      storageBody2: string;
      thirdPartyHeading: string;
      thirdPartyBody: string;
      notDoHeading: string;
      notDoList: string[];
      retentionHeading: string;
      retentionBody: string;
      childrenHeading: string;
      childrenBody: string;
      changesHeading: string;
      changesBody: string;
      contactHeading: string;
      contactBody: string;
    };

    terms: {
      acceptHeading: string;
      acceptBody: string;
      descriptionHeading: string;
      descriptionBody: string;
      accountsHeading: string;
      accountsBody: string;
      responsibilitiesHeading: string;
      serversHeading: string;
      serversBody: string;
      commandsHeading: string;
      commandsBody: string;
      relayHeading: string;
      relayBody: string;
      acceptableHeading: string;
      acceptableIntro: string;
      acceptableList: string[];
      ipHeading: string;
      ipBody: string;
      warrantyHeading: string;
      warrantyBody: string;
      liabilityHeading: string;
      liabilityBody: string;
      terminationHeading: string;
      terminationBody: string;
      governingHeading: string;
      governingBody: string;
      changesHeading: string;
      changesBody: string;
      contactHeading: string;
      contactBody: string;
    };

    eula: {
      intro: string;
      licensedHeading: string;
      licensedBody: string;
      scopeHeading: string;
      scopeBody: string;
      scopeIntro: string;
      scopeList: string[];
      relayHeading: string;
      relayBody: string;
      ownershipHeading: string;
      ownershipBody: string;
      terminationHeading: string;
      terminationBody: string;
      warrantyHeading: string;
      warrantyBody: string;
      liabilityHeading: string;
      liabilityBody: string;
      governingHeading: string;
      governingBody: string;
      contactHeading: string;
      contactBody: string;
    };
  };

  notFound: {
    altText: string;
    title: string;
    sub: string;
    backToSuite: string;
    rummageGithub: string;
  };
}

export type LanguageCode =
  | "en"
  | "es"
  | "fr"
  | "de"
  | "zh"
  | "ja"
  | "pt"
  | "ko"
  | "pl";

export const LANGUAGE_CODES: readonly LanguageCode[] = [
  "en",
  "es",
  "fr",
  "de",
  "zh",
  "ja",
  "pt",
  "ko",
  "pl",
];
