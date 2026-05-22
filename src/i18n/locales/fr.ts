/// French translations. Mirrors en.ts shape — TS enforces it.

import type { Translation } from "../types";

export const fr: Translation = {
  meta: {
    siteTitle: "Matt's Software — De petites apps qui valent leur place",
    siteDescription:
      "Une petite boutique d'apps minuscules, gratuites et open source. Un seul lanceur les installe toutes et les maintient à jour.",
    htmlLang: "fr",
    direction: "ltr",
  },

  langSelector: {
    label: "Langue",
    selectLanguage: "Choisir la langue",
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
    appsAllLabel: "Toutes les apps",
    launcher: "Lanceur",
    githubAria: "GitHub",
    suiteFooter: "{count} apps, un seul lanceur.",
    getLauncher: "Télécharger le lanceur",
    tipLabel: "Pourboire",
    tipTitle: "Envoyer un pourboire",
    tipCopy: "Copier",
    tipCopied: "Copié",
  },

  footer: {
    mascotAlt:
      "Un chat blanc roulé en boule autour d'un plan et d'une tasse de café — d'une certaine façon endormi malgré la musique",
    line: "Construit à coups d'espresso et de musique forte.",
    sub: "Matt's Software est une boutique d'une seule personne. Toutes les apps sont signées, notariées et gratuites.",
    github: "GitHub",
    allApps: "Toutes les apps",
    contact: "Contact",
  },

  channels: {
    appstore: "App Store",
    library: "Bibliothèque",
    source: "Code source",
    download: "Télécharger",
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
    all: "Toutes",
    developerTools: "Outils de développement",
    privacySecurity: "Confidentialité et sécurité",
    utilities: "Utilitaires",
    learning: "Apprentissage",
    design: "Design",
  },

  home: {
    eyebrow: "MATT'S SOFTWARE",
    title: "De petites apps qui valent leur place.",
    sub: "Une petite boutique soignée de plus de {count} apps minuscules et gratuites. Un lanceur les installe toutes et les maintient à jour — ou prenez n'importe laquelle séparément.",
    downloadLauncher: "Télécharger le lanceur",
    browseSuite: "Parcourir la collection",
    metaLine: "Gratuit · Open source · macOS aujourd'hui, plus à venir",
    brandName: "Matt's Software",
    brandSub: "Toutes mes apps, au même endroit",
    searchPlaceholder: "Rechercher des apps…",
    searchAria: "Rechercher des apps",
    categoriesAria: "Catégories",
    noResults: "Aucune app ne correspond à « {query} ».",
    view: "Voir",
  },

  appPage: {
    downloadBtn: "Télécharger",
    viewGithub: "Voir sur GitHub",
    openInBrowser: "Ouvrir dans le navigateur",
    featuresHeadingDefault: "Ce qu'elle fait",
    suiteEyebrow: "La collection",
    suiteHeading: "Plus de la boutique",
    suiteSub:
      "Chacune ne résout qu'une seule chose, mais elle la résout bien — installez seulement ce dont vous avez besoin.",
    bottomAddToMenuBar: "Ajoutez {name} à votre barre des menus.",
    bottomGet: "Obtenez {name}.",
  },

  featureShowcase: {
    screenshotComingSoon: "Capture d'écran à venir",
  },

  apps: {
    espresso: {
      tagline: "Refusez de dormir.",
      description:
        "Utilitaire d'éveil pour la barre système : sessions chronométrées ou mode indéfini, micro-mouvement de souris sous-pixel pour déjouer la détection d'inactivité et un raccourci global de panique pour tout couper instantanément. Override capot fermé et stats de durée totale inclus.",
      catalogTagline: "Votre ordinateur veut dormir. Espresso n'est pas d'accord.",
      catalogDescription:
        "Utilitaire d'éveil qui empêche votre ordinateur de dormir. Sessions chronométrées, simulation de mouvement de souris, override capot fermé et raccourci de panique pour désactivation instantanée.",
      requirements: "macOS  ·  Windows  ·  Linux  ·  Gratuit et open source",
      featuresHeading: "Restez éveillé. Restez actif. Restez employé.",
      features: [
        {
          title: "Éveil, avec minuteur ou pour toujours",
          body: "Minuteurs préréglés de 5 minutes à 8 heures, ou mode indéfini pour les jours sérieux. Gardez l'écran allumé ou laissez-le dormir pendant que le système reste éveillé.",
        },
        {
          title: "Trompez votre indicateur de statut",
          body: "Micro-mouvement de souris sous-pixel — invisible mais suffisant pour déjouer la détection d'inactivité dans Slack, Teams, Zoom et toute app qui surveille l'inactivité.",
        },
        {
          title: "Bouton panique inclus",
          body: "Ctrl+Shift+Échap coupe tout instantanément : l'écran s'allume, le mouvement s'arrête, les minuteurs s'annulent. Override capot fermé pour les portables. Statistiques à vie pour suivre votre temps total.",
        },
      ],
      showcase: [
        {
          badge: "Reste éveillé",
          title: "Ton ordinateur veut dormir. Espresso n'est pas d'accord.",
          description:
            "Un petit shot posté dans ta barre de menus qui bloque la minuterie de veille, garde l'écran allumé (ou pas — tu décides), et bouge la souris sous-pixel par sous-pixel pour que les détecteurs d'inactivité restent dupés.",
          bullets: [
            "Bloque la veille système, la veille d'écran ou les deux — par session",
            "Mouvement de souris sous-pixel trompe Slack, Teams, Zoom",
            "Le mode capot fermé garde tout en marche, ordinateur fermé",
            "Stats d'usage à vie — combien de sommeil tu as volé",
          ],
          imageAlt: "Tasse à espresso 3D protégeant un ordinateur portable somnolent",
        },
        {
          badge: "À l'horloge",
          title: "Sessions minutées, ou jusqu'à ce que tu déclares forfait",
          description:
            "Choisis un préréglage (5 min, 30 min, 2 h, 8 h) ou passe en indéfini. Le raccourci panique global éteint tout à l'instant : l'écran dort, la souris s'arrête, les minuteries s'annulent.",
          bullets: [
            "Préréglages de 5 minutes à 8 heures, plus le mode indéfini",
            "Ctrl+Shift+Échap panique globale — tout éteint, instantanément",
            "Compte à rebours dans la barre de menus, toujours visible",
            "Fin automatique au verrouillage ou à la fermeture du capot (configurable)",
          ],
          imageAlt: "Sablier chromé 3D avec du sable orange chaud et un bouton panique rouge à côté",
        },
      ],
    },

    stickykeys: {
      tagline: "Verrouillez ces touches.",
      description:
        "Une petite app dans la barre des menus. Cliquez pour verrouiller le clavier, essuyez les touches avec un chiffon en microfibre sans lancer d'apps, envoyer d'emails ni interrompre votre travail, puis cliquez sur l'overlay pour déverrouiller. Un overlay givré plein écran couvre chaque moniteur, la souris reste active, et un déverrouillage automatique de sécurité vous empêche d'être piégé.",
      catalogTagline: "Verrouillez le clavier pour qu'un chiffon ne déclenche pas de raccourcis.",
      catalogDescription:
        "Un verrou de clavier dans la barre des menus pour le nettoyage. Cliquez pour absorber chaque touche, modificateur et touche multimédia à l'échelle du système ; un overlay givré plein écran couvre chaque écran, la souris reste active pour déverrouiller, et un déverrouillage automatique de sécurité vous empêche d'être piégé.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Gratuit  ·  Signée et notariée avec Developer ID",
      featuresHeading: "Essuyez les touches. Ne lancez rien.",
      features: [
        {
          title: "Tout verrouiller en un clic",
          body: "Une capture clavier active absorbe chaque touche, modificateur et touche multimédia à l'échelle du système — essuyez les touches sans déclencher le moindre raccourci.",
        },
        {
          title: "Overlay givré plein écran",
          body: "Un flou clair et non teinté couvre chaque écran pour voir en un coup d'œil que le clavier est verrouillé, avec un compte à rebours en direct du déverrouillage automatique.",
        },
        {
          title: "Déverrouillage à la souris, jamais piégé",
          body: "Déverrouillez depuis le bouton de l'overlay ou depuis l'icône de la barre des menus, et un déverrouillage automatique de sécurité se déclenche quoi qu'il arrive pour que vous ne soyez jamais bloqué.",
        },
      ],
      showcase: [
        {
          badge: "Verrouillage",
          title: "Un clic, le clavier se tait",
          description:
            "Un tap clavier au niveau système avale chaque touche, modificateur et touche multimédia — pour qu'un chiffon ne déclenche pas un raccourci, n'envoie pas un mail, ne quitte pas Logic en pleine prise. Un overlay givré couvre chaque écran pour que ce soit évident.",
          bullets: [
            "Tap clavier système — chaque touche, modificateur, multimédia",
            "Overlay givré sur chaque moniteur avec compte à rebours visible",
            "La souris reste active pour déverrouiller quand tu as fini",
            "Vit dans la barre de menus — un clic dedans, un clic dehors",
          ],
          imageAlt: "Clavier 3D sous un dôme en verre lavande givré avec un cadenas",
        },
        {
          badge: "Sortie de secours",
          title: "Tu ne peux pas rester coincé",
          description:
            "Un déverrouillage de sécurité se déclenche quoi qu'il arrive — même si l'overlay rate, même si la barre de menus se bloque. La surface de déverrouillage écoute la souris, la barre de menus et un timer dur.",
          bullets: [
            "Le timer d'auto-déverrouillage garantit que tu n'es jamais coincé",
            "Trois chemins de déverrouillage indépendants : overlay, barre, timer",
            "Durée max de verrouillage configurable (1 min par défaut)",
            "Conçu paranoïaque — échoue ouvert, jamais fermé",
          ],
          imageAlt: "Cadran chromé 3D avec aiguille lavande et une clé flottant au-dessus d'un cadenas ouvert",
        },
      ],
    },

    stats: {
      tagline: "Chaque signal. Un coup d'œil.",
      description:
        "Un moniteur système natif dans la barre des menus. CPU en direct par cœur, pression mémoire, lecture/écriture disque, montée/descente réseau et lectures de capteurs — plus des widgets compacts optionnels qui voyagent dans la barre d'état et des sparklines historiques pour chaque signal, pour repérer un pic sans ouvrir le Moniteur d'activité.",
      catalogTagline: "Chaque signal système d'un coup d'œil — dans votre barre des menus.",
      catalogDescription:
        "Un moniteur système natif dans la barre des menus. CPU en direct par cœur, pression mémoire, lecture/écriture disque, montée/descente réseau et lectures de capteurs — plus des widgets compacts optionnels qui voyagent dans la barre d'état et des sparklines historiques pour chaque signal.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Gratuit  ·  Signée et notariée avec Developer ID",
      featuresHeading: "Voyez toute la machine. Sans toute la fenêtre.",
      features: [
        {
          title: "Chaque signal système d'un coup d'œil",
          body: "CPU par cœur, pression mémoire (avec le détail filaire/compressé/app/cache), lecture/écriture disque, montée/descente réseau, capteurs et une liste en direct des processus les plus actifs — tout dans un panneau compact dans la barre des menus.",
        },
        {
          title: "Widgets compacts dans la barre des menus",
          body: "Choisissez quels nombres (ou une petite forme d'onde en direct) voyagent dans votre barre d'état. Reste visible pendant que vous travaillez, jamais dans le chemin.",
        },
        {
          title: "Sparklines, pas tableurs",
          body: "L'historique récent est tracé pour chaque signal, donc un pic ou un processus emballé est évident sans fouiller dans le Moniteur d'activité.",
        },
      ],
      showcase: [
        {
          badge: "Tous les signaux",
          title: "Chaque jauge de ta machine, d'un seul coup d'œil",
          description:
            "CPU par cœur, pression mémoire (avec la répartition wired / compressée / app / cache), lecture et écriture disque, réseau montant et descendant, lectures de capteurs — Stats lit chaque signal que macOS expose et les épingle tous à ta barre de menus.",
          bullets: [
            "Utilisation CPU par cœur et top des processus",
            "Pression mémoire avec la répartition complète de résidence",
            "I/O disque, débit réseau et températures des capteurs",
            "Épingle n'importe quel sous-ensemble en widgets compacts",
          ],
          imageAlt: "Grappe 3D de jauges chromées et roses flottantes et un petit capteur",
        },
        {
          badge: "Rétrospective",
          title: "Sparklines, pas tableurs",
          description:
            "L'historique récent est graphé pour chaque signal, donc un processus emballé ou un pic thermique est évident d'un coup d'œil — sans avoir à ouvrir le Moniteur d'Activité et attendre qu'il se répète.",
          bullets: [
            "Historique sparkline en direct pour chaque jauge",
            "Fenêtre d'historique configurable — dernière minute, heure ou jour",
            "Repère un pic rétroactivement au lieu de le chasser en direct",
            "Touche une sparkline pour voir le processus top à ce moment",
          ],
          imageAlt: "Ruban sparkline rose brillant 3D avec une bille chromée à son sommet",
        },
      ],
    },

    port: {
      tagline: "Chaque port, un clic.",
      description:
        "Un petit gestionnaire de ports natif dans la barre des menus. Voyez ce qui écoute, tuez ou mettez en pause le processus, redirigez-le ou mappez-le avec NAT-PMP et regardez les connexions actives sur une carte en direct — cliquez sur l'une pour l'inspecter dans Blip.",
      catalogTagline: "Chaque port ouvert sur votre Mac, à un clic.",
      catalogDescription:
        "Un gestionnaire de ports natif dans la barre des menus : voyez ce qui écoute, tuez ou mettez en pause le processus, redirigez-le ou mappez-le avec NAT-PMP et regardez les connexions actives sur une carte en direct — cliquez sur l'une pour l'inspecter dans Blip.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Gratuit  ·  Signée avec Developer ID",
      featuresHeading: "Voyez-le. Tuez-le. Redirigez-le.",
      features: [
        {
          title: "Chaque port ouvert, en direct",
          body: "Une liste dans la barre des menus de chaque port TCP/UDP en écoute avec le processus et le PID derrière, rafraîchie chaque seconde. Tuez-le, mettez-le en pause (SIGSTOP/SIGCONT) ou laissez-le.",
        },
        {
          title: "Redirection et mappage",
          body: "Redirigez n'importe quel port local vers un autre avec un redirecteur TCP intégré, exposez-le sur votre LAN et traversez votre routeur avec NAT-PMP natif — sans config.",
        },
        {
          title: "Connexions sur une carte → Blip",
          body: "Connexions actives tracées sur une carte en direct selon où elles vont réellement. Cliquez sur n'importe quel point pour l'ouvrir dans Blip pour une inspection approfondie (ou récupérez Blip si vous ne l'avez pas).",
        },
      ],
      showcase: [
        {
          badge: "Port d'attache",
          title: "Chaque port ouvert, à un clic",
          description:
            "Un manifeste vivant dans la barre de menus de chaque port TCP/UDP à l'écoute — le processus derrière, le PID, le protocole. Tue-le, mets-le en pause (SIGSTOP/SIGCONT), ou garde-le à l'œil.",
          bullets: [
            "Rafraîchit chaque seconde — ce qui écoute, maintenant",
            "Tue, met en pause ou reprend le processus sans quitter la barre",
            "La bibliothèque de ports connus nomme les services à vue",
            "Notification dès qu'un nouveau port s'ouvre",
          ],
          imageAlt: "Port miniature 3D avec remorqueur, barge et voilier amarrés à un petit quai",
        },
        {
          badge: "Signal",
          title: "Transfère, expose ou perce le routeur",
          description:
            "Le forwarder TCP intégré relaie n'importe quel port local vers un autre. NAT-PMP natif le mappe automatiquement à travers ton routeur. Regarde les connexions actives sur une carte — clique un endpoint pour l'inspecter dans Blip.",
          bullets: [
            "Forwarder TCP bâti sur Network.framework — zéro dépendance",
            "Mapping NAT-PMP natif (RFC 6886) sans configuration",
            "Expose un port sur ton LAN avec un seul toggle",
            "Connexions actives sur une carte ; passe-les à Blip d'un clic",
          ],
          imageAlt: "Phare miniature 3D signalant un petit paquet de données bleu avec son faisceau",
        },
      ],
    },

    alfred: {
      tagline: "Récupérez le disque.",
      description:
        "Un valet natif dans la barre des menus qui trouve les déchets de développement sûrs à supprimer — node_modules, target/ de Cargo, caches de build et de tests, DerivedData d'Xcode, caches de gestionnaires de paquets — les classe du plus gros au plus petit et les déplace à la Corbeille. Récupérable en un clic.",
      catalogTagline: "Récupérez l'espace disque que les déchets de dev accaparent.",
      catalogDescription:
        "Un valet natif dans la barre des menus qui trouve les déchets de développement sûrs à supprimer — node_modules, target/ de Cargo, caches de build et de tests, DerivedData d'Xcode, caches de gestionnaires de paquets — les classe du plus gros au plus petit et les déplace à la Corbeille (récupérable).",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Gratuit  ·  Signée avec Developer ID",
      featuresHeading: "Trouvez-le. Jetez-le. Récupérez le disque.",
      features: [
        {
          title: "Trouvez les déchets, les plus gros d'abord",
          body: "node_modules, target/ de Cargo, caches de build et de tests, DerivedData d'Xcode, caches Homebrew/Yarn/npm — scannés, dimensionnés et listés du plus gros au plus petit pour savoir exactement ce qui accapare votre disque.",
        },
        {
          title: "Sûr à supprimer, par conception",
          body: "Alfred ne touche qu'aux dossiers régénérables — caches, artefacts de build, arbres de dépendances — jamais au code source. Tout va à la Corbeille, récupérable en un clic si vous changez d'avis.",
        },
        {
          title: "Depuis la barre des menus",
          body: "Vit comme une petite app dans la barre des menus. Scannez quand vous voulez, regardez combien vous avez récupéré, ou laissez-la comme outil de nettoyage ponctuel pour la prochaine alerte SSD plein.",
        },
      ],
      showcase: [
        {
          badge: "À votre service",
          title: "Du plus gros au plus petit, poli, impitoyable",
          description:
            "Un valet dans la barre de menus qui sait exactement quels dossiers sont sûrs à libérer. node_modules, Cargo target/, Xcode DerivedData, caches Homebrew, caches Yarn — Alfred les trouve, les pèse et les présente sur un plateau d'argent.",
          bullets: [
            "Scanne chaque dossier de cruft dev courant dans tes projets",
            "Trié du plus gros au plus petit pour que les gains soient évidents",
            "Règles d'exclusion par dossier pour que tes favoris restent",
            "Vit dans la barre de menus — scanne quand ça te chante",
          ],
          imageAlt: "Valet miniature 3D avec une écharpe verte présentant un plateau d'argent de cruft dev",
        },
        {
          badge: "Sûr par conception",
          title: "Récupère les gigas, garde le code",
          description:
            "Alfred ne touche que les dossiers régénérables — caches, artefacts de build, arbres de dépendances — jamais ton code source. Tout va à la Corbeille, donc une erreur est annulable d'un clic.",
          bullets: [
            "Ne touche que les dossiers régénérables — le code est toujours sauf",
            "Les fichiers vont à la Corbeille, pas à /dev/null",
            "Un clic restaure tout ce que tu regrettes d'avoir effacé",
            "Total cumulé montre combien tu as récupéré",
          ],
          imageAlt: "SSD 3D avec un anneau LED vert et de petits paquets s'éloignant",
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
      tagline: "Voyez ce qui part.",
      description:
        "Voyez exactement où vont vos données, qui les collecte et coupez-les — le tout sur une très jolie carte 3D.",
      catalogTagline: "Votre ordinateur parlait dans votre dos.",
      catalogDescription:
        "Surveillance réseau en temps réel avec une carte 3D des connexions, un pare-feu intelligent, le blocage DNS, le routage par câbles sous-marins et l'analytique de bande passante. Voyez exactement où vont vos données.",
      requirements: "Gratuit et open source",
      featuresHeading: "Une carte. Un videur. Un mur.",
      features: [
        {
          title: "Carte 3D en direct de chaque connexion",
          body: "Le trafic de chaque app tracé sur un globe, arcs colorés par service. 200 connexions, plus de 700 vrais câbles sous-marins, particules montrant la direction. L'internet que vous ignoriez, rendu visible.",
        },
        {
          title: "Videur pour votre bande passante",
          body: "Chaque app a besoin d'une permission, sans exception. Le mode strict bloque tout jusqu'à votre accord. Des barres de bande passante par app exposent les goinfres. Coupe-circuit en un clic.",
        },
        {
          title: "200k traqueurs bloqués avant de se connecter",
          body: "Les listes de blocage DNS anéantissent les domaines pub et traqueurs à vue ; un journal de requêtes en temps réel fait remonter chaque recherche ; un classement de traqueurs nomme les pires offenseurs.",
        },
      ],
      showcase: [
        {
          badge: "Carte réseau",
          title: "200 connexions. Aucune n'a demandé la permission.",
          description:
            "Chaque app sur votre ordinateur appelle discrètement à la maison. Blip les met toutes sur une carte 3D pour que vous regardiez le chaos se dérouler en temps réel.",
          bullets: [
            "Les connexions empruntent de vrais câbles sous-marins à travers les océans",
            "Arcs colorés par service — repérez instantanément Google, Discord, Apple et des centaines d'autres",
            "Particules animées qui montrent les données circulant dans les deux sens",
            "Traceroute saut par saut qui montre le vrai chemin pris par vos paquets",
          ],
          imageAlt: "Carte réseau 3D de Blip montrant des arcs de connexion",
        },
        {
          badge: "Pare-feu",
          title: "Videur pour votre bande passante",
          description:
            "Chaque app a besoin d'une permission. Pas d'exception, pas d'excuse. Le mode strict bloque tout jusqu'à votre accord. Parce que vos apps ont été beaucoup trop à l'aise.",
          bullets: [
            "Mode strict : coupable jusqu'à preuve du contraire",
            "Barres de bande passante par app qui exposent les goinfres",
            "Règles ciblées — autorisez le port 443 mais bloquez tout le reste",
            "Coupe-circuit : un clic, zéro internet, silence instantané",
          ],
          imageAlt: "Pare-feu de Blip montrant les contrôles d'accès réseau par app",
        },
        {
          badge: "Garde",
          title: "200 000 traqueurs bloqués avant même de se connecter",
          description:
            "Votre DNS est un mouchard. Chaque app, chaque SDK pub, chaque ping d'analytique — Garde les attrape à la porte. Voyez qui essaie d'appeler à la maison et coupez-les.",
          bullets: [
            "Listes de blocage DNS qui anéantissent plus de 200k domaines de traqueurs et de pub à vue",
            "Journal de requêtes en temps réel — regardez chaque recherche se passer en direct",
            "Classement des traqueurs qui montre les offenseurs les plus persistants",
            "Combiné avec le pare-feu — deux murs, zéro pitié",
          ],
          imageAlt: "Garde de Blip montrant le blocage DNS et la détection de traqueurs",
        },
        {
          badge: "Visualisation",
          title: "L'internet n'est que des câbles mouillés",
          description:
            "Votre vidéo YouTube a traversé trois océans sur un câble plus fin qu'un tuyau d'arrosage. Blip vous montre exactement lequel — plus de 700 vraies routes de câbles sous-marins, lumineuses quand vos données les traversent.",
          bullets: [
            "Vraies routes de câbles sous-marins de TeleGeography cartographiées sur le fond marin",
            "Les câbles actifs s'illuminent quand votre trafic les traverse",
            "Particules en mouvement montrant la direction upload vs download",
            "Vitesse basée sur le ping — les connexions rapides coulent vite, les lentes se traînent",
          ],
          imageAlt: "Visualisation Blip montrant les câbles sous-marins et le flux de données",
        },
        {
          badge: "Traceroute",
          title: "14 sauts à travers 6 villes pour charger une page",
          description:
            "Chaque paquet rebondit à travers une douzaine de routeurs avant d'arriver. Blip trace la route — saut par saut, ville par ville, câble par câble — et la peint sur la carte.",
          bullets: [
            "Marqueurs saut par saut superposés directement sur la carte 3D",
            "Latence colorée : vert c'est rapide, ambre c'est correct, rouge c'est de la douleur",
            "Routes par de vrais câbles sous-marins à travers les traversées océaniques",
            "Traceroute automatique pour chaque connexion active",
          ],
          imageAlt: "Traceroute Blip montrant le chemin réseau saut par saut",
        },
      ],
    },

    diane: {
      tagline: "Appuyez sur enregistrer. Parlez.",
      description:
        "Un enregistreur vocal rétro avec transcription voix-vers-texte en direct, une bibliothèque de cassettes et un mode dictée. Inspiré des mémos sur cassette de l'Agent Spécial Dale Cooper.",
      catalogTagline: "Je tiens dans ma main un petit enregistreur à cassette.",
      catalogDescription:
        "Un enregistreur vocal rétro et skeuomorphique avec transcription voix-vers-texte en direct, une bibliothèque de cassettes et un mode dictée. Inspiré de l'Agent Spécial Dale Cooper.",
      requirements: "Gratuit et open source",
      featuresHeading: "Appuyez sur enregistrer. Parlez. Marchez.",
      features: [
        {
          title: "Un enregistreur à cassette skeuomorphique",
          body: "Une barre latérale flottante avec un enregistreur photoréaliste : bobines animées, vumètres et boutons physiques. Appuyez sur enregistrer et parlez — des raccourcis globaux vous permettent d'enregistrer depuis n'importe quelle app.",
        },
        {
          title: "Transcription en direct, sur l'appareil",
          body: "SFSpeechRecognizer d'Apple transcrit pendant que vous parlez — pas de cloud, pas de clés d'API. Cliquez sur n'importe quel mot dans la transcription pour sauter à ce moment de l'enregistrement.",
        },
        {
          title: "Une boîte à chaussures pleine de cassettes",
          body: "Chaque enregistrement est sauvegardé comme une cassette colorée avec son audio et sa transcription. Parcourez votre collection, chargez-en une, rejouez-la quand vous voulez.",
        },
      ],
      showcase: [
        {
          badge: "Enregistreur vocal",
          title: "Un enregistreur à cassette skeuomorphique pour votre bureau",
          description:
            "Une barre latérale flottante avec un enregistreur à cassette photoréaliste. Appuyez sur enregistrer et parlez. Votre voix est capturée, transcrite en direct et sauvegardée sur une cassette que vous pouvez parcourir, rembobiner et rejouer.",
          bullets: [
            "Enregistreur à cassette photoréaliste avec bobines animées et vumètres",
            "Enregistrez, lisez, rembobinez et avancez avec des boutons physiques",
            "Les bobines suivent visuellement la position de lecture en temps réel",
            "Des raccourcis globaux vous permettent d'enregistrer depuis n'importe quelle app sans changer de fenêtre",
          ],
          imageAlt: "Interface d'enregistreur à cassette de Diane",
        },
        {
          badge: "Transcription en direct",
          title: "Vos mots, tapés au fur et à mesure",
          description:
            "Diane transcrit votre parole en temps réel avec la reconnaissance vocale sur l'appareil d'Apple. Pas de cloud, pas de clés d'API, pas de latence. Parlez et regardez les mots apparaître.",
          bullets: [
            "Voix-vers-texte en direct propulsé par SFSpeechRecognizer de macOS",
            "Traitement entièrement sur l'appareil, zéro donnée ne quitte votre machine",
            "Cliquez sur n'importe quel mot dans la transcription pour sauter à ce moment de l'enregistrement",
            "Le mode dictée tape vos mots directement dans n'importe quel champ de texte focalisé",
          ],
          imageAlt: "Overlay de transcription en direct de Diane",
        },
        {
          badge: "Bibliothèque de cassettes",
          title: "Une boîte à chaussures pleine de cassettes",
          description:
            "Chaque enregistrement est sauvegardé comme une cassette avec sa propre variante de couleur. Parcourez votre collection, cliquez pour charger et rejouez quand vous voulez.",
          bullets: [
            "10 variantes uniques de couleur de cassette assignées aléatoirement",
            "Les cassettes persistent entre les sessions avec audio et transcription complets",
            "Les touches fléchées parcourent votre collection de cassettes",
            "Compteur de mots affiché sur chaque étiquette de cassette",
          ],
          imageAlt: "Bibliothèque de cassettes de Diane",
        },
      ],
    },

    peephole: {
      tagline: "Voyez qui regarde.",
      description:
        "Une sentinelle dans la barre des menus pour votre caméra et votre micro. Peephole montre quelles apps les utilisent en ce moment, garde un historique d'accès et vous notifie quand quelque chose les allume — pas d'autorisations spéciales, pas d'extensions kernel.",
      catalogTagline: "Voyez qui regarde.",
      catalogDescription:
        "Une sentinelle dans la barre des menus pour votre caméra et votre micro : quelles apps les utilisent en ce moment, un historique d'accès et une notification au moment où quelque chose les allume.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Gratuit  ·  Signée avec Developer ID",
      featuresHeading: "Rien n'enregistre sans que vous le sachiez.",
      features: [
        {
          title: "Statut en direct de la caméra et du micro",
          body: "Le glyphe de la barre des menus change à l'instant où la caméra ou le micro s'active, pour que vous sachiez toujours quand quelque chose enregistre.",
        },
        {
          title: "Historique d'accès",
          body: "Un journal continu de quelle app a utilisé la caméra ou le micro et quand — remontez l'activité de la journée.",
        },
        {
          title: "Notifications",
          body: "Soyez alerté au moment où une app commence à utiliser la caméra ou le micro. Pas d'autorisations spéciales, pas d'extensions kernel.",
        },
      ],
      showcase: [
        {
          badge: "Yeux & oreilles",
          title: "Sache la seconde où quelque chose se met à regarder",
          description:
            "Le glyphe Peephole dans la barre de menus bascule à l'instant où la caméra ou le micro deviennent actifs. Touche-le et tu vois exactement quelle app les a allumés — et tu décides si c'était voulu.",
          bullets: [
            "État en direct de la caméra et du micro, toujours visible",
            "Le glyphe bascule à l'instant où l'accès commence ou se termine",
            "Touche pour voir l'app responsable et son périphérique ouvert",
            "Pas de droits spéciaux, pas d'extension kernel — pur userspace",
          ],
          imageAlt: "Webcam chromée 3D avec un œil-fente vert sarcelle brillant et un microphone chromé à côté",
        },
        {
          badge: "Reçus",
          title: "Un journal de chaque accès, avec notification quand ça compte",
          description:
            "Remonte l'activité caméra et micro de la journée — qui les a utilisés, quand, combien de temps. Notifications optionnelles dès le début de l'accès, donc une activation surprise ne passe jamais inaperçue.",
          bullets: [
            "Historique par app avec horodatage et durée",
            "Notification à chaque nouvel accès (toggle par périphérique)",
            "Filtre par app, périphérique ou fenêtre de temps",
            "L'historique persiste à travers les redémarrages — rien ne passe",
          ],
          imageAlt: "Disque judas chromé 3D avec un iris vert sarcelle brillant et une pile de cartes d'historique derrière",
        },
      ],
    },

    quarantine: {
      tagline: "Vérifiez chaque téléchargement.",
      description:
        "Un inspecteur dans la barre des menus pour ~/Downloads. Pour chaque nouveau fichier il fait remonter l'URL d'origine de quarantaine, le statut Gatekeeper/codesign, le SHA-256 et un verdict VirusTotal optionnel — puis vous notifie pour que vous vérifiez avant d'ouvrir.",
      catalogTagline: "Faites confiance, mais vérifiez chaque téléchargement.",
      catalogDescription:
        "Un inspecteur dans la barre des menus pour ~/Downloads : origine de quarantaine, statut Gatekeeper/codesign, SHA-256 et un verdict VirusTotal optionnel pour chaque nouveau fichier, avec une notification pour le vérifier.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Gratuit  ·  Signée avec Developer ID",
      featuresHeading: "Sachez ce qui vient d'atterrir dans Téléchargements.",
      features: [
        {
          title: "Origine et quarantaine",
          body: "Voyez exactement d'où vient un fichier via son attribut com.apple.quarantine — l'agent qui l'a téléchargé et l'URL source.",
        },
        {
          title: "Gatekeeper et hash",
          body: "Évaluation codesign/Gatekeeper plus un SHA-256 pour chaque nouveau fichier qui atterrit dans ~/Downloads.",
        },
        {
          title: "VirusTotal optionnel",
          body: "Ajoutez une clé d'API et Quarantine fait remonter un verdict de réputation en ligne, pour vérifier un téléchargement avant même de l'ouvrir.",
        },
      ],
      showcase: [
        {
          badge: "Chambre d'isolement",
          title: "Chaque nouveau téléchargement, isolé jusqu'à ton verdict",
          description:
            "Dès qu'un fichier atterrit dans ~/Downloads, Quarantine le pose sur la table d'inspection. Tu vois exactement d'où il vient — agent, URL source, attribut de quarantaine — avant d'avoir double-cliqué quoi que ce soit.",
          bullets: [
            "Surveille ~/Downloads en temps réel via FSEvents",
            "Lit com.apple.quarantine : l'app qui l'a téléchargé et l'URL source",
            "Te notifie à chaque nouvelle arrivée",
            "Une ligne par fichier — toute la file d'un coup d'œil",
          ],
          imageAlt: "Capsule d'isolement en verre 3D avec un colis suspendu dedans et des colis approuvés/rejetés autour",
        },
        {
          badge: "Inspecter",
          title: "Signature, hash et verdict",
          description:
            "Pour chaque fichier, Quarantine montre l'évaluation Gatekeeper, le statut codesign et le SHA-256. Mets une clé API VirusTotal et le verdict de réputation apparaît inline — vérifie avant d'ouvrir.",
          bullets: [
            "Évaluation spctl + codesign --display sur une seule ligne",
            "SHA-256 calculé à l'arrivée — prêt à copier-coller",
            "Verdict VirusTotal optionnel inline (BYO API key)",
            "Révéler dans le Finder ou jeter à la Corbeille depuis le menu",
          ],
          imageAlt: "Loupe chromée 3D au-dessus d'un dossier crème avec un sceau doré à côté",
        },
      ],
    },

    sentry: {
      tagline: "Surveillez les recoins sombres.",
      description:
        "Un auditeur dans la barre des menus pour la persistance macOS. Il énumère LaunchAgents et Daemons, éléments de connexion, cron et fichiers de démarrage shell, vérifie la signature de code et la notarisation de chaque cible, et vous alerte à l'instant où un élément nouveau ou modifié apparaît — puis vous laisse l'inspecter, le bloquer ou le restaurer, directement depuis la barre des menus.",
      catalogTagline: "Sachez l'instant où quelque chose s'incruste.",
      catalogDescription:
        "Un auditeur dans la barre des menus pour la persistance macOS — LaunchAgents, éléments de connexion, cron et fichiers de démarrage shell — avec vérifications de signature et alertes quand quelque chose de nouveau ou modifié apparaît. Inspectez, bloquez ou restaurez l'un d'eux.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Gratuit  ·  Signée avec Developer ID",
      featuresHeading: "Surveillez les endroits où se cache le malware.",
      features: [
        {
          title: "Chaque vecteur de persistance",
          body: "LaunchAgents et Daemons, éléments de connexion, cron et fichiers de démarrage shell — chaque endroit où quelque chose peut s'incruster pour survivre à un redémarrage, dans une seule liste dans la barre des menus.",
        },
        {
          title: "Conscient des signatures",
          body: "Chaque binaire cible est classé notarié / signé / non signé via spctl et codesign, donc un launch agent non signé saute aux yeux instantanément.",
        },
        {
          title: "Alertes au changement, bloque ce qui ne devrait pas être là",
          body: "La comparaison de snapshots vous notifie à l'instant où un nouvel élément de persistance apparaît ou change. Inspectez le plist ou le script, puis bloquez-le — Sentry le décharge et le met de côté comme .sentry-disabled. Réversible en un clic.",
        },
      ],
      showcase: [
        {
          badge: "Tour de guet",
          title: "Chaque coin sombre, éclairé",
          description:
            "LaunchAgents & Daemons, éléments d'ouverture de session, cron, et fichiers d'init du shell — Sentry tient une lanterne au-dessus de chaque endroit où quelque chose pourrait s'incruster discrètement. Une liste dans la barre de menus, signature vérifiée, prête à inspecter.",
          bullets: [
            "Énumère chaque vecteur de persistance macOS dans un seul panneau",
            "Chaque cible classée notarisée / signée / non signée via spctl + codesign",
            "Ouvre le plist ou le script directement depuis la ligne",
            "Vit dans la barre de menus — pas de fenêtre à garder au-dessus",
          ],
          imageAlt: "Lanterne chromée 3D avec un cristal violet brillant et des breloques œil",
        },
        {
          badge: "Manifeste",
          title: "Remarque l'instant où quelque chose de nouveau apparaît",
          description:
            "Sentry photographie ton état de persistance et le diff. À l'instant où un nouvel agent, item de login ou changement de rc atterrit, tu es notifié — avec un blocage d'un clic, entièrement réversible.",
          bullets: [
            "Le diff de snapshot attrape chaque item de persistance nouveau ou modifié",
            "Bloquer décharge l'item et le met de côté en .sentry-disabled",
            "Restaurer en un clic — rien de destructif n'arrive à ton système",
            "La notification te tape sur l'épaule avant le prochain redémarrage",
          ],
          imageAlt: "Parchemin 3D avec des sceaux de cire violets sur un pupitre chromé, avec une cloche d'alarme",
        },
      ],
    },

    fishbones: {
      tagline: "Transformez n'importe quel livre technique en cours interactif.",
      description:
        "Déposez un PDF ou EPUB et Libre génère des leçons, des exercices et des tests cachés. Seize langages avec un seul éditeur, un tuteur IA local sur votre portable, une série qui survit aux week-ends et dix-sept thèmes.",
      catalogTagline: "Transformez n'importe quel livre technique en cours interactif.",
      catalogDescription:
        "Déposez un PDF ou EPUB et Libre génère des leçons, des exercices et des tests cachés. Seize langages avec un seul éditeur, un tuteur IA local sur votre portable, une série qui survit aux week-ends et dix-sept thèmes.",
      requirements: "Gratuit et open source",
      featuresHeading: "Apprenez depuis n'importe quel livre.",
      features: [],
    },

    tap: {
      tagline: "Serveurs au poignet.",
      description:
        "Exécutez des commandes SSH préconfigurées sur des serveurs distants depuis votre Apple Watch. Tapotez, confirmez, terminé. Fonctionne en cellulaire, supporte Siri, chiffre tout de bout en bout.",
      catalogTagline: "La télécommande de commandes pour votre infrastructure.",
      catalogDescription:
        "Exécutez des commandes SSH préconfigurées sur des serveurs distants depuis votre Apple Watch. Fonctionne en cellulaire, supporte Siri et chiffre tout de bout en bout.",
      requirements: "watchOS  ·  iOS  ·  iPadOS  ·  macOS  ·  Gratuit et open source",
      featuresHeading: "Une télécommande pour vos serveurs — à votre poignet.",
      features: [
        {
          title: "Une vraie app de montre, pas un shim de notification",
          body: "Liste de serveurs native watchOS avec points de statut en direct, commandes épinglées via le Bouton d'Action, confirmation pour les commandes dangereuses et sortie défilable avec la Digital Crown. Prêt pour le cellulaire — aucun téléphone requis.",
        },
        {
          title: "Companion et Mac, en pas synchronisés",
          body: "Apps complètes pour iPhone, iPad et Mac Catalyst. Ajoutez des serveurs, configurez commandes et suites, consultez l'historique, gérez les clés SSH. Tout se synchronise sur la montre en temps réel.",
        },
        {
          title: "Suites, alertes, Siri, complications",
          body: 'Regroupez les commandes en suites d\'un tap. Pings de santé toutes les 30 secondes et alertes APNs quand quelque chose meurt. Cinq complications de cadran. "Dis Siri, Tap redémarre prod-api."',
        },
      ],
      showcase: [
        {
          badge: "App montre",
          title: "Redémarrez la prod depuis votre poignet.",
          description:
            "App watchOS native avec liste de serveurs, exécution de commandes et retour haptique. Tapotez une commande, confirmez, terminé. Vraie sortie défilable avec la Digital Crown. Fonctionne en cellulaire — aucun téléphone requis.",
          bullets: [
            "Liste de serveurs avec points de statut en direct (vert/rouge)",
            "Commandes épinglées pour accès rapide via le Bouton d'Action",
            "Vue de confirmation pour les commandes dangereuses",
            "Sortie tronquée, défilable avec la Digital Crown",
          ],
          imageAlt: "App montre Tap montrant les commandes serveur",
        },
        {
          badge: "Companion",
          title: "Configurez tout depuis votre téléphone.",
          description:
            "App de gestion complète pour iPhone, iPad et Mac Catalyst. Ajoutez des serveurs, configurez commandes, gérez les clés SSH, consultez l'historique et configurez des suites de commandes. Tout se synchronise sur la montre instantanément.",
          bullets: [
            "Dashboard avec grille de santé serveur et fil d'activité",
            "Éditeur visuel de commandes avec bibliothèque de templates",
            "Terminal SSH interactif complet via WebView",
            "Génère un QR code pour appairage instantané de la montre",
          ],
          imageAlt: "Dashboard de l'app companion Tap",
        },
        {
          badge: "Suites",
          title: "Exécutez 5 commandes en un tap.",
          description:
            "Regroupez les commandes liées en suites pour des workflows de déploiement d'un tap. Chaque étape montre succès/échec en temps réel. Configurez s'il faut continuer en cas d'échec ou s'arrêter immédiatement.",
          bullets: [
            "Exécution ordonnée des étapes avec suivi de progression",
            "Bouton continuer-en-cas-d'échec par étape",
            "Progression de la suite streamée via WebSocket",
            "Parfait pour séquences de déploiement et routines de health check",
          ],
          imageAlt: "Progression d'exécution de suite Tap sur la montre",
        },
        {
          badge: "Alertes",
          title: "Soyez au courant avant vos utilisateurs.",
          description:
            "Pings de santé en arrière-plan toutes les 30 secondes. Quand un serveur tombe, vous recevez une notification push immédiate sur votre montre et téléphone. Bouton par serveur pour ne recevoir que les alertes qui comptent.",
          bullets: [
            "Boucle de ping de santé de 30 secondes avec suivi de latence",
            "Push APNs vers la montre + le téléphone au changement de statut",
            "Bouton de notification par serveur",
            "Motif d'alerte haptique sur Apple Watch",
          ],
          imageAlt: "Notification de serveur hors-ligne Tap sur la montre",
        },
        {
          badge: "Complications",
          title: "Santé serveur d'un coup d'œil sur votre cadran.",
          description:
            "Cinq complications configurables qui montrent les métriques serveur en direct directement sur votre cadran. Choisissez quel serveur et quelle métrique afficher. Les données se synchronisent automatiquement depuis l'app.",
          bullets: [
            "Statut serveur : décompte up/down sur toute la flotte",
            "Métriques de flotte : disque, mémoire ou CPU par serveur",
            "Docker : décompte de containers en cours",
            "Uptime : affichage uptime par serveur",
            "Commandes rapides : commandes épinglées d'un coup d'œil",
          ],
          imageAlt: "Complications Tap sur la montre montrant les métriques serveur",
        },
        {
          badge: "macOS",
          title: "Contrôle complet depuis votre barre des menus.",
          description:
            "App macOS native pour un accès rapide au serveur. Surveillez votre flotte, exécutez des commandes et gérez les configurations sans ouvrir un navigateur. Connectez-vous avec Apple pour une configuration sans friction.",
          bullets: [
            "Présence dans la barre des menus pour accès instantané",
            "Exécution complète de commandes avec affichage de sortie",
            "Import de configuration serveur depuis JSON",
            "Authentification Apple Sign-In",
          ],
          imageAlt: "App macOS Tap montrant le dashboard serveur",
        },
        {
          badge: "Siri",
          title: '"Dis Siri, Tap redémarre prod-api."',
          description:
            "Intégration complète App Intents. Exécutez n'importe quelle commande par la voix. Vérifiez le statut serveur sans les mains. Siri confirme l'action et rapporte le résultat. Fonctionne depuis la montre, le téléphone ou CarPlay.",
          bullets: [
            "Langage naturel : 'Tap redémarre nginx sur prod'",
            "Vérification de statut serveur : 'Vérifie mes serveurs sur Tap'",
            "Dialogue de confirmation avant exécution",
            "Résultat rapporté par réponse vocale",
          ],
          imageAlt: "Siri exécutant une commande Tap",
        },
      ],
      stats: [
        { value: "< 3s", label: "Temps d'exécution" },
        { value: "Cellulaire", label: "Aucun téléphone" },
        { value: "AES-256", label: "Chiffrement de clés" },
        { value: "MIT", label: "Open source" },
      ],
      threeSecondsHeading: "Trois secondes. C'est tout.",
      threeSecondsSub: "Du poignet au serveur et retour.",
      stepTap: "Tapotez",
      stepConfirm: "Confirmez",
      stepDone: "Terminé",
      archHeading: "Architecture",
      archWatch: "Montre",
      archRelay: "Relais",
      archServers: "Vos serveurs",
      archCompanion: "Companion",
      archMac: "macOS",
      securityHeading: "Modèle de sécurité",
      securityCards: [
        {
          title: "Clés au repos",
          body: "Clés SSH chiffrées avec AES-256-GCM. Phrase maîtresse dérivée via Argon2id. Les clés n'existent déchiffrées qu'en mémoire pendant que le relais tourne.",
        },
        {
          title: "Auth par token",
          body: "Tokens Bearer par appareil, hashés avec Argon2. TOTP 2FA optionnel pour les opérations destructrices. Les tokens sont révocables instantanément.",
        },
        {
          title: "TLS partout",
          body: "Renouvellement automatique Let's Encrypt intégré. Tout le trafic chiffré en transit. Option de certificate pinning pour les relais auto-hébergés.",
        },
        {
          title: "Sécurité de la montre",
          body: "Token stocké dans le Keychain de la Watch chiffré par matériel. La détection de poignet verrouille automatiquement. Pas de données sensibles cachées sur l'appareil.",
        },
      ],
      templatesHeading: "27 templates intégrés",
      templatesSub: "Commandes courantes préconfigurées. Choisissez un template, remplissez les trous, terminé.",
      templateCategories: {
        system: "Système",
        docker: "Docker",
        systemd: "Systemd",
        deploy: "Déploiement",
        nginx: "Nginx",
        network: "Réseau",
      },
      useCasesHeading: "Conçu pour les moments entre deux",
      useCases: [
        "Redémarrez un service planté depuis le parc à chiens",
        "Lancez un health check pendant une réunion",
        "Déployez depuis la salle de sport",
        "Vérifiez l'espace disque depuis le lit",
        "Vérifiez le statut serveur depuis la voiture (Siri)",
        "Mettez des commandes en file avant le décollage, exécutez à l'atterrissage",
      ],
      techHeading: "Stack technique",
      techStack: {
        watch: { label: "Montre", value: "Swift + SwiftUI + WidgetKit + AppIntents" },
        macos: { label: "macOS", value: "Swift + SwiftUI + Menu Bar" },
        companion: { label: "Companion", value: "React Native + TypeScript + Base RN" },
        relay: { label: "Relais", value: "Rust + axum + russh + SQLite" },
        encryption: { label: "Chiffrement", value: "AES-256-GCM + Argon2id" },
        tls: { label: "TLS", value: "rustls + Let's Encrypt" },
        notifications: { label: "Notifications", value: "APNs + bouton par serveur" },
      },
      quickSetup: "Guide de démarrage rapide",
      relayConfig: "Configuration du relais",
      ctaHeading: "Vos serveurs vous attendent.",
      ctaSub: "Gratuit à vie. Open source. Aucun téléphone requis.",
      ctaGithub: "Voir sur GitHub",
    },

    base: {
      tagline: "Primitives. Tokens. Terminé.",
      description:
        "70 primitives, 8 catégories de tokens de design, mode sombre et zéro opinion sur votre stack. Composants React propres et composables qui fonctionnent partout — y compris le lanceur.",
      catalogTagline: "Boîte à outils de design universelle — monochrome, agnostique de plateforme.",
      catalogDescription:
        "70 primitives, 8 catégories de tokens de design, mode sombre et zéro opinion sur votre stack. Composants React propres et composables qui fonctionnent partout — y compris le lanceur.",
      requirements: "Gratuit et open source  ·  React  ·  TypeScript",
      featuresHeading: "Les primitives. Les tokens. Le bouton.",
      ctaLabel: "Voir le code source",
      features: [
        {
          title: "70 primitives prêtes pour la production",
          body: "Formulaires, layout, données, retours — chaque primitive dont vous avez besoin, aucune dont vous n'avez pas besoin. Inputs, tables, calendriers, sparklines, vues arborescentes, sélecteurs de couleur, dialogues et plus.",
        },
        {
          title: "Un système de tokens, toutes les plateformes",
          body: "Couleur, typographie, espacement, radius, élévation, animation et glassmorphism — tout défini comme tokens TypeScript qui exportent vers variables CSS ou styles React Native.",
        },
        {
          title: "Clair et sombre dès le départ",
          body: "Chaque composant respecte le mode de couleur automatiquement — détection de préférence système, bascule manuelle avec localStorage et glassmorphism qui s'adapte dans les deux modes.",
        },
      ],
      showcase: [
        {
          badge: "70 primitives",
          title: "Chaque composant dont vous avez besoin, aucun dont vous n'avez pas besoin",
          description:
            "Des boutons et inputs aux vues arborescentes, sélecteurs de couleur et sparklines — 70 primitives prêtes pour la production construites avec TypeScript et zéro dépendance externe au-delà de React.",
          bullets: [
            "Formulaires : input, textarea, select, checkbox, radio, pin-input, number-input, color-picker",
            "Layout : grid, stack, container, center, spacer, separator",
            "Données : table, calendar, timeline, carousel, sparkline, tree-view",
            "Retours : toast, alert, dialog, sheet, popover, skeleton, spinner, progress",
          ],
          imageAlt: "Bibliothèque de composants primitives Base",
        },
        {
          badge: "Tokens de design",
          title: "Un système de tokens, toutes les plateformes",
          description:
            "Couleur, typographie, espacement, radius, élévation, animation et glassmorphism — tout défini comme tokens TypeScript qui exportent vers variables CSS ou styles React Native.",
          bullets: [
            "Palette de couleur monochrome avec alias sémantiques",
            "Tokens de glassmorphism pour effets de verre dépoli",
            "Échelle typographique avec dimensionnement fluide responsive",
            "Export vers propriétés personnalisées CSS ou React Native StyleSheet",
          ],
          imageAlt: "Tokens de design Base",
        },
        {
          badge: "Mode sombre",
          title: "Clair et sombre, intégrés dès le premier jour",
          description:
            "Chaque composant respecte le mode de couleur dès le départ. Pas de configuration supplémentaire, pas de theme wrappers à oublier — fonctionne juste avec les préférences système ou la bascule manuelle.",
          bullets: [
            "Détection automatique de préférence système",
            "Bascule manuelle avec persistance localStorage",
            "Les 70 primitives testées dans les deux modes",
            "Effets de glassmorphism qui s'adaptent au mode de couleur",
          ],
          imageAlt: "Support du mode sombre Base",
        },
      ],
    },
  },

  legal: {
    privacyTitle: "Politique de confidentialité",
    termsTitle: "Conditions d'utilisation",
    eulaTitle: "Contrat de licence utilisateur final",
    tapTagline: "Tap — Relais de commandes SSH",
    effectiveDate: "Date d'entrée en vigueur : 14 avril 2026",
    navPrivacy: "Politique de confidentialité",
    navTerms: "Conditions d'utilisation",
    navEula: "CLUF",

    privacy: {
      intro:
        'Matt\'s Software (« nous », « notre ») exploite Tap, une application de relais de commandes SSH pour Apple Watch, iPhone et Mac. Cette Politique de confidentialité explique quelles informations nous collectons, comment nous les utilisons et vos droits concernant vos données. Matt\'s Software est basé aux États-Unis.',
      collectHeading: "Informations que nous collectons",
      accountHeading: "Informations de compte",
      accountBody:
        "Lorsque vous vous connectez avec Apple Sign-In, nous recevons votre adresse e-mail Apple ID (ou l'adresse de relais privée qu'Apple fournit en votre nom). C'est la seule information personnellement identifiable que nous collectons et elle est utilisée uniquement pour vous authentifier avec votre serveur relais.",
      relayHeading: "Données du relais auto-hébergé",
      relayBody:
        "Tap stocke les métadonnées de connexion, les clés SSH chiffrées, l'historique des commandes et les résultats d'exécution sur le serveur relais que vous hébergez et exploitez vous-même. Nous n'avons pas accès à ces données. Comme vous contrôlez le relais, vous contrôlez vos données.",
      useHeading: "Comment nous utilisons les informations",
      useBody:
        "Votre adresse e-mail Apple ID est utilisée exclusivement pour authentifier votre compte. Nous ne l'utilisons pas pour le marketing, des newsletters ou tout autre objectif. Nous ne la combinons pas avec des données provenant d'autres sources.",
      storageHeading: "Stockage et sécurité des données",
      storageBody1:
        "Les clés SSH stockées sur votre relais sont chiffrées au repos en utilisant AES-256-GCM. Toutes les données du relais — métadonnées de connexion, journaux de commandes et clés — résident entièrement sur votre propre infrastructure. Matt's Software n'exploite pas de serveurs centraux qui stockent vos données.",
      storageBody2:
        "Comme le relais est auto-hébergé, la sécurité de vos données dépend finalement de la façon dont vous configurez et maintenez votre serveur. Nous recommandons de garder votre logiciel relais à jour et de suivre les pratiques standard de durcissement de serveur.",
      thirdPartyHeading: "Services tiers",
      thirdPartyBody:
        "Tap utilise Apple Sign-In pour l'authentification. La politique de confidentialité d'Apple régit les données qu'Apple collecte pendant le processus de connexion. Au-delà d'Apple Sign-In, Tap ne s'intègre à aucun service d'analytique, de publicité ou de suivi tiers.",
      notDoHeading: "Ce que nous ne faisons pas",
      notDoList: [
        "Nous n'exécutons aucun analytique ni suivi d'aucune sorte",
        "Nous ne partageons pas de données avec des tiers",
        "Nous ne diffusons pas de publicités",
        "Nous ne collectons pas de télémétrie d'utilisation",
        "Nous n'avons pas accès à votre serveur relais ni à ses données",
        "Nous ne vendons ni ne louons vos informations personnelles",
      ],
      retentionHeading: "Conservation et suppression des données",
      retentionBody:
        "Vous pouvez supprimer votre compte et toutes les données associées depuis l'app Tap à tout moment. Comme les données sont stockées sur votre relais, vous avez aussi un accès direct pour les supprimer de votre serveur quand vous le choisissez.",
      childrenHeading: "Vie privée des enfants",
      childrenBody:
        "Tap n'est pas destiné aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles d'enfants de moins de 13 ans. Si vous pensez qu'un enfant nous a fourni des informations personnelles, contactez-nous et nous prendrons des mesures pour les supprimer.",
      changesHeading: "Modifications de cette politique",
      changesBody:
        "Nous pouvons mettre à jour cette Politique de confidentialité de temps en temps. Quand nous le faisons, nous publierons la politique révisée sur cette page avec une nouvelle date d'entrée en vigueur. Votre utilisation continue de Tap après publication des modifications constitue acceptation de la politique mise à jour.",
      contactHeading: "Contactez-nous",
      contactBody:
        "Si vous avez des questions ou inquiétudes concernant cette Politique de confidentialité, contactez-nous à",
    },

    terms: {
      acceptHeading: "Acceptation des conditions",
      acceptBody:
        'En téléchargeant, installant ou utilisant Tap (« l\'App »), vous acceptez d\'être lié par ces Conditions d\'utilisation (« Conditions »). Si vous n\'acceptez pas ces Conditions, n\'utilisez pas l\'App. Ces Conditions constituent un accord légal entre vous et Matt\'s Software (« nous », « notre »), basé aux États-Unis.',
      descriptionHeading: "Description du service",
      descriptionBody:
        "Tap est une application de relais de commandes SSH pour Apple Watch, iPhone et Mac. Elle vous permet d'exécuter des commandes sur des serveurs distants via un serveur relais que vous hébergez et exploitez vous-même. Matt's Software fournit l'application cliente et le logiciel relais. Nous n'exploitons, ne gérons ni n'avons accès à votre serveur relais ou aux serveurs auxquels vous vous connectez.",
      accountsHeading: "Comptes utilisateurs",
      accountsBody:
        "Tap utilise Apple Sign-In pour l'authentification. Chaque personne peut maintenir un seul compte. Vous êtes responsable du maintien de la sécurité de votre compte et de toute activité qui s'y déroule. Vous ne devez pas partager vos identifiants ni permettre à d'autres d'accéder à votre compte.",
      responsibilitiesHeading: "Responsabilités de l'utilisateur",
      serversHeading: "Vos serveurs",
      serversBody:
        "Vous êtes responsable des serveurs auxquels vous vous connectez via Tap. Cela inclut s'assurer que vous avez l'autorisation appropriée pour accéder à ces serveurs et que votre utilisation respecte toutes les politiques et lois applicables.",
      commandsHeading: "Vos commandes",
      commandsBody:
        "Tap est un outil qui exécute les commandes que vous fournissez. Vous acceptez la pleine responsabilité de chaque commande que vous exécutez via Tap et de ses conséquences. Matt's Software n'est pas responsable du résultat des commandes exécutées via l'App.",
      relayHeading: "Votre relais",
      relayBody:
        "Le serveur relais Tap est auto-hébergé sur votre infrastructure. Vous êtes responsable de la sécurisation de votre relais, de sa mise à jour et de la gestion de l'accès. Matt's Software n'exploite, ne surveille ni ne maintient votre relais.",
      acceptableHeading: "Utilisation acceptable",
      acceptableIntro: "Vous acceptez de ne pas utiliser Tap pour :",
      acceptableList: [
        "Obtenir un accès non autorisé à un système, réseau ou donnée",
        "Violer toute loi locale, étatique, nationale ou internationale applicable",
        "Transmettre des malwares, virus ou autre code nuisible",
        "Interférer avec ou perturber l'intégrité ou la performance d'un système",
        "Harceler, abuser ou nuire à une autre personne ou entité",
        "Vous engager dans toute activité frauduleuse, trompeuse ou mensongère",
      ],
      ipHeading: "Propriété intellectuelle",
      ipBody:
        "L'application Tap, y compris son design, son code et sa documentation, est la propriété de Matt's Software et est protégée par les lois de propriété intellectuelle applicables. Votre utilisation de Tap ne vous accorde aucune propriété sur la propriété intellectuelle de l'App. Vos données, configurations et contenu stockés sur votre serveur relais restent les vôtres.",
      warrantyHeading: "Avis de non-responsabilité",
      warrantyBody:
        'Tap est fourni « tel quel » et « selon disponibilité » sans garantie d\'aucune sorte, expresse ou implicite, y compris mais sans s\'y limiter les garanties de qualité marchande, d\'adéquation à un usage particulier et de non-contrefaçon. Matt\'s Software ne garantit pas que l\'App sera ininterrompue, sans erreur, sécurisée ou disponible à un moment particulier.',
      liabilityHeading: "Limitation de responsabilité",
      liabilityBody:
        "Dans la mesure maximale permise par la loi applicable, Matt's Software ne sera pas responsable de tout dommage indirect, accidentel, spécial, consécutif ou punitif, ni de toute perte de données, profits, revenus ou opportunités commerciales, découlant ou liée à votre utilisation de Tap, indépendamment de la théorie de responsabilité.",
      terminationHeading: "Résiliation",
      terminationBody:
        "Vous pouvez supprimer votre compte et cesser d'utiliser Tap à tout moment. Matt's Software se réserve le droit de suspendre ou résilier votre accès à l'App à tout moment, avec ou sans préavis, pour une conduite qui selon nous viole ces Conditions ou est par ailleurs nuisible à d'autres utilisateurs ou à nous.",
      governingHeading: "Loi applicable",
      governingBody:
        "Ces Conditions seront régies et interprétées conformément aux lois des États-Unis, sans égard aux principes de conflit de lois. Tout litige découlant de ces Conditions ou de votre utilisation de Tap sera résolu devant les tribunaux des États-Unis.",
      changesHeading: "Modifications de ces conditions",
      changesBody:
        "Nous pouvons mettre à jour ces Conditions de temps en temps. Quand nous le faisons, nous publierons les Conditions révisées sur cette page avec une nouvelle date d'entrée en vigueur. Votre utilisation continue de Tap après publication des modifications constitue acceptation des Conditions mises à jour.",
      contactHeading: "Contact",
      contactBody: "Si vous avez des questions concernant ces Conditions, contactez-nous à",
    },

    eula: {
      intro:
        'Ce Contrat de licence utilisateur final (« Contrat ») est un accord légal entre vous et Matt\'s Software (« nous », « notre »), basé aux États-Unis, pour l\'utilisation de Tap (« l\'App »). En installant ou utilisant l\'App, vous acceptez d\'être lié par ce Contrat.',
      licensedHeading: "Application sous licence",
      licensedBody:
        "Tap est une application de relais de commandes SSH pour Apple Watch, iPhone et Mac, développée et publiée par Matt's Software. L'App vous permet d'exécuter des commandes sur des serveurs distants via un serveur relais que vous hébergez vous-même.",
      scopeHeading: "Étendue de la licence",
      scopeBody:
        "Matt's Software vous accorde une licence limitée, non exclusive, non transférable et révocable pour télécharger, installer et utiliser l'App sur des appareils que vous possédez ou contrôlez, conformément à ce Contrat et aux Conditions générales d'Apple Media Services.",
      scopeIntro: "Cette licence ne vous permet pas de :",
      scopeList: [
        "Distribuer, sous-licencier, louer ou prêter l'App à des tiers",
        "Faire de l'ingénierie inverse, décompiler, désassembler ou tenter de dériver le code source de l'App",
        "Modifier, adapter, traduire ou créer des œuvres dérivées basées sur l'App",
        "Supprimer, altérer ou masquer tout avis de droits d'auteur, marque de commerce ou autres avis de propriété dans l'App",
        "Utiliser l'App à toute fin illégale ou interdite par ce Contrat",
      ],
      relayHeading: "Relais auto-hébergé",
      relayBody:
        "Tap se connecte à un serveur relais que vous hébergez et exploitez sur votre propre infrastructure. Matt's Software ne fournit, ne gère ni ne maintient votre serveur relais. Nous ne sommes pas responsables des problèmes découlant de la configuration, du fonctionnement, de la sécurité ou de la disponibilité de votre serveur relais ou de tout serveur distant auquel vous vous connectez via l'App.",
      ownershipHeading: "Propriété",
      ownershipBody:
        "L'App et tous les droits de propriété intellectuelle connexes sont et resteront la propriété de Matt's Software. Ce Contrat ne vous accorde aucun intérêt de propriété dans l'App. Vos données, configurations et contenu stockés sur votre serveur relais restent les vôtres.",
      terminationHeading: "Résiliation",
      terminationBody:
        "Cette licence est en vigueur jusqu'à résiliation. Vos droits en vertu de ce Contrat prendront fin automatiquement sans préavis si vous ne respectez pas l'une de ses conditions. À la résiliation, vous devez cesser d'utiliser l'App et supprimer toutes les copies de vos appareils. Matt's Software peut également résilier cette licence à tout moment pour quelque raison que ce soit.",
      warrantyHeading: "Avis de non-responsabilité",
      warrantyBody:
        'L\'App est fournie « telle quelle » et « selon disponibilité » sans garantie d\'aucune sorte, expresse ou implicite, y compris mais sans s\'y limiter les garanties de qualité marchande, d\'adéquation à un usage particulier et de non-contrefaçon. Matt\'s Software ne garantit pas que l\'App sera ininterrompue, sans erreur ou exempte de composants nuisibles.',
      liabilityHeading: "Limitation de responsabilité",
      liabilityBody:
        "Dans la mesure maximale permise par la loi applicable, Matt's Software ne sera pas responsable de tout dommage indirect, accidentel, spécial, consécutif ou punitif, ni de toute perte de données, profits ou revenus, découlant ou liée à votre utilisation de l'App, indépendamment de la théorie de responsabilité.",
      governingHeading: "Loi applicable",
      governingBody:
        "Ce Contrat sera régi et interprété conformément aux lois des États-Unis, sans égard aux principes de conflit de lois.",
      contactHeading: "Contact",
      contactBody: "Si vous avez des questions concernant ce Contrat, contactez-nous à",
    },
  },

  notFound: {
    altText:
      "Un serpent ruban rouge avec un casque colonial assis sur un rocher en forme de point d'interrogation, entouré de panneaux indicateurs vierges",
    title: "Cette page s'est égarée.",
    sub: "Les panneaux sont vierges. Le serpent ne sait pas non plus. Ramenons-vous vers quelque chose qui existe.",
    backToSuite: "Retour à la collection",
    rummageGithub: "Ou fouinez sur GitHub",
  },
};
