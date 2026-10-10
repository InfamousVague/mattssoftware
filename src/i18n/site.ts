/// Copy for the redesigned chrome and home page, in all nine languages.
///
/// The older `Translation` objects in ./locales keep every app page's
/// copy and the Tap legal text. This file holds what the redesign added
/// (the home page's statement, the featured sentences, the catalogue
/// controls, the theme menu), so the legal text and the app copy did not
/// have to be touched to add it.
///
/// Product names and platform names (Mac, iPhone, Android, Web, Windows,
/// Linux, Apple Watch) are proper nouns and are not translated.

import type { LanguageCode } from "./types";

export interface SiteCopy {
  metaTitle: string;
  metaDescription: string;
  skip: string;
  nav: {
    apps: string;
    allApps: string;
    language: string;
    theme: string;
    themeSystem: string;
    themeLight: string;
    themeDark: string;
    primary: string;
  };
  home: {
    eyebrow: string;
    title: string;
    lede: string;
    ctaFeatured: string;
    ctaCatalogue: string;
    featuredHeading: string;
    featuredSub: string;
    catalogueHeading: string;
    catalogueSub: string;
    searchPlaceholder: string;
    filterAria: string;
    all: string;
    count: string;
    emptyTitle: string;
    emptyBody: string;
    reset: string;
    details: string;
    visit: string;
  };
  status: {
    soon: string;
    development: string;
  };
  /// One honest sentence per featured app.
  featured: {
    attackfm: string;
    fishbones: string;
    prettycardboard: string;
    ghost: string;
    espresso: string;
  };
  appPage: {
    back: string;
    visitSite: string;
    onThisPage: string;
  };
  footer: {
    sub: string;
    copyEmail: string;
    emailCopied: string;
    launcher: string;
    discord: string;
  };
}

const en: SiteCopy = {
  metaTitle: "MattsSoftware: one person's software studio",
  metaDescription:
    "MattsSoftware is one person's software studio. Attack.fm, Libre, PrettyCardboard, Ghost.md, Espresso and a shelf of small Mac utilities.",
  skip: "Skip to content",
  nav: {
    apps: "Apps",
    allApps: "All apps",
    language: "Language",
    theme: "Theme",
    themeSystem: "System",
    themeLight: "Light",
    themeDark: "Dark",
    primary: "Main",
  },
  home: {
    eyebrow: "One person's software studio",
    title: "Software made by one person.",
    lede: "MattsSoftware is Matt's studio. A music player you host yourself, a way to learn from technical books, a card table, a Markdown notebook, and a shelf of small utilities. {count} apps so far.",
    ctaFeatured: "See what is new",
    ctaCatalogue: "Browse all {count}",
    featuredHeading: "Featured",
    featuredSub: "Five to start with.",
    catalogueHeading: "Every app",
    catalogueSub: "The whole catalogue. Filter by where you want to run it.",
    searchPlaceholder: "Search apps",
    filterAria: "Filter by platform",
    all: "All",
    count: "{count} apps",
    emptyTitle: "Nothing matches.",
    emptyBody: "No app fits that search and platform together.",
    reset: "Clear filters",
    details: "Details",
    visit: "Visit {site}",
  },
  status: {
    soon: "{platform} soon",
    development: "{platform} in development",
  },
  featured: {
    attackfm:
      "A music player and server you run yourself: your files stay on your hardware and play on every device you own.",
    fishbones:
      "Turns a technical book into an interactive course, with lessons and exercises you work through in one editor.",
    prettycardboard:
      "A shared online table for paper card games like Magic: The Gathering, where you move the cards by hand and no rules engine gets in the way.",
    ghost:
      "Notes, journals, boards and canvases, kept as plain Markdown files on your own devices.",
    espresso:
      "Keeps your Mac or iPhone awake for as long as you choose, from the menu bar or a single screen.",
  },
  appPage: {
    back: "All apps",
    visitSite: "Visit {site}",
    onThisPage: "Platforms",
  },
  footer: {
    sub: "MattsSoftware is one person's software studio.",
    copyEmail: "Copy email",
    emailCopied: "Email address copied",
    launcher: "Mac launcher",
    discord: "Discord",
  },
};

