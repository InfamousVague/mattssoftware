/// Spanish translations. Mirrors en.ts shape — TS enforces it.

import type { Translation } from "../types";

export const es: Translation = {
  meta: {
    siteTitle: "Matt's Software — Aplicaciones diminutas que valen la pena",
    siteDescription:
      "Una pequeña tienda de aplicaciones diminutas, gratuitas y de código abierto. Un solo lanzador las instala todas y las mantiene actualizadas.",
    htmlLang: "es",
    direction: "ltr",
  },

  langSelector: {
    label: "Idioma",
    selectLanguage: "Seleccionar idioma",
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
    apps: "Aplicaciones",
    appsAllLabel: "Todas las aplicaciones",
    launcher: "Lanzador",
    githubAria: "GitHub",
    suiteFooter: "{count} aplicaciones, un solo lanzador.",
    getLauncher: "Obtener el lanzador",
    tipLabel: "Propina",
    tipTitle: "Enviar una propina",
    tipCopy: "Copiar",
    tipCopied: "Copiado",
  },

  footer: {
    mascotAlt:
      "Un gato blanco acurrucado alrededor de un plano y una taza de café — de alguna manera dormido a pesar de la música",
    line: "Hecho con espresso y música a todo volumen.",
    sub: "Matt's Software es un taller de una sola persona. Todas las aplicaciones están firmadas, notariadas y son gratuitas.",
    github: "GitHub",
    allApps: "Todas las apps",
    contact: "Contacto",
  },

  channels: {
    appstore: "App Store",
    library: "Biblioteca",
    source: "Código fuente",
    download: "Descargar",
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
    all: "Todas",
    developerTools: "Herramientas de desarrollo",
    privacySecurity: "Privacidad y seguridad",
    utilities: "Utilidades",
    learning: "Aprendizaje",
    design: "Diseño",
  },

  home: {
    eyebrow: "MATT'S SOFTWARE",
    title: "Aplicaciones diminutas que valen la pena.",
    sub: "Una pequeña tienda curada de más de {count} aplicaciones diminutas y gratuitas. Un lanzador las instala todas y las mantiene actualizadas — o consigue cualquiera por separado.",
    downloadLauncher: "Descargar el lanzador",
    browseSuite: "Explorar la colección",
    metaLine: "Gratis · Código abierto · macOS hoy, más pronto",
    brandName: "Matt's Software",
    brandSub: "Cada aplicación que he creado, en un solo lugar",
    searchPlaceholder: "Buscar aplicaciones…",
    searchAria: "Buscar aplicaciones",
    categoriesAria: "Categorías",
    noResults: "Ninguna aplicación coincide con «{query}».",
    view: "Ver",
  },

  appPage: {
    downloadBtn: "Descargar",
    viewGithub: "Ver en GitHub",
    openInBrowser: "Abrir en el navegador",
    featuresHeadingDefault: "Lo que hace",
    suiteEyebrow: "La colección",
    suiteHeading: "Más del taller",
    suiteSub:
      "Cada una resuelve exactamente una cosa, y la resuelve bien — instala solo lo que necesitas.",
    bottomAddToMenuBar: "Añade {name} a tu barra de menús.",
    bottomGet: "Obtén {name}.",
  },

  featureShowcase: {
    screenshotComingSoon: "Captura de pantalla pronto",
  },

  apps: {
    espresso: {
      tagline: "Niégate a dormir.",
      description:
        "Utilidad para mantener el sistema despierto desde la bandeja: sesiones cronometradas o modo indefinido, movimiento subpíxel del ratón para evitar la detección de inactividad y un atajo global de pánico que lo apaga todo al instante. Anulación con tapa cerrada y estadísticas de tiempo total incluidas.",
      catalogTagline: "Tu computadora quiere dormir. Espresso no está de acuerdo.",
      catalogDescription:
        "Utilidad que evita que tu computadora se duerma. Sesiones cronometradas, simulación de movimiento del ratón, anulación de tapa cerrada y un atajo de pánico para desactivación instantánea.",
      requirements: "macOS  ·  Windows  ·  Linux  ·  Gratis y código abierto",
      featuresHeading: "Mantente despierto. Mantente activo. Mantén el trabajo.",
      features: [
        {
          title: "Despierto, con temporizador o para siempre",
          body: "Temporizadores predefinidos de 5 minutos a 8 horas, o modo indefinido para cuando va en serio. Mantén la pantalla encendida o deja que se duerma mientras el sistema sigue despierto.",
        },
        {
          title: "Engaña a tu indicador de estado",
          body: "Movimiento subpíxel del ratón — invisible pero suficiente para evitar la detección de inactividad en Slack, Teams, Zoom y cualquier aplicación que vigile la inactividad.",
        },
        {
          title: "Botón de pánico incluido",
          body: "Ctrl+Shift+Escape lo apaga todo al instante: la pantalla se despierta, el movimiento se detiene, los temporizadores se cancelan. Anulación con tapa cerrada para portátiles. Estadísticas de por vida que registran tu tiempo total.",
        },
      ],
      showcase: [
        {
          badge: "Mantente despierto",
          title: "Tu computadora quiere dormir. Espresso no está de acuerdo.",
          description:
            "Un pequeño shot apostado en tu barra de menú que bloquea el temporizador de suspensión, mantiene la pantalla encendida (o no — tú decides), y mueve el ratón sub-píxel a sub-píxel para que los detectores de inactividad se queden engañados.",
          bullets: [
            "Bloquea suspensión del sistema, de pantalla o ambas — por sesión",
            "Movimiento de ratón sub-píxel engaña a Slack, Teams y Zoom",
            "Anula el cierre de tapa para que todo siga corriendo",
            "Estadísticas de uso de por vida — cuánto sueño le has robado",
          ],
          imageAlt: "Taza de espresso 3D vigilando a un portátil somnoliento",
        },
        {
          badge: "Contrarreloj",
          title: "Sesiones cronometradas, o hasta que tú lo decidas",
          description:
            "Elige un preset (5 min, 30 min, 2 h, 8 h) o ejecuta en modo indefinido. El atajo de pánico global lo apaga todo al instante: la pantalla duerme, el ratón se detiene, los temporizadores cancelan.",
          bullets: [
            "Temporizadores de 5 minutos a 8 horas, además del modo indefinido",
            "Ctrl+Shift+Escape pánico global — todo apagado, al instante",
            "Cuenta atrás visible en la barra de menú",
            "Auto-fin al bloquear o cerrar la tapa (configurable)",
          ],
          imageAlt: "Reloj de arena cromado 3D con arena naranja cálida y un botón de pánico rojo",
        },
      ],
    },

    stickykeys: {
      tagline: "Bloquea esas teclas.",
      description:
        "Una pequeña aplicación en la barra de menús. Haz clic para bloquear el teclado, limpia las teclas con un paño de microfibra sin abrir aplicaciones, enviar correos ni interrumpir tu trabajo, y luego haz clic en la superposición para desbloquear. Una superposición esmerilada en pantalla completa cubre cada monitor, el ratón sigue activo, y un desbloqueo automático de seguridad hace que nunca quedes atrapado.",
      catalogTagline: "Bloquea el teclado para que un paño no active atajos.",
      catalogDescription:
        "Un bloqueo de teclado en la barra de menús para limpieza. Haz clic para absorber cada tecla, modificador y tecla multimedia en todo el sistema; una superposición esmerilada en pantalla completa cubre cada pantalla, el ratón sigue activo para desbloquear, y un desbloqueo automático de seguridad hace que nunca quedes atrapado.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Gratis  ·  Firmada y notariada con Developer ID",
      featuresHeading: "Limpia las teclas. No dispares nada.",
      features: [
        {
          title: "Bloquea todo con un solo clic",
          body: "Una captura activa del teclado absorbe cada tecla, modificador y tecla multimedia en todo el sistema — limpia las teclas sin disparar ni un solo atajo.",
        },
        {
          title: "Superposición esmerilada en pantalla completa",
          body: "Un desenfoque claro y sin tinte cubre cada pantalla para que veas de un vistazo que el teclado está bloqueado, con una cuenta regresiva en vivo del desbloqueo automático.",
        },
        {
          title: "Desbloqueo solo con ratón, nunca atrapado",
          body: "Desbloquea desde el botón de la superposición o desde el icono de la barra de menús, y un desbloqueo automático de seguridad se dispara pase lo que pase para que nunca quedes atascado.",
        },
      ],
      showcase: [
        {
          badge: "Cierre total",
          title: "Un clic, y el teclado se calla",
          description:
            "Una captura de teclado a nivel de sistema se traga cada tecla, modificador y tecla multimedia — así una bayeta no puede disparar un atajo, enviar un email o cerrar Logic a mitad de toma. Una superposición esmerilada cubre cada pantalla para que se vea de un vistazo.",
          bullets: [
            "Captura de teclado de sistema — cada tecla, modificador, multimedia",
            "Superposición esmerilada en cada monitor con cuenta atrás visible",
            "El ratón sigue activo para desbloquear cuando termines",
            "Vive en la barra de menú — un clic dentro, un clic fuera",
          ],
          imageAlt: "Teclado 3D bajo una cúpula de cristal lavanda esmerilada con un candado",
        },
        {
          badge: "Salida segura",
          title: "No puedes quedarte atrapado",
          description:
            "Un desbloqueo de seguridad se dispara pase lo que pase — incluso si la superposición falla, incluso si la barra de menú se cuelga. La superficie de desbloqueo escucha al ratón, a la barra de menú y a un temporizador duro.",
          bullets: [
            "El temporizador de auto-desbloqueo garantiza que nunca te quedes atrapado",
            "Tres rutas de desbloqueo independientes: botón, barra de menú, temporizador",
            "Duración máxima de bloqueo configurable (1 min por defecto)",
            "Diseñado paranoico — falla abierto, nunca cerrado",
          ],
          imageAlt: "Selector cromado 3D con aguja lavanda y una llave flotando sobre un candado abierto",
        },
      ],
    },

    stats: {
      tagline: "Cada señal. Una sola mirada.",
      description:
        "Un monitor del sistema nativo en la barra de menús. CPU en vivo por núcleo, presión de memoria, lectura/escritura de disco, red de subida/bajada y sensores — además de widgets compactos opcionales que viajan en la barra de estado y gráficos de líneas históricas para cada señal, para que veas un pico sin abrir el Monitor de actividad.",
      catalogTagline: "Cada señal del sistema de un vistazo — en tu barra de menús.",
      catalogDescription:
        "Un monitor del sistema nativo en la barra de menús. CPU en vivo por núcleo, presión de memoria, lectura/escritura de disco, red de subida/bajada y sensores — además de widgets compactos opcionales que viajan en la barra de estado y gráficos de líneas históricas para cada señal, para que veas un pico sin abrir el Monitor de actividad.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Gratis  ·  Firmada y notariada con Developer ID",
      featuresHeading: "Mira toda la máquina. Sin toda la ventana.",
      features: [
        {
          title: "Cada señal del sistema de un vistazo",
          body: "CPU por núcleo, presión de memoria (con el desglose conectado/comprimido/aplicación/caché), lectura/escritura de disco, red de subida/bajada, sensores y una lista en vivo de procesos principales — todo en un panel compacto en la barra de menús.",
        },
        {
          title: "Widgets compactos en la barra de menús",
          body: "Elige qué números (o una pequeña forma de onda en vivo) viajan en tu barra de estado. Se mantiene visible mientras trabajas, nunca en el medio.",
        },
        {
          title: "Líneas, no hojas de cálculo",
          body: "El historial reciente se grafica para cada señal, así que un pico o un proceso descontrolado salta a la vista sin escarbar en el Monitor de actividad.",
        },
      ],
      showcase: [
        {
          badge: "Todas las señales",
          title: "Cada indicador de tu máquina, de un vistazo",
          description:
            "CPU por núcleo, presión de memoria (con el desglose de wired / comprimida / app / caché), lectura y escritura de disco, red de subida y bajada, lecturas de sensores — Stats lee cada señal que macOS expone y las fija todas a tu barra de menú.",
          bullets: [
            "Uso de CPU por núcleo y top de procesos",
            "Presión de memoria con el desglose completo de residencia",
            "I/O de disco, throughput de red y temperaturas de sensores",
            "Fija cualquier subconjunto como widgets compactos en la barra",
          ],
          imageAlt: "Grupo 3D de indicadores cromados y rosados flotando junto a un sensor",
        },
        {
          badge: "Mirando atrás",
          title: "Sparklines, no hojas de cálculo",
          description:
            "El historial reciente se grafica para cada señal, así un proceso desbocado o un pico térmico es obvio de un vistazo — sin tener que abrir el Monitor de Actividad y esperar a que se repita.",
          bullets: [
            "Historial sparkline en vivo para cada indicador",
            "Ventana de historial configurable — último minuto, hora o día",
            "Detecta un pico retroactivamente en vez de perseguirlo en vivo",
            "Toca una sparkline para ver el proceso top de ese momento",
          ],
          imageAlt: "Cinta sparkline rosada brillante 3D con una bola cromada en su pico",
        },
      ],
    },

    port: {
      tagline: "Cada puerto, un clic.",
      description:
        "Un pequeño gestor nativo de puertos en la barra de menús. Mira qué está escuchando, mata o pausa el proceso, redirígelo o asígnalo con NAT-PMP, y observa las conexiones activas en un mapa en vivo — haz clic en una para inspeccionarla en Blip.",
      catalogTagline: "Cada puerto abierto en tu Mac, a un clic de distancia.",
      catalogDescription:
        "Un gestor nativo de puertos en la barra de menús: mira qué está escuchando, mata o pausa el proceso, redirígelo o asígnalo con NAT-PMP, y observa las conexiones activas en un mapa en vivo — haz clic en una para inspeccionarla en Blip.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Gratis  ·  Firmada con Developer ID",
      featuresHeading: "Velo. Mátalo. Redirígelo.",
      features: [
        {
          title: "Cada puerto abierto, en vivo",
          body: "Una lista en la barra de menús de cada puerto TCP/UDP a la escucha con el proceso y el PID detrás, actualizándose cada segundo. Mátalo, páusalo (SIGSTOP/SIGCONT) o déjalo.",
        },
        {
          title: "Reenvío y mapeo",
          body: "Redirige cualquier puerto local a otro con un reenviador TCP integrado, exponlo a tu LAN y atraviesa tu router con NAT-PMP nativo — sin configuración.",
        },
        {
          title: "Conexiones en un mapa → Blip",
          body: "Conexiones activas trazadas en un mapa en vivo según adónde van realmente. Haz clic en cualquier extremo para abrirlo en Blip para una inspección profunda (o consigue Blip si no lo tienes).",
        },
      ],
      showcase: [
        {
          badge: "Muelle",
          title: "Cada puerto abierto, a un clic",
          description:
            "Un manifiesto en vivo en la barra de menú de cada puerto TCP/UDP escuchando — el proceso detrás, el PID, el protocolo. Mátalo, pausa (SIGSTOP/SIGCONT), o solo vigílalo.",
          bullets: [
            "Refresca cada segundo — qué está escuchando, ahora mismo",
            "Mata, pausa o reanuda el proceso sin salir de la barra de menú",
            "La biblioteca de puertos conocidos nombra servicios al instante",
            "Notificación en cuanto se abre un puerto nuevo",
          ],
          imageAlt: "Puerto 3D en miniatura con remolcador, barcaza y velero amarrados a un pequeño muelle",
        },
        {
          badge: "Señal",
          title: "Reenvía, expone o atraviesa el router",
          description:
            "El reenviador TCP integrado redirige cualquier puerto local a otro. NAT-PMP nativo lo mapea por tu router automáticamente. Mira las conexiones activas en un mapa — toca un endpoint para inspeccionarlo en Blip.",
          bullets: [
            "Reenviador TCP construido sobre Network.framework — cero dependencias",
            "Mapeo NAT-PMP nativo (RFC 6886) sin configuración",
            "Expone un puerto en tu LAN con un solo toggle",
            "Conexiones activas en un mapa; pásalo a Blip de un clic",
          ],
          imageAlt: "Faro 3D en miniatura señalando un pequeño paquete de datos azul con su haz",
        },
      ],
    },

    alfred: {
      tagline: "Recupera el disco.",
      description:
        "Un valet nativo en la barra de menús que encuentra basura de desarrollo segura de eliminar — node_modules, target/ de Cargo, cachés de build y pruebas, DerivedData de Xcode, cachés de gestores de paquetes — los ordena del más grande al más pequeño y los mueve a la Papelera. Recuperable con un solo clic.",
      catalogTagline: "Recupera el espacio en disco que acapara la basura de desarrollo.",
      catalogDescription:
        "Un valet nativo en la barra de menús que encuentra basura de desarrollo segura de eliminar — node_modules, target/ de Cargo, cachés de build y pruebas, DerivedData de Xcode, cachés de gestores de paquetes — los ordena del más grande al más pequeño y los mueve a la Papelera (recuperable).",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Gratis  ·  Firmada con Developer ID",
      featuresHeading: "Encuéntralo. Tíralo. Recupera el disco.",
      features: [
        {
          title: "Encuentra la basura, primero la más grande",
          body: "node_modules, target/ de Cargo, cachés de build y pruebas, DerivedData de Xcode, cachés de Homebrew/Yarn/npm — escaneados, dimensionados y listados de mayor a menor para que sepas exactamente qué te está robando el disco.",
        },
        {
          title: "Seguro de eliminar, por diseño",
          body: "Alfred solo toca carpetas regenerables — cachés, artefactos de build, árboles de dependencias — nunca el código fuente. Todo va a la Papelera, recuperable con un clic si cambias de opinión.",
        },
        {
          title: "Desde la barra de menús",
          body: "Vive como una pequeña aplicación en la barra de menús. Escanea cuando quieras, comprueba cuánto has recuperado, o déjala como herramienta de limpieza puntual para la próxima alarma de SSD lleno.",
        },
      ],
      showcase: [
        {
          badge: "A tu servicio",
          title: "Lo más grande primero, educado, implacable",
          description:
            "Un mayordomo en la barra de menú que sabe exactamente qué carpetas son seguras de borrar. node_modules, Cargo target/, Xcode DerivedData, cachés de Homebrew, cachés de Yarn — Alfred los encuentra, los pesa y los presenta en una bandeja de plata.",
          bullets: [
            "Escanea cada carpeta común de basura de dev en tus proyectos",
            "Ordenado de mayor a menor para que las victorias sean obvias",
            "Reglas de exclusión por carpeta para que tus favoritas se queden",
            "Vive en la barra de menú — escanea cuando te apetezca",
          ],
          imageAlt: "Mayordomo 3D en miniatura con banda verde ofreciendo una bandeja con basura de dev",
        },
        {
          badge: "Seguro por diseño",
          title: "Recupera los gigas, conserva el código",
          description:
            "Alfred solo toca carpetas regenerables — cachés, artefactos de build, árboles de dependencias — nunca tu código fuente. Todo va a la Papelera, así un error es deshacerlo con un clic.",
          bullets: [
            "Solo toca carpetas regenerables — el código siempre está a salvo",
            "Los archivos van a la Papelera, no a /dev/null",
            "Un clic restaura cualquier cosa que cambies de opinión",
            "Total acumulado muestra cuánto has recuperado",
          ],
          imageAlt: "SSD 3D con un anillo LED verde y pequeños paquetes alejándose",
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
      tagline: "Mira lo que se va.",
      description:
        "Mira exactamente adónde van tus datos, quién los está recolectando y ciérralos — todo sobre un mapa 3D muy bonito.",
      catalogTagline: "Tu computadora ha estado hablando a tus espaldas.",
      catalogDescription:
        "Monitoreo de red en tiempo real con un mapa 3D de conexiones, firewall inteligente, bloqueo de DNS, enrutamiento por cables submarinos y análisis de ancho de banda. Mira exactamente adónde van tus datos.",
      requirements: "Gratis y código abierto",
      featuresHeading: "Un mapa. Un portero. Un muro.",
      features: [
        {
          title: "Mapa 3D en vivo de cada conexión",
          body: "El tráfico de cada aplicación trazado en un globo, arcos coloreados por servicio. 200 conexiones, más de 700 cables submarinos reales, partículas que muestran la dirección. La internet que has estado ignorando, hecha visible.",
        },
        {
          title: "Portero para tu ancho de banda",
          body: "Cada aplicación necesita permiso, sin excepciones. El modo estricto bloquea todo hasta que digas lo contrario. Barras de ancho de banda por aplicación exponen a los acaparadores. Interruptor de emergencia con un clic.",
        },
        {
          title: "200 mil rastreadores bloqueados antes de conectarse",
          body: "Listas de bloqueo DNS aniquilan dominios de anuncios y rastreadores al instante; un registro de consultas en tiempo real saca a la luz cada búsqueda; una tabla de rastreadores nombra a los peores infractores.",
        },
      ],
      showcase: [
        {
          badge: "Mapa de red",
          title: "200 conexiones. Ninguna pidió permiso.",
          description:
            "Cada aplicación en tu computadora está llamando a casa en silencio. Blip las pone todas en un mapa 3D para que veas el caos desarrollarse en tiempo real.",
          bullets: [
            "Las conexiones se enrutan por cables submarinos reales a través de océanos",
            "Arcos coloreados por servicio — detecta al instante Google, Discord, Apple y cientos más",
            "Partículas animadas muestran datos fluyendo en ambas direcciones",
            "Traceroute salto a salto muestra el camino real que toman tus paquetes",
          ],
          imageAlt: "Mapa de red 3D de Blip mostrando arcos de conexión",
        },
        {
          badge: "Firewall",
          title: "Portero para tu ancho de banda",
          description:
            "Cada aplicación necesita permiso. Sin excepciones, sin excusas. El modo estricto bloquea todo hasta que digas lo contrario. Porque tus aplicaciones han estado demasiado cómodas.",
          bullets: [
            "Modo estricto: culpable hasta que se demuestre lo contrario",
            "Barras de ancho de banda por aplicación exponen a los acaparadores",
            "Reglas con alcance — permite el puerto 443 pero bloquea todo lo demás",
            "Interruptor de emergencia: un clic, cero internet, silencio instantáneo",
          ],
          imageAlt: "Firewall de Blip mostrando controles de acceso a la red por aplicación",
        },
        {
          badge: "Guardia",
          title: "200.000 rastreadores bloqueados antes de conectarse",
          description:
            "Tu DNS es un chivato. Cada aplicación, cada SDK de anuncios, cada ping de analítica — Guardia los atrapa en la puerta. Mira quién intenta llamar a casa y ciérralos.",
          bullets: [
            "Listas de bloqueo DNS aniquilan más de 200 mil dominios de rastreo y publicidad al instante",
            "Registro de consultas en tiempo real — observa cada búsqueda en vivo",
            "Tabla de rastreadores muestra a los infractores más persistentes",
            "Combinado con el firewall — dos muros, cero piedad",
          ],
          imageAlt: "Guardia de Blip mostrando bloqueo de DNS y detección de rastreadores",
        },
        {
          badge: "Visualización",
          title: "Internet son solo cables mojados",
          description:
            "Tu video de YouTube cruzó tres océanos por un cable más delgado que una manguera de jardín. Blip te muestra exactamente cuál — más de 700 rutas reales de cables submarinos, brillando cuando tus datos pasan por ellas.",
          bullets: [
            "Rutas reales de cables submarinos de TeleGeography mapeadas en el fondo del océano",
            "Los cables activos se iluminan cuando tu tráfico fluye por ellos",
            "Partículas en movimiento muestran la dirección de subida vs. bajada",
            "Velocidad basada en ping — las conexiones rápidas fluyen rápido, las lentas se arrastran",
          ],
          imageAlt: "Visualización de Blip mostrando cables submarinos y flujo de datos",
        },
        {
          badge: "Traceroute",
          title: "14 saltos en 6 ciudades para cargar una página",
          description:
            "Cada paquete rebota por una docena de routers antes de llegar. Blip rastrea la ruta — salto a salto, ciudad a ciudad, cable a cable — y la pinta en el mapa.",
          bullets: [
            "Marcadores de salto a salto superpuestos directamente sobre el mapa 3D",
            "Latencia coloreada: verde es rápido, ámbar está bien, rojo es dolor",
            "Rutas por cables submarinos reales a través de cruces oceánicos",
            "Traceroute automático para cada conexión activa",
          ],
          imageAlt: "Traceroute de Blip mostrando el camino de red salto a salto",
        },
      ],
    },

    diane: {
      tagline: "Pulsa grabar. Habla.",
      description:
        "Una grabadora de voz retro con transcripción en vivo de voz a texto, una biblioteca de cintas de cassette y modo dictado. Inspirada en los memos en cinta del Agente Especial Dale Cooper.",
      catalogTagline: "Tengo en mi mano una pequeña grabadora.",
      catalogDescription:
        "Una grabadora de voz retro y esqueuomórfica con transcripción en vivo de voz a texto, una biblioteca de cintas de cassette y modo dictado. Inspirada en el Agente Especial Dale Cooper.",
      requirements: "Gratis y código abierto",
      featuresHeading: "Pulsa grabar. Habla. Camina.",
      features: [
        {
          title: "Una grabadora de cassette esqueuomórfica",
          body: "Una barra lateral flotante con una grabadora fotorrealista: carretes animados, vúmetros y controles físicos. Pulsa grabar y habla — los atajos globales te permiten grabar desde cualquier aplicación.",
        },
        {
          title: "Transcripción en vivo, en el dispositivo",
          body: "SFSpeechRecognizer de Apple transcribe mientras hablas — sin nube, sin claves de API. Haz clic en cualquier palabra del transcript para saltar a ese momento de la grabación.",
        },
        {
          title: "Una caja de zapatos llena de cintas",
          body: "Cada grabación se guarda como una cinta de cassette de color con su audio y transcripción. Desplázate por tu colección, carga cualquiera, reprodúcela cuando quieras.",
        },
      ],
      showcase: [
        {
          badge: "Grabadora de voz",
          title: "Una grabadora de cassette esqueuomórfica para tu escritorio",
          description:
            "Una barra lateral flotante con una grabadora de cassette fotorrealista. Pulsa grabar y habla. Tu voz se captura, se transcribe en vivo y se guarda en una cinta que puedes navegar, rebobinar y reproducir.",
          bullets: [
            "Grabadora de cassette fotorrealista con carretes animados y vúmetros",
            "Graba, reproduce, rebobina y avanza con controles físicos",
            "Los carretes siguen visualmente la posición de reproducción en tiempo real",
            "Los atajos globales te permiten grabar desde cualquier aplicación sin cambiar de ventana",
          ],
          imageAlt: "Interfaz de grabadora de cassette de Diane",
        },
        {
          badge: "Transcripción en vivo",
          title: "Tus palabras, escritas mientras las pronuncias",
          description:
            "Diane transcribe tu habla en tiempo real usando el reconocimiento de voz en el dispositivo de Apple. Sin nube, sin claves de API, sin latencia. Solo habla y mira aparecer las palabras.",
          bullets: [
            "Voz a texto en vivo, impulsado por SFSpeechRecognizer de macOS",
            "Procesamiento totalmente en el dispositivo, cero datos salen de tu máquina",
            "Haz clic en cualquier palabra del transcript para saltar a ese momento de la grabación",
            "El modo dictado escribe tus palabras directamente en cualquier campo de texto enfocado",
          ],
          imageAlt: "Superposición de transcripción en vivo de Diane",
        },
        {
          badge: "Biblioteca de cintas",
          title: "Una caja de zapatos llena de cintas de cassette",
          description:
            "Cada grabación se guarda como una cinta de cassette con su propia variante de color. Desplázate por tu colección, haz clic para cargar y reproduce cuando quieras.",
          bullets: [
            "10 variantes únicas de color de cassette asignadas aleatoriamente",
            "Las cintas persisten entre sesiones con audio y transcripción completos",
            "Las teclas de flecha recorren tu colección de cintas",
            "Conteo de palabras mostrado en cada etiqueta de cinta",
          ],
          imageAlt: "Biblioteca de cintas de cassette de Diane",
        },
      ],
    },

    peephole: {
      tagline: "Mira quién te observa.",
      description:
        "Un centinela en la barra de menús para tu cámara y micrófono. Peephole muestra qué aplicaciones los están usando ahora mismo, mantiene un historial de acceso y te notifica cuando algo los enciende — sin permisos especiales, sin extensiones de kernel.",
      catalogTagline: "Mira quién te observa.",
      catalogDescription:
        "Un centinela en la barra de menús para tu cámara y micrófono: qué aplicaciones los están usando ahora, un historial de acceso y una notificación en el momento en que algo los enciende.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Gratis  ·  Firmada con Developer ID",
      featuresHeading: "Nada graba sin que lo sepas.",
      features: [
        {
          title: "Estado en vivo de cámara y micrófono",
          body: "El glifo de la barra de menús cambia al instante cuando la cámara o el micrófono se activan, así siempre sabes cuando algo está grabando.",
        },
        {
          title: "Historial de acceso",
          body: "Un registro continuo de qué aplicación usó la cámara o el micrófono y cuándo — desplázate por la actividad del día.",
        },
        {
          title: "Notificaciones",
          body: "Recibe una alerta en el momento en que una aplicación empieza a usar la cámara o el micrófono. Sin permisos especiales, sin extensiones de kernel.",
        },
      ],
      showcase: [
        {
          badge: "Ojos y oídos",
          title: "Sabe el segundo en que algo empieza a mirar",
          description:
            "El glifo de Peephole en la barra de menú cambia el instante en que la cámara o el micrófono se activan. Tócalo y verás exactamente qué app los encendió — y decides si eso debía pasar.",
          bullets: [
            "Estado en vivo de cámara y micrófono, siempre visible",
            "El glifo cambia el instante en que empieza o termina el acceso",
            "Toca para ver la app responsable y su dispositivo abierto",
            "Sin permisos especiales, sin extensiones del kernel — puro espacio de usuario",
          ],
          imageAlt: "Cámara web cromada 3D con un iris en forma de rendija turquesa y un micrófono cromado al lado",
        },
        {
          badge: "Recibos",
          title: "Un registro en vivo de cada acceso, con notificación cuando importa",
          description:
            "Repasa la actividad del día con cámara y micrófono — qué app, cuándo, cuánto tiempo. Las notificaciones opcionales se disparan en cuanto comienza el acceso, así una activación sorpresa nunca pasa desapercibida.",
          bullets: [
            "Historial por app con marcas de tiempo y duración",
            "Notificación en cada nuevo acceso (toggle por dispositivo)",
            "Filtra por app, dispositivo o ventana de tiempo",
            "El historial persiste entre reinicios — nada se escapa",
          ],
          imageAlt: "Mirilla cromada 3D con un iris turquesa brillante y una pila de tarjetas de historial detrás",
        },
      ],
    },

    quarantine: {
      tagline: "Verifica cada descarga.",
      description:
        "Un inspector en la barra de menús para ~/Downloads. Para cada archivo nuevo expone la URL de origen de cuarentena, el estado de Gatekeeper/codesign, el SHA-256 y un veredicto opcional de VirusTotal — y te avisa para que lo verifiques antes de abrirlo.",
      catalogTagline: "Confía, pero verifica cada descarga.",
      catalogDescription:
        "Un inspector en la barra de menús para ~/Downloads: origen de cuarentena, estado de Gatekeeper/codesign, SHA-256 y un veredicto opcional de VirusTotal para cada archivo nuevo, con una notificación para verificarlo.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Gratis  ·  Firmada con Developer ID",
      featuresHeading: "Sabe qué acaba de aterrizar en Descargas.",
      features: [
        {
          title: "Origen y cuarentena",
          body: "Ve exactamente de dónde vino un archivo a través de su atributo com.apple.quarantine — el agente que lo descargó y la URL de origen.",
        },
        {
          title: "Gatekeeper y hash",
          body: "Evaluación de codesign/Gatekeeper más un SHA-256 para cada archivo nuevo que aterriza en ~/Downloads.",
        },
        {
          title: "VirusTotal opcional",
          body: "Añade una clave de API y Quarantine muestra un veredicto de reputación en línea, para que verifiques una descarga antes incluso de abrirla.",
        },
      ],
      showcase: [
        {
          badge: "Cámara de retención",
          title: "Cada nueva descarga, aislada hasta que tú lo digas",
          description:
            "En cuanto un archivo aterriza en ~/Downloads, Quarantine lo lleva a la mesa de inspección. Verás exactamente de dónde vino — agente, URL de origen, atributo de cuarentena — antes de hacer doble clic en nada.",
          bullets: [
            "Vigila ~/Downloads en tiempo real vía FSEvents",
            "Lee com.apple.quarantine: la app que lo descargó y la URL de origen",
            "Te avisa en cada nueva llegada",
            "Una fila por archivo — toda la cola de un vistazo",
          ],
          imageAlt: "Cámara de aislamiento de cristal 3D con un paquete suspendido dentro y paquetes aprobados/rechazados fuera",
        },
        {
          badge: "Inspeccionar",
          title: "Firma, hash y veredicto",
          description:
            "Para cada archivo, Quarantine te muestra la evaluación de Gatekeeper, el estado del codesign y el SHA-256. Mete una clave de API de VirusTotal y el veredicto de reputación aparece en línea — verifícalo antes de abrirlo.",
          bullets: [
            "Evaluación de spctl + codesign --display en una sola fila",
            "SHA-256 calculado al llegar — listo para copiar y pegar",
            "Veredicto de VirusTotal opcional en línea (trae tu API key)",
            "Revela en Finder o tira a la basura desde el menú",
          ],
          imageAlt: "Lupa cromada 3D sobre una carpeta crema con un sello dorado al lado",
        },
      ],
    },

    sentry: {
      tagline: "Vigila los rincones oscuros.",
      description:
        "Un auditor en la barra de menús para la persistencia de macOS. Enumera LaunchAgents y Daemons, elementos de inicio, cron y archivos de inicio del shell, comprueba la firma de código y notarización de cada objetivo, y te alerta en el instante en que aparece un elemento nuevo o modificado — luego te permite inspeccionar, bloquear o restaurar, directamente desde la barra de menús.",
      catalogTagline: "Sabe el momento en que algo se incrusta.",
      catalogDescription:
        "Un auditor en la barra de menús para la persistencia de macOS — LaunchAgents, elementos de inicio, cron y archivos de inicio del shell — con verificaciones de firma y alertas cuando aparece algo nuevo o cambiado. Inspecciona, bloquea o restaura cualquiera de ellos.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Gratis  ·  Firmada con Developer ID",
      featuresHeading: "Vigila los lugares donde se esconde el malware.",
      features: [
        {
          title: "Cada vector de persistencia",
          body: "LaunchAgents y Daemons, elementos de inicio, cron y archivos de inicio del shell — cada lugar donde algo puede incrustarse para sobrevivir a un reinicio, en una sola lista en la barra de menús.",
        },
        {
          title: "Consciente de firmas",
          body: "Cada binario objetivo se clasifica como notariado / firmado / sin firmar mediante spctl y codesign, así un launch agent sin firmar destaca al instante.",
        },
        {
          title: "Alertas al cambiar, bloquea lo que no debería estar ahí",
          body: "La comparación de snapshots te notifica en el momento en que aparece o cambia un elemento de persistencia. Inspecciona el plist o script, luego bloquéalo — Sentry lo descarga y lo aparta como .sentry-disabled. Reversible con un clic.",
        },
      ],
      showcase: [
        {
          badge: "Atalaya",
          title: "Cada rincón oscuro, iluminado",
          description:
            "LaunchAgents & Daemons, ítems de inicio de sesión, cron y archivos de inicio del shell — Sentry mantiene un farol encendido sobre cada lugar donde algo pueda cavar para quedarse. Una lista en la barra de menú, con firma verificada, lista para inspeccionar.",
          bullets: [
            "Enumera cada vector de persistencia de macOS en un solo panel",
            "Cada objetivo clasificado notarizado / firmado / sin firmar vía spctl + codesign",
            "Abre el plist o script directamente desde la fila",
            "Vive en la barra de menú — sin ventana que mantener encima",
          ],
          imageAlt: "Farol cromado 3D con un cristal violeta brillante y dijes en forma de ojo",
        },
        {
          badge: "Manifiesto",
          title: "Nota el instante en que aparece algo nuevo",
          description:
            "Sentry hace una foto del estado de persistencia y lo compara. El instante en que aparece un nuevo agente, ítem de inicio o cambio en un rc, te avisa — con un bloqueo de un clic que es totalmente reversible.",
          bullets: [
            "El diff de snapshot detecta cada ítem de persistencia nuevo o cambiado",
            "Bloquear descarga el ítem y lo deja aparte como .sentry-disabled",
            "Restaura con un clic — nada destructivo le pasa a tu sistema",
            "La notificación te avisa antes del próximo reinicio",
          ],
          imageAlt: "Pergamino 3D con sellos de cera violeta sobre un atril cromado, con una campana de alarma",
        },
      ],
    },

    fishbones: {
      tagline: "Convierte cualquier libro técnico en un curso interactivo.",
      description:
        "Suelta un PDF o EPUB y Libre genera lecciones, ejercicios y pruebas ocultas. Dieciséis lenguajes con un solo editor, un tutor de IA local en tu portátil, racha que sobrevive los fines de semana y diecisiete temas.",
      catalogTagline: "Convierte cualquier libro técnico en un curso interactivo.",
      catalogDescription:
        "Suelta un PDF o EPUB y Libre genera lecciones, ejercicios y pruebas ocultas. Dieciséis lenguajes con un solo editor, un tutor de IA local en tu portátil, racha que sobrevive los fines de semana y diecisiete temas.",
      requirements: "Gratis y código abierto",
      featuresHeading: "Aprende de cualquier libro.",
      features: [],
    },

    tap: {
      tagline: "Servidores en tu muñeca.",
      description:
        "Ejecuta comandos SSH preconfigurados en servidores remotos desde tu Apple Watch. Toca, confirma, listo. Funciona con red celular, soporta Siri y cifra todo de extremo a extremo.",
      catalogTagline: "El control remoto de comandos para tu infraestructura.",
      catalogDescription:
        "Ejecuta comandos SSH preconfigurados en servidores remotos desde tu Apple Watch. Funciona con red celular, soporta Siri y cifra todo de extremo a extremo.",
      requirements: "watchOS  ·  iOS  ·  iPadOS  ·  macOS  ·  Gratis y código abierto",
      featuresHeading: "Un control remoto para tus servidores — en tu muñeca.",
      features: [
        {
          title: "Una app de reloj real, no un atajo de notificación",
          body: "Lista nativa de servidores en watchOS con puntos de estado en vivo, comandos anclados via el Botón de Acción, confirmación para comandos peligrosos y salida desplazable con la Digital Crown. Lista para red celular — no requiere teléfono.",
        },
        {
          title: "Companion y Mac, sincronizados",
          body: "Apps completas para iPhone, iPad y Mac Catalyst. Añade servidores, configura comandos y suites de comandos, ve el historial, gestiona claves SSH. Todo se sincroniza al reloj en tiempo real.",
        },
        {
          title: "Suites, alertas, Siri, complicaciones",
          body: 'Agrupa comandos en suites de un toque. Pings de salud cada 30 segundos y alertas APNs cuando algo se cae. Cinco complicaciones de esfera de reloj. "Oye Siri, Tap reinicia prod-api."',
        },
      ],
      showcase: [
        {
          badge: "App de reloj",
          title: "Reinicia producción desde tu muñeca.",
          description:
            "App nativa de watchOS con lista de servidores, ejecución de comandos y retroalimentación háptica. Toca un comando, confirma, listo. Salida real desplazable con la Digital Crown. Funciona con red celular — no se necesita teléfono.",
          bullets: [
            "Lista de servidores con puntos de estado en vivo (verde/rojo)",
            "Comandos anclados para acceso rápido via Botón de Acción",
            "Vista de confirmación para comandos peligrosos",
            "Salida truncada, desplazable con la Digital Crown",
          ],
          imageAlt: "App de reloj Tap mostrando comandos de servidor",
        },
        {
          badge: "Companion",
          title: "Configura todo desde tu teléfono.",
          description:
            "App completa de gestión para iPhone, iPad y Mac Catalyst. Añade servidores, configura comandos, gestiona claves SSH, ve el historial y configura suites de comandos. Todo se sincroniza al reloj al instante.",
          bullets: [
            "Panel con cuadrícula de salud de servidores y feed de actividad",
            "Editor visual de comandos con biblioteca de plantillas",
            "Terminal SSH interactivo completo via WebView",
            "Genera código QR para emparejamiento instantáneo con el reloj",
          ],
          imageAlt: "Panel de la app companion de Tap",
        },
        {
          badge: "Suites",
          title: "Ejecuta 5 comandos con un toque.",
          description:
            "Agrupa comandos relacionados en suites para flujos de despliegue de un toque. Cada paso muestra éxito/fallo en tiempo real. Configura si continuar al fallar o detenerse inmediatamente.",
          bullets: [
            "Ejecución ordenada de pasos con seguimiento de progreso",
            "Conmutador continuar-al-fallar por paso",
            "Progreso de la suite transmitido por WebSocket",
            "Perfecto para secuencias de despliegue y rutinas de health check",
          ],
          imageAlt: "Progreso de ejecución de suite Tap en el reloj",
        },
        {
          badge: "Alertas",
          title: "Entérate antes que tus usuarios.",
          description:
            "Pings de salud en segundo plano cada 30 segundos. Cuando un servidor se cae, recibes una notificación push inmediata en tu reloj y teléfono. Conmutador por servidor para que solo recibas alertas de lo que importa.",
          bullets: [
            "Bucle de ping de salud de 30 segundos con seguimiento de latencia",
            "Push APNs a reloj + teléfono al cambiar el estado",
            "Conmutador de notificación por servidor",
            "Patrón de alerta háptica en Apple Watch",
          ],
          imageAlt: "Notificación de servidor caído de Tap en el reloj",
        },
        {
          badge: "Complicaciones",
          title: "Salud del servidor de un vistazo en tu esfera.",
          description:
            "Cinco complicaciones configurables que muestran métricas de servidor en vivo justo en tu esfera de reloj. Elige qué servidor y métrica mostrar. Los datos se sincronizan automáticamente desde la app.",
          bullets: [
            "Estado del servidor: conteo de activos/inactivos en toda la flota",
            "Métricas de flota: disco, memoria o CPU por servidor",
            "Docker: conteos de contenedores en ejecución",
            "Tiempo de actividad: tiempo de actividad por servidor",
            "Comandos rápidos: comandos anclados a la vista",
          ],
          imageAlt: "Complicaciones de Tap en el reloj mostrando métricas de servidor",
        },
        {
          badge: "macOS",
          title: "Control completo desde tu barra de menús.",
          description:
            "App nativa de macOS para acceso rápido al servidor. Monitoriza tu flota, ejecuta comandos y gestiona configuraciones sin abrir un navegador. Inicia sesión con Apple para una configuración sin fricciones.",
          bullets: [
            "Presencia en la barra de menús para acceso instantáneo",
            "Ejecución completa de comandos con visualización de salida",
            "Importación de configuración de servidor desde JSON",
            "Autenticación con Apple Sign-In",
          ],
          imageAlt: "App macOS de Tap mostrando panel de servidor",
        },
        {
          badge: "Siri",
          title: '"Oye Siri, Tap reinicia prod-api."',
          description:
            "Integración completa con App Intents. Ejecuta cualquier comando por voz. Verifica el estado del servidor sin manos. Siri confirma la acción y reporta el resultado. Funciona desde reloj, teléfono o CarPlay.",
          bullets: [
            "Lenguaje natural: 'Tap reinicia nginx en prod'",
            "Verificación de estado del servidor: 'Comprueba mis servidores en Tap'",
            "Diálogo de confirmación antes de ejecutar",
            "Resultado reportado por respuesta de voz",
          ],
          imageAlt: "Siri ejecutando un comando Tap",
        },
      ],
      stats: [
        { value: "< 3s", label: "Tiempo de ejecución" },
        { value: "Celular", label: "Sin teléfono" },
        { value: "AES-256", label: "Cifrado de claves" },
        { value: "MIT", label: "Código abierto" },
      ],
      threeSecondsHeading: "Tres segundos. Eso es todo.",
      threeSecondsSub: "De la muñeca al servidor y de vuelta.",
      stepTap: "Toca",
      stepConfirm: "Confirma",
      stepDone: "Listo",
      archHeading: "Arquitectura",
      archWatch: "Reloj",
      archRelay: "Relay",
      archServers: "Tus servidores",
      archCompanion: "Companion",
      archMac: "macOS",
      securityHeading: "Modelo de seguridad",
      securityCards: [
        {
          title: "Claves en reposo",
          body: "Claves SSH cifradas con AES-256-GCM. Frase maestra derivada via Argon2id. Las claves solo existen descifradas en memoria mientras el relay corre.",
        },
        {
          title: "Auth por token",
          body: "Tokens Bearer por dispositivo, hasheados con Argon2. TOTP 2FA opcional para operaciones destructivas. Los tokens son revocables al instante.",
        },
        {
          title: "TLS en todas partes",
          body: "Renovación automática integrada con Let's Encrypt. Todo el tráfico cifrado en tránsito. Opción de certificate pinning para relays auto-alojados.",
        },
        {
          title: "Seguridad del reloj",
          body: "Token almacenado en el Keychain del Watch cifrado por hardware. La detección de muñeca lo bloquea automáticamente. Sin datos sensibles cacheados en el dispositivo.",
        },
      ],
      templatesHeading: "27 plantillas integradas",
      templatesSub: "Comandos comunes preconfigurados. Elige una plantilla, rellena los huecos, listo.",
      templateCategories: {
        system: "Sistema",
        docker: "Docker",
        systemd: "Systemd",
        deploy: "Despliegue",
        nginx: "Nginx",
        network: "Red",
      },
      useCasesHeading: "Hecho para los momentos intermedios",
      useCases: [
        "Reinicia un servicio caído desde el parque de perros",
        "Ejecuta un health check durante una reunión",
        "Despliega desde el gimnasio",
        "Comprueba el espacio en disco desde la cama",
        "Comprueba el estado del servidor desde el coche (Siri)",
        "Pon comandos en cola antes del despegue, ejecútalos al aterrizar",
      ],
      techHeading: "Stack tecnológico",
      techStack: {
        watch: { label: "Reloj", value: "Swift + SwiftUI + WidgetKit + AppIntents" },
        macos: { label: "macOS", value: "Swift + SwiftUI + Menu Bar" },
        companion: { label: "Companion", value: "React Native + TypeScript + Base RN" },
        relay: { label: "Relay", value: "Rust + axum + russh + SQLite" },
        encryption: { label: "Cifrado", value: "AES-256-GCM + Argon2id" },
        tls: { label: "TLS", value: "rustls + Let's Encrypt" },
        notifications: { label: "Notificaciones", value: "APNs + conmutador por servidor" },
      },
      quickSetup: "Guía de configuración rápida",
      relayConfig: "Configuración del Relay",
      ctaHeading: "Tus servidores te esperan.",
      ctaSub: "Gratis para siempre. Código abierto. Sin teléfono requerido.",
      ctaGithub: "Ver en GitHub",
    },

    base: {
      tagline: "Primitivos. Tokens. Hecho.",
      description:
        "70 primitivos, 8 categorías de tokens de diseño, modo oscuro y cero opiniones sobre tu stack. Componentes React limpios y composables que funcionan en todas partes — incluido el lanzador.",
      catalogTagline: "Kit de diseño universal — monocromo, agnóstico de plataforma.",
      catalogDescription:
        "70 primitivos, 8 categorías de tokens de diseño, modo oscuro y cero opiniones sobre tu stack. Componentes React limpios y composables que funcionan en todas partes — incluido el lanzador.",
      requirements: "Gratis y código abierto  ·  React  ·  TypeScript",
      featuresHeading: "Los primitivos. Los tokens. El conmutador.",
      ctaLabel: "Ver código fuente",
      features: [
        {
          title: "70 primitivos listos para producción",
          body: "Formularios, layout, datos, retroalimentación — cada primitivo que necesitas, ninguno que no. Inputs, tablas, calendarios, sparklines, vistas de árbol, selectores de color, diálogos y más.",
        },
        {
          title: "Un sistema de tokens, todas las plataformas",
          body: "Color, tipografía, espaciado, radius, elevación, animación y glassmorphism — todo definido como tokens TypeScript que exportan a variables CSS o estilos React Native.",
        },
        {
          title: "Claro y oscuro desde el primer día",
          body: "Cada componente respeta el modo de color automáticamente — detección de preferencia del sistema, conmutador manual con localStorage y glassmorphism que se adapta en ambos modos.",
        },
      ],
      showcase: [
        {
          badge: "70 primitivos",
          title: "Cada componente que necesitas, ninguno que no",
          description:
            "Desde botones e inputs hasta vistas de árbol, selectores de color y sparklines — 70 primitivos listos para producción construidos con TypeScript y cero dependencias externas más allá de React.",
          bullets: [
            "Formularios: input, textarea, select, checkbox, radio, pin-input, number-input, color-picker",
            "Layout: grid, stack, container, center, spacer, separator",
            "Datos: table, calendar, timeline, carousel, sparkline, tree-view",
            "Retroalimentación: toast, alert, dialog, sheet, popover, skeleton, spinner, progress",
          ],
          imageAlt: "Biblioteca de componentes primitivos de Base",
        },
        {
          badge: "Tokens de diseño",
          title: "Un sistema de tokens, todas las plataformas",
          description:
            "Color, tipografía, espaciado, radius, elevación, animación y glassmorphism — todo definido como tokens TypeScript que exportan a variables CSS o estilos React Native.",
          bullets: [
            "Paleta de color monocromática con alias semánticos",
            "Tokens de glassmorphism para efectos de vidrio esmerilado",
            "Escala tipográfica con tamaño fluido responsivo",
            "Exportación a propiedades personalizadas CSS o React Native StyleSheet",
          ],
          imageAlt: "Tokens de diseño de Base",
        },
        {
          badge: "Modo oscuro",
          title: "Claro y oscuro, integrados desde el primer día",
          description:
            "Cada componente respeta el modo de color desde el principio. Sin configuración adicional, sin theme wrappers que olvidar — simplemente funciona con las preferencias del sistema o conmutador manual.",
          bullets: [
            "Detección automática de preferencia del sistema",
            "Conmutador manual con persistencia en localStorage",
            "Los 70 primitivos probados en ambos modos",
            "Los efectos de glassmorphism se adaptan al modo de color",
          ],
          imageAlt: "Soporte de modo oscuro de Base",
        },
      ],
    },
  },

  legal: {
    privacyTitle: "Política de privacidad",
    termsTitle: "Términos del servicio",
    eulaTitle: "Acuerdo de licencia de usuario final",
    tapTagline: "Tap — Relay de comandos SSH",
    effectiveDate: "Fecha de entrada en vigor: 14 de abril de 2026",
    navPrivacy: "Política de privacidad",
    navTerms: "Términos del servicio",
    navEula: "EULA",

    privacy: {
      intro:
        'Matt\'s Software ("nosotros", "nos", "nuestro") opera Tap, una aplicación de relay de comandos SSH para Apple Watch, iPhone y Mac. Esta Política de privacidad explica qué información recopilamos, cómo la usamos y tus derechos sobre tus datos. Matt\'s Software tiene su sede en los Estados Unidos.',
      collectHeading: "Información que recopilamos",
      accountHeading: "Información de cuenta",
      accountBody:
        "Cuando inicias sesión con Apple Sign-In, recibimos tu dirección de correo electrónico de Apple ID (o la dirección de relay privado que Apple proporciona en tu nombre). Esta es la única información personalmente identificable que recopilamos y se usa únicamente para autenticarte con tu servidor relay.",
      relayHeading: "Datos del relay auto-alojado",
      relayBody:
        "Tap almacena metadatos de conexión, claves SSH cifradas, historial de comandos y resultados de ejecución en el servidor relay que tú alojas y operas. No tenemos acceso a estos datos. Como tú controlas el relay, tú controlas tus datos.",
      useHeading: "Cómo usamos la información",
      useBody:
        "Tu dirección de correo electrónico de Apple ID se usa exclusivamente para autenticar tu cuenta. No la usamos para marketing, boletines ni ningún otro propósito. No la combinamos con datos de otras fuentes.",
      storageHeading: "Almacenamiento y seguridad de datos",
      storageBody1:
        "Las claves SSH almacenadas en tu relay están cifradas en reposo usando AES-256-GCM. Todos los datos del relay — metadatos de conexión, registros de comandos y claves — residen completamente en tu propia infraestructura. Matt's Software no opera servidores centrales que almacenen tus datos.",
      storageBody2:
        "Como el relay es auto-alojado, la seguridad de tus datos depende en última instancia de cómo configures y mantengas tu servidor. Recomendamos mantener tu software relay actualizado y seguir las prácticas estándar de fortalecimiento de servidores.",
      thirdPartyHeading: "Servicios de terceros",
      thirdPartyBody:
        "Tap usa Apple Sign-In para autenticación. La política de privacidad de Apple regula los datos que Apple recopila durante el proceso de inicio de sesión. Más allá de Apple Sign-In, Tap no se integra con ningún servicio de analítica, publicidad o seguimiento de terceros.",
      notDoHeading: "Lo que no hacemos",
      notDoList: [
        "No ejecutamos analítica ni seguimiento de ningún tipo",
        "No compartimos datos con terceros",
        "No mostramos anuncios",
        "No recopilamos telemetría de uso",
        "No tenemos acceso a tu servidor relay ni a sus datos",
        "No vendemos ni alquilamos tu información personal",
      ],
      retentionHeading: "Retención y eliminación de datos",
      retentionBody:
        "Puedes eliminar tu cuenta y todos los datos asociados desde dentro de la app Tap en cualquier momento. Como los datos se almacenan en tu relay, también tienes acceso directo para eliminarlos de tu servidor cuando elijas.",
      childrenHeading: "Privacidad de los niños",
      childrenBody:
        "Tap no está dirigido a niños menores de 13 años. No recopilamos a sabiendas información personal de niños menores de 13 años. Si crees que un niño nos ha proporcionado información personal, contáctanos y tomaremos medidas para eliminarla.",
      changesHeading: "Cambios en esta política",
      changesBody:
        "Podemos actualizar esta Política de privacidad de vez en cuando. Cuando lo hagamos, publicaremos la política revisada en esta página con una nueva fecha de entrada en vigor. Tu uso continuado de Tap tras los cambios publicados constituye aceptación de la política actualizada.",
      contactHeading: "Contáctanos",
      contactBody:
        "Si tienes preguntas o inquietudes sobre esta Política de privacidad, contáctanos en",
    },

    terms: {
      acceptHeading: "Aceptación de los términos",
      acceptBody:
        'Al descargar, instalar o usar Tap ("la App"), aceptas estar sujeto a estos Términos del servicio ("Términos"). Si no estás de acuerdo con estos Términos, no uses la App. Estos Términos constituyen un acuerdo legal entre tú y Matt\'s Software ("nosotros", "nos", "nuestro"), con sede en los Estados Unidos.',
      descriptionHeading: "Descripción del servicio",
      descriptionBody:
        "Tap es una aplicación de relay de comandos SSH para Apple Watch, iPhone y Mac. Te permite ejecutar comandos en servidores remotos a través de un servidor relay que tú alojas y operas. Matt's Software proporciona la aplicación cliente y el software relay. No operamos, gestionamos ni tenemos acceso a tu servidor relay ni a los servidores a los que te conectas.",
      accountsHeading: "Cuentas de usuario",
      accountsBody:
        "Tap usa Apple Sign-In para autenticación. Cada persona puede mantener una cuenta. Eres responsable de mantener la seguridad de tu cuenta y de toda la actividad que ocurra bajo ella. No debes compartir tus credenciales ni permitir que otros accedan a tu cuenta.",
      responsibilitiesHeading: "Responsabilidades del usuario",
      serversHeading: "Tus servidores",
      serversBody:
        "Eres responsable de los servidores a los que te conectas a través de Tap. Esto incluye asegurarte de tener autorización adecuada para acceder a esos servidores y que tu uso cumpla con todas las políticas y leyes aplicables.",
      commandsHeading: "Tus comandos",
      commandsBody:
        "Tap es una herramienta que ejecuta los comandos que proporcionas. Aceptas la responsabilidad total por cada comando que ejecutes a través de Tap y sus consecuencias. Matt's Software no es responsable del resultado de los comandos ejecutados via la App.",
      relayHeading: "Tu relay",
      relayBody:
        "El servidor relay de Tap es auto-alojado en tu infraestructura. Eres responsable de asegurar tu relay, mantenerlo actualizado y gestionar el acceso al mismo. Matt's Software no opera, monitoriza ni mantiene tu relay.",
      acceptableHeading: "Uso aceptable",
      acceptableIntro: "Aceptas no usar Tap para:",
      acceptableList: [
        "Obtener acceso no autorizado a cualquier sistema, red o dato",
        "Violar cualquier ley local, estatal, nacional o internacional aplicable",
        "Transmitir malware, virus u otro código dañino",
        "Interferir con o interrumpir la integridad o el rendimiento de cualquier sistema",
        "Acosar, abusar o dañar a otra persona o entidad",
        "Participar en cualquier actividad fraudulenta, engañosa o desorientadora",
      ],
      ipHeading: "Propiedad intelectual",
      ipBody:
        "La aplicación Tap, incluido su diseño, código y documentación, es propiedad de Matt's Software y está protegida por las leyes de propiedad intelectual aplicables. Tu uso de Tap no te otorga propiedad sobre ninguna propiedad intelectual de la App. Tus datos, configuraciones y contenido almacenado en tu servidor relay siguen siendo tuyos.",
      warrantyHeading: "Renuncia de garantías",
      warrantyBody:
        'Tap se proporciona "tal cual" y "según disponibilidad" sin garantía de ningún tipo, expresa o implícita, incluyendo pero no limitándose a garantías de comerciabilidad, idoneidad para un propósito particular y no infracción. Matt\'s Software no garantiza que la App será ininterrumpida, libre de errores, segura o disponible en cualquier momento particular.',
      liabilityHeading: "Limitación de responsabilidad",
      liabilityBody:
        "En la máxima medida permitida por la ley aplicable, Matt's Software no será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos, ni de ninguna pérdida de datos, beneficios, ingresos u oportunidades de negocio, derivados o relacionados con tu uso de Tap, independientemente de la teoría de responsabilidad.",
      terminationHeading: "Terminación",
      terminationBody:
        "Puedes eliminar tu cuenta y dejar de usar Tap en cualquier momento. Matt's Software se reserva el derecho de suspender o terminar tu acceso a la App en cualquier momento, con o sin aviso, por conducta que creamos que viola estos Términos o es perjudicial para otros usuarios o para nosotros.",
      governingHeading: "Ley aplicable",
      governingBody:
        "Estos Términos se regirán e interpretarán de acuerdo con las leyes de los Estados Unidos, sin considerar los principios de conflicto de leyes. Cualquier disputa derivada de estos Términos o de tu uso de Tap se resolverá en los tribunales de los Estados Unidos.",
      changesHeading: "Cambios a estos términos",
      changesBody:
        "Podemos actualizar estos Términos de vez en cuando. Cuando lo hagamos, publicaremos los Términos revisados en esta página con una nueva fecha de entrada en vigor. Tu uso continuado de Tap tras los cambios publicados constituye aceptación de los Términos actualizados.",
      contactHeading: "Contacto",
      contactBody: "Si tienes preguntas sobre estos Términos, contáctanos en",
    },

    eula: {
      intro:
        'Este Acuerdo de licencia de usuario final ("Acuerdo") es un acuerdo legal entre tú y Matt\'s Software ("nosotros", "nos", "nuestro"), con sede en los Estados Unidos, para el uso de Tap ("la App"). Al instalar o usar la App, aceptas estar sujeto a este Acuerdo.',
      licensedHeading: "Aplicación con licencia",
      licensedBody:
        "Tap es una aplicación de relay de comandos SSH para Apple Watch, iPhone y Mac, desarrollada y publicada por Matt's Software. La App te permite ejecutar comandos en servidores remotos a través de un servidor relay que tú mismo alojas.",
      scopeHeading: "Alcance de la licencia",
      scopeBody:
        "Matt's Software te concede una licencia limitada, no exclusiva, no transferible y revocable para descargar, instalar y usar la App en dispositivos que poseas o controles, de acuerdo con este Acuerdo y los Términos y condiciones de Apple Media Services.",
      scopeIntro: "Esta licencia no te permite:",
      scopeList: [
        "Distribuir, sublicenciar, arrendar, alquilar o prestar la App a terceros",
        "Realizar ingeniería inversa, descompilar, desensamblar o intentar derivar el código fuente de la App",
        "Modificar, adaptar, traducir o crear obras derivadas basadas en la App",
        "Eliminar, alterar u ocultar cualquier aviso de derechos de autor, marca registrada u otros avisos de propiedad en la App",
        "Usar la App para cualquier propósito ilegal o prohibido por este Acuerdo",
      ],
      relayHeading: "Relay auto-alojado",
      relayBody:
        "Tap se conecta a un servidor relay que tú alojas y operas en tu propia infraestructura. Matt's Software no proporciona, gestiona ni mantiene tu servidor relay. No somos responsables de los problemas derivados de la configuración, operación, seguridad o disponibilidad de tu servidor relay o de cualquier servidor remoto al que te conectes a través de la App.",
      ownershipHeading: "Propiedad",
      ownershipBody:
        "La App y todos los derechos de propiedad intelectual relacionados son y seguirán siendo propiedad de Matt's Software. Este Acuerdo no te otorga ningún interés de propiedad en la App. Tus datos, configuraciones y contenido almacenado en tu servidor relay siguen siendo tuyos.",
      terminationHeading: "Terminación",
      terminationBody:
        "Esta licencia es efectiva hasta que se termine. Tus derechos bajo este Acuerdo terminarán automáticamente sin aviso si no cumples con cualquiera de sus términos. Al terminar, debes dejar de usar la App y eliminar todas las copias de tus dispositivos. Matt's Software también puede terminar esta licencia en cualquier momento por cualquier motivo.",
      warrantyHeading: "Renuncia de garantías",
      warrantyBody:
        'La App se proporciona "tal cual" y "según disponibilidad" sin garantía de ningún tipo, expresa o implícita, incluyendo pero no limitándose a garantías de comerciabilidad, idoneidad para un propósito particular y no infracción. Matt\'s Software no garantiza que la App será ininterrumpida, libre de errores o libre de componentes dañinos.',
      liabilityHeading: "Limitación de responsabilidad",
      liabilityBody:
        "En la máxima medida permitida por la ley aplicable, Matt's Software no será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos, ni de ninguna pérdida de datos, beneficios o ingresos, derivados o relacionados con tu uso de la App, independientemente de la teoría de responsabilidad.",
      governingHeading: "Ley aplicable",
      governingBody:
        "Este Acuerdo se regirá e interpretará de acuerdo con las leyes de los Estados Unidos, sin considerar los principios de conflicto de leyes.",
      contactHeading: "Contacto",
      contactBody: "Si tienes preguntas sobre este Acuerdo, contáctanos en",
    },
  },

  notFound: {
    altText:
      "Una serpiente cinta roja con casco colonial sentada en una roca con forma de signo de interrogación, rodeada de carteles en blanco",
    title: "Esta página se extravió.",
    sub: "Los carteles están en blanco. La serpiente tampoco sabe. Vamos a llevarte de vuelta a algo que existe.",
    backToSuite: "Volver a la colección",
    rummageGithub: "O rebusca en GitHub",
  },
};
