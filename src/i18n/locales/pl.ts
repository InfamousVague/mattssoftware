/// Polish translations. Mirrors en.ts shape.

import type { Translation } from "../types";

export const pl: Translation = {
  meta: {
    siteTitle: "Matt's Software — Małe aplikacje, które na siebie zarabiają",
    siteDescription:
      "Mały sklepik z drobnymi, darmowymi aplikacjami open source. Jeden launcher instaluje je wszystkie i utrzymuje aktualne.",
    htmlLang: "pl",
    direction: "ltr",
  },

  langSelector: {
    label: "Język",
    selectLanguage: "Wybierz język",
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
    apps: "Aplikacje",
    appsAllLabel: "Wszystkie aplikacje",
    launcher: "Launcher",
    githubAria: "GitHub",
    suiteFooter: "{count} aplikacji, jeden launcher.",
    getLauncher: "Pobierz launcher",
    tipLabel: "Napiwek",
    tipTitle: "Wyślij napiwek",
    tipCopy: "Kopiuj",
    tipCopied: "Skopiowano",
  },

  footer: {
    mascotAlt:
      "Biały kot zwinięty wokół planu i kubka kawy — jakimś cudem śpi mimo muzyki",
    line: "Zbudowane na espresso i głośnej muzyce.",
    sub: "Matt's Software to jednoosobowy warsztat. Każda aplikacja jest podpisana, notaryzowana i darmowa.",
    github: "GitHub",
    allApps: "Wszystkie aplikacje",
    contact: "Kontakt",
  },

  channels: {
    appstore: "App Store",
    library: "Biblioteka",
    source: "Kod źródłowy",
    download: "Pobierz",
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
    all: "Wszystkie",
    developerTools: "Narzędzia deweloperskie",
    privacySecurity: "Prywatność i bezpieczeństwo",
    utilities: "Narzędzia",
    learning: "Nauka",
    design: "Projektowanie",
  },

  home: {
    eyebrow: "MATT'S SOFTWARE",
    title: "Małe aplikacje, które na siebie zarabiają.",
    sub: "Mały, wyselekcjonowany sklepik z ponad {count} drobnymi, darmowymi aplikacjami. Jeden launcher instaluje je wszystkie i utrzymuje aktualne — albo weź którąkolwiek osobno.",
    downloadLauncher: "Pobierz launcher",
    browseSuite: "Przeglądaj kolekcję",
    metaLine: "Darmowe · Open source · dziś macOS, więcej wkrótce",
    brandName: "Matt's Software",
    brandSub: "Każda zbudowana przeze mnie aplikacja, w jednym miejscu",
    searchPlaceholder: "Szukaj aplikacji…",
    searchAria: "Szukaj aplikacji",
    categoriesAria: "Kategorie",
    noResults: "Żadna aplikacja nie pasuje do „{query}”.",
    view: "Zobacz",
  },

  appPage: {
    downloadBtn: "Pobierz",
    viewGithub: "Zobacz na GitHub",
    openInBrowser: "Otwórz w przeglądarce",
    featuresHeadingDefault: "Co potrafi",
    suiteEyebrow: "Kolekcja",
    suiteHeading: "Więcej ze sklepu",
    suiteSub:
      "Każda rozwiązuje dokładnie jedną rzecz, ale dobrze — zainstaluj tylko to, czego potrzebujesz.",
    bottomAddToMenuBar: "Dodaj {name} do swojego paska menu.",
    bottomGet: "Pobierz {name}.",
  },

  featureShowcase: {
    screenshotComingSoon: "Zrzut ekranu wkrótce",
  },

  apps: {
    espresso: {
      tagline: "Odmów snu.",
      description:
        "Narzędzie utrzymujące czuwanie w pasku systemowym: sesje czasowe lub tryb nieograniczony, mikroprzesunięcia myszy w skali sub-pikselowej oszukujące wykrywanie bezczynności i globalny skrót paniki, by wszystko natychmiast wyłączyć. Nadpisanie przy zamkniętej pokrywie i statystyki czasu pracy w komplecie.",
      catalogTagline: "Twój komputer chce spać. Espresso się nie zgadza.",
      catalogDescription:
        "Narzędzie utrzymujące czuwanie, zapobiegające zaśnięciu komputera. Sesje czasowe, symulacja ruchu myszy, nadpisanie przy zamkniętej pokrywie i skrót paniki do natychmiastowej dezaktywacji.",
      requirements: "macOS  ·  Windows  ·  Linux  ·  Darmowe i open source",
      featuresHeading: "Bądź czujny. Bądź aktywny. Bądź zatrudniony.",
      features: [
        {
          title: "Czuwanie, na timerze lub na zawsze",
          body: "Gotowe timery od 5 minut do 8 godzin lub tryb nieograniczony, gdy mówisz serio. Trzymaj ekran włączony lub pozwól mu zasnąć, podczas gdy system pozostaje aktywny.",
        },
        {
          title: "Oszukaj swój wskaźnik statusu",
          body: "Mikroporuszenia myszy w skali sub-pikselowej — niewidoczne, ale wystarczające, by oszukać wykrywanie bezczynności w Slacku, Teams, Zoomie i każdej aplikacji śledzącej brak aktywności.",
        },
        {
          title: "Przycisk paniki w zestawie",
          body: "Ctrl+Shift+Escape natychmiast wszystko wyłącza: ekran się budzi, ruch ustaje, timery są anulowane. Nadpisanie przy zamkniętej pokrywie dla laptopów. Statystyki dożywotnie śledzą Twój łączny czas pracy.",
        },
      ],
    },

    stickykeys: {
      tagline: "Zablokuj te klawisze.",
      description:
        "Mała aplikacja w pasku menu. Kliknij, by zablokować klawiaturę, przetrzyj klawisze ściereczką z mikrofibry bez uruchamiania aplikacji, wysyłania e-maili ani przerywania pracy, a potem kliknij nakładkę, by odblokować. Matowa nakładka pełnoekranowa pokrywa każdy monitor, mysz pozostaje aktywna, a bezpieczne automatyczne odblokowanie sprawia, że nigdy nie zostaniesz uwięziony.",
      catalogTagline: "Zablokuj klawiaturę, by ściereczka nie wystrzeliła skrótów.",
      catalogDescription:
        "Blokada klawiatury w pasku menu do czyszczenia. Kliknij, by pochłonąć każdy klawisz, modyfikator i klawisz multimedialny w całym systemie; matowa nakładka pełnoekranowa pokrywa każdy ekran, mysz pozostaje aktywna do odblokowania, a bezpieczne automatyczne odblokowanie sprawia, że nigdy nie zostaniesz uwięziony.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Darmowe  ·  Podpisane i notaryzowane z Developer ID",
      featuresHeading: "Wytrzyj klawisze. Nie uruchamiaj niczego.",
      features: [
        {
          title: "Zablokuj wszystko jednym kliknięciem",
          body: "Aktywne przechwycenie klawiatury pochłania każdy klawisz, modyfikator i klawisz multimedialny w całym systemie — wytrzyj klawisze bez wystrzelenia ani jednego skrótu.",
        },
        {
          title: "Matowa nakładka pełnoekranowa",
          body: "Czyste, niebarwione rozmycie pokrywa każdy ekran, byś od razu widział, że klawiatura jest zablokowana, z odliczaniem do automatycznego odblokowania na żywo.",
        },
        {
          title: "Odblokowanie tylko myszą, nigdy uwięziony",
          body: "Odblokuj z przycisku nakładki lub z ikony w pasku menu, a bezpieczne automatyczne odblokowanie zadziała bez względu na wszystko, więc nigdy nie utkniesz.",
        },
      ],
    },

    stats: {
      tagline: "Każdy sygnał. Jednym spojrzeniem.",
      description:
        "Natywny monitor systemu w pasku menu. Procesor na żywo na rdzeń, ciśnienie pamięci, odczyt/zapis dysku, sieć w górę/w dół i odczyty czujników — plus opcjonalne kompaktowe widżety podróżujące w pasku stanu i historyczne sparkline dla każdego sygnału, byś dostrzegł skok bez otwierania Monitora aktywności.",
      catalogTagline: "Każdy sygnał systemu na pierwszy rzut oka — w pasku menu.",
      catalogDescription:
        "Natywny monitor systemu w pasku menu. Procesor na żywo na rdzeń, ciśnienie pamięci, odczyt/zapis dysku, sieć w górę/w dół i odczyty czujników — plus kompaktowe widżety i historyczne sparkline.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Darmowe  ·  Podpisane i notaryzowane z Developer ID",
      featuresHeading: "Zobacz całą maszynę. Bez całego okna.",
      features: [
        {
          title: "Każdy sygnał systemu na pierwszy rzut oka",
          body: "Procesor na rdzeń, ciśnienie pamięci (z podziałem na przewodowe/skompresowane/aplikacja/pamięć podręczna), odczyt/zapis dysku, sieć w górę/w dół, czujniki i lista najaktywniejszych procesów na żywo — wszystko w jednym kompaktowym panelu w pasku menu.",
        },
        {
          title: "Kompaktowe widżety w pasku menu",
          body: "Wybierz, które liczby (lub mała fala na żywo) podróżują w Twoim pasku stanu. Pozostaje widoczne podczas pracy, nigdy nie zawadza.",
        },
        {
          title: "Sparkline, nie arkusze kalkulacyjne",
          body: "Niedawna historia jest wykreślona dla każdego sygnału, więc skok lub procesy, które uciekły spod kontroli, są oczywiste bez grzebania w Monitorze aktywności.",
        },
      ],
    },

    port: {
      tagline: "Każdy port, jedno kliknięcie.",
      description:
        "Mały, natywny menedżer portów w pasku menu. Zobacz, co nasłuchuje, zabij lub wstrzymaj proces, przekieruj lub zmapuj przez NAT-PMP i obserwuj aktywne połączenia na mapie na żywo — kliknij jedno, by sprawdzić je w Blip.",
      catalogTagline: "Każdy otwarty port na Twoim Macu, jednym kliknięciem.",
      catalogDescription:
        "Natywny menedżer portów w pasku menu: zobacz, co nasłuchuje, zabij lub wstrzymaj proces, przekieruj lub zmapuj przez NAT-PMP i obserwuj aktywne połączenia na mapie na żywo — kliknij, by sprawdzić w Blip.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Darmowe  ·  Podpisane z Developer ID",
      featuresHeading: "Zobacz. Zabij. Przekieruj.",
      features: [
        {
          title: "Każdy otwarty port, na żywo",
          body: "Lista w pasku menu wszystkich nasłuchujących portów TCP/UDP wraz z procesem i PID-em za nimi, odświeżana co sekundę. Zabij, wstrzymaj (SIGSTOP/SIGCONT) lub zostaw.",
        },
        {
          title: "Przekierowywanie i mapowanie",
          body: "Proxyuj dowolny port lokalny do innego za pomocą wbudowanego przekierowywacza TCP, udostępnij go w swojej sieci LAN i przebij się przez router z natywnym NAT-PMP — bez konfiguracji.",
        },
        {
          title: "Połączenia na mapie → Blip",
          body: "Aktywne połączenia naniesione na mapę na żywo według tego, dokąd faktycznie idą. Kliknij dowolny punkt końcowy, by otworzyć go w Blip do głębokiej inspekcji (albo weź Blip, jeśli go nie masz).",
        },
      ],
    },

    alfred: {
      tagline: "Odzyskaj dysk.",
      description:
        "Natywny lokaj w pasku menu, który znajduje bezpieczne do usunięcia śmieci deweloperskie — node_modules, Cargo target/, pamięć podręczna kompilacji i testów, Xcode DerivedData, pamięć podręczna menedżerów pakietów — sortuje je od największych i przenosi do Kosza. Do odzyskania jednym kliknięciem.",
      catalogTagline: "Odzyskaj miejsce na dysku, które okupuje śmietnik deweloperski.",
      catalogDescription:
        "Natywny lokaj w pasku menu, który znajduje bezpieczne do usunięcia śmieci deweloperskie — node_modules, Cargo target/, pamięć podręczna kompilacji i testów, Xcode DerivedData, pamięć podręczna menedżerów pakietów — sortuje je od największych i przenosi do Kosza (do odzyskania).",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Darmowe  ·  Podpisane z Developer ID",
      featuresHeading: "Znajdź. Wyrzuć. Odzyskaj dysk.",
      features: [
        {
          title: "Znajdź śmieci, największe najpierw",
          body: "node_modules, Cargo target/, pamięci podręczne kompilacji i testów, Xcode DerivedData, pamięci podręczne Homebrew/Yarn/npm — zeskanowane, zwymiarowane i wymienione od największych, byś dokładnie wiedział, co okupuje Twój dysk.",
        },
        {
          title: "Bezpieczne do usunięcia, z założenia",
          body: "Alfred dotyka tylko folderów regenerowalnych — pamięci podręcznych, artefaktów kompilacji, drzew zależności — nigdy kodu źródłowego. Wszystko trafia do Kosza, do odzyskania jednym kliknięciem, jeśli zmienisz zdanie.",
        },
        {
          title: "Z paska menu",
          body: "Żyje jako mała aplikacja w pasku menu. Skanuj, kiedy chcesz, zerknij na to, ile odzyskałeś, albo zostaw to jako jednorazowe narzędzie do sprzątania na następne ostrzeżenie o pełnym SSD.",
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
    },

    blip: {
      tagline: "Zobacz, co wychodzi.",
      description:
        "Zobacz dokładnie, dokąd idą Twoje dane, kto je zbiera, i wyłącz ich — wszystko na bardzo ładnej mapie 3D.",
      catalogTagline: "Twój komputer mówił za Twoimi plecami.",
      catalogDescription:
        "Monitorowanie sieci w czasie rzeczywistym z mapą 3D połączeń, inteligentnym firewallem, blokowaniem DNS, trasowaniem kabli podmorskich i analityką pasma. Zobacz dokładnie, dokąd idą Twoje dane.",
      requirements: "Darmowe i open source",
      featuresHeading: "Mapa. Bramkarz. Ściana.",
      features: [
        {
          title: "Mapa 3D na żywo każdego połączenia",
          body: "Ruch każdej aplikacji naniesiony na globus, łuki kolorowane według usługi. 200 połączeń, ponad 700 prawdziwych kabli podmorskich, cząsteczki pokazujące kierunek. Internet, który ignorowałeś, uczyniony widzialnym.",
        },
        {
          title: "Bramkarz dla Twojego pasma",
          body: "Każda aplikacja potrzebuje pozwolenia, bez wyjątków. Tryb ścisły blokuje wszystko, dopóki nie powiesz inaczej. Słupki pasma na aplikację demaskują żarłoków danych. Wyłącznik awaryjny jednym kliknięciem.",
        },
        {
          title: "200 tys. trackerów zablokowanych przed połączeniem",
          body: "Listy blokad DNS na miejscu unicestwiają domeny reklamowe i trackerów; dziennik zapytań na żywo wynosi każde wyszukiwanie; ranking trackerów wymienia najgorszych przestępców.",
        },
      ],
    },

    diane: {
      tagline: "Naciśnij nagrywaj. Mów.",
      description:
        "Retro dyktafon z transkrypcją głosu na tekst na żywo, biblioteką kaset i trybem dyktowania. Inspirowany taśmowymi notatkami specjalnego agenta Dale'a Coopera.",
      catalogTagline: "Trzymam w ręku mały magnetofon.",
      catalogDescription:
        "Retro skeuomorficzny dyktafon z transkrypcją głosu na tekst na żywo, biblioteką kaset i trybem dyktowania. Inspirowany specjalnym agentem Dale'em Cooperem.",
      requirements: "Darmowe i open source",
      featuresHeading: "Naciśnij nagrywaj. Mów. Chodź.",
      features: [
        {
          title: "Skeuomorficzny magnetofon kasetowy",
          body: "Pływający pasek boczny z fotorealistycznym dyktafonem: animowane szpule, wskaźniki VU i fizyczne przyciski. Naciśnij nagrywaj i mów — globalne skróty pozwalają nagrywać z dowolnej aplikacji.",
        },
        {
          title: "Transkrypcja na żywo, na urządzeniu",
          body: "SFSpeechRecognizer Apple transkrybuje, gdy mówisz — bez chmury, bez kluczy API. Kliknij dowolne słowo w transkrypcji, by przeskoczyć do tej chwili w nagraniu.",
        },
        {
          title: "Pudełko po butach pełne kaset",
          body: "Każde nagranie jest zapisywane jako kolorowa kaseta z dźwiękiem i transkrypcją. Przewijaj swoją kolekcję, załaduj którąkolwiek, odtwarzaj kiedykolwiek.",
        },
      ],
    },

    peephole: {
      tagline: "Zobacz, kto patrzy.",
      description:
        "Strażnik w pasku menu dla Twojej kamery i mikrofonu. Peephole pokazuje, które aplikacje ich teraz używają, prowadzi historię dostępu i powiadamia, gdy coś je włącza — bez specjalnych uprawnień, bez rozszerzeń jądra.",
      catalogTagline: "Zobacz, kto patrzy.",
      catalogDescription:
        "Strażnik w pasku menu dla Twojej kamery i mikrofonu: które aplikacje ich teraz używają, historia dostępu i powiadomienie w chwili, gdy coś je włącza.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Darmowe  ·  Podpisane z Developer ID",
      featuresHeading: "Nic nie nagrywa bez Twojej wiedzy.",
      features: [
        {
          title: "Status kamery i mikrofonu na żywo",
          body: "Symbol w pasku menu zmienia się w chwili, gdy kamera lub mikrofon staje się aktywny, więc zawsze wiesz, kiedy coś nagrywa.",
        },
        {
          title: "Historia dostępu",
          body: "Ciągły dziennik, która aplikacja używała kamery lub mikrofonu i kiedy — przewiń wstecz przez aktywność z całego dnia.",
        },
        {
          title: "Powiadomienia",
          body: "Otrzymaj powiadomienie w chwili, gdy aplikacja zaczyna używać kamery lub mikrofonu. Bez specjalnych uprawnień, bez rozszerzeń jądra.",
        },
      ],
    },

    quarantine: {
      tagline: "Sprawdź każde pobranie.",
      description:
        "Inspektor w pasku menu dla ~/Downloads. Dla każdego nowego pliku wyświetla URL pochodzenia kwarantanny, status Gatekeeper/codesign, SHA-256 i opcjonalny werdykt VirusTotal — następnie powiadamia, byś mógł go sprawdzić przed otwarciem.",
      catalogTagline: "Ufaj, ale weryfikuj każde pobranie.",
      catalogDescription:
        "Inspektor w pasku menu dla ~/Downloads: pochodzenie kwarantanny, status Gatekeeper/codesign, SHA-256 i opcjonalny werdykt VirusTotal dla każdego nowego pliku, z powiadomieniem do sprawdzenia.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Darmowe  ·  Podpisane z Developer ID",
      featuresHeading: "Wiedz, co właśnie wylądowało w Downloads.",
      features: [
        {
          title: "Pochodzenie i kwarantanna",
          body: "Zobacz dokładnie, skąd pochodzi plik, przez jego atrybut com.apple.quarantine — agent, który go pobrał, i URL źródłowy.",
        },
        {
          title: "Gatekeeper i hash",
          body: "Ocena codesign/Gatekeeper plus SHA-256 dla każdego nowego pliku, który ląduje w ~/Downloads.",
        },
        {
          title: "Opcjonalny VirusTotal",
          body: "Dodaj klucz API, a Quarantine wyświetla werdykt reputacji w linii, byś mógł sprawdzić pobranie, zanim w ogóle je otworzysz.",
        },
      ],
    },

    sentry: {
      tagline: "Pilnuj ciemnych kątów.",
      description:
        "Audytor w pasku menu dla trwałości macOS. Wylicza LaunchAgents i Daemons, elementy logowania, cron i pliki startowe powłoki, sprawdza podpis kodu i notaryzację każdego celu i alarmuje w chwili, gdy pojawia się nowy lub zmodyfikowany element — następnie pozwala go sprawdzić, zablokować lub przywrócić, bezpośrednio z paska menu.",
      catalogTagline: "Wiedz w chwili, gdy coś się okopuje.",
      catalogDescription:
        "Audytor w pasku menu dla trwałości macOS — LaunchAgents, elementy logowania, cron i pliki startowe powłoki — z weryfikacjami podpisów i alarmami, gdy pojawia się coś nowego lub zmienionego. Sprawdź, zablokuj lub przywróć cokolwiek z nich.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Darmowe  ·  Podpisane z Developer ID",
      featuresHeading: "Pilnuj miejsc, gdzie chowa się złośliwe oprogramowanie.",
      features: [
        {
          title: "Każdy wektor trwałości",
          body: "LaunchAgents i Daemons, elementy logowania, cron i pliki startowe powłoki — każde miejsce, gdzie coś może się okopać, by przetrwać restart, w jednej liście w pasku menu.",
        },
        {
          title: "Świadomość podpisów",
          body: "Każdy docelowy plik binarny jest klasyfikowany jako notaryzowany / podpisany / niepodpisany przez spctl i codesign, więc niepodpisany launch agent natychmiast się wyróżnia.",
        },
        {
          title: "Alarmy przy zmianie, blokowanie tego, czego nie powinno być",
          body: "Porównywanie zrzutów powiadamia w chwili, gdy pojawia się lub zmienia nowy element trwałości. Sprawdź plist lub skrypt, a potem zablokuj — Sentry odładowuje go i odstawia jako .sentry-disabled. Odwracalne jednym kliknięciem.",
        },
      ],
    },

    fishbones: {
      tagline: "Zamień każdą książkę techniczną w interaktywny kurs.",
      description:
        "Wrzuć PDF lub EPUB, a Libre wygeneruje lekcje, ćwiczenia i ukryte testy. Szesnaście języków w jednym edytorze, lokalny tutor AI na Twoim laptopie, ogień passy przetrwujący weekendy i siedemnaście motywów.",
      catalogTagline: "Zamień każdą książkę techniczną w interaktywny kurs.",
      catalogDescription:
        "Wrzuć PDF lub EPUB, a Libre wygeneruje lekcje, ćwiczenia i ukryte testy. Szesnaście języków w jednym edytorze, lokalny tutor AI na Twoim laptopie, ogień passy przetrwujący weekendy i siedemnaście motywów.",
      requirements: "Darmowe i open source",
      featuresHeading: "Ucz się z dowolnej książki.",
      features: [],
    },

    tap: {
      tagline: "Serwery na Twoim nadgarstku.",
      description:
        "Uruchamiaj wstępnie skonfigurowane polecenia SSH na zdalnych serwerach z Apple Watch. Stuknij, potwierdź, gotowe. Działa przez sieć komórkową, obsługuje Siri, szyfruje wszystko od końca do końca.",
      catalogTagline: "Pilot poleceń dla Twojej infrastruktury.",
      catalogDescription:
        "Uruchamiaj wstępnie skonfigurowane polecenia SSH na zdalnych serwerach z Apple Watch. Działa przez sieć komórkową, obsługuje Siri i szyfruje wszystko od końca do końca.",
      requirements: "watchOS  ·  iOS  ·  iPadOS  ·  macOS  ·  Darmowe i open source",
      featuresHeading: "Pilot do Twoich serwerów — na Twoim nadgarstku.",
      features: [
        {
          title: "Prawdziwa aplikacja na zegarek, nie tylko nakładka na powiadomienia",
          body: "Natywna lista serwerów watchOS z kropkami statusu na żywo, przypięte polecenia przez Przycisk Akcji, potwierdzenie niebezpiecznych poleceń i wyjście przewijalne Digital Crown. Gotowe na sieć komórkową — bez potrzeby telefonu.",
        },
        {
          title: "Companion i Mac, w jednym kroku",
          body: "Pełne aplikacje na iPhone, iPad i Mac Catalyst. Dodawaj serwery, konfiguruj polecenia i zestawy poleceń, przeglądaj historię, zarządzaj kluczami SSH. Wszystko synchronizuje się z zegarkiem w czasie rzeczywistym.",
        },
        {
          title: "Zestawy, alerty, Siri, komplikacje",
          body: 'Pakuj polecenia w zestawy jednego stuknięcia. 30-sekundowe pingi zdrowotne i alerty APNs, gdy coś umrze. Pięć komplikacji tarczy zegarka. "Hej Siri, Tap zrestartuj prod-api."',
        },
      ],
      stats: [
        { value: "< 3s", label: "Czas wykonania" },
        { value: "Komórkowa", label: "Bez telefonu" },
        { value: "AES-256", label: "Szyfrowanie kluczy" },
        { value: "MIT", label: "Open source" },
      ],
      threeSecondsHeading: "Trzy sekundy. To wszystko.",
      threeSecondsSub: "Z nadgarstka na serwer i z powrotem.",
      stepTap: "Stuknij",
      stepConfirm: "Potwierdź",
      stepDone: "Gotowe",
      archHeading: "Architektura",
      archWatch: "Zegarek",
      archRelay: "Relay",
      archServers: "Twoje serwery",
      archCompanion: "Companion",
      archMac: "macOS",
      securityHeading: "Model bezpieczeństwa",
      securityCards: [
        {
          title: "Klucze w spoczynku",
          body: "Klucze SSH szyfrowane AES-256-GCM. Główne hasło wyprowadzone przez Argon2id. Klucze istnieją odszyfrowane w pamięci tylko podczas działania relaya.",
        },
        {
          title: "Uwierzytelnianie tokenem",
          body: "Tokeny Bearer dla każdego urządzenia, hashowane przez Argon2. Opcjonalny TOTP 2FA dla operacji destrukcyjnych. Tokeny są natychmiast odwoływalne.",
        },
        {
          title: "TLS wszędzie",
          body: "Wbudowane automatyczne odnawianie Let's Encrypt. Cały ruch szyfrowany w trakcie przesyłania. Opcja przypinania certyfikatów dla relayów hostowanych samodzielnie.",
        },
        {
          title: "Bezpieczeństwo zegarka",
          body: "Token przechowywany w sprzętowo szyfrowanym Watch Keychain. Wykrywanie nadgarstka automatycznie blokuje. Brak buforowanych wrażliwych danych na urządzeniu.",
        },
      ],
      templatesHeading: "27 wbudowanych szablonów",
      templatesSub: "Wstępnie skonfigurowane częste polecenia. Wybierz szablon, wypełnij puste pola, gotowe.",
      templateCategories: {
        system: "System",
        docker: "Docker",
        systemd: "Systemd",
        deploy: "Wdrożenie",
        nginx: "Nginx",
        network: "Sieć",
      },
      useCasesHeading: "Stworzone dla chwil pomiędzy",
      useCases: [
        "Zrestartuj awaryjną usługę z parku dla psów",
        "Uruchom kontrolę zdrowia podczas spotkania",
        "Wdrażaj z siłowni",
        "Sprawdź miejsce na dysku z łóżka",
        "Sprawdź status serwera z samochodu (Siri)",
        "Ustaw polecenia w kolejce przed startem, wykonaj przy lądowaniu",
      ],
      techHeading: "Stos technologiczny",
      techStack: {
        watch: { label: "Zegarek", value: "Swift + SwiftUI + WidgetKit + AppIntents" },
        macos: { label: "macOS", value: "Swift + SwiftUI + Pasek menu" },
        companion: { label: "Companion", value: "React Native + TypeScript + Base RN" },
        relay: { label: "Relay", value: "Rust + axum + russh + SQLite" },
        encryption: { label: "Szyfrowanie", value: "AES-256-GCM + Argon2id" },
        tls: { label: "TLS", value: "rustls + Let's Encrypt" },
        notifications: { label: "Powiadomienia", value: "APNs + przełącznik dla każdego serwera" },
      },
      quickSetup: "Przewodnik szybkiej konfiguracji",
      relayConfig: "Konfiguracja relaya",
      ctaHeading: "Twoje serwery czekają.",
      ctaSub: "Darmowe na zawsze. Open source. Bez wymaganego telefonu.",
      ctaGithub: "Zobacz na GitHub",
    },

    base: {
      tagline: "Prymitywy. Tokeny. Gotowe.",
      description:
        "70 prymitywów, 8 kategorii tokenów projektowych, tryb ciemny i zero opinii o Twoim stosie. Czyste, składalne komponenty React, które działają wszędzie — w tym w launcherze.",
      catalogTagline: "Uniwersalny zestaw projektowy — monochromatyczny, niezależny od platformy.",
      catalogDescription:
        "70 prymitywów, 8 kategorii tokenów projektowych, tryb ciemny i zero opinii o Twoim stosie. Czyste, składalne komponenty React, które działają wszędzie — w tym w launcherze.",
      requirements: "Darmowe i open source  ·  React  ·  TypeScript",
      featuresHeading: "Prymitywy. Tokeny. Przełącznik.",
      ctaLabel: "Zobacz kod źródłowy",
      features: [
        {
          title: "70 prymitywów gotowych do produkcji",
          body: "Formularze, układ, dane, informacje zwrotne — każdy prymityw, którego potrzebujesz, żaden, którego nie potrzebujesz. Inputy, tabele, kalendarze, sparkline, widoki drzewa, selektory koloru, dialogi i więcej.",
        },
        {
          title: "Jeden system tokenów, każda platforma",
          body: "Kolor, typografia, odstępy, promień, wysokość, animacja i glassmorphism — wszystko zdefiniowane jako tokeny TypeScript, które eksportują do zmiennych CSS lub stylów React Native.",
        },
        {
          title: "Jasny i ciemny w pakiecie",
          body: "Każdy komponent automatycznie respektuje tryb koloru — wykrywanie preferencji systemu, ręczny przełącznik z localStorage i glassmorphism, który dostosowuje się w obu trybach.",
        },
      ],
    },
  },

  legal: {
    privacyTitle: "Polityka prywatności",
    termsTitle: "Warunki świadczenia usług",
    eulaTitle: "Umowa licencyjna użytkownika końcowego",
    tapTagline: "Tap — Relay poleceń SSH",
    effectiveDate: "Data wejścia w życie: 14 kwietnia 2026",
    navPrivacy: "Polityka prywatności",
    navTerms: "Warunki świadczenia usług",
    navEula: "EULA",

    privacy: {
      intro:
        'Matt\'s Software („my", „nas", „nasze") obsługuje Tap, aplikację relaya poleceń SSH dla Apple Watch, iPhone\'a i Maca. Niniejsza Polityka prywatności wyjaśnia, jakie informacje zbieramy, jak ich używamy i jakie masz prawa dotyczące swoich danych. Matt\'s Software ma siedzibę w Stanach Zjednoczonych.',
      collectHeading: "Informacje, które zbieramy",
      accountHeading: "Informacje o koncie",
      accountBody:
        "Gdy logujesz się przez Apple Sign-In, otrzymujemy Twój adres e-mail Apple ID (lub prywatny adres relay, który Apple dostarcza w Twoim imieniu). To jedyna identyfikowalna informacja osobista, którą zbieramy, i jest używana wyłącznie do uwierzytelniania Cię na Twoim serwerze relay.",
      relayHeading: "Dane samodzielnie hostowanego relaya",
      relayBody:
        "Tap przechowuje metadane połączeń, zaszyfrowane klucze SSH, historię poleceń i wyniki wykonania na serwerze relay, który sam hostujesz i obsługujesz. Nie mamy dostępu do tych danych. Ponieważ kontrolujesz relay, kontrolujesz swoje dane.",
      useHeading: "Jak używamy informacji",
      useBody:
        "Twój adres e-mail Apple ID jest używany wyłącznie do uwierzytelniania Twojego konta. Nie używamy go do marketingu, newsletterów ani żadnych innych celów. Nie łączymy go z danymi z innych źródeł.",
      storageHeading: "Przechowywanie i bezpieczeństwo danych",
      storageBody1:
        "Klucze SSH przechowywane na Twoim relayu są szyfrowane w spoczynku za pomocą AES-256-GCM. Wszystkie dane relaya — metadane połączeń, dzienniki poleceń i klucze — znajdują się w całości w Twojej własnej infrastrukturze. Matt's Software nie obsługuje centralnych serwerów przechowujących Twoje dane.",
      storageBody2:
        "Ponieważ relay jest samodzielnie hostowany, bezpieczeństwo Twoich danych ostatecznie zależy od tego, jak konfigurujesz i utrzymujesz swój serwer. Zalecamy utrzymywanie oprogramowania relaya w najnowszej wersji i stosowanie standardowych praktyk hartowania serwera.",
      thirdPartyHeading: "Usługi stron trzecich",
      thirdPartyBody:
        "Tap używa Apple Sign-In do uwierzytelniania. Polityka prywatności Apple reguluje dane, które Apple zbiera podczas procesu logowania. Poza Apple Sign-In Tap nie integruje się z żadnymi usługami analitycznymi, reklamowymi ani śledzącymi stron trzecich.",
      notDoHeading: "Czego nie robimy",
      notDoList: [
        "Nie prowadzimy żadnej analityki ani śledzenia",
        "Nie udostępniamy danych stronom trzecim",
        "Nie wyświetlamy reklam",
        "Nie zbieramy telemetrii użytkowania",
        "Nie mamy dostępu do Twojego serwera relay ani jego danych",
        "Nie sprzedajemy ani nie wynajmujemy Twoich danych osobowych",
      ],
      retentionHeading: "Przechowywanie i usuwanie danych",
      retentionBody:
        "Możesz usunąć swoje konto i wszystkie powiązane dane z aplikacji Tap w dowolnym momencie. Ponieważ dane są przechowywane na Twoim relayu, masz również bezpośredni dostęp, by usunąć je ze swojego serwera, kiedy zechcesz.",
      childrenHeading: "Prywatność dzieci",
      childrenBody:
        "Tap nie jest skierowany do dzieci poniżej 13 roku życia. Świadomie nie zbieramy danych osobowych od dzieci poniżej 13 roku życia. Jeśli uważasz, że dziecko dostarczyło nam dane osobowe, skontaktuj się z nami, a podejmiemy kroki w celu ich usunięcia.",
      changesHeading: "Zmiany w niniejszej polityce",
      changesBody:
        "Możemy okresowo aktualizować niniejszą Politykę prywatności. Gdy to robimy, opublikujemy zmienioną politykę na tej stronie z nową datą wejścia w życie. Dalsze korzystanie z Tap po opublikowaniu zmian stanowi akceptację zaktualizowanej polityki.",
      contactHeading: "Skontaktuj się z nami",
      contactBody:
        "Jeśli masz pytania lub obawy dotyczące niniejszej Polityki prywatności, skontaktuj się z nami pod adresem",
    },

    terms: {
      acceptHeading: "Akceptacja warunków",
      acceptBody:
        'Pobierając, instalując lub używając Tap („Aplikacja"), zgadzasz się być związany niniejszymi Warunkami świadczenia usług („Warunki"). Jeśli nie zgadzasz się z niniejszymi Warunkami, nie używaj Aplikacji. Niniejsze Warunki stanowią prawną umowę między Tobą a Matt\'s Software („my", „nas", „nasze"), z siedzibą w Stanach Zjednoczonych.',
      descriptionHeading: "Opis usługi",
      descriptionBody:
        "Tap to aplikacja relay poleceń SSH dla Apple Watch, iPhone'a i Maca. Pozwala wykonywać polecenia na zdalnych serwerach przez serwer relay, który sam hostujesz i obsługujesz. Matt's Software dostarcza aplikację kliencką i oprogramowanie relay. Nie obsługujemy, nie zarządzamy ani nie mamy dostępu do Twojego serwera relay ani serwerów, do których się łączysz.",
      accountsHeading: "Konta użytkowników",
      accountsBody:
        "Tap używa Apple Sign-In do uwierzytelniania. Każda osoba może utrzymywać jedno konto. Jesteś odpowiedzialny za utrzymanie bezpieczeństwa swojego konta i za wszelką aktywność na nim. Nie wolno udostępniać poświadczeń konta ani pozwalać innym uzyskać do niego dostęp.",
      responsibilitiesHeading: "Obowiązki użytkownika",
      serversHeading: "Twoje serwery",
      serversBody:
        "Jesteś odpowiedzialny za serwery, do których się łączysz przez Tap. Obejmuje to zapewnienie, że masz odpowiednią autoryzację dostępu do tych serwerów i że Twoje użytkowanie jest zgodne ze wszystkimi obowiązującymi politykami i prawami.",
      commandsHeading: "Twoje polecenia",
      commandsBody:
        "Tap to narzędzie, które wykonuje polecenia, które dostarczasz. Akceptujesz pełną odpowiedzialność za każde polecenie, które uruchamiasz przez Tap, i jego konsekwencje. Matt's Software nie ponosi odpowiedzialności za wyniki poleceń wykonywanych przez Aplikację.",
      relayHeading: "Twój relay",
      relayBody:
        "Serwer relay Tap jest samodzielnie hostowany w Twojej infrastrukturze. Jesteś odpowiedzialny za zabezpieczenie relaya, utrzymywanie jego aktualności i zarządzanie dostępem do niego. Matt's Software nie obsługuje, nie monitoruje ani nie utrzymuje Twojego relaya.",
      acceptableHeading: "Dopuszczalne użytkowanie",
      acceptableIntro: "Zgadzasz się nie używać Tap do:",
      acceptableList: [
        "Uzyskiwania nieautoryzowanego dostępu do jakiegokolwiek systemu, sieci lub danych",
        "Naruszania obowiązujących lokalnych, stanowych, krajowych lub międzynarodowych praw",
        "Przesyłania złośliwego oprogramowania, wirusów lub innego szkodliwego kodu",
        "Zakłócania lub naruszania integralności lub działania jakiegokolwiek systemu",
        "Nękania, znęcania się lub krzywdzenia innej osoby lub podmiotu",
        "Angażowania się w jakąkolwiek działalność oszukańczą, podstępną lub wprowadzającą w błąd",
      ],
      ipHeading: "Własność intelektualna",
      ipBody:
        "Aplikacja Tap, w tym jej projekt, kod i dokumentacja, jest własnością Matt's Software i jest chroniona obowiązującymi prawami własności intelektualnej. Korzystanie z Tap nie daje Ci własności jakiejkolwiek własności intelektualnej w Aplikacji. Twoje dane, konfiguracje i treści przechowywane na Twoim serwerze relay pozostają Twoje.",
      warrantyHeading: "Wyłączenie gwarancji",
      warrantyBody:
        'Tap jest dostarczany „w stanie, w jakim jest" i „w miarę dostępności" bez gwarancji jakiegokolwiek rodzaju, wyraźnej ani dorozumianej, w tym między innymi gwarancji przydatności handlowej, przydatności do określonego celu i nienaruszania praw. Matt\'s Software nie gwarantuje, że Aplikacja będzie nieprzerwana, wolna od błędów, bezpieczna ani dostępna w jakimkolwiek konkretnym czasie.',
      liabilityHeading: "Ograniczenie odpowiedzialności",
      liabilityBody:
        "W maksymalnym zakresie dozwolonym przez obowiązujące prawo Matt's Software nie ponosi odpowiedzialności za jakiekolwiek pośrednie, przypadkowe, specjalne, wynikowe lub karne szkody, ani za jakąkolwiek utratę danych, zysków, przychodów lub możliwości biznesowych, wynikające z lub związane z Twoim korzystaniem z Tap, niezależnie od teorii odpowiedzialności.",
      terminationHeading: "Rozwiązanie",
      terminationBody:
        "Możesz usunąć swoje konto i przestać używać Tap w dowolnym momencie. Matt's Software zastrzega sobie prawo do zawieszenia lub zakończenia Twojego dostępu do Aplikacji w dowolnym momencie, z lub bez powiadomienia, za zachowanie, które uważamy za naruszające niniejsze Warunki lub w inny sposób szkodliwe dla innych użytkowników lub dla nas.",
      governingHeading: "Prawo właściwe",
      governingBody:
        "Niniejsze Warunki są regulowane i interpretowane zgodnie z prawem Stanów Zjednoczonych, bez uwzględniania zasad kolizji praw. Wszelkie spory wynikające z niniejszych Warunków lub Twojego korzystania z Tap będą rozstrzygane w sądach Stanów Zjednoczonych.",
      changesHeading: "Zmiany niniejszych warunków",
      changesBody:
        "Możemy okresowo aktualizować niniejsze Warunki. Gdy to robimy, opublikujemy zmienione Warunki na tej stronie z nową datą wejścia w życie. Dalsze korzystanie z Tap po opublikowaniu zmian stanowi akceptację zaktualizowanych Warunków.",
      contactHeading: "Kontakt",
      contactBody: "Jeśli masz pytania dotyczące niniejszych Warunków, skontaktuj się z nami pod adresem",
    },

    eula: {
      intro:
        'Niniejsza Umowa licencyjna użytkownika końcowego („Umowa") to prawna umowa między Tobą a Matt\'s Software („my", „nas", „nasze"), z siedzibą w Stanach Zjednoczonych, dotycząca używania Tap („Aplikacja"). Instalując lub używając Aplikacji, zgadzasz się być związany niniejszą Umową.',
      licensedHeading: "Aplikacja licencjonowana",
      licensedBody:
        "Tap to aplikacja relay poleceń SSH dla Apple Watch, iPhone'a i Maca, opracowana i opublikowana przez Matt's Software. Aplikacja pozwala wykonywać polecenia na zdalnych serwerach przez serwer relay, który sam hostujesz.",
      scopeHeading: "Zakres licencji",
      scopeBody:
        "Matt's Software przyznaje Ci ograniczoną, niewyłączną, nieprzenoszalną, odwoływalną licencję na pobieranie, instalowanie i używanie Aplikacji na urządzeniach, które posiadasz lub kontrolujesz, zgodnie z niniejszą Umową i Warunkami i Postanowieniami Apple Media Services.",
      scopeIntro: "Niniejsza licencja nie pozwala Ci na:",
      scopeList: [
        "Dystrybuowanie, sublicencjonowanie, dzierżawę, wynajem lub wypożyczanie Aplikacji stronom trzecim",
        "Inżynierię odwrotną, dekompilację, dezasemblację lub próbę uzyskania kodu źródłowego Aplikacji",
        "Modyfikowanie, dostosowywanie, tłumaczenie ani tworzenie dzieł pochodnych w oparciu o Aplikację",
        "Usuwanie, zmienianie lub zasłanianie jakichkolwiek powiadomień o prawach autorskich, znakach towarowych lub innych prawach własności w Aplikacji",
        "Używanie Aplikacji w jakimkolwiek celu nielegalnym lub zakazanym przez niniejszą Umowę",
      ],
      relayHeading: "Samodzielnie hostowany relay",
      relayBody:
        "Tap łączy się z serwerem relay, który hostujesz i obsługujesz we własnej infrastrukturze. Matt's Software nie dostarcza, nie zarządza ani nie utrzymuje Twojego serwera relay. Nie ponosimy odpowiedzialności za jakiekolwiek problemy wynikające z konfiguracji, działania, bezpieczeństwa lub dostępności Twojego serwera relay ani jakichkolwiek zdalnych serwerów, do których się łączysz przez Aplikację.",
      ownershipHeading: "Własność",
      ownershipBody:
        "Aplikacja i wszelkie związane z nią prawa własności intelektualnej są i pozostaną własnością Matt's Software. Niniejsza Umowa nie daje Ci żadnego udziału własnościowego w Aplikacji. Twoje dane, konfiguracje i treści przechowywane na Twoim serwerze relay pozostają Twoje.",
      terminationHeading: "Rozwiązanie",
      terminationBody:
        "Niniejsza licencja obowiązuje do momentu jej rozwiązania. Twoje prawa wynikające z niniejszej Umowy automatycznie wygasają bez powiadomienia, jeśli nie przestrzegasz któregokolwiek z jej warunków. Po rozwiązaniu musisz przestać używać Aplikacji i usunąć wszystkie kopie z urządzeń. Matt's Software może również rozwiązać niniejszą licencję w dowolnym momencie z jakiegokolwiek powodu.",
      warrantyHeading: "Wyłączenie gwarancji",
      warrantyBody:
        'Aplikacja jest dostarczana „w stanie, w jakim jest" i „w miarę dostępności" bez gwarancji jakiegokolwiek rodzaju, wyraźnej ani dorozumianej, w tym między innymi gwarancji przydatności handlowej, przydatności do określonego celu i nienaruszania praw. Matt\'s Software nie gwarantuje, że Aplikacja będzie nieprzerwana, wolna od błędów ani wolna od szkodliwych komponentów.',
      liabilityHeading: "Ograniczenie odpowiedzialności",
      liabilityBody:
        "W maksymalnym zakresie dozwolonym przez obowiązujące prawo Matt's Software nie ponosi odpowiedzialności za jakiekolwiek pośrednie, przypadkowe, specjalne, wynikowe lub karne szkody, ani za jakąkolwiek utratę danych, zysków lub przychodów, wynikające z lub związane z Twoim korzystaniem z Aplikacji, niezależnie od teorii odpowiedzialności.",
      governingHeading: "Prawo właściwe",
      governingBody:
        "Niniejsza Umowa jest regulowana i interpretowana zgodnie z prawem Stanów Zjednoczonych, bez uwzględniania zasad kolizji praw.",
      contactHeading: "Kontakt",
      contactBody: "Jeśli masz pytania dotyczące niniejszej Umowy, skontaktuj się z nami pod adresem",
    },
  },

  notFound: {
    altText:
      "Czerwony wąż wstęgowy w hełmie kolonialnym siedzi na skale w kształcie znaku zapytania, otoczony pustymi drogowskazami",
    title: "Ta strona zabłądziła.",
    sub: "Drogowskazy są puste. Wąż też nie wie. Sprowadźmy Cię z powrotem do czegoś, co istnieje.",
    backToSuite: "Wróć do kolekcji",
    rummageGithub: "Albo poszperaj na GitHubie",
  },
};