const es: SiteCopy = {
  metaTitle: "MattsSoftware: el estudio de software de una sola persona",
  metaDescription:
    "MattsSoftware es el estudio de software de una sola persona. Attack.fm, Libre, PrettyCardboard, Ghost.md, Espresso y una estantería de pequeñas utilidades para Mac.",
  skip: "Saltar al contenido",
  nav: {
    apps: "Apps",
    allApps: "Todas las apps",
    language: "Idioma",
    theme: "Tema",
    themeSystem: "Sistema",
    themeLight: "Claro",
    themeDark: "Oscuro",
    primary: "Principal",
  },
  home: {
    eyebrow: "El estudio de software de una sola persona",
    title: "Software hecho por una sola persona.",
    lede: "MattsSoftware es el estudio de Matt. Un reproductor de música que alojas tú, una forma de aprender con libros técnicos, una mesa de cartas, un cuaderno en Markdown y una estantería de pequeñas utilidades. {count} apps por ahora.",
    ctaFeatured: "Ver las novedades",
    ctaCatalogue: "Ver las {count}",
    featuredHeading: "Destacadas",
    featuredSub: "Cinco para empezar.",
    catalogueHeading: "Todas las apps",
    catalogueSub: "El catálogo completo. Filtra por dónde quieres usarla.",
    searchPlaceholder: "Buscar apps",
    filterAria: "Filtrar por plataforma",
    all: "Todas",
    count: "{count} apps",
    emptyTitle: "Sin resultados.",
    emptyBody: "Ninguna app coincide con esa búsqueda y esa plataforma a la vez.",
    reset: "Quitar filtros",
    details: "Detalles",
    visit: "Visitar {site}",
  },
  status: {
    soon: "{platform} pronto",
    development: "{platform} en desarrollo",
  },
  featured: {
    attackfm:
      "Un reproductor de música y un servidor que gestionas tú: tus archivos se quedan en tu equipo y suenan en todos tus dispositivos.",
    fishbones:
      "Convierte un libro técnico en un curso interactivo, con lecciones y ejercicios que resuelves en un solo editor.",
    prettycardboard:
      "Una mesa compartida en línea para juegos de cartas de papel como Magic: The Gathering, donde mueves las cartas a mano y ningún motor de reglas se interpone.",
    ghost:
      "Notas, diarios, tableros y lienzos, guardados como archivos Markdown en tus propios dispositivos.",
    espresso:
      "Mantiene despierto tu Mac o tu iPhone el tiempo que elijas, desde la barra de menús o una sola pantalla.",
  },
  appPage: {
    back: "Todas las apps",
    visitSite: "Visitar {site}",
    onThisPage: "Plataformas",
  },
  footer: {
    sub: "MattsSoftware es el estudio de software de una sola persona.",
    copyEmail: "Copiar correo",
    emailCopied: "Dirección de correo copiada",
    launcher: "Lanzador para Mac",
    discord: "Discord",
  },
};

