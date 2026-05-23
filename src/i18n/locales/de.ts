/// German translations. Mirrors en.ts shape — TS enforces it.

import type { Translation } from "../types";

export const de: Translation = {
  meta: {
    siteTitle: "Matt's Software — Winzige Apps, die ihr Geld wert sind",
    siteDescription:
      "Ein kleiner Laden mit winzigen, kostenlosen Open-Source-Apps. Ein Launcher installiert sie alle und hält sie aktuell.",
    htmlLang: "de",
    direction: "ltr",
  },

  langSelector: {
    label: "Sprache",
    selectLanguage: "Sprache auswählen",
  },

  languageNames: {
    en: "English",
    es: "Español",
    fr: "Français",
    de: "Deutsch",
    zh: "中文",
    ja: "日本語",
    pt: "Português",
    ko: "한국어",
    pl: "Polski",
  },

  nav: {
    brand: "Matt's Software",
    apps: "Apps",
    appsAllLabel: "Alle Apps",
    launcher: "Launcher",
    githubAria: "GitHub",
    suiteFooter: "{count} Apps, ein Launcher.",
    getLauncher: "Launcher holen",
    tipLabel: "Trinkgeld",
    tipTitle: "Trinkgeld senden",
    tipCopy: "Kopieren",
    tipCopied: "Kopiert",
  },

  footer: {
    mascotAlt:
      "Eine weiße Katze, eingerollt um eine Blaupause und eine Kaffeetasse — irgendwie eingeschlafen trotz der Musik",
    line: "Gebaut mit Espresso und lauter Musik.",
    sub: "Matt's Software ist ein Ein-Personen-Laden. Jede App ist signiert, notariell beglaubigt und kostenlos.",
    github: "GitHub",
    allApps: "Alle Apps",
    contact: "Kontakt",
  },

  channels: {
    appstore: "App Store",
    library: "Bibliothek",
    source: "Quellcode",
    download: "Herunterladen",
  },

  platforms: {
    macos: "macOS",
    windows: "Windows",
    linux: "Linux",
    watchos: "watchOS",
    ios: "iOS",
    ipados: "iPadOS",
  },

  categories: {
    all: "Alle",
    developerTools: "Entwicklerwerkzeuge",
    privacySecurity: "Datenschutz & Sicherheit",
    utilities: "Dienstprogramme",
    learning: "Lernen",
    design: "Design",
  },

  home: {
    eyebrow: "MATT'S SOFTWARE",
    title: "Winzige Apps, die ihr Geld wert sind.",
    sub: "Ein kleiner kuratierter Laden mit {count}+ winzigen, kostenlosen Apps. Ein Launcher installiert sie alle und hält sie aktuell — oder schnapp dir eine einzeln.",
    downloadLauncher: "Launcher herunterladen",
    browseSuite: "Sammlung durchstöbern",
    metaLine: "Kostenlos · Open Source · macOS heute, mehr in Kürze",
    brandName: "Matt's Software",
    brandSub: "Jede App, die ich gebaut habe, an einem Ort",
    searchPlaceholder: "Apps suchen…",
    searchAria: "Apps suchen",
    categoriesAria: "Kategorien",
    noResults: "Keine Apps passen zu „{query}“.",
    view: "Ansehen",
  },

  appPage: {
    downloadBtn: "Herunterladen",
    viewGithub: "Auf GitHub ansehen",
    openInBrowser: "Im Browser öffnen",
    featuresHeadingDefault: "Was sie macht",
    suiteEyebrow: "Die Sammlung",
    suiteHeading: "Mehr aus dem Laden",
    suiteSub:
      "Jede löst genau eine Sache richtig gut — installiere nur das, was du brauchst.",
    bottomAddToMenuBar: "Füge {name} zu deiner Menüleiste hinzu.",
    bottomGet: "Hol dir {name}.",
  },

  featureShowcase: {
    screenshotComingSoon: "Screenshot folgt",
  },

  apps: {
    espresso: {
      tagline: "Weigere dich zu schlafen.",
      description:
        "Wachhalte-Werkzeug für die Systemleiste: getaktete Sessions oder unbegrenzter Modus, Subpixel-Mauswackeln zur Umgehung der Inaktivitätserkennung und ein globaler Panik-Hotkey, der alles sofort beendet. Override für geschlossenen Deckel und lebenslange Statistiken inklusive.",
      catalogTagline: "Dein Computer will schlafen. Espresso ist anderer Meinung.",
      catalogDescription:
        "Wachhalte-Werkzeug, das verhindert, dass dein Computer schläft. Getaktete Sessions, Mauswackel-Simulation, Override bei geschlossenem Deckel und ein Panik-Hotkey für sofortige Deaktivierung.",
      requirements: "macOS  ·  Windows  ·  Linux  ·  Kostenlos & Open Source",
      featuresHeading: "Bleib wach. Bleib aktiv. Bleib beschäftigt.",
      features: [
        {
          title: "Wach, mit Timer oder für immer",
          body: "Voreingestellte Timer von 5 Minuten bis 8 Stunden, oder unbegrenzter Modus, wenn du es ernst meinst. Halte das Display an oder lass es schlafen, während das System wach bleibt.",
        },
        {
          title: "Täusche deinen Status-Indikator",
          body: "Subpixel-Mauswackeln — unsichtbar, aber genug, um die Inaktivitätserkennung in Slack, Teams, Zoom und jeder App zu umgehen, die auf Inaktivität achtet.",
        },
        {
          title: "Panikknopf inklusive",
          body: "Strg+Umschalt+Esc beendet alles sofort: Display wacht auf, Wackeln stoppt, Timer werden gelöscht. Override bei geschlossenem Deckel für Laptops. Lebenslange Statistiken verfolgen deine Gesamtbetriebszeit.",
        },
      ],
      showcase: [
        {
          badge: "Wach bleiben",
          title: "Dein Computer will schlafen. Espresso widerspricht.",
          description:
            "Ein kleiner Shot in deiner Menüleiste, der den Schlaftimer blockiert, das Display anlässt (oder nicht — du entscheidest) und die Maus subpixelweise bewegt, damit Inaktivitäts-Detektoren auf dem falschen Fuß bleiben.",
          bullets: [
            "Blockiert Systemschlaf, Bildschirmschlaf oder beides — pro Session",
            "Subpixel-Mauswackeln täuscht Slack, Teams, Zoom",
            "Override für geschlossenen Deckel hält alles am Laufen",
            "Lifetime-Statistik zeigt, wie viel Schlaf du gestohlen hast",
          ],
          imageAlt: "3D-Espressotasse beschützt einen schläfrigen Laptop",
        },
        {
          badge: "Auf der Uhr",
          title: "Sessions auf Zeit, oder bis du aufgibst",
          description:
            "Wähle ein Preset (5 min, 30 min, 2 h, 8 h) oder unbegrenzt. Der globale Panik-Hotkey schaltet sofort alles aus — Display schläft, Wackeln stoppt, Timer wird abgebrochen.",
          bullets: [
            "Voreingestellte Timer von 5 Minuten bis 8 Stunden, plus unbegrenzt",
            "Ctrl+Shift+Escape Panik global — alles aus, sofort",
            "Countdown sichtbar in der Menüleiste",
            "Auto-Ende bei Sperren oder Schließen des Deckels (konfigurierbar)",
          ],
          imageAlt: "3D-Sanduhr aus Chrom mit warmem orangem Sand und einem roten Panik-Knopf daneben",
        },
      ],
    },

    stickykeys: {
      tagline: "Sperr die Tasten.",
      description:
        "Eine winzige App in der Menüleiste. Klicke, um die Tastatur zu sperren, wische die Tasten mit einem Mikrofasertuch ab, ohne Apps zu starten, E-Mails zu senden oder deine Arbeit zu unterbrechen, dann klicke das Overlay zum Entsperren. Ein mattiertes Vollbild-Overlay deckt jeden Monitor ab, die Maus bleibt aktiv und eine Sicherheits-Auto-Entsperrung sorgt dafür, dass du nie eingeschlossen wirst.",
      catalogTagline: "Sperr die Tastatur, damit ein Putztuch keine Shortcuts auslöst.",
      catalogDescription:
        "Eine Menüleisten-Tastatursperre zum Reinigen. Klicke, um jede Taste, Modifikator und Medientaste systemweit abzufangen; ein mattiertes Vollbild-Overlay deckt jeden Bildschirm ab, die Maus bleibt aktiv zum Entsperren und eine Sicherheits-Auto-Entsperrung sorgt dafür, dass du nie eingeschlossen wirst.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Kostenlos  ·  Developer ID signiert & notariell beglaubigt",
      featuresHeading: "Wisch die Tasten. Starte nichts.",
      features: [
        {
          title: "Alles mit einem Klick sperren",
          body: "Eine aktive Tastaturerfassung schluckt jede Taste, jeden Modifikator und jede Medientaste systemweit — wische die Tasten ab, ohne einen einzigen Shortcut auszulösen.",
        },
        {
          title: "Mattiertes Vollbild-Overlay",
          body: "Eine klare, ungetönte Unschärfe deckt jeden Bildschirm ab, sodass du auf einen Blick siehst, dass die Tastatur gesperrt ist, mit einem Live-Countdown der automatischen Entsperrung.",
        },
        {
          title: "Nur mit Maus entsperren, nie eingeschlossen",
          body: "Entsperre über die Overlay-Schaltfläche oder das Menüleisten-Symbol, und eine Sicherheits-Auto-Entsperrung greift egal was passiert, damit du nie steckenbleibst.",
        },
      ],
      showcase: [
        {
          badge: "Verriegeln",
          title: "Ein Klick, die Tastatur verstummt",
          description:
            "Ein systemweiter Keyboard-Tap verschluckt jede Taste, jeden Modifier, jede Media-Taste — damit ein Mikrofasertuch nicht versehentlich einen Shortcut auslöst, eine Mail versendet oder Logic mitten in der Aufnahme beendet. Ein mattes Overlay deckt jeden Monitor ab, damit klar ist: gesperrt.",
          bullets: [
            "System-Tastatur-Tap — jede Taste, jeder Modifier, jede Media-Taste",
            "Matte Overlay über jeden Monitor mit Countdown",
            "Maus bleibt aktiv, damit du nach dem Putzen entsperren kannst",
            "Lebt in der Menüleiste — ein Klick rein, ein Klick raus",
          ],
          imageAlt: "3D-Tastatur unter einer matten Lavendel-Glaskuppel mit einem Vorhängeschloss",
        },
        {
          badge: "Sicherer Ausgang",
          title: "Du kannst nicht gefangen sein",
          description:
            "Eine Sicherheits-Auto-Entsperrung feuert komplett unabhängig — auch wenn das Overlay versagt, auch wenn die Menüleiste hängt. Die Entsperrfläche hört auf die Maus, die Menüleiste und einen harten Timer.",
          bullets: [
            "Auto-Unlock-Timer garantiert, dass du nie steckenbleibst",
            "Drei unabhängige Entsperrpfade: Overlay, Menüleiste, Timer",
            "Maximale Sperrdauer konfigurierbar (Standard: 1 min)",
            "Paranoid entworfen — versagt offen, nie geschlossen",
          ],
          imageAlt: "3D-Drehknopf aus Chrom mit lavendelfarbenem Zeiger und einem schwebenden Schlüssel über einem offenen Schloss",
        },
      ],
    },

    stats: {
      tagline: "Jedes Signal. Ein Blick.",
      description:
        "Ein nativer Systemmonitor in der Menüleiste. Live-CPU pro Kern, Speicherdruck, Festplatte Lesen/Schreiben, Netzwerk Hoch/Runter und Sensorwerte — plus optionale kompakte Widgets, die in der Statusleiste mitfahren, und Verlaufs-Sparklines für jedes Signal, damit du einen Spike erkennst, ohne die Aktivitätsanzeige zu öffnen.",
      catalogTagline: "Jedes System-Signal auf einen Blick — in deiner Menüleiste.",
      catalogDescription:
        "Ein nativer Systemmonitor in der Menüleiste. Live-CPU pro Kern, Speicherdruck, Festplatte Lesen/Schreiben, Netzwerk Hoch/Runter und Sensorwerte — plus optionale kompakte Widgets, die in der Statusleiste mitfahren, und Verlaufs-Sparklines für jedes Signal.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Kostenlos  ·  Developer ID signiert & notariell beglaubigt",
      featuresHeading: "Sieh die ganze Maschine. Ohne das ganze Fenster.",
      features: [
        {
          title: "Jedes System-Signal auf einen Blick",
          body: "CPU pro Kern, Speicherdruck (mit der Aufschlüsselung verkabelt/komprimiert/App/Cache), Festplatte Lesen/Schreiben, Netzwerk Hoch/Runter, Sensoren und eine Live-Liste der Top-Prozesse — alles in einem kompakten Menüleisten-Panel.",
        },
        {
          title: "Kompakte Menüleisten-Widgets",
          body: "Wähle, welche Zahlen (oder eine winzige Live-Wellenform) in deiner Statusleiste mitfahren. Bleibt sichtbar, während du arbeitest, nie im Weg.",
        },
        {
          title: "Sparklines, keine Tabellen",
          body: "Der jüngste Verlauf wird für jedes Signal grafisch dargestellt, sodass ein Spike oder ein außer Kontrolle geratener Prozess offensichtlich ist, ohne die Aktivitätsanzeige durchwühlen zu müssen.",
        },
      ],
      showcase: [
        {
          badge: "Alle Signale",
          title: "Jede Anzeige deiner Maschine auf einen Blick",
          description:
            "CPU pro Kern, Memory-Pressure (mit dem Wired-/Komprimiert-/App-/Cache-Breakdown), Disk Read & Write, Netzwerk Up & Down, Sensorwerte — Stats liest jedes Signal, das macOS hergibt, und heftet sie alle an deine Menüleiste.",
          bullets: [
            "CPU-Auslastung pro Kern und Top-Prozessliste",
            "Memory-Pressure mit vollem Residenz-Breakdown",
            "Disk-I/O, Netzwerk-Durchsatz und Sensor-Temperaturen",
            "Beliebige Auswahl als kompakte Menüleisten-Widgets anpinnen",
          ],
          imageAlt: "3D-Gruppe schwebender Chrom-und-Pink-Messgeräte und ein kleiner Chip-Sensor",
        },
        {
          badge: "Rückblick",
          title: "Sparklines, keine Tabellen",
          description:
            "Die jüngste History wird für jedes Signal grafisch dargestellt, sodass ein durchgedrehter Prozess oder ein Hitzespitze auf einen Blick erkennbar ist — ohne den Activity Monitor zu öffnen und auf eine Wiederholung zu warten.",
          bullets: [
            "Live-Sparkline-History für jedes Messgerät",
            "Konfigurierbares History-Fenster — letzte Minute, Stunde oder Tag",
            "Erkenne einen Spike nachträglich statt ihn live zu jagen",
            "Tippe auf eine Sparkline, um den Top-Prozess in dem Moment zu sehen",
          ],
          imageAlt: "3D-glänzendes pinkes Sparkline-Band mit einer Chromkugel an der Spitze",
        },
      ],
    },

    port: {
      tagline: "Jeder Port, ein Klick.",
      description:
        "Ein winziger nativer Port-Manager in der Menüleiste. Sieh, was lauscht, töte oder pausiere den Prozess, leite ihn weiter oder mappe ihn via NAT-PMP und beobachte aktive Verbindungen auf einer Live-Karte — klicke eine an, um sie in Blip zu inspizieren.",
      catalogTagline: "Jeder offene Port auf deinem Mac, einen Klick entfernt.",
      catalogDescription:
        "Ein nativer Port-Manager in der Menüleiste: sieh, was lauscht, töte oder pausiere den Prozess, leite ihn weiter oder mappe ihn via NAT-PMP und beobachte aktive Verbindungen auf einer Live-Karte — klicke eine an, um sie in Blip zu inspizieren.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Kostenlos  ·  Developer ID signiert",
      featuresHeading: "Sieh ihn. Töte ihn. Leite ihn weiter.",
      features: [
        {
          title: "Jeder offene Port, live",
          body: "Eine Menüleisten-Liste jedes lauschenden TCP/UDP-Ports mit dem Prozess und der PID dahinter, die jede Sekunde aktualisiert wird. Töte ihn, pausiere ihn (SIGSTOP/SIGCONT) oder lass ihn.",
        },
        {
          title: "Weiterleitung & Mapping",
          body: "Proxy jeden lokalen Port zu einem anderen mit einem eingebauten TCP-Weiterleiter, gib ihn in deinem LAN frei und schlage ihn mit nativem NAT-PMP durch deinen Router — keine Konfiguration.",
        },
        {
          title: "Verbindungen auf einer Karte → Blip",
          body: "Aktive Verbindungen auf einer Live-Karte aufgezeichnet, wohin sie wirklich gehen. Klicke einen beliebigen Endpunkt an, um ihn in Blip für eine tiefe Inspektion zu öffnen (oder hol dir Blip, wenn du es nicht hast).",
        },
      ],
      showcase: [
        {
          badge: "Hafen",
          title: "Jeder offene Port, einen Klick entfernt",
          description:
            "Ein lebendiges Menüleisten-Manifest jedes lauschenden TCP/UDP-Ports — der Prozess dahinter, die PID, das Protokoll. Töten, pausieren (SIGSTOP/SIGCONT), oder einfach im Auge behalten.",
          bullets: [
            "Aktualisiert sich jede Sekunde — was lauscht, jetzt gerade",
            "Töte, pausiere oder setze den Prozess fort, ohne die Menüleiste zu verlassen",
            "Bekannte-Ports-Bibliothek benennt gängige Dienste auf den ersten Blick",
            "Benachrichtigt dich, sobald ein neuer Port aufgeht",
          ],
          imageAlt: "3D-Miniaturhafen mit Schlepper, Frachtkahn und Segelboot an einem kleinen Anleger",
        },
        {
          badge: "Signal",
          title: "Weiterleiten, freigeben oder den Router durchstoßen",
          description:
            "Der eingebaute TCP-Forwarder proxyt jeden lokalen Port auf einen anderen. Natives NAT-PMP mappt ihn automatisch durch deinen Router. Beobachte aktive Verbindungen auf einer Karte — klicke einen Endpoint, um ihn in Blip zu inspizieren.",
          bullets: [
            "TCP-Forwarder auf Network.framework gebaut — null Abhängigkeiten",
            "Natives NAT-PMP (RFC 6886) Router-Mapping ohne Config",
            "Gib einen Port mit einem Toggle in deinem LAN frei",
            "Aktive Verbindungen auf einer Karte; per Klick an Blip übergeben",
          ],
          imageAlt: "3D-Miniaturleuchtturm, der ein kleines blaues Datenpaket mit seinem Strahl signalisiert",
        },
      ],
    },

    alfred: {
      tagline: "Hol dir die Festplatte zurück.",
      description:
        "Ein nativer Menüleisten-Page, der sicher zu löschenden Entwickler-Müll findet — node_modules, Cargo target/, Build- und Test-Caches, Xcode DerivedData, Paketmanager-Caches — sortiert ihn nach Größe absteigend und verschiebt ihn in den Papierkorb. Mit einem Klick wiederherstellbar.",
      catalogTagline: "Hol dir den Speicherplatz zurück, den Entwickler-Müll hortet.",
      catalogDescription:
        "Ein nativer Menüleisten-Page, der sicher zu löschenden Entwickler-Müll findet — node_modules, Cargo target/, Build- und Test-Caches, Xcode DerivedData, Paketmanager-Caches — sortiert ihn nach Größe absteigend und verschiebt ihn in den Papierkorb (wiederherstellbar).",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Kostenlos  ·  Developer ID signiert",
      featuresHeading: "Finde ihn. Wirf ihn raus. Hol die Festplatte zurück.",
      features: [
        {
          title: "Finde den Müll, das Größte zuerst",
          body: "node_modules, Cargo target/, Build- und Test-Caches, Xcode DerivedData, Homebrew/Yarn/npm-Caches — gescannt, dimensioniert und nach Größe absteigend aufgelistet, damit du genau weißt, was deine Festplatte hortet.",
        },
        {
          title: "Sicher zu löschen, von Design her",
          body: "Alfred berührt nur regenerierbare Ordner — Caches, Build-Artefakte, Abhängigkeitsbäume — niemals den Quellcode. Alles geht in den Papierkorb, mit einem Klick wiederherstellbar, falls du es dir anders überlegst.",
        },
        {
          title: "Aus der Menüleiste",
          body: "Lebt als winzige Menüleisten-App. Scanne, wann immer du willst, schau, wie viel du zurückgewonnen hast, oder lass es als einmaliges Aufräumwerkzeug für die nächste SSD-Warnung liegen.",
        },
      ],
      showcase: [
        {
          badge: "Zu Diensten",
          title: "Vom Größten zum Kleinsten, höflich, unerbittlich",
          description:
            "Ein Diener in der Menüleiste, der genau weiß, welche Ordner sicher entbehrlich sind. node_modules, Cargo target/, Xcode DerivedData, Homebrew-Caches, Yarn-Caches — Alfred findet sie, wiegt sie und präsentiert sie auf einem silbernen Tablett.",
          bullets: [
            "Scannt jeden gängigen Dev-Cruft-Ordner deiner Projekte",
            "Nach Größe sortiert, damit die Gewinne offensichtlich sind",
            "Skip-Regeln pro Ordner, damit deine Lieblinge unangetastet bleiben",
            "Lebt in der Menüleiste — scanne, wenn dir danach ist",
          ],
          imageAlt: "3D-Miniaturdiener mit grüner Schärpe präsentiert ein silbernes Tablett mit Dev-Cruft",
        },
        {
          badge: "Sicher by Design",
          title: "Hol die Gigabytes zurück, behalte den Code",
          description:
            "Alfred berührt nur regenerierbare Ordner — Caches, Build-Artefakte, Abhängigkeitsbäume — niemals deinen Quellcode. Alles wandert in den Papierkorb, also ist ein Fehler einen Klick vom Rückgängigmachen entfernt.",
          bullets: [
            "Berührt nur regenerierbare Ordner — Code ist immer sicher",
            "Dateien gehen in den Papierkorb, nicht nach /dev/null",
            "Ein Klick stellt alles wieder her, wenn du es dir anders überlegst",
            "Laufende Summe zeigt, wie viel du zurückgewonnen hast",
          ],
          imageAlt: "3D-SSD mit grünem LED-Ring und kleinen Junk-Paketen, die wegschweben",
        },
      ],
    },
    uninstaller: {
      tagline: "Apps + their crumbs, in one click.",
      description:
        "Dragging an app to the Trash leaves behind preferences, caches, sandbox containers, login items, and crash logs. Uninstaller finds the whole pile for any installed app and moves it all to Trash in one click — with a clear list of what's about to go and a separate badge for system-owned files it can't touch.",
      catalogTagline: "Apps + their crumbs, in one click.",
      catalogDescription:
        "Native menu-bar uninstaller. Finds every leftover an app keeps on disk — preferences, caches, sandbox containers, login items, crash logs — and moves the whole pile to Trash in one click.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Free  ·  Developer ID signed",
      featuresHeading: "Three reasons to use Uninstaller",
      features: [
        {
          title: "One click, whole pile",
          body: "Pick an app, see every residue path with sizes, hit Uninstall. The bundle and every leftover go to Trash together — recoverable in one click, no separate cleanup pass.",
        },
        {
          title: "Login items + LaunchAgents",
          body: "Catches the helper plists that survive normal app removal and would otherwise quietly re-run at every login. Surfaces them with the rest of the residue so they don't slip through.",
        },
        {
          title: "Honest about admin",
          body: "System paths under /Library and /private/var/db/receipts are listed but flagged — Uninstaller won't ask for your password to scrub things you probably don't care about.",
        },
      ],
      showcase: [
        {
          badge: "One sweep, whole pile",
          title: "Apps and their crumbs, gone together",
          description:
            "Pick an app and Uninstaller scans the dozen-plus standard residue locations — Preferences, Application Support, Caches, Saved State, Logs, Containers, Group Containers, HTTP Storages, WebKit data, Cookies, LaunchAgents, crash reports. The bundle and every leftover go to the Trash together, in a single batched Finder request.",
          bullets: [
            "Twelve+ residue locations probed per app — by bundle id AND display name so apps that store under either layout don't get missed",
            "Sized biggest-first so you can see exactly what's about to be reclaimed",
            "Trash by default — recoverable in one click if you change your mind",
            "Single batched recycle call so macOS shows one auth prompt for the whole pile, not one per file",
          ],
          imageAlt: "Cute 3D sanitation worker character in a red coverall and red hardhat sweeping a row of colourful app squircles into a chunky white trash bag",
        },
        {
          badge: "Honest about admin",
          title: "App Management permission, asked once",
          description:
            "macOS 13+ gates modifying apps in /Applications behind App Management TCC. Uninstaller routes the trash request through Finder so you get a single, clear permission prompt the first time — and a deep-link to System Settings → Privacy & Security → App Management if anything's still denied after.",
          bullets: [
            "Single Finder-mediated prompt the first time, not one per app removed",
            "System-owned residue under /Library and /private/var/db/receipts is listed with an 'admin' badge but never silently fails — you see exactly what was skipped",
            "Permission-shaped failures surface a one-line tip + a button that opens the right Privacy & Security pane directly",
            "Apple's own apps (com.apple.*) are filtered out of the picker — never offered for removal",
          ],
          imageAlt: "Cute 3D sanitation worker character in red holding up a Privacy & Security clipboard with a green checkmark, three app icons fading into sparkles on his right",
        },
      ],
    },

    blip: {
      tagline: "Sieh, was rausgeht.",
      description:
        "Sieh genau, wohin deine Daten gehen, wer sie sammelt und schalte sie ab — alles auf einer sehr hübschen 3D-Karte.",
      catalogTagline: "Dein Computer hat hinter deinem Rücken geredet.",
      catalogDescription:
        "Echtzeit-Netzwerküberwachung mit einer 3D-Verbindungskarte, intelligenter Firewall, DNS-Blockierung, Unterseekabel-Routing und Bandbreitenanalyse. Sieh genau, wohin deine Daten gehen.",
      requirements: "Kostenlos & Open Source",
      featuresHeading: "Eine Karte. Ein Türsteher. Eine Mauer.",
      features: [
        {
          title: "Live-3D-Karte jeder Verbindung",
          body: "Der Traffic jeder App auf einem Globus aufgezeichnet, Bögen farblich nach Dienst. 200 Verbindungen, über 700 echte Unterseekabel, Partikel zeigen die Richtung. Das Internet, das du ignoriert hast, sichtbar gemacht.",
        },
        {
          title: "Türsteher für deine Bandbreite",
          body: "Jede App braucht Erlaubnis, keine Ausnahmen. Der strenge Modus blockiert alles, bis du etwas anderes sagst. Bandbreiten-Balken pro App entlarven die Datenfresser. Killswitch mit einem Klick.",
        },
        {
          title: "200.000 Tracker blockiert, bevor sie verbinden",
          body: "DNS-Blocklisten vernichten Werbe- und Tracker-Domains auf Sicht; ein Echtzeit-Anfrage-Log bringt jede Suche ans Licht; ein Tracker-Ranking nennt die schlimmsten Übeltäter.",
        },
      ],
      showcase: [
        {
          badge: "Netzwerkkarte",
          title: "200 Verbindungen. Keine hat um Erlaubnis gebeten.",
          description:
            "Jede App auf deinem Computer telefoniert heimlich nach Hause. Blip stellt sie alle auf eine 3D-Karte, damit du das Chaos in Echtzeit beobachten kannst.",
          bullets: [
            "Verbindungen verlaufen über echte Unterseekabel über Ozeane hinweg",
            "Dienst-farbige Bögen — erkenne sofort Google, Discord, Apple und Hunderte mehr",
            "Animierte Partikel zeigen Daten, die in beide Richtungen fließen",
            "Hop-für-Hop-Traceroute zeigt den tatsächlichen Pfad deiner Pakete",
          ],
          imageAlt: "Blip 3D-Netzwerkkarte zeigt Verbindungsbögen",
        },
        {
          badge: "Firewall",
          title: "Türsteher für deine Bandbreite",
          description:
            "Jede App braucht Erlaubnis. Keine Ausnahmen, keine Ausreden. Der strenge Modus blockiert alles, bis du etwas anderes sagst. Weil deine Apps viel zu bequem geworden sind.",
          bullets: [
            "Strenger Modus: schuldig bis das Gegenteil bewiesen ist",
            "Bandbreiten-Balken pro App entlarven die Datenfresser",
            "Gezielte Regeln — erlaube Port 443, aber blockiere alles andere",
            "Killswitch: ein Klick, null Internet, sofortige Stille",
          ],
          imageAlt: "Blip-Firewall zeigt App-Level-Netzwerkzugriffskontrollen",
        },
        {
          badge: "Guard",
          title: "200.000 Tracker blockiert, bevor sie überhaupt verbinden",
          description:
            "Dein DNS ist ein Petze. Jede App, jedes Werbe-SDK, jeder Analytik-Ping — Guard fängt sie an der Tür. Sieh, wer versucht, nach Hause zu telefonieren, und schalte sie ab.",
          bullets: [
            "DNS-Blocklisten vernichten über 200.000 Tracker- und Werbedomains auf Sicht",
            "Echtzeit-Anfrage-Log — beobachte jede Suche live",
            "Tracker-Ranking zeigt die hartnäckigsten Übeltäter",
            "Geschichtet mit der Firewall — zwei Mauern, null Gnade",
          ],
          imageAlt: "Blip Guard zeigt DNS-Blockierung und Tracker-Erkennung",
        },
        {
          badge: "Visualisierung",
          title: "Das Internet sind einfach nasse Kabel",
          description:
            "Dein YouTube-Video hat drei Ozeane auf einem Kabel dünner als ein Gartenschlauch überquert. Blip zeigt dir genau welches — über 700 echte Unterseekabel-Routen, leuchtend, wenn deine Daten durch sie fließen.",
          bullets: [
            "Echte Unterseekabel-Routen von TeleGeography auf dem Meeresgrund kartiert",
            "Aktive Kabel leuchten, wenn dein Traffic durch sie fließt",
            "Marschierende Strichpartikel zeigen Upload- vs. Download-Richtung",
            "Ping-basierte Geschwindigkeit — schnelle Verbindungen fließen schnell, langsame kriechen",
          ],
          imageAlt: "Blip-Visualisierung zeigt Unterseekabel und Datenfluss",
        },
        {
          badge: "Traceroute",
          title: "14 Hops durch 6 Städte, um eine Webseite zu laden",
          description:
            "Jedes Paket springt durch ein Dutzend Router, bevor es ankommt. Blip verfolgt die Route — Hop für Hop, Stadt für Stadt, Kabel für Kabel — und malt sie auf die Karte.",
          bullets: [
            "Hop-für-Hop-Markierungen direkt auf der 3D-Karte überlagert",
            "Latenz farbig: grün ist schnell, bernstein ist okay, rot ist Schmerz",
            "Routen durch echte Unterseekabel über Ozeanüberquerungen",
            "Automatischer Traceroute für jede aktive Verbindung",
          ],
          imageAlt: "Blip-Traceroute zeigt Hop-für-Hop-Netzwerkpfad",
        },
      ],
    },

    diane: {
      tagline: "Drück Aufnahme. Sprich.",
      description:
        "Ein Retro-Sprachrekorder mit Live-Sprache-zu-Text-Transkription, einer Kassettenbibliothek und Diktiermodus. Inspiriert von den Bandmemos von Special Agent Dale Cooper.",
      catalogTagline: "Ich halte einen kleinen Tonbandrekorder in meiner Hand.",
      catalogDescription:
        "Ein skeuomorpher Retro-Sprachrekorder mit Live-Sprache-zu-Text-Transkription, einer Kassettenbibliothek und Diktiermodus. Inspiriert von Special Agent Dale Cooper.",
      requirements: "Kostenlos & Open Source",
      featuresHeading: "Drück Aufnahme. Sprich. Geh.",
      features: [
        {
          title: "Ein skeuomorpher Kassettenrekorder",
          body: "Eine schwebende Seitenleiste mit einem fotorealistischen Rekorder: animierte Spulen, VU-Meter und physische Tasten. Drück Aufnahme und sprich — globale Hotkeys lassen dich aus jeder App aufnehmen.",
        },
        {
          title: "Live-Transkription, auf dem Gerät",
          body: "Apples SFSpeechRecognizer transkribiert, während du sprichst — keine Cloud, keine API-Schlüssel. Klicke ein beliebiges Wort im Transkript an, um zu diesem Moment in der Aufnahme zu springen.",
        },
        {
          title: "Eine Schuhschachtel voller Kassetten",
          body: "Jede Aufnahme wird als farbige Kassette mit Audio und Transkript gespeichert. Scroll durch deine Sammlung, lade eine, spiel sie jederzeit ab.",
        },
      ],
      showcase: [
        {
          badge: "Sprachrekorder",
          title: "Ein skeuomorpher Kassettenrekorder für deinen Schreibtisch",
          description:
            "Eine schwebende Seitenleiste mit einem fotorealistischen Kassettenrekorder. Drück Aufnahme und sprich. Deine Stimme wird aufgenommen, live transkribiert und auf einer Kassette gespeichert, die du durchstöbern, zurückspulen und abspielen kannst.",
          bullets: [
            "Fotorealistischer Kassettenrekorder mit animierten Spulen und VU-Metern",
            "Aufnehmen, abspielen, zurückspulen und vorspulen mit physischen Tasten",
            "Spulen verfolgen visuell die Wiedergabeposition in Echtzeit",
            "Globale Hotkeys lassen dich aus jeder App aufnehmen, ohne Fenster zu wechseln",
          ],
          imageAlt: "Diane-Kassettenrekorder-Oberfläche",
        },
        {
          badge: "Live-Transkription",
          title: "Deine Worte, getippt, während du sie sprichst",
          description:
            "Diane transkribiert deine Sprache in Echtzeit mit Apples Spracherkennung auf dem Gerät. Keine Cloud, keine API-Schlüssel, keine Latenz. Sprich einfach und beobachte, wie die Wörter erscheinen.",
          bullets: [
            "Live-Sprache-zu-Text angetrieben von macOS SFSpeechRecognizer",
            "Vollständig auf dem Gerät verarbeitet, null Daten verlassen deine Maschine",
            "Klicke ein beliebiges Wort im Transkript an, um zu diesem Moment in der Aufnahme zu springen",
            "Diktiermodus tippt deine Worte direkt in jedes fokussierte Textfeld",
          ],
          imageAlt: "Diane Live-Transkriptions-Overlay",
        },
        {
          badge: "Bandbibliothek",
          title: "Eine Schuhschachtel voller Kassetten",
          description:
            "Jede Aufnahme wird als Kassette mit ihrer eigenen Farbvariante gespeichert. Scroll durch deine Sammlung, klick zum Laden und spiel sie jederzeit ab.",
          bullets: [
            "10 einzigartige Kassetten-Farbvarianten zufällig zugewiesen",
            "Kassetten bleiben zwischen Sessions mit vollem Audio und Transkript erhalten",
            "Pfeiltasten durchlaufen deine Kassettensammlung",
            "Wortzählung auf jedem Kassettenetikett angezeigt",
          ],
          imageAlt: "Diane-Kassettenbibliothek",
        },
      ],
    },

    peephole: {
      tagline: "Sieh, wer zuschaut.",
      description:
        "Ein Wachposten in der Menüleiste für deine Kamera und dein Mikrofon. Peephole zeigt, welche Apps sie gerade verwenden, hält einen Zugriffsverlauf und benachrichtigt dich, wenn etwas sie einschaltet — keine speziellen Berechtigungen, keine Kernel-Erweiterungen.",
      catalogTagline: "Sieh, wer zuschaut.",
      catalogDescription:
        "Ein Wachposten in der Menüleiste für deine Kamera und dein Mikrofon: welche Apps sie gerade verwenden, ein Zugriffsverlauf und eine Benachrichtigung in dem Moment, in dem etwas sie einschaltet.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Kostenlos  ·  Developer ID signiert",
      featuresHeading: "Nichts nimmt auf, ohne dass du es weißt.",
      features: [
        {
          title: "Live-Status von Kamera & Mikro",
          body: "Das Menüleisten-Glyph wechselt im Moment, in dem die Kamera oder das Mikrofon aktiv wird, sodass du immer weißt, wann etwas aufnimmt.",
        },
        {
          title: "Zugriffsverlauf",
          body: "Ein laufendes Protokoll, welche App die Kamera oder das Mikro wann verwendet hat — scroll durch die Aktivität des Tages zurück.",
        },
        {
          title: "Benachrichtigungen",
          body: "Werde im Moment alarmiert, in dem eine App beginnt, die Kamera oder das Mikrofon zu verwenden. Keine speziellen Berechtigungen, keine Kernel-Erweiterungen.",
        },
      ],
      showcase: [
        {
          badge: "Augen & Ohren",
          title: "Wisse den Moment, in dem dich etwas beobachtet",
          description:
            "Das Peephole-Glyph in der Menüleiste kippt in dem Moment, in dem Kamera oder Mikrofon aktiv werden. Tippe drauf und du siehst genau, welche App sie angeschaltet hat — und du entscheidest, ob das so sein sollte.",
          bullets: [
            "Live-Status für Kamera und Mikrofon, immer sichtbar",
            "Glyph kippt in dem Moment, in dem der Zugriff beginnt oder endet",
            "Tippe, um die verantwortliche App und ihr geöffnetes Gerät zu sehen",
            "Keine speziellen Rechte, keine Kernel-Extensions — reiner Userspace",
          ],
          imageAlt: "3D-Chrom-Webcam mit leuchtendem mintgrünen Schlitz-Auge und einem Chrom-Mikrofon daneben",
        },
        {
          badge: "Belege",
          title: "Ein Log jedes Zugriffs, mit Benachrichtigung wenn's drauf ankommt",
          description:
            "Scrolle durch die Tagesaktivität von Kamera und Mikrofon — wer sie benutzt hat, wann, wie lange. Optionale Benachrichtigungen feuern in dem Moment, in dem der Zugriff beginnt, damit eine Überraschungs-Aktivierung nie unbemerkt bleibt.",
          bullets: [
            "Per-App-History mit Zeitstempeln und Dauer",
            "Benachrichtigung bei jedem neuen Zugriff (Toggle pro Gerät)",
            "Filtere nach App, Gerät oder Zeitfenster",
            "History überlebt Neustarts — nichts entwischt",
          ],
          imageAlt: "3D-Chrom-Türspion-Scheibe mit leuchtender Mint-Iris und einem Stapel Verlaufskarten dahinter",
        },
      ],
    },

    quarantine: {
      tagline: "Prüfe jeden Download.",
      description:
        "Ein Inspektor in der Menüleiste für ~/Downloads. Für jede neue Datei bringt er die Quarantäne-Ursprungs-URL, den Gatekeeper/Codesign-Status, SHA-256 und ein optionales VirusTotal-Urteil ans Licht — dann benachrichtigt er dich, damit du sie prüfen kannst, bevor du sie öffnest.",
      catalogTagline: "Vertraue, aber überprüfe jeden Download.",
      catalogDescription:
        "Ein Inspektor in der Menüleiste für ~/Downloads: Quarantäne-Ursprung, Gatekeeper/Codesign-Status, SHA-256 und ein optionales VirusTotal-Urteil für jede neue Datei, mit einer Benachrichtigung zur Prüfung.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Kostenlos  ·  Developer ID signiert",
      featuresHeading: "Wisse, was gerade in Downloads gelandet ist.",
      features: [
        {
          title: "Ursprung & Quarantäne",
          body: "Sieh genau, woher eine Datei kam, über ihr com.apple.quarantine-Attribut — der Agent, der sie heruntergeladen hat, und die Quell-URL.",
        },
        {
          title: "Gatekeeper & Hash",
          body: "Codesign/Gatekeeper-Bewertung plus ein SHA-256 für jede neue Datei, die in ~/Downloads landet.",
        },
        {
          title: "Optional VirusTotal",
          body: "Füge einen API-Schlüssel hinzu und Quarantine zeigt ein Reputationsurteil inline an, damit du einen Download prüfen kannst, bevor du ihn überhaupt öffnest.",
        },
      ],
      showcase: [
        {
          badge: "Isolierkammer",
          title: "Jeder neue Download, isoliert bis du grünes Licht gibst",
          description:
            "In dem Moment, in dem eine Datei in ~/Downloads landet, holt Quarantine sie auf den Inspektionstisch. Du siehst genau, woher sie kommt — Agent, Quell-URL, Quarantäne-Attribut — bevor du irgendwo doppelt geklickt hast.",
          bullets: [
            "Beobachtet ~/Downloads in Echtzeit via FSEvents",
            "Liest com.apple.quarantine: die App, die geladen hat, und die Quell-URL",
            "Benachrichtigt dich bei jeder neuen Ankunft",
            "Eine Zeile pro Datei — die ganze Warteschlange auf einen Blick",
          ],
          imageAlt: "3D-Glas-Isolierkapsel mit einem schwebenden Paket darin und genehmigten/abgelehnten Paketen drumherum",
        },
        {
          badge: "Inspizieren",
          title: "Signatur, Hash und ein Urteil",
          description:
            "Für jede Datei zeigt Quarantine die Gatekeeper-Bewertung, den Codesign-Status und den SHA-256. Wirf einen VirusTotal-API-Key rein und das Reputations-Urteil erscheint inline — prüfe, bevor du öffnest.",
          bullets: [
            "spctl-Bewertung + codesign --display in einer einzigen Zeile",
            "SHA-256 bei der Ankunft berechnet — bereit zum Copy-Paste",
            "Optionales VirusTotal-Urteil inline (BYO API Key)",
            "Im Finder zeigen oder direkt aus dem Menü in den Papierkorb",
          ],
          imageAlt: "3D-Chrom-Lupe über einem cremefarbenen Ordner mit einem goldenen Siegel daneben",
        },
      ],
    },

    sentry: {
      tagline: "Beobachte die dunklen Ecken.",
      description:
        "Ein Menüleisten-Prüfer für macOS-Persistenz. Er zählt LaunchAgents & Daemons, Anmeldeobjekte, cron und Shell-Startdateien auf, prüft die Code-Signatur und Notarisierung jedes Ziels und alarmiert dich in dem Moment, in dem ein neues oder geändertes Element erscheint — und lässt dich dann inspizieren, blockieren oder wiederherstellen, direkt aus der Menüleiste.",
      catalogTagline: "Wisse den Moment, in dem sich etwas einnistet.",
      catalogDescription:
        "Ein Menüleisten-Prüfer für macOS-Persistenz — LaunchAgents, Anmeldeobjekte, cron und Shell-Startdateien — mit Signaturprüfungen und Alarmen, wenn etwas Neues oder Geändertes erscheint. Inspiziere, blockiere oder stelle eines davon wieder her.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Kostenlos  ·  Developer ID signiert",
      featuresHeading: "Beobachte die Orte, an denen sich Malware versteckt.",
      features: [
        {
          title: "Jeder Persistenzvektor",
          body: "LaunchAgents & Daemons, Anmeldeobjekte, cron und Shell-Startdateien — jeder Ort, an dem sich etwas einnisten kann, um einen Neustart zu überleben, in einer einzigen Menüleisten-Liste.",
        },
        {
          title: "Signaturbewusst",
          body: "Jede Ziel-Binärdatei wird über spctl und codesign als notariell beglaubigt / signiert / unsigniert klassifiziert, sodass ein unsignierter Launch Agent sofort auffällt.",
        },
        {
          title: "Alarme bei Änderung, blockiere, was nicht da sein sollte",
          body: "Snapshot-Vergleich benachrichtigt dich in dem Moment, in dem ein neues Persistenzelement erscheint oder sich ändert. Inspiziere die plist oder das Skript, dann blockiere es — Sentry entlädt es und legt es als .sentry-disabled beiseite. Mit einem Klick reversibel.",
        },
      ],
      showcase: [
        {
          badge: "Wachturm",
          title: "Jede dunkle Ecke, beleuchtet",
          description:
            "LaunchAgents & Daemons, Login-Items, cron und Shell-rc-Dateien — Sentry hält eine Laterne über jeden Ort, an dem sich etwas leise einnisten könnte. Eine Menüleisten-Liste, signaturgeprüft, bereit zur Inspektion.",
          bullets: [
            "Listet jeden macOS-Persistenz-Vektor in einem Panel",
            "Jedes Ziel klassifiziert als notarisiert / signiert / unsigniert via spctl + codesign",
            "Öffne plist oder Script direkt aus der Zeile",
            "Lebt in der Menüleiste — kein Fenster oben halten",
          ],
          imageAlt: "3D-Chromlaterne mit leuchtendem violettem Kristall und Auge-Anhängern",
        },
        {
          badge: "Manifest",
          title: "Bemerke den Moment, in dem etwas Neues auftaucht",
          description:
            "Sentry macht einen Snapshot deines Persistenz-Zustands und diff't ihn. In dem Moment, in dem ein neuer Agent, Login-Item oder rc-File-Change landet, wirst du benachrichtigt — mit einem Ein-Klick-Block, voll umkehrbar.",
          bullets: [
            "Snapshot-Diff fängt jedes neue oder veränderte Persistenz-Item",
            "Blockieren entlädt das Item und legt es als .sentry-disabled beiseite",
            "Mit einem Klick wiederherstellen — nichts Destruktives passiert deinem System",
            "Benachrichtigung tippt dir vor dem nächsten Neustart auf die Schulter",
          ],
          imageAlt: "3D-Schriftrolle mit violetten Wachssiegeln auf einem Chrom-Pult, mit einer Chrom-Alarmglocke",
        },
      ],
    },

    fishbones: {
      tagline: "Verwandle jedes Technikbuch in einen interaktiven Kurs.",
      description:
        "Wirf ein PDF oder EPUB rein und Libre generiert Lektionen, Übungen und versteckte Tests. Sechzehn Sprachen mit einem Editor, ein lokaler KI-Tutor auf deinem Laptop, Streak-Feuer, das Wochenenden überlebt, und siebzehn Themes.",
      catalogTagline: "Verwandle jedes Technikbuch in einen interaktiven Kurs.",
      catalogDescription:
        "Wirf ein PDF oder EPUB rein und Libre generiert Lektionen, Übungen und versteckte Tests. Sechzehn Sprachen mit einem Editor, ein lokaler KI-Tutor auf deinem Laptop, Streak-Feuer, das Wochenenden überlebt, und siebzehn Themes.",
      requirements: "Kostenlos & Open Source",
      featuresHeading: "Lerne aus jedem Buch.",
      features: [
        {
          title: "Drop a PDF, get a real course",
          body: "Point Libre at a technical book and it generates chapters with lessons, hands-on exercises, and hidden tests that verify your code. The book stays the source of truth; the lessons stay re-generable.",
        },
        {
          title: "Sixteen languages, one editor",
          body: "Python, TypeScript, Go, Rust, Swift, C++, Java, Kotlin, Ruby, Elixir, Zig, Lua, Bash, SQL, HTML/CSS, and Markdown. Built-in language servers, syntax highlighting, and per-language test runners — never leave the editor.",
        },
        {
          title: "A tutor on your laptop, not in the cloud",
          body: "Libre's AI tutor runs locally on Apple Silicon. Stuck on an exercise? Ask in plain English; get a hint pegged to the exact chapter you're on. Your homework never leaves your machine.",
        },
      ],
      showcase: [
        {
          badge: "Lessons that grade themselves",
          title: "Chapter → exercise → hidden test",
          description:
            "Every chapter expands into a sequence: a short read, an exercise scaffold, and a hidden test suite that runs against your code in the background. The test only reveals itself when you ask — so you learn from the failure, not from a leaked answer.",
          bullets: [
            "Hidden tests run in a sandboxed runner per supported language — no Docker, no shell access required",
            "Failures surface as a hint first, the full diff second, and only the test source on explicit request",
            "Exercises remember your in-progress code across sessions; re-opening picks up exactly where you left off",
            "Chapters re-generate cleanly when you swap in a newer edition of the same book — your progress carries over by chapter title",
          ],
          imageAlt: "Cute 3D white python coiled, holding three floating lesson cards labelled Chapter / Exercise / Quiz with its tail-tip ribbons",
        },
        {
          badge: "Habit, not homework",
          title: "Streak fire that survives weekends",
          description:
            "A streak that's only kind on the days you forget. Two free \"weekend tokens\" a month let the fire keep burning when life shows up. The flame's there to nudge — never to shame.",
          bullets: [
            "Two skip-tokens regenerate monthly; a single failed day doesn't reset weeks of work",
            "Tiny daily target (one lesson) keeps the bar realistic; you can always do more on a good day",
            "Streak history lives in a local SQLite file, exportable and inspectable — no cloud account required",
            "Notifications respect Focus modes; \"don't bug me, just keep counting\" is one tap from the menu bar",
          ],
          imageAlt: "Cute 3D white python with a small flame balanced on its nose, four calendar squares with red checkmarks drifting in an arc around it",
        },
      ],
    },

    tap: {
      tagline: "Server am Handgelenk.",
      description:
        "Führe vorkonfigurierte SSH-Befehle auf entfernten Servern von deiner Apple Watch aus. Tippen, bestätigen, fertig. Funktioniert über Mobilfunk, unterstützt Siri, verschlüsselt alles Ende-zu-Ende.",
      catalogTagline: "Die Befehlsfernbedienung für deine Infrastruktur.",
      catalogDescription:
        "Führe vorkonfigurierte SSH-Befehle auf entfernten Servern von deiner Apple Watch aus. Funktioniert über Mobilfunk, unterstützt Siri und verschlüsselt alles Ende-zu-Ende.",
      requirements: "watchOS  ·  iOS  ·  iPadOS  ·  macOS  ·  Kostenlos & Open Source",
      featuresHeading: "Eine Fernbedienung für deine Server — am Handgelenk.",
      features: [
        {
          title: "Eine echte Watch-App, kein Benachrichtigungs-Shim",
          body: "Native watchOS-Serverliste mit Live-Status-Punkten, angeheftete Befehle über den Aktionsknopf, Bestätigung für gefährliche Befehle und mit der Digital Crown scrollbare Ausgabe. Mobilfunkfähig — kein Telefon erforderlich.",
        },
        {
          title: "Companion + Mac, im Gleichschritt",
          body: "Vollständige Apps für iPhone, iPad und Mac Catalyst. Server hinzufügen, Befehle und Befehls-Suites konfigurieren, Verlauf anzeigen, SSH-Schlüssel verwalten. Alles synchronisiert sich in Echtzeit mit der Watch.",
        },
        {
          title: "Suites, Alarme, Siri, Komplikationen",
          body: 'Bündele Befehle in Suites mit einem Tap. 30-Sekunden-Gesundheits-Pings und APNs-Alarme, wenn etwas stirbt. Fünf Watch-Face-Komplikationen. "Hey Siri, Tap prod-api neustarten."',
        },
      ],
      showcase: [
        {
          badge: "Watch-App",
          title: "Starte Prod von deinem Handgelenk neu.",
          description:
            "Native watchOS-App mit Serverliste, Befehlsausführung und haptischem Feedback. Tippe einen Befehl, bestätige, fertig. Echte Ausgabe mit der Digital Crown scrollbar. Funktioniert über Mobilfunk — kein Telefon nötig.",
          bullets: [
            "Serverliste mit Live-Status-Punkten (grün/rot)",
            "Angeheftete Befehle für schnellen Zugriff über Aktionsknopf",
            "Bestätigungsansicht für gefährliche Befehle",
            "Gekürzte Ausgabe, mit der Digital Crown scrollbar",
          ],
          imageAlt: "Tap-Watch-App zeigt Server-Befehle",
        },
        {
          badge: "Companion",
          title: "Konfiguriere alles von deinem Telefon.",
          description:
            "Vollständige Verwaltungs-App für iPhone, iPad und Mac Catalyst. Server hinzufügen, Befehle konfigurieren, SSH-Schlüssel verwalten, Verlauf anzeigen und Befehls-Suites einrichten. Alles synchronisiert sich sofort mit deiner Watch.",
          bullets: [
            "Dashboard mit Server-Gesundheits-Raster und Aktivitäts-Feed",
            "Visueller Befehlseditor mit Template-Bibliothek",
            "Vollständiges interaktives SSH-Terminal via WebView",
            "Generiert QR-Code für sofortiges Watch-Pairing",
          ],
          imageAlt: "Tap-Companion-App-Dashboard",
        },
        {
          badge: "Suites",
          title: "Führe 5 Befehle mit einem Tap aus.",
          description:
            "Gruppiere verwandte Befehle in Suites für Ein-Tap-Deployment-Workflows. Jeder Schritt zeigt Erfolg/Misserfolg in Echtzeit. Konfiguriere, ob bei Fehler fortgefahren oder sofort gestoppt werden soll.",
          bullets: [
            "Geordnete Schrittausführung mit Fortschrittsverfolgung",
            "Pro-Schritt-Bei-Fehler-Fortfahren-Schalter",
            "Suite-Fortschritt über WebSocket gestreamt",
            "Perfekt für Deployment-Sequenzen und Health-Check-Routinen",
          ],
          imageAlt: "Tap-Suite-Ausführungsfortschritt auf der Watch",
        },
        {
          badge: "Alarme",
          title: "Erfahre es, bevor deine Nutzer es tun.",
          description:
            "Hintergrund-Gesundheits-Pings alle 30 Sekunden. Wenn ein Server ausfällt, bekommst du eine sofortige Push-Benachrichtigung auf deiner Watch und deinem Telefon. Pro-Server-Schalter, damit du nur Alarme für das bekommst, was zählt.",
          bullets: [
            "30-Sekunden-Gesundheits-Ping-Schleife mit Latenzverfolgung",
            "APNs-Push an Watch + Telefon bei Statusänderung",
            "Pro-Server-Benachrichtigungs-Schalter",
            "Haptisches Alarmmuster auf Apple Watch",
          ],
          imageAlt: "Tap Server-Down-Benachrichtigung auf der Watch",
        },
        {
          badge: "Komplikationen",
          title: "Schnell sichtbare Server-Gesundheit auf deinem Watch-Face.",
          description:
            "Fünf konfigurierbare Komplikationen, die Live-Server-Metriken direkt auf deinem Watch-Face zeigen. Wähle, welcher Server und welche Metrik angezeigt werden soll. Daten synchronisieren sich automatisch aus der App.",
          bullets: [
            "Serverstatus: flottenweite Up/Down-Zählung",
            "Flotten-Metriken: Festplatte, Speicher oder CPU pro Server",
            "Docker: Laufende Container-Zählungen",
            "Uptime: Pro-Server-Uptime-Anzeige",
            "Schnellbefehle: Angeheftete Befehle auf einen Blick",
          ],
          imageAlt: "Tap-Watch-Komplikationen zeigen Server-Metriken",
        },
        {
          badge: "macOS",
          title: "Volle Kontrolle aus deiner Menüleiste.",
          description:
            "Native macOS-App für schnellen Serverzugriff. Überwache deine Flotte, führe Befehle aus und verwalte Konfigurationen, ohne einen Browser zu öffnen. Melde dich mit Apple an für nahtlose Einrichtung.",
          bullets: [
            "Menüleisten-Präsenz für sofortigen Zugriff",
            "Vollständige Befehlsausführung mit Ausgabeanzeige",
            "Serverkonfiguration aus JSON importieren",
            "Apple Sign-In-Authentifizierung",
          ],
          imageAlt: "Tap-macOS-App zeigt Server-Dashboard",
        },
        {
          badge: "Siri",
          title: '"Hey Siri, Tap prod-api neustarten."',
          description:
            "Vollständige App Intents-Integration. Führe jeden Befehl per Stimme aus. Prüfe den Serverstatus freihändig. Siri bestätigt die Aktion und meldet das Ergebnis. Funktioniert von Watch, Telefon oder CarPlay.",
          bullets: [
            "Natürliche Sprache: 'Tap nginx auf prod neustarten'",
            "Serverstatus-Prüfung: 'Prüfe meine Server auf Tap'",
            "Bestätigungsdialog vor der Ausführung",
            "Ergebnis per Sprachantwort gemeldet",
          ],
          imageAlt: "Siri führt einen Tap-Befehl aus",
        },
      ],
      stats: [
        { value: "< 3s", label: "Ausführungszeit" },
        { value: "Mobilfunk", label: "Kein Telefon nötig" },
        { value: "AES-256", label: "Schlüsselverschlüsselung" },
        { value: "MIT", label: "Open Source" },
      ],
      threeSecondsHeading: "Drei Sekunden. Das war's.",
      threeSecondsSub: "Vom Handgelenk zum Server und zurück.",
      stepTap: "Tippen",
      stepConfirm: "Bestätigen",
      stepDone: "Fertig",
      archHeading: "Architektur",
      archWatch: "Watch",
      archRelay: "Relay",
      archServers: "Deine Server",
      archCompanion: "Companion",
      archMac: "macOS",
      securityHeading: "Sicherheitsmodell",
      securityCards: [
        {
          title: "Schlüssel im Ruhezustand",
          body: "SSH-Schlüssel mit AES-256-GCM verschlüsselt. Master-Passphrase über Argon2id abgeleitet. Schlüssel existieren nur entschlüsselt im Speicher, während der Relay läuft.",
        },
        {
          title: "Token-Auth",
          body: "Pro-Gerät-Bearer-Tokens, mit Argon2 gehasht. Optional TOTP 2FA für destruktive Operationen. Tokens sind sofort widerrufbar.",
        },
        {
          title: "TLS überall",
          body: "Eingebaute Let's Encrypt-Auto-Erneuerung. Gesamter Traffic während der Übertragung verschlüsselt. Optionales Certificate-Pinning für selbst gehostete Relays.",
        },
        {
          title: "Watch-Sicherheit",
          body: "Token im hardware-verschlüsselten Watch-Keychain gespeichert. Handgelenk-Erkennung sperrt automatisch. Keine sensiblen Daten auf dem Gerät zwischengespeichert.",
        },
      ],
      templatesHeading: "27 eingebaute Templates",
      templatesSub: "Häufige Befehle vorkonfiguriert. Wähle ein Template, fülle die Lücken aus, fertig.",
      templateCategories: {
        system: "System",
        docker: "Docker",
        systemd: "Systemd",
        deploy: "Deploy",
        nginx: "Nginx",
        network: "Netzwerk",
      },
      useCasesHeading: "Gebaut für die Momente dazwischen",
      useCases: [
        "Starte einen abgestürzten Dienst aus dem Hundepark neu",
        "Führe eine Gesundheitsprüfung während eines Meetings aus",
        "Deploye aus dem Fitnessstudio",
        "Prüfe den Festplattenspeicher vom Bett aus",
        "Prüfe den Serverstatus aus dem Auto (Siri)",
        "Stelle Befehle vor dem Abflug in die Warteschlange, führe sie bei der Landung aus",
      ],
      techHeading: "Tech-Stack",
      techStack: {
        watch: { label: "Watch", value: "Swift + SwiftUI + WidgetKit + AppIntents" },
        macos: { label: "macOS", value: "Swift + SwiftUI + Menu Bar" },
        companion: { label: "Companion", value: "React Native + TypeScript + Base RN" },
        relay: { label: "Relay", value: "Rust + axum + russh + SQLite" },
        encryption: { label: "Verschlüsselung", value: "AES-256-GCM + Argon2id" },
        tls: { label: "TLS", value: "rustls + Let's Encrypt" },
        notifications: { label: "Benachrichtigungen", value: "APNs + Pro-Server-Schalter" },
      },
      quickSetup: "Schnellstart-Anleitung",
      relayConfig: "Relay-Konfiguration",
      ctaHeading: "Deine Server warten.",
      ctaSub: "Für immer kostenlos. Open Source. Kein Telefon erforderlich.",
      ctaGithub: "Auf GitHub ansehen",
    },

    base: {
      tagline: "Primitiven. Tokens. Fertig.",
      description:
        "70 Primitiven, 8 Design-Token-Kategorien, Dunkelmodus und null Meinungen zu deinem Stack. Saubere, komponierbare React-Komponenten, die überall funktionieren — auch im Launcher.",
      catalogTagline: "Universal-Design-Toolkit — monochrom, plattformunabhängig.",
      catalogDescription:
        "70 Primitiven, 8 Design-Token-Kategorien, Dunkelmodus und null Meinungen zu deinem Stack. Saubere, komponierbare React-Komponenten, die überall funktionieren — auch im Launcher.",
      requirements: "Kostenlos & Open Source  ·  React  ·  TypeScript",
      featuresHeading: "Die Primitiven. Die Tokens. Der Schalter.",
      ctaLabel: "Quellcode ansehen",
      features: [
        {
          title: "70 produktionsreife Primitiven",
          body: "Formulare, Layout, Daten, Feedback — jede Primitive, die du brauchst, keine, die du nicht brauchst. Eingaben, Tabellen, Kalender, Sparklines, Baumansichten, Farbwähler, Dialoge und mehr.",
        },
        {
          title: "Ein Token-System, jede Plattform",
          body: "Farbe, Typografie, Abstand, Radius, Elevation, Animation und Glassmorphism — alles als TypeScript-Tokens definiert, die zu CSS-Variablen oder React Native-Styles exportieren.",
        },
        {
          title: "Hell und dunkel von Anfang an",
          body: "Jede Komponente respektiert den Farbmodus automatisch — Systemeinstellungs-Erkennung, manueller Schalter mit localStorage und Glassmorphism, das sich in beiden Modi anpasst.",
        },
      ],
      showcase: [
        {
          badge: "70 Primitiven",
          title: "Jede Komponente, die du brauchst, keine, die du nicht brauchst",
          description:
            "Von Buttons und Eingaben bis hin zu Baumansichten, Farbwählern und Sparklines — 70 produktionsreife Primitiven, gebaut mit TypeScript und null externen Abhängigkeiten außer React.",
          bullets: [
            "Formulare: input, textarea, select, checkbox, radio, pin-input, number-input, color-picker",
            "Layout: grid, stack, container, center, spacer, separator",
            "Daten: table, calendar, timeline, carousel, sparkline, tree-view",
            "Feedback: toast, alert, dialog, sheet, popover, skeleton, spinner, progress",
          ],
          imageAlt: "Base-Primitiven-Komponentenbibliothek",
        },
        {
          badge: "Design-Tokens",
          title: "Ein Token-System, jede Plattform",
          description:
            "Farbe, Typografie, Abstand, Radius, Elevation, Animation und Glassmorphism — alles als TypeScript-Tokens definiert, die zu CSS-Variablen oder React Native-Styles exportieren.",
          bullets: [
            "Monochrom-First-Farbpalette mit semantischen Aliassen",
            "Glassmorphism-Tokens für Milchglaseffekte",
            "Typografie-Skala mit flüssiger responsiver Dimensionierung",
            "Export zu CSS-Custom-Properties oder React Native-StyleSheet",
          ],
          imageAlt: "Base-Design-Tokens",
        },
        {
          badge: "Dunkelmodus",
          title: "Hell und dunkel, von Tag eins integriert",
          description:
            "Jede Komponente respektiert den Farbmodus von Anfang an. Keine zusätzliche Einrichtung, keine Theme-Wrapper zum Vergessen — funktioniert einfach mit Systemeinstellungen oder manuellem Schalter.",
          bullets: [
            "Automatische Systemeinstellungs-Erkennung",
            "Manueller Schalter mit localStorage-Persistenz",
            "Alle 70 Primitiven in beiden Modi getestet",
            "Glassmorphism-Effekte passen sich dem Farbmodus an",
          ],
          imageAlt: "Base-Dunkelmodus-Unterstützung",
        },
      ],
    },
  },

  legal: {
    privacyTitle: "Datenschutzrichtlinie",
    termsTitle: "Nutzungsbedingungen",
    eulaTitle: "Endbenutzer-Lizenzvereinbarung",
    tapTagline: "Tap — SSH-Befehlsrelay",
    effectiveDate: "Wirksamkeitsdatum: 14. April 2026",
    navPrivacy: "Datenschutzrichtlinie",
    navTerms: "Nutzungsbedingungen",
    navEula: "EULA",

    privacy: {
      intro:
        'Matt\'s Software („wir", „uns", „unser") betreibt Tap, eine SSH-Befehlsrelay-Anwendung für Apple Watch, iPhone und Mac. Diese Datenschutzrichtlinie erklärt, welche Informationen wir sammeln, wie wir sie verwenden und deine Rechte bezüglich deiner Daten. Matt\'s Software hat seinen Sitz in den Vereinigten Staaten.',
      collectHeading: "Informationen, die wir sammeln",
      accountHeading: "Kontoinformationen",
      accountBody:
        "Wenn du dich mit Apple Sign-In anmeldest, erhalten wir deine Apple-ID-E-Mail-Adresse (oder die private Relay-Adresse, die Apple in deinem Namen bereitstellt). Dies ist die einzige personenbezogene Information, die wir sammeln, und sie wird ausschließlich zur Authentifizierung bei deinem Relay-Server verwendet.",
      relayHeading: "Selbst gehostete Relay-Daten",
      relayBody:
        "Tap speichert Verbindungs-Metadaten, verschlüsselte SSH-Schlüssel, Befehlsverlauf und Ausführungsergebnisse auf dem Relay-Server, den du selbst hostest und betreibst. Wir haben keinen Zugriff auf diese Daten. Da du den Relay kontrollierst, kontrollierst du deine Daten.",
      useHeading: "Wie wir Informationen verwenden",
      useBody:
        "Deine Apple-ID-E-Mail-Adresse wird ausschließlich zur Authentifizierung deines Kontos verwendet. Wir verwenden sie nicht für Marketing, Newsletter oder andere Zwecke. Wir kombinieren sie nicht mit Daten aus anderen Quellen.",
      storageHeading: "Datenspeicherung und Sicherheit",
      storageBody1:
        "SSH-Schlüssel, die auf deinem Relay gespeichert sind, werden im Ruhezustand mit AES-256-GCM verschlüsselt. Alle Relay-Daten — Verbindungs-Metadaten, Befehlsprotokolle und Schlüssel — befinden sich vollständig auf deiner eigenen Infrastruktur. Matt's Software betreibt keine zentralen Server, die deine Daten speichern.",
      storageBody2:
        "Da der Relay selbst gehostet wird, hängt die Sicherheit deiner Daten letztendlich davon ab, wie du deinen Server konfigurierst und wartest. Wir empfehlen, deine Relay-Software aktuell zu halten und Standard-Praktiken zur Server-Härtung zu befolgen.",
      thirdPartyHeading: "Drittanbieter-Dienste",
      thirdPartyBody:
        "Tap verwendet Apple Sign-In zur Authentifizierung. Die Datenschutzrichtlinie von Apple regelt die Daten, die Apple während des Anmeldevorgangs sammelt. Über Apple Sign-In hinaus integriert sich Tap nicht mit Analyse-, Werbe- oder Tracking-Diensten von Drittanbietern.",
      notDoHeading: "Was wir nicht tun",
      notDoList: [
        "Wir führen keinerlei Analytik oder Tracking durch",
        "Wir teilen keine Daten mit Dritten",
        "Wir schalten keine Werbung",
        "Wir sammeln keine Nutzungstelemetrie",
        "Wir haben keinen Zugriff auf deinen Relay-Server oder seine Daten",
        "Wir verkaufen oder vermieten deine persönlichen Informationen nicht",
      ],
      retentionHeading: "Datenaufbewahrung und Löschung",
      retentionBody:
        "Du kannst dein Konto und alle zugehörigen Daten jederzeit in der Tap-App löschen. Da die Daten auf deinem Relay gespeichert sind, hast du auch direkten Zugriff, um sie jederzeit von deinem Server zu entfernen.",
      childrenHeading: "Datenschutz von Kindern",
      childrenBody:
        "Tap richtet sich nicht an Kinder unter 13 Jahren. Wir sammeln wissentlich keine persönlichen Informationen von Kindern unter 13 Jahren. Wenn du glaubst, dass ein Kind uns persönliche Informationen zur Verfügung gestellt hat, kontaktiere uns und wir werden Maßnahmen ergreifen, sie zu löschen.",
      changesHeading: "Änderungen dieser Richtlinie",
      changesBody:
        "Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wenn wir das tun, werden wir die überarbeitete Richtlinie auf dieser Seite mit einem neuen Wirksamkeitsdatum veröffentlichen. Deine fortgesetzte Nutzung von Tap nach Veröffentlichung von Änderungen stellt die Annahme der aktualisierten Richtlinie dar.",
      contactHeading: "Kontaktiere uns",
      contactBody:
        "Wenn du Fragen oder Bedenken zu dieser Datenschutzrichtlinie hast, kontaktiere uns unter",
    },

    terms: {
      acceptHeading: "Annahme der Bedingungen",
      acceptBody:
        'Durch das Herunterladen, Installieren oder Verwenden von Tap („die App") stimmst du zu, an diese Nutzungsbedingungen („Bedingungen") gebunden zu sein. Wenn du diesen Bedingungen nicht zustimmst, verwende die App nicht. Diese Bedingungen stellen eine rechtliche Vereinbarung zwischen dir und Matt\'s Software („wir", „uns", „unser") mit Sitz in den Vereinigten Staaten dar.',
      descriptionHeading: "Beschreibung des Dienstes",
      descriptionBody:
        "Tap ist eine SSH-Befehlsrelay-Anwendung für Apple Watch, iPhone und Mac. Sie ermöglicht es dir, Befehle auf entfernten Servern über einen Relay-Server auszuführen, den du selbst hostest und betreibst. Matt's Software stellt die Client-Anwendung und die Relay-Software bereit. Wir betreiben, verwalten oder haben keinen Zugriff auf deinen Relay-Server oder die Server, mit denen du dich verbindest.",
      accountsHeading: "Benutzerkonten",
      accountsBody:
        "Tap verwendet Apple Sign-In zur Authentifizierung. Jede Person darf ein Konto pflegen. Du bist verantwortlich für die Aufrechterhaltung der Sicherheit deines Kontos und für alle Aktivitäten, die darunter erfolgen. Du darfst deine Anmeldedaten nicht teilen oder anderen den Zugriff auf dein Konto ermöglichen.",
      responsibilitiesHeading: "Nutzerverantwortlichkeiten",
      serversHeading: "Deine Server",
      serversBody:
        "Du bist verantwortlich für die Server, mit denen du dich über Tap verbindest. Dazu gehört sicherzustellen, dass du die ordnungsgemäße Berechtigung hast, auf diese Server zuzugreifen, und dass deine Nutzung allen anwendbaren Richtlinien und Gesetzen entspricht.",
      commandsHeading: "Deine Befehle",
      commandsBody:
        "Tap ist ein Werkzeug, das die Befehle ausführt, die du bereitstellst. Du akzeptierst die volle Verantwortung für jeden Befehl, den du über Tap ausführst, und seine Konsequenzen. Matt's Software ist nicht haftbar für das Ergebnis von Befehlen, die über die App ausgeführt werden.",
      relayHeading: "Dein Relay",
      relayBody:
        "Der Tap-Relay-Server wird auf deiner Infrastruktur selbst gehostet. Du bist verantwortlich für die Sicherung deines Relays, dessen Aktualisierung und die Verwaltung des Zugriffs darauf. Matt's Software betreibt, überwacht oder wartet dein Relay nicht.",
      acceptableHeading: "Akzeptable Nutzung",
      acceptableIntro: "Du stimmst zu, Tap nicht zu verwenden, um:",
      acceptableList: [
        "Unbefugten Zugriff auf ein System, Netzwerk oder Daten zu erlangen",
        "Gegen anwendbare lokale, staatliche, nationale oder internationale Gesetze zu verstoßen",
        "Malware, Viren oder anderen schädlichen Code zu übertragen",
        "Die Integrität oder Leistung eines Systems zu stören oder zu unterbrechen",
        "Eine andere Person oder Entität zu belästigen, zu missbrauchen oder zu schädigen",
        "An betrügerischen, täuschenden oder irreführenden Aktivitäten teilzunehmen",
      ],
      ipHeading: "Geistiges Eigentum",
      ipBody:
        "Die Tap-Anwendung, einschließlich ihres Designs, Codes und Dokumentation, ist Eigentum von Matt's Software und ist durch geltende Gesetze zum geistigen Eigentum geschützt. Deine Nutzung von Tap gewährt dir kein Eigentum an geistigem Eigentum in der App. Deine Daten, Konfigurationen und Inhalte, die auf deinem Relay-Server gespeichert sind, bleiben dein Eigentum.",
      warrantyHeading: "Gewährleistungsausschluss",
      warrantyBody:
        'Tap wird „wie besehen" und „wie verfügbar" ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt, einschließlich, aber nicht beschränkt auf Gewährleistungen der Marktgängigkeit, Eignung für einen bestimmten Zweck und Nichtverletzung. Matt\'s Software garantiert nicht, dass die App ununterbrochen, fehlerfrei, sicher oder zu einem bestimmten Zeitpunkt verfügbar sein wird.',
      liabilityHeading: "Haftungsbeschränkung",
      liabilityBody:
        "Im maximal nach geltendem Recht zulässigen Umfang haftet Matt's Software nicht für indirekte, zufällige, besondere, Folge- oder Strafschäden oder Verlust von Daten, Gewinnen, Einnahmen oder Geschäftsmöglichkeiten, die sich aus oder im Zusammenhang mit deiner Nutzung von Tap ergeben, unabhängig von der Haftungstheorie.",
      terminationHeading: "Kündigung",
      terminationBody:
        "Du kannst dein Konto jederzeit löschen und die Nutzung von Tap einstellen. Matt's Software behält sich das Recht vor, deinen Zugriff auf die App jederzeit, mit oder ohne Vorankündigung, für ein Verhalten zu sperren oder zu beenden, von dem wir glauben, dass es gegen diese Bedingungen verstößt oder anderweitig schädlich für andere Nutzer oder uns ist.",
      governingHeading: "Geltendes Recht",
      governingBody:
        "Diese Bedingungen werden nach den Gesetzen der Vereinigten Staaten geregelt und ausgelegt, ohne Berücksichtigung von Grundsätzen des Kollisionsrechts. Alle Streitigkeiten, die sich aus diesen Bedingungen oder deiner Nutzung von Tap ergeben, werden vor den Gerichten der Vereinigten Staaten beigelegt.",
      changesHeading: "Änderungen dieser Bedingungen",
      changesBody:
        "Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Wenn wir das tun, werden wir die überarbeiteten Bedingungen auf dieser Seite mit einem neuen Wirksamkeitsdatum veröffentlichen. Deine fortgesetzte Nutzung von Tap nach Veröffentlichung von Änderungen stellt die Annahme der aktualisierten Bedingungen dar.",
      contactHeading: "Kontakt",
      contactBody: "Wenn du Fragen zu diesen Bedingungen hast, kontaktiere uns unter",
    },

    eula: {
      intro:
        'Diese Endbenutzer-Lizenzvereinbarung („Vereinbarung") ist eine rechtliche Vereinbarung zwischen dir und Matt\'s Software („wir", „uns", „unser") mit Sitz in den Vereinigten Staaten für die Nutzung von Tap („die App"). Durch das Installieren oder Verwenden der App stimmst du zu, an diese Vereinbarung gebunden zu sein.',
      licensedHeading: "Lizenzierte Anwendung",
      licensedBody:
        "Tap ist eine SSH-Befehlsrelay-Anwendung für Apple Watch, iPhone und Mac, entwickelt und veröffentlicht von Matt's Software. Die App ermöglicht es dir, Befehle auf entfernten Servern über einen Relay-Server auszuführen, den du selbst hostest.",
      scopeHeading: "Umfang der Lizenz",
      scopeBody:
        "Matt's Software gewährt dir eine begrenzte, nicht-exklusive, nicht übertragbare, widerrufliche Lizenz zum Herunterladen, Installieren und Verwenden der App auf Geräten, die dir gehören oder die du kontrollierst, in Übereinstimmung mit dieser Vereinbarung und den Apple Media Services Geschäftsbedingungen.",
      scopeIntro: "Diese Lizenz erlaubt dir nicht:",
      scopeList: [
        "Die App an Dritte zu verteilen, unter zu lizenzieren, zu vermieten, zu mieten oder zu verleihen",
        "Die App rückzuentwickeln, zu dekompilieren, zu disassemblieren oder zu versuchen, den Quellcode der App abzuleiten",
        "Die App zu modifizieren, anzupassen, zu übersetzen oder darauf basierende abgeleitete Werke zu erstellen",
        "Urheberrechts-, Marken- oder andere Eigentumshinweise in der App zu entfernen, zu ändern oder zu verschleiern",
        "Die App für illegale oder durch diese Vereinbarung verbotene Zwecke zu verwenden",
      ],
      relayHeading: "Selbst gehosteter Relay",
      relayBody:
        "Tap verbindet sich mit einem Relay-Server, den du auf deiner eigenen Infrastruktur hostest und betreibst. Matt's Software stellt deinen Relay-Server nicht bereit, verwaltet ihn nicht und wartet ihn nicht. Wir sind nicht verantwortlich für Probleme, die sich aus der Konfiguration, dem Betrieb, der Sicherheit oder der Verfügbarkeit deines Relay-Servers oder eines Remote-Servers ergeben, mit dem du dich über die App verbindest.",
      ownershipHeading: "Eigentum",
      ownershipBody:
        "Die App und alle damit verbundenen Rechte am geistigen Eigentum sind und bleiben Eigentum von Matt's Software. Diese Vereinbarung gewährt dir kein Eigentumsinteresse an der App. Deine Daten, Konfigurationen und Inhalte, die auf deinem Relay-Server gespeichert sind, bleiben dein Eigentum.",
      terminationHeading: "Kündigung",
      terminationBody:
        "Diese Lizenz ist bis zur Kündigung wirksam. Deine Rechte aus dieser Vereinbarung enden automatisch ohne Vorankündigung, wenn du nicht alle Bedingungen einhältst. Bei Kündigung musst du die Nutzung der App einstellen und alle Kopien von deinen Geräten löschen. Matt's Software kann diese Lizenz auch jederzeit aus jedem Grund kündigen.",
      warrantyHeading: "Gewährleistungsausschluss",
      warrantyBody:
        'Die App wird „wie besehen" und „wie verfügbar" ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt, einschließlich, aber nicht beschränkt auf Gewährleistungen der Marktgängigkeit, Eignung für einen bestimmten Zweck und Nichtverletzung. Matt\'s Software garantiert nicht, dass die App ununterbrochen, fehlerfrei oder frei von schädlichen Komponenten sein wird.',
      liabilityHeading: "Haftungsbeschränkung",
      liabilityBody:
        "Im maximal nach geltendem Recht zulässigen Umfang haftet Matt's Software nicht für indirekte, zufällige, besondere, Folge- oder Strafschäden oder Verlust von Daten, Gewinnen oder Einnahmen, die sich aus oder im Zusammenhang mit deiner Nutzung der App ergeben, unabhängig von der Haftungstheorie.",
      governingHeading: "Geltendes Recht",
      governingBody:
        "Diese Vereinbarung wird nach den Gesetzen der Vereinigten Staaten geregelt und ausgelegt, ohne Berücksichtigung von Grundsätzen des Kollisionsrechts.",
      contactHeading: "Kontakt",
      contactBody: "Wenn du Fragen zu dieser Vereinbarung hast, kontaktiere uns unter",
    },
  },

  notFound: {
    altText:
      "Eine rote Strumpfbandnatter mit Tropenhelm sitzt auf einem Stein in Form eines Fragezeichens, umgeben von leeren Wegweisern",
    title: "Diese Seite ist abgehauen.",
    sub: "Die Wegweiser sind leer. Die Schlange weiß es auch nicht. Lass uns dich zurück zu etwas bringen, das existiert.",
    backToSuite: "Zurück zur Sammlung",
    rummageGithub: "Oder stöbere auf GitHub",
  },
};