const fr: SiteCopy = {
  metaTitle: "MattsSoftware : le studio de logiciels d'une seule personne",
  metaDescription:
    "MattsSoftware est le studio de logiciels d'une seule personne. Attack.fm, Libre, PrettyCardboard, Ghost.md, Espresso et une étagère de petits utilitaires pour Mac.",
  skip: "Aller au contenu",
  nav: {
    apps: "Apps",
    allApps: "Toutes les apps",
    language: "Langue",
    theme: "Thème",
    themeSystem: "Système",
    themeLight: "Clair",
    themeDark: "Sombre",
    primary: "Principal",
  },
  home: {
    eyebrow: "Le studio de logiciels d'une seule personne",
    title: "Des logiciels faits par une seule personne.",
    lede: "MattsSoftware est le studio de Matt. Un lecteur de musique que vous hébergez vous-même, une façon d'apprendre avec des livres techniques, une table de cartes, un carnet en Markdown et une étagère de petits utilitaires. {count} apps pour l'instant.",
    ctaFeatured: "Voir les nouveautés",
    ctaCatalogue: "Parcourir les {count}",
    featuredHeading: "À la une",
    featuredSub: "Cinq pour commencer.",
    catalogueHeading: "Toutes les apps",
    catalogueSub: "Le catalogue complet. Filtrez selon l'appareil que vous utilisez.",
    searchPlaceholder: "Rechercher des apps",
    filterAria: "Filtrer par plateforme",
    all: "Toutes",
    count: "{count} apps",
    emptyTitle: "Aucun résultat.",
    emptyBody: "Aucune app ne correspond à la fois à cette recherche et à cette plateforme.",
    reset: "Effacer les filtres",
    details: "Détails",
    visit: "Visiter {site}",
  },
  status: {
    soon: "{platform} bientôt",
    development: "{platform} en développement",
  },
  featured: {
    attackfm:
      "Un lecteur de musique et un serveur que vous gérez vous-même : vos fichiers restent sur votre matériel et se lisent sur tous vos appareils.",
    fishbones:
      "Transforme un livre technique en cours interactif, avec des leçons et des exercices à faire dans un seul éditeur.",
    prettycardboard:
      "Une table en ligne partagée pour les jeux de cartes papier comme Magic: The Gathering, où vous déplacez les cartes à la main, sans moteur de règles sur le chemin.",
    ghost:
      "Notes, journaux, tableaux et canevas, conservés en fichiers Markdown sur vos propres appareils.",
    espresso:
      "Garde votre Mac ou votre iPhone éveillé aussi longtemps que vous le voulez, depuis la barre des menus ou un seul écran.",
  },
  appPage: {
    back: "Toutes les apps",
    visitSite: "Visiter {site}",
    onThisPage: "Plateformes",
  },
  footer: {
    sub: "MattsSoftware est le studio de logiciels d'une seule personne.",
    copyEmail: "Copier l'e-mail",
    emailCopied: "Adresse e-mail copiée",
    launcher: "Lanceur pour Mac",
    discord: "Discord",
  },
};

const de: SiteCopy = {
  metaTitle: "MattsSoftware: das Softwarestudio einer einzelnen Person",
  metaDescription:
    "MattsSoftware ist das Softwarestudio einer einzelnen Person. Attack.fm, Libre, PrettyCardboard, Ghost.md, Espresso und ein Regal kleiner Mac-Werkzeuge.",
  skip: "Zum Inhalt springen",
  nav: {
    apps: "Apps",
    allApps: "Alle Apps",
    language: "Sprache",
    theme: "Erscheinungsbild",
    themeSystem: "System",
    themeLight: "Hell",
    themeDark: "Dunkel",
    primary: "Hauptnavigation",
  },
  home: {
    eyebrow: "Das Softwarestudio einer einzelnen Person",
    title: "Software von einer einzelnen Person.",
    lede: "MattsSoftware ist Matts Studio. Ein Musikplayer, den du selbst hostest, ein Weg, mit Fachbüchern zu lernen, ein Kartentisch, ein Markdown-Notizbuch und ein Regal kleiner Werkzeuge. Bisher {count} Apps.",
    ctaFeatured: "Neues ansehen",
    ctaCatalogue: "Alle {count} ansehen",
    featuredHeading: "Im Fokus",
    featuredSub: "Fünf für den Anfang.",
    catalogueHeading: "Alle Apps",
    catalogueSub: "Der ganze Katalog. Filtere danach, wo du sie nutzen willst.",
    searchPlaceholder: "Apps suchen",
    filterAria: "Nach Plattform filtern",
    all: "Alle",
    count: "{count} Apps",
    emptyTitle: "Keine Treffer.",
    emptyBody: "Keine App passt zugleich zu dieser Suche und dieser Plattform.",
    reset: "Filter zurücksetzen",
    details: "Details",
    visit: "{site} besuchen",
  },
  status: {
    soon: "{platform} bald",
    development: "{platform} in Entwicklung",
  },
  featured: {
    attackfm:
      "Ein Musikplayer und ein Server, die du selbst betreibst: Deine Dateien bleiben auf deiner Hardware und spielen auf jedem deiner Geräte.",
    fishbones:
      "Macht aus einem Fachbuch einen interaktiven Kurs, mit Lektionen und Übungen in einem einzigen Editor.",
    prettycardboard:
      "Ein gemeinsamer Online-Tisch für Papierkartenspiele wie Magic: The Gathering, an dem du die Karten von Hand bewegst und keine Regel-Engine im Weg steht.",
    ghost:
      "Notizen, Journale, Boards und Canvases, als einfache Markdown-Dateien auf deinen eigenen Geräten.",
    espresso:
      "Hält deinen Mac oder dein iPhone so lange wach, wie du willst, aus der Menüleiste oder von einem einzigen Bildschirm.",
  },
  appPage: {
    back: "Alle Apps",
    visitSite: "{site} besuchen",
    onThisPage: "Plattformen",
  },
  footer: {
    sub: "MattsSoftware ist das Softwarestudio einer einzelnen Person.",
    copyEmail: "E-Mail kopieren",
    emailCopied: "E-Mail-Adresse kopiert",
    launcher: "Launcher für den Mac",
    discord: "Discord",
  },
};

const zh: SiteCopy = {
  metaTitle: "MattsSoftware：一个人的软件工作室",
  metaDescription:
    "MattsSoftware 是一个人的软件工作室。Attack.fm、Libre、PrettyCardboard、Ghost.md、Espresso，以及一组 Mac 小工具。",
  skip: "跳到正文",
  nav: {
    apps: "应用",
    allApps: "全部应用",
    language: "语言",
    theme: "外观",
    themeSystem: "跟随系统",
    themeLight: "浅色",
    themeDark: "深色",
    primary: "主导航",
  },
  home: {
    eyebrow: "一个人的软件工作室",
    title: "一个人做的软件。",
    lede: "MattsSoftware 是 Matt 的工作室。一个自己托管的音乐播放器，一种用技术书学习的方式，一张卡牌桌，一本 Markdown 笔记本，还有一组小工具。目前共 {count} 个应用。",
    ctaFeatured: "看看新作",
    ctaCatalogue: "浏览全部 {count} 个",
    featuredHeading: "精选",
    featuredSub: "先从这五个看起。",
    catalogueHeading: "全部应用",
    catalogueSub: "完整目录。按你想运行的平台筛选。",
    searchPlaceholder: "搜索应用",
    filterAria: "按平台筛选",
    all: "全部",
    count: "{count} 个应用",
    emptyTitle: "没有匹配的结果。",
    emptyBody: "没有应用同时符合这个搜索和这个平台。",
    reset: "清除筛选",
    details: "详情",
    visit: "访问 {site}",
  },
  status: {
    soon: "{platform} 即将推出",
    development: "{platform} 开发中",
  },
  featured: {
    attackfm:
      "一个由你自己运行的音乐播放器和服务器：文件留在你自己的硬件上，在你的每台设备上播放。",
    fishbones: "把一本技术书变成互动课程，课程和练习都在同一个编辑器里完成。",
    prettycardboard:
      "一张在线共享的牌桌，适合 Magic: The Gathering 这类纸牌游戏：你亲手移动卡牌，没有规则引擎挡路。",
    ghost: "笔记、日记、看板和画布，以纯 Markdown 文件保存在你自己的设备上。",
    espresso: "让你的 Mac 或 iPhone 保持唤醒，时长由你决定，在菜单栏或一个界面里就能操作。",
  },
  appPage: {
    back: "全部应用",
    visitSite: "访问 {site}",
    onThisPage: "平台",
  },
  footer: {
    sub: "MattsSoftware 是一个人的软件工作室。",
    copyEmail: "复制邮箱",
    emailCopied: "邮箱地址已复制",
    launcher: "Mac 启动器",
    discord: "Discord",
  },
};

const ja: SiteCopy = {
  metaTitle: "MattsSoftware：ひとりのソフトウェアスタジオ",
  metaDescription:
    "MattsSoftware は、ひとりで運営するソフトウェアスタジオです。Attack.fm、Libre、PrettyCardboard、Ghost.md、Espresso、そして小さな Mac ユーティリティの数々。",
  skip: "本文へ移動",
  nav: {
    apps: "アプリ",
    allApps: "すべてのアプリ",
    language: "言語",
    theme: "外観",
    themeSystem: "システム",
    themeLight: "ライト",
    themeDark: "ダーク",
    primary: "メイン",
  },
  home: {
    eyebrow: "ひとりのソフトウェアスタジオ",
    title: "ひとりで作るソフトウェア。",
    lede: "MattsSoftware は Matt のスタジオです。自分でホストする音楽プレーヤー、技術書で学ぶための道具、カードテーブル、Markdown のノート、そして小さなユーティリティの数々。現在 {count} 本のアプリがあります。",
    ctaFeatured: "新作を見る",
    ctaCatalogue: "全 {count} 本を見る",
    featuredHeading: "注目",
    featuredSub: "まずはこの 5 本から。",
    catalogueHeading: "すべてのアプリ",
    catalogueSub: "カタログの全体です。使いたい環境で絞り込めます。",
    searchPlaceholder: "アプリを検索",
    filterAria: "プラットフォームで絞り込む",
    all: "すべて",
    count: "{count} 本のアプリ",
    emptyTitle: "一致するものがありません。",
    emptyBody: "その検索とプラットフォームの両方に合うアプリはありません。",
    reset: "絞り込みを解除",
    details: "詳細",
    visit: "{site} を開く",
  },
  status: {
    soon: "{platform} は近日公開",
    development: "{platform} は開発中",
  },
  featured: {
    attackfm:
      "自分で動かす音楽プレーヤーとサーバー。ファイルは自分のハードウェアに置いたまま、手持ちのすべてのデバイスで再生できます。",
    fishbones:
      "技術書をインタラクティブなコースに変えます。レッスンと演習はひとつのエディタで進められます。",
    prettycardboard:
      "Magic: The Gathering のような紙のカードゲームのための、オンラインの共有テーブル。カードは自分の手で動かし、ルールエンジンは邪魔をしません。",
    ghost:
      "ノート、日記、ボード、キャンバスを、プレーンな Markdown ファイルとして自分のデバイスに保存します。",
    espresso:
      "Mac や iPhone を、決めた時間だけスリープさせません。メニューバーまたはひとつの画面から操作できます。",
  },
  appPage: {
    back: "すべてのアプリ",
    visitSite: "{site} を開く",
    onThisPage: "プラットフォーム",
  },
  footer: {
    sub: "MattsSoftware は、ひとりのソフトウェアスタジオです。",
    copyEmail: "メールアドレスをコピー",
    emailCopied: "メールアドレスをコピーしました",
    launcher: "Mac 用ランチャー",
    discord: "Discord",
  },
};

const pt: SiteCopy = {
  metaTitle: "MattsSoftware: o estúdio de software de uma pessoa só",
  metaDescription:
    "MattsSoftware é o estúdio de software de uma pessoa só. Attack.fm, Libre, PrettyCardboard, Ghost.md, Espresso e uma prateleira de pequenos utilitários para Mac.",
  skip: "Ir para o conteúdo",
  nav: {
    apps: "Apps",
    allApps: "Todos os apps",
    language: "Idioma",
    theme: "Tema",
    themeSystem: "Sistema",
    themeLight: "Claro",
    themeDark: "Escuro",
    primary: "Principal",
  },
  home: {
    eyebrow: "O estúdio de software de uma pessoa só",
    title: "Software feito por uma pessoa só.",
    lede: "MattsSoftware é o estúdio do Matt. Um player de música que você mesmo hospeda, um jeito de aprender com livros técnicos, uma mesa de cartas, um caderno em Markdown e uma prateleira de pequenos utilitários. {count} apps até agora.",
    ctaFeatured: "Ver as novidades",
    ctaCatalogue: "Ver todos os {count}",
    featuredHeading: "Destaques",
    featuredSub: "Cinco para começar.",
    catalogueHeading: "Todos os apps",
    catalogueSub: "O catálogo inteiro. Filtre por onde você quer usar.",
    searchPlaceholder: "Buscar apps",
    filterAria: "Filtrar por plataforma",
    all: "Todos",
    count: "{count} apps",
    emptyTitle: "Nada encontrado.",
    emptyBody: "Nenhum app combina com essa busca e essa plataforma ao mesmo tempo.",
    reset: "Limpar filtros",
    details: "Detalhes",
    visit: "Visitar {site}",
  },
  status: {
    soon: "{platform} em breve",
    development: "{platform} em desenvolvimento",
  },
  featured: {
    attackfm:
      "Um player de música e um servidor que você mesmo roda: seus arquivos ficam no seu hardware e tocam em todos os seus aparelhos.",
    fishbones:
      "Transforma um livro técnico em um curso interativo, com lições e exercícios feitos em um único editor.",
    prettycardboard:
      "Uma mesa online compartilhada para jogos de cartas de papel como Magic: The Gathering, em que você move as cartas à mão e nenhum motor de regras atrapalha.",
    ghost:
      "Notas, diários, quadros e canvas, guardados como arquivos Markdown nos seus próprios aparelhos.",
    espresso:
      "Mantém seu Mac ou iPhone acordado pelo tempo que você escolher, da barra de menus ou de uma única tela.",
  },
  appPage: {
    back: "Todos os apps",
    visitSite: "Visitar {site}",
    onThisPage: "Plataformas",
  },
  footer: {
    sub: "MattsSoftware é o estúdio de software de uma pessoa só.",
    copyEmail: "Copiar e-mail",
    emailCopied: "Endereço de e-mail copiado",
    launcher: "Launcher para Mac",
    discord: "Discord",
  },
};

const ko: SiteCopy = {
  metaTitle: "MattsSoftware: 한 사람의 소프트웨어 스튜디오",
  metaDescription:
    "MattsSoftware는 한 사람이 운영하는 소프트웨어 스튜디오입니다. Attack.fm, Libre, PrettyCardboard, Ghost.md, Espresso, 그리고 작은 Mac 유틸리티들.",
  skip: "본문으로 건너뛰기",
  nav: {
    apps: "앱",
    allApps: "모든 앱",
    language: "언어",
    theme: "화면 모드",
    themeSystem: "시스템",
    themeLight: "라이트",
    themeDark: "다크",
    primary: "주 메뉴",
  },
  home: {
    eyebrow: "한 사람의 소프트웨어 스튜디오",
    title: "한 사람이 만드는 소프트웨어.",
    lede: "MattsSoftware는 Matt의 스튜디오입니다. 직접 호스팅하는 음악 플레이어, 기술 서적으로 배우는 방법, 카드 테이블, Markdown 노트, 그리고 작은 유틸리티들. 지금까지 앱 {count}개.",
    ctaFeatured: "새 앱 보기",
    ctaCatalogue: "전체 {count}개 보기",
    featuredHeading: "추천",
    featuredSub: "먼저 이 다섯 개부터.",
    catalogueHeading: "모든 앱",
    catalogueSub: "전체 목록입니다. 사용할 플랫폼으로 걸러 보세요.",
    searchPlaceholder: "앱 검색",
    filterAria: "플랫폼으로 필터",
    all: "전체",
    count: "앱 {count}개",
    emptyTitle: "일치하는 앱이 없습니다.",
    emptyBody: "이 검색어와 플랫폼에 모두 맞는 앱이 없습니다.",
    reset: "필터 지우기",
    details: "자세히",
    visit: "{site} 방문",
  },
  status: {
    soon: "{platform} 출시 예정",
    development: "{platform} 개발 중",
  },
  featured: {
    attackfm:
      "직접 운영하는 음악 플레이어와 서버. 파일은 내 하드웨어에 그대로 두고, 가진 모든 기기에서 재생합니다.",
    fishbones:
      "기술 서적을 인터랙티브 강좌로 바꿉니다. 수업과 연습 문제를 하나의 에디터에서 진행합니다.",
    prettycardboard:
      "Magic: The Gathering 같은 종이 카드 게임을 위한 온라인 공유 테이블. 카드는 손으로 직접 옮기고, 규칙 엔진이 끼어들지 않습니다.",
    ghost: "노트, 일기, 보드, 캔버스를 일반 Markdown 파일로 내 기기에 보관합니다.",
    espresso:
      "Mac이나 iPhone을 원하는 시간만큼 깨어 있게 합니다. 메뉴 막대나 화면 하나에서 조작합니다.",
  },
  appPage: {
    back: "모든 앱",
    visitSite: "{site} 방문",
    onThisPage: "플랫폼",
  },
  footer: {
    sub: "MattsSoftware는 한 사람의 소프트웨어 스튜디오입니다.",
    copyEmail: "이메일 복사",
    emailCopied: "이메일 주소를 복사했습니다",
    launcher: "Mac용 런처",
    discord: "Discord",
  },
};

const pl: SiteCopy = {
  metaTitle: "MattsSoftware: jednoosobowe studio oprogramowania",
  metaDescription:
    "MattsSoftware to jednoosobowe studio oprogramowania. Attack.fm, Libre, PrettyCardboard, Ghost.md, Espresso i półka małych narzędzi dla Maca.",
  skip: "Przejdź do treści",
  nav: {
    apps: "Aplikacje",
    allApps: "Wszystkie aplikacje",
    language: "Język",
    theme: "Motyw",
    themeSystem: "Systemowy",
    themeLight: "Jasny",
    themeDark: "Ciemny",
    primary: "Główna",
  },
  home: {
    eyebrow: "Jednoosobowe studio oprogramowania",
    title: "Oprogramowanie tworzone przez jedną osobę.",
    lede: "MattsSoftware to studio Matta. Odtwarzacz muzyki, który hostujesz samodzielnie, sposób na naukę z książek technicznych, stół do kart, notatnik w Markdownie i półka małych narzędzi. Jak dotąd {count} aplikacji.",
    ctaFeatured: "Zobacz nowości",
    ctaCatalogue: "Przeglądaj wszystkie ({count})",
    featuredHeading: "Wyróżnione",
    featuredSub: "Pięć na początek.",
    catalogueHeading: "Wszystkie aplikacje",
    catalogueSub: "Cały katalog. Filtruj według tego, gdzie chcesz ich używać.",
    searchPlaceholder: "Szukaj aplikacji",
    filterAria: "Filtruj według platformy",
    all: "Wszystkie",
    count: "Aplikacje: {count}",
    emptyTitle: "Brak wyników.",
    emptyBody: "Żadna aplikacja nie pasuje jednocześnie do tego wyszukiwania i tej platformy.",
    reset: "Wyczyść filtry",
    details: "Szczegóły",
    visit: "Odwiedź {site}",
  },
  status: {
    soon: "{platform} wkrótce",
    development: "{platform} w przygotowaniu",
  },
  featured: {
    attackfm:
      "Odtwarzacz muzyki i serwer, które prowadzisz samodzielnie: pliki zostają na twoim sprzęcie i grają na każdym twoim urządzeniu.",
    fishbones:
      "Zamienia książkę techniczną w interaktywny kurs, z lekcjami i ćwiczeniami w jednym edytorze.",
    prettycardboard:
      "Wspólny stół online do papierowych gier karcianych, takich jak Magic: The Gathering, przy którym karty przesuwasz ręcznie, a żaden silnik zasad nie wchodzi w drogę.",
    ghost:
      "Notatki, dzienniki, tablice i płótna, przechowywane jako zwykłe pliki Markdown na twoich urządzeniach.",
    espresso:
      "Nie pozwala zasnąć twojemu Macowi ani iPhone'owi tak długo, jak chcesz, z paska menu lub jednego ekranu.",
  },
  appPage: {
    back: "Wszystkie aplikacje",
    visitSite: "Odwiedź {site}",
    onThisPage: "Platformy",
  },
  footer: {
    sub: "MattsSoftware to jednoosobowe studio oprogramowania.",
    copyEmail: "Kopiuj e-mail",
    emailCopied: "Skopiowano adres e-mail",
    launcher: "Launcher dla Maca",
    discord: "Discord",
  },
};

export const SITE_COPY: Record<LanguageCode, SiteCopy> = {
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
