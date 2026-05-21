/// Portuguese translations. Mirrors en.ts shape.

import type { Translation } from "../types";

export const pt: Translation = {
  meta: {
    siteTitle: "Matt's Software — Apps minúsculos que valem a pena",
    siteDescription:
      "Uma pequena loja de apps minúsculos, gratuitos e open source. Um lançador instala todos e mantém atualizados.",
    htmlLang: "pt",
    direction: "ltr",
  },

  langSelector: {
    label: "Idioma",
    selectLanguage: "Selecionar idioma",
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
    appsAllLabel: "Todos os apps",
    launcher: "Lançador",
    githubAria: "GitHub",
    suiteFooter: "{count} apps, um único lançador.",
    getLauncher: "Obter o lançador",
    tipLabel: "Gorjeta",
    tipTitle: "Enviar uma gorjeta",
    tipCopy: "Copiar",
    tipCopied: "Copiado",
  },

  footer: {
    mascotAlt:
      "Um gato branco encolhido em volta de uma planta e uma caneca de café — de algum modo dormindo apesar da música",
    line: "Construído com espresso e música em volume alto.",
    sub: "Matt's Software é uma loja de uma só pessoa. Todos os apps são assinados, autenticados e gratuitos.",
    github: "GitHub",
    allApps: "Todos os apps",
    contact: "Contato",
  },

  channels: {
    appstore: "App Store",
    library: "Biblioteca",
    source: "Código-fonte",
    download: "Baixar",
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
    all: "Todos",
    developerTools: "Ferramentas de desenvolvimento",
    privacySecurity: "Privacidade e segurança",
    utilities: "Utilitários",
    learning: "Aprendizagem",
    design: "Design",
  },

  home: {
    eyebrow: "MATT'S SOFTWARE",
    title: "Apps minúsculos que valem a pena.",
    sub: "Uma loja pequena e curada com mais de {count} apps minúsculos e gratuitos. Um lançador instala todos e os mantém atualizados — ou pegue qualquer um separadamente.",
    downloadLauncher: "Baixar o lançador",
    browseSuite: "Explorar a coleção",
    metaLine: "Grátis · Open source · macOS hoje, mais em breve",
    brandName: "Matt's Software",
    brandSub: "Cada app que construí, num só lugar",
    searchPlaceholder: "Buscar apps…",
    searchAria: "Buscar apps",
    categoriesAria: "Categorias",
    noResults: "Nenhum app corresponde a «{query}».",
    view: "Ver",
  },

  appPage: {
    downloadBtn: "Baixar",
    viewGithub: "Ver no GitHub",
    openInBrowser: "Abrir no navegador",
    featuresHeadingDefault: "O que faz",
    suiteEyebrow: "A coleção",
    suiteHeading: "Mais da loja",
    suiteSub: "Cada um resolve exatamente uma coisa muito bem — instale só o que você precisa.",
    bottomAddToMenuBar: "Adicione {name} à sua barra de menus.",
    bottomGet: "Pegue {name}.",
  },

  featureShowcase: {
    screenshotComingSoon: "Captura de tela em breve",
  },

  apps: {
    espresso: {
      tagline: "Recuse-se a dormir.",
      description:
        "Utilitário para manter acordado na bandeja do sistema: sessões cronometradas ou modo indefinido, mexida sub-pixel do mouse para enganar a detecção de inatividade, e uma tecla global de pânico para parar tudo na hora. Inclui sobrescrita com tampa fechada e estatísticas vitalícias de tempo ativo.",
      catalogTagline: "Seu computador quer dormir. Espresso discorda.",
      catalogDescription:
        "Utilitário que impede seu computador de dormir. Sessões cronometradas, simulação de mexida do mouse, sobrescrita com tampa fechada e atalho de pânico para desativação instantânea.",
      requirements: "macOS  ·  Windows  ·  Linux  ·  Grátis e open source",
      featuresHeading: "Fique acordado. Fique ativo. Fique empregado.",
      features: [
        {
          title: "Acordado, com cronômetro ou para sempre",
          body: "Cronômetros pré-definidos de 5 minutos a 8 horas, ou modo indefinido para quando você fala sério. Mantenha a tela ligada ou deixe-a dormir enquanto o sistema fica acordado.",
        },
        {
          title: "Engane seu indicador de status",
          body: "Mexida sub-pixel do mouse — invisível mas suficiente para enganar a detecção de inatividade no Slack, Teams, Zoom e qualquer app que vigia a inatividade.",
        },
        {
          title: "Botão de pânico incluso",
          body: "Ctrl+Shift+Esc encerra tudo na hora: tela acorda, mexida para, cronômetros cancelam. Sobrescrita com tampa fechada para notebooks. Estatísticas vitalícias rastreiam seu tempo ativo total.",
        },
      ],
      showcase: [
        {
          badge: "Fique acordado",
          title: "Seu computador quer dormir. Espresso discorda.",
          description:
            "Uma pequena dose montada na sua barra de menu que bloqueia o timer de suspensão, mantém a tela acesa (ou não — você decide) e mexe o mouse sub-pixel por sub-pixel para que os detectores de inatividade continuem enganados.",
          bullets: [
            "Bloqueia suspensão de sistema, de tela ou ambas — por sessão",
            "Mexida sub-pixel do mouse engana Slack, Teams, Zoom",
            "Override de tampa fechada mantém tudo rodando, laptop fechado",
            "Estatísticas vitalícias — quanto sono você roubou",
          ],
          imageAlt: "Xícara de espresso 3D protegendo um laptop sonolento",
        },
        {
          badge: "No relógio",
          title: "Sessões cronometradas, ou até você desistir",
          description:
            "Escolha um preset (5 min, 30 min, 2 h, 8 h) ou rode indefinido. O atalho global de pânico desliga tudo na hora — a tela dorme, a mexida para, os timers cancelam.",
          bullets: [
            "Timers de 5 minutos a 8 horas, mais o modo indefinido",
            "Ctrl+Shift+Escape pânico global — tudo desligado, instantaneamente",
            "Contagem regressiva visível na barra de menu",
            "Auto-fim ao bloquear ou fechar a tampa (configurável)",
          ],
          imageAlt: "Ampulheta cromada 3D com areia laranja quente e um botão de pânico vermelho ao lado",
        },
      ],
    },

    stickykeys: {
      tagline: "Trave essas teclas.",
      description:
        "Um pequeno app na barra de menus. Clique para travar o teclado, limpe as teclas com um pano de microfibra sem abrir apps, enviar e-mails ou interromper seu trabalho, depois clique no overlay para destravar. Um overlay fosco em tela cheia cobre cada monitor, o mouse continua ativo, e um destravamento automático de segurança garante que você nunca fique preso.",
      catalogTagline: "Trave o teclado para que um pano de limpeza não dispare atalhos.",
      catalogDescription:
        "Uma trava de teclado na barra de menus para limpeza. Clique para engolir cada tecla, modificador e tecla de mídia no sistema; um overlay fosco em tela cheia cobre cada display, o mouse fica ativo para destravar, e um destravamento automático de segurança garante que você nunca fique preso.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Grátis  ·  Assinado e autenticado com Developer ID",
      featuresHeading: "Limpe as teclas. Não rode nada.",
      features: [
        {
          title: "Trave tudo com um clique",
          body: "Uma captura ativa do teclado engole cada tecla, modificador e tecla de mídia no sistema — limpe as teclas sem disparar um único atalho.",
        },
        {
          title: "Overlay fosco em tela cheia",
          body: "Um blur claro e sem tinta cobre cada display para que você veja num relance que o teclado está travado, com uma contagem regressiva ao vivo do destravamento automático.",
        },
        {
          title: "Destravar só com mouse, nunca preso",
          body: "Destrave pelo botão do overlay ou pelo ícone na barra de menus, e um destravamento automático de segurança dispara não importa o quê para você nunca ficar travado.",
        },
      ],
      showcase: [
        {
          badge: "Trancar tudo",
          title: "Um clique e o teclado se cala",
          description:
            "Uma captura de teclado no nível do sistema engole cada tecla, modificador e tecla de mídia — assim um pano de limpeza não dispara um atalho, envia um e-mail ou fecha o Logic no meio da gravação. Uma sobreposição fosca cobre cada monitor, deixando claro à primeira vista.",
          bullets: [
            "Captura de teclado do sistema — cada tecla, modificador, mídia",
            "Sobreposição fosca em cada monitor com contagem regressiva visível",
            "O mouse continua vivo para desbloquear quando você terminar",
            "Vive na barra de menu — um clique para dentro, um para fora",
          ],
          imageAlt: "Teclado 3D sob um domo de vidro lavanda fosco com um cadeado",
        },
        {
          badge: "Saída segura",
          title: "Você não pode ficar preso",
          description:
            "Um desbloqueio de segurança dispara aconteça o que acontecer — mesmo se a sobreposição falhar, mesmo se a barra de menu travar. A superfície de desbloqueio escuta o mouse, a barra de menu e um timer duro.",
          bullets: [
            "Timer de auto-desbloqueio garante que você nunca fica preso",
            "Três caminhos independentes de desbloqueio: sobreposição, barra, timer",
            "Duração máxima de bloqueio configurável (1 min padrão)",
            "Desenhado paranoico — falha aberto, nunca fechado",
          ],
          imageAlt: "Mostrador cromado 3D com ponteiro lavanda e uma chave flutuando sobre um cadeado aberto",
        },
      ],
    },

    stats: {
      tagline: "Cada sinal. Num olhar.",
      description:
        "Um monitor de sistema nativo na barra de menus. CPU ao vivo por núcleo, pressão de memória, leitura/escrita de disco, rede subindo/descendo e leituras de sensores — além de widgets compactos opcionais que viajam na barra de status e sparklines históricas para cada sinal, para você flagrar um pico sem abrir o Monitor de Atividade.",
      catalogTagline: "Cada sinal do sistema num olhar — na sua barra de menus.",
      catalogDescription:
        "Um monitor de sistema nativo na barra de menus. CPU ao vivo por núcleo, pressão de memória, leitura/escrita de disco, rede subindo/descendo e leituras de sensores — além de widgets compactos e sparklines históricas.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Grátis  ·  Assinado e autenticado com Developer ID",
      featuresHeading: "Veja a máquina inteira. Sem a janela inteira.",
      features: [
        {
          title: "Cada sinal do sistema num olhar",
          body: "CPU por núcleo, pressão de memória (com a divisão com fio/comprimida/app/cache), leitura/escrita de disco, rede subindo/descendo, sensores e uma lista ao vivo dos top processos — tudo num painel compacto na barra de menus.",
        },
        {
          title: "Widgets compactos na barra de menus",
          body: "Escolha quais números (ou uma pequena onda ao vivo) viajam na sua barra de status. Fica visível enquanto você trabalha, nunca no caminho.",
        },
        {
          title: "Sparklines, não planilhas",
          body: "O histórico recente é plotado para cada sinal, então um pico ou processo descontrolado é óbvio sem revirar o Monitor de Atividade.",
        },
      ],
      showcase: [
        {
          badge: "Todos os sinais",
          title: "Cada indicador da sua máquina, em uma olhada",
          description:
            "CPU por núcleo, pressão de memória (com a divisão wired / comprimida / app / cache), leitura e escrita de disco, rede subindo e descendo, leituras de sensores — Stats lê cada sinal que o macOS expõe e prende todos à sua barra de menu.",
          bullets: [
            "Uso de CPU por núcleo e lista de top processos",
            "Pressão de memória com a divisão completa de residência",
            "I/O de disco, throughput de rede e temperaturas de sensores",
            "Fixe qualquer subconjunto como widgets compactos na barra",
          ],
          imageAlt: "Grupo 3D de indicadores cromados e rosados flutuantes e um pequeno sensor de chip",
        },
        {
          badge: "Olhando para trás",
          title: "Sparklines, não planilhas",
          description:
            "O histórico recente é graficado para cada sinal, então um processo descontrolado ou um pico térmico fica óbvio à primeira vista — sem precisar abrir o Monitor de Atividade e esperar repetir.",
          bullets: [
            "Histórico sparkline em tempo real para cada indicador",
            "Janela de histórico configurável — último minuto, hora ou dia",
            "Detecte um pico retroativamente em vez de caçá-lo ao vivo",
            "Toque uma sparkline para ver o processo top daquele momento",
          ],
          imageAlt: "Fita sparkline 3D rosa brilhante com uma esfera cromada no topo",
        },
      ],
    },

    port: {
      tagline: "Cada porta, um clique.",
      description:
        "Um pequeno gerenciador nativo de portas na barra de menus. Veja o que está ouvindo, mate ou pause o processo, encaminhe ou mapeie via NAT-PMP, e observe conexões ativas num mapa ao vivo — clique numa para inspecioná-la no Blip.",
      catalogTagline: "Cada porta aberta no seu Mac, a um clique.",
      catalogDescription:
        "Um gerenciador nativo de portas na barra de menus: veja o que está ouvindo, mate ou pause o processo, encaminhe ou mapeie via NAT-PMP e observe conexões ativas num mapa ao vivo — clique para inspecionar no Blip.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Grátis  ·  Assinado com Developer ID",
      featuresHeading: "Veja. Mate. Encaminhe.",
      features: [
        {
          title: "Cada porta aberta, ao vivo",
          body: "Uma lista na barra de menus de cada porta TCP/UDP em escuta com o processo e o PID por trás, atualizando a cada segundo. Mate, pause (SIGSTOP/SIGCONT) ou deixe.",
        },
        {
          title: "Encaminhamento e mapeamento",
          body: "Faça proxy de qualquer porta local para outra com um encaminhador TCP embutido, exponha-a na sua LAN e atravesse seu roteador com NAT-PMP nativo — sem configuração.",
        },
        {
          title: "Conexões num mapa → Blip",
          body: "Conexões ativas plotadas num mapa ao vivo por onde realmente vão. Clique em qualquer endpoint para abri-lo no Blip para inspeção profunda (ou pegue o Blip se não tiver).",
        },
      ],
      showcase: [
        {
          badge: "Porto",
          title: "Cada porta aberta, a um clique",
          description:
            "Um manifesto vivo na barra de menu de cada porta TCP/UDP escutando — o processo por trás, o PID, o protocolo. Mate, pause (SIGSTOP/SIGCONT), ou apenas observe.",
          bullets: [
            "Atualiza a cada segundo — o que está escutando, agora",
            "Mate, pause ou retome o processo sem sair da barra de menu",
            "A biblioteca de portas conhecidas nomeia serviços comuns na hora",
            "Notifica no instante em que uma porta nova abre",
          ],
          imageAlt: "Porto 3D em miniatura com rebocador, barcaça e veleiro atracados num pequeno cais",
        },
        {
          badge: "Sinal",
          title: "Encaminhe, exponha ou atravesse o roteador",
          description:
            "O forwarder TCP embutido faz proxy de qualquer porta local para outra. NAT-PMP nativo mapeia automaticamente pelo seu roteador. Veja as conexões ativas num mapa — clique num endpoint para inspecioná-lo no Blip.",
          bullets: [
            "Forwarder TCP construído sobre Network.framework — zero dependências",
            "Mapeamento NAT-PMP nativo (RFC 6886) sem configuração",
            "Exponha uma porta na sua LAN com um único toggle",
            "Conexões ativas plotadas no mapa; passe ao Blip com um clique",
          ],
          imageAlt: "Farol 3D em miniatura sinalizando um pequeno pacote de dados azul com seu feixe",
        },
      ],
    },

    alfred: {
      tagline: "Recupere o disco.",
      description:
        "Um manobrista nativo na barra de menus que encontra lixo de desenvolvimento seguro para deletar — node_modules, Cargo target/, caches de build e teste, Xcode DerivedData, caches de gerenciadores de pacotes — ordena do maior para o menor e move para a Lixeira. Recuperável em um clique.",
      catalogTagline: "Recupere o espaço em disco que o lixo de dev está acumulando.",
      catalogDescription:
        "Um manobrista nativo na barra de menus que encontra lixo de desenvolvimento seguro para deletar — node_modules, Cargo target/, caches de build e teste, Xcode DerivedData, caches de gerenciadores de pacotes — ordena do maior para o menor e move para a Lixeira (recuperável).",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Grátis  ·  Assinado com Developer ID",
      featuresHeading: "Encontre. Jogue fora. Pegue o disco de volta.",
      features: [
        {
          title: "Encontre o lixo, o maior primeiro",
          body: "node_modules, Cargo target/, caches de build e teste, Xcode DerivedData, caches Homebrew/Yarn/npm — escaneados, dimensionados e listados do maior para o menor para você saber exatamente o que está engolindo seu disco.",
        },
        {
          title: "Seguro para deletar, por design",
          body: "Alfred só toca em pastas regeneráveis — caches, artefatos de build, árvores de dependências — nunca o código-fonte. Tudo vai para a Lixeira, recuperável em um clique se você mudar de ideia.",
        },
        {
          title: "Da barra de menus",
          body: "Vive como um pequeno app na barra de menus. Escaneie quando quiser, dê uma olhada em quanto recuperou ou deixe como uma ferramenta de limpeza pontual para o próximo alerta de SSD cheio.",
        },
      ],
      showcase: [
        {
          badge: "Ao seu dispor",
          title: "Do maior para o menor, educado, implacável",
          description:
            "Um mordomo na barra de menu que sabe exatamente quais pastas são seguras para liberar. node_modules, Cargo target/, Xcode DerivedData, caches do Homebrew, caches do Yarn — Alfred os encontra, pesa e apresenta numa bandeja de prata.",
          bullets: [
            "Escaneia cada pasta comum de lixo de dev nos seus projetos",
            "Ordenado do maior para o menor para que as vitórias sejam óbvias",
            "Regras de exclusão por pasta para que suas favoritas continuem",
            "Vive na barra de menu — escaneie quando bem entender",
          ],
          imageAlt: "Mordomo 3D em miniatura com faixa verde apresentando uma bandeja de prata com lixo de dev",
        },
        {
          badge: "Seguro por design",
          title: "Recupere os gigabytes, mantenha o código",
          description:
            "Alfred só toca em pastas regeneráveis — caches, artefatos de build, árvores de dependência — nunca seu código fonte. Tudo vai para o Lixo, então um erro está a um clique de ser desfeito.",
          bullets: [
            "Toca apenas em pastas regeneráveis — o código está sempre seguro",
            "Arquivos vão para o Lixo, não para /dev/null",
            "Um clique restaura qualquer coisa que você mudar de ideia",
            "Total acumulado mostra quanto você recuperou",
          ],
          imageAlt: "SSD 3D com um anel LED verde e pequenos pacotes de lixo se afastando",
        },
      ],
    },

    blip: {
      tagline: "Veja o que está saindo.",
      description:
        "Veja exatamente para onde seus dados vão, quem os coleta e desligue-os — tudo num mapa 3D muito bonito.",
      catalogTagline: "Seu computador anda falando pelas suas costas.",
      catalogDescription:
        "Monitoramento de rede em tempo real com um mapa 3D de conexões, firewall inteligente, bloqueio de DNS, roteamento por cabos submarinos e análise de banda. Veja exatamente para onde seus dados vão.",
      requirements: "Grátis e open source",
      featuresHeading: "Um mapa. Um leão de chácara. Uma parede.",
      features: [
        {
          title: "Mapa 3D ao vivo de cada conexão",
          body: "O tráfego de cada app plotado num globo, arcos coloridos por serviço. 200 conexões, mais de 700 cabos submarinos reais, partículas mostrando direção. A internet que você vinha ignorando, tornada visível.",
        },
        {
          title: "Leão de chácara para sua banda",
          body: "Cada app precisa de permissão, sem exceção. O modo restrito bloqueia tudo até você dizer o contrário. Barras de banda por app expõem os comilões de dados. Botão de desligar com um clique.",
        },
        {
          title: "200 mil rastreadores bloqueados antes de conectarem",
          body: "Listas de bloqueio DNS aniquilam domínios de anúncios e rastreadores na hora; log de consultas em tempo real expõe cada busca; ranking de rastreadores nomeia os piores infratores.",
        },
      ],
      showcase: [
        {
          badge: "Mapa de rede",
          title: "200 conexões. Nenhuma pediu permissão.",
          description:
            "Cada app no seu computador está ligando para casa em silêncio. Blip coloca todas num mapa 3D para você assistir ao caos se desenrolar em tempo real.",
          bullets: [
            "Conexões passam por cabos submarinos reais através dos oceanos",
            "Arcos coloridos por serviço — identifique na hora Google, Discord, Apple e centenas mais",
            "Partículas animadas mostram dados fluindo nas duas direções",
            "Traceroute salto a salto mostra o caminho real que seus pacotes tomam",
          ],
          imageAlt: "Mapa de rede 3D do Blip mostrando arcos de conexão",
        },
        {
          badge: "Firewall",
          title: "Leão de chácara para sua banda",
          description:
            "Cada app precisa de permissão. Sem exceção, sem desculpa. O modo restrito bloqueia tudo até você dizer o contrário. Porque seus apps andam confortáveis demais.",
          bullets: [
            "Modo restrito: culpado até provar inocência",
            "Barras de banda por app expõem os comilões de dados",
            "Regras com escopo — permita a porta 443 mas bloqueie tudo mais",
            "Botão de desligar: um clique, zero internet, silêncio instantâneo",
          ],
          imageAlt: "Firewall do Blip mostrando controles de acesso à rede por app",
        },
        {
          badge: "Guarda",
          title: "200.000 rastreadores bloqueados antes mesmo de conectarem",
          description:
            "Seu DNS é um dedo-duro. Cada app, cada SDK de anúncios, cada ping de analytics — Guarda os pega na porta. Veja quem está tentando ligar para casa e desligue-os.",
          bullets: [
            "Listas de bloqueio DNS aniquilam mais de 200 mil domínios de rastreadores e anúncios na hora",
            "Log de consultas em tempo real — assista cada busca ao vivo",
            "Ranking de rastreadores mostra os infratores mais persistentes",
            "Em camadas com o firewall — duas paredes, zero piedade",
          ],
          imageAlt: "Guarda do Blip mostrando bloqueio de DNS e detecção de rastreadores",
        },
        {
          badge: "Visualização",
          title: "A internet são só cabos molhados",
          description:
            "Seu vídeo do YouTube atravessou três oceanos num cabo mais fino que uma mangueira de jardim. Blip mostra exatamente qual — mais de 700 rotas reais de cabos submarinos, brilhando quando seus dados passam por elas.",
          bullets: [
            "Rotas reais de cabos submarinos da TeleGeography mapeadas no fundo do oceano",
            "Cabos ativos se iluminam quando seu tráfego passa por eles",
            "Partículas em marcha mostram a direção de upload vs download",
            "Velocidade baseada em ping — conexões rápidas fluem rápido, lentas se arrastam",
          ],
          imageAlt: "Visualização do Blip mostrando cabos submarinos e fluxo de dados",
        },
        {
          badge: "Traceroute",
          title: "14 saltos por 6 cidades para carregar uma página",
          description:
            "Cada pacote quica por uma dúzia de roteadores antes de chegar. Blip rastreia a rota — salto a salto, cidade a cidade, cabo a cabo — e a pinta no mapa.",
          bullets: [
            "Marcadores salto a salto sobrepostos direto no mapa 3D",
            "Latência colorida: verde é rápido, âmbar tudo bem, vermelho é dor",
            "Rotas por cabos submarinos reais através de travessias oceânicas",
            "Traceroute automático para cada conexão ativa",
          ],
          imageAlt: "Traceroute do Blip mostrando caminho de rede salto a salto",
        },
      ],
    },

    diane: {
      tagline: "Aperte gravar. Fale.",
      description:
        "Um gravador de voz retrô com transcrição ao vivo de voz para texto, biblioteca de fitas cassete e modo ditado. Inspirado nos memorandos em fita do Agente Especial Dale Cooper.",
      catalogTagline: "Estou segurando na minha mão um pequeno gravador de fita.",
      catalogDescription:
        "Um gravador de voz retrô esqueumórfico com transcrição ao vivo de voz para texto, biblioteca de fitas cassete e modo ditado. Inspirado no Agente Especial Dale Cooper.",
      requirements: "Grátis e open source",
      featuresHeading: "Aperte gravar. Fale. Ande.",
      features: [
        {
          title: "Um gravador cassete esqueumórfico",
          body: "Uma barra lateral flutuante com um gravador fotorrealista: bobinas animadas, VU meters e botões físicos. Aperte gravar e fale — atalhos globais permitem gravar de qualquer app.",
        },
        {
          title: "Transcrição ao vivo, no dispositivo",
          body: "SFSpeechRecognizer da Apple transcreve enquanto você fala — sem nuvem, sem chaves de API. Clique em qualquer palavra na transcrição para saltar para aquele momento na gravação.",
        },
        {
          title: "Uma caixa de sapato cheia de fitas",
          body: "Cada gravação é salva como uma fita cassete colorida com seu áudio e transcrição. Role pela sua coleção, carregue qualquer uma, toque a qualquer hora.",
        },
      ],
      showcase: [
        {
          badge: "Gravador de voz",
          title: "Um gravador cassete esqueumórfico para sua mesa",
          description:
            "Uma barra lateral flutuante com um gravador cassete fotorrealista. Aperte gravar e fale. Sua voz é capturada, transcrita ao vivo e salva numa fita cassete que você pode navegar, rebobinar e tocar.",
          bullets: [
            "Gravador cassete fotorrealista com bobinas animadas e VU meters",
            "Grave, toque, rebobine e avance com botões físicos",
            "Bobinas seguem visualmente a posição de reprodução em tempo real",
            "Atalhos globais permitem gravar de qualquer app sem trocar de janela",
          ],
          imageAlt: "Interface do gravador cassete Diane",
        },
        {
          badge: "Transcrição ao vivo",
          title: "Suas palavras, digitadas conforme você as fala",
          description:
            "Diane transcreve sua fala em tempo real usando o reconhecimento de voz no dispositivo da Apple. Sem nuvem, sem chaves de API, sem latência. Só fale e veja as palavras aparecerem.",
          bullets: [
            "Voz para texto ao vivo movido pelo SFSpeechRecognizer do macOS",
            "Processamento totalmente no dispositivo, zero dados saem da sua máquina",
            "Clique em qualquer palavra na transcrição para saltar para aquele momento da gravação",
            "O modo ditado digita suas palavras direto em qualquer campo de texto focado",
          ],
          imageAlt: "Sobreposição de transcrição ao vivo da Diane",
        },
        {
          badge: "Biblioteca de fitas",
          title: "Uma caixa de sapato cheia de fitas cassete",
          description:
            "Cada gravação é salva como uma fita cassete com sua própria variante de cor. Role pela sua coleção, clique para carregar e toque a qualquer hora.",
          bullets: [
            "10 variantes únicas de cor de cassete atribuídas aleatoriamente",
            "Fitas persistem entre sessões com áudio e transcrição completos",
            "Teclas de seta circulam pela sua coleção de fitas",
            "Contagem de palavras exibida em cada etiqueta de fita",
          ],
          imageAlt: "Biblioteca de fitas cassete da Diane",
        },
      ],
    },

    peephole: {
      tagline: "Veja quem está observando.",
      description:
        "Uma sentinela na barra de menus para sua câmera e microfone. Peephole mostra quais apps estão usando-os agora, mantém um histórico de acesso e notifica quando algo os liga — sem permissões especiais, sem extensões de kernel.",
      catalogTagline: "Veja quem está observando.",
      catalogDescription:
        "Uma sentinela na barra de menus para sua câmera e microfone: quais apps estão usando agora, histórico de acesso e uma notificação no instante em que algo os liga.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Grátis  ·  Assinado com Developer ID",
      featuresHeading: "Nada grava sem você saber.",
      features: [
        {
          title: "Status ao vivo da câmera e microfone",
          body: "O glifo da barra de menus muda no instante em que a câmera ou microfone fica ativo, para você sempre saber quando algo está gravando.",
        },
        {
          title: "Histórico de acesso",
          body: "Um log contínuo de qual app usou a câmera ou o microfone e quando — role para trás pela atividade do dia.",
        },
        {
          title: "Notificações",
          body: "Receba um alerta no momento em que um app começa a usar a câmera ou o microfone. Sem permissões especiais, sem extensões de kernel.",
        },
      ],
      showcase: [
        {
          badge: "Olhos & ouvidos",
          title: "Saiba no segundo em que algo começa a observar",
          description:
            "O glifo do Peephole na barra de menu vira no instante em que a câmera ou o microfone esquentam. Toque nele e você vê exatamente qual app os ligou — e decide se aquilo deveria ter acontecido.",
          bullets: [
            "Status ao vivo de câmera e microfone, sempre visível",
            "O glifo vira no instante em que o acesso começa ou termina",
            "Toque para ver o app responsável e seu dispositivo aberto",
            "Sem permissões especiais, sem extensões de kernel — puro userspace",
          ],
          imageAlt: "Webcam cromada 3D com olho-fenda turquesa brilhante e um microfone cromado ao lado",
        },
        {
          badge: "Comprovantes",
          title: "Um registro vivo de cada acesso, com notificação quando importa",
          description:
            "Volte pelo dia de atividade da câmera e do microfone — quem os usou, quando, por quanto tempo. Notificações opcionais disparam no instante em que o acesso começa, então uma ativação surpresa nunca passa despercebida.",
          bullets: [
            "Histórico por app com timestamps e duração",
            "Notificação em cada novo acesso (toggle por dispositivo)",
            "Filtre por app, dispositivo ou janela de tempo",
            "O histórico persiste entre reinícios — nada escapa",
          ],
          imageAlt: "Disco de olho-mágico 3D cromado com uma íris turquesa brilhante e uma pilha de cartões de histórico atrás",
        },
      ],
    },

    quarantine: {
      tagline: "Examine cada download.",
      description:
        "Um inspetor na barra de menus para ~/Downloads. Para cada arquivo novo ele apresenta a URL de origem da quarentena, o status do Gatekeeper/codesign, SHA-256 e um veredito opcional do VirusTotal — depois notifica para você examinar antes de abrir.",
      catalogTagline: "Confie, mas verifique cada download.",
      catalogDescription:
        "Um inspetor na barra de menus para ~/Downloads: origem da quarentena, status do Gatekeeper/codesign, SHA-256 e veredito opcional do VirusTotal para cada arquivo novo, com notificação para examinar.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Grátis  ·  Assinado com Developer ID",
      featuresHeading: "Saiba o que acabou de aterrissar em Downloads.",
      features: [
        {
          title: "Origem e quarentena",
          body: "Veja exatamente de onde um arquivo veio através do seu atributo com.apple.quarantine — o agente que o baixou e a URL de origem.",
        },
        {
          title: "Gatekeeper e hash",
          body: "Avaliação do Codesign/Gatekeeper mais um SHA-256 para cada arquivo novo que aterrissa em ~/Downloads.",
        },
        {
          title: "VirusTotal opcional",
          body: "Adicione uma chave de API e Quarantine mostra um veredito de reputação na linha, para você examinar um download antes mesmo de abrir.",
        },
      ],
      showcase: [
        {
          badge: "Câmara de retenção",
          title: "Cada novo download, isolado até você dar o aval",
          description:
            "No instante em que um arquivo aterrissa em ~/Downloads, o Quarantine o leva para a mesa de inspeção. Você vê exatamente de onde veio — agente, URL de origem, atributo de quarentena — antes de ter dado duplo clique em qualquer coisa.",
          bullets: [
            "Observa ~/Downloads em tempo real via FSEvents",
            "Lê com.apple.quarantine: o app que baixou e a URL de origem",
            "Notifica você a cada nova chegada",
            "Uma linha por arquivo — a fila inteira em uma olhada",
          ],
          imageAlt: "Cápsula de isolamento de vidro 3D com um pacote suspenso dentro e pacotes aprovados/rejeitados em volta",
        },
        {
          badge: "Inspecionar",
          title: "Assinatura, hash e veredito",
          description:
            "Para cada arquivo, o Quarantine mostra a avaliação do Gatekeeper, o status do codesign e o SHA-256. Coloque uma chave de API do VirusTotal e o veredito de reputação aparece inline — confira antes de abrir.",
          bullets: [
            "Avaliação spctl + codesign --display em uma única linha",
            "SHA-256 calculado na chegada — pronto para copiar e colar",
            "Veredito VirusTotal opcional inline (BYO API key)",
            "Revele no Finder ou jogue no Lixo direto pelo menu",
          ],
          imageAlt: "Lupa cromada 3D sobre uma pasta creme com um selo dourado ao lado",
        },
      ],
    },

    sentry: {
      tagline: "Vigie os cantos escuros.",
      description:
        "Um auditor na barra de menus para a persistência do macOS. Enumera LaunchAgents e Daemons, itens de login, cron e arquivos de inicialização do shell, verifica a assinatura de código e autenticação de cada alvo e alerta no instante em que um item novo ou modificado aparece — depois deixa você inspecionar, bloquear ou restaurar, direto da barra de menus.",
      catalogTagline: "Saiba o momento em que algo se enraíza.",
      catalogDescription:
        "Um auditor na barra de menus para a persistência do macOS — LaunchAgents, itens de login, cron e arquivos de inicialização do shell — com verificações de assinatura e alertas quando algo novo ou modificado aparece. Inspecione, bloqueie ou restaure qualquer um deles.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Grátis  ·  Assinado com Developer ID",
      featuresHeading: "Vigie os lugares onde o malware se esconde.",
      features: [
        {
          title: "Cada vetor de persistência",
          body: "LaunchAgents e Daemons, itens de login, cron e arquivos de inicialização do shell — cada lugar onde algo pode se enraizar para sobreviver a um reboot, numa lista única na barra de menus.",
        },
        {
          title: "Consciente de assinaturas",
          body: "Cada binário alvo é classificado como autenticado / assinado / não assinado via spctl e codesign, então um launch agent não assinado se destaca na hora.",
        },
        {
          title: "Alertas em mudança, bloqueie o que não devia estar lá",
          body: "Diff de snapshots notifica no instante em que um novo item de persistência aparece ou muda. Inspecione o plist ou script, depois bloqueie — Sentry descarrega e o coloca de lado como .sentry-disabled. Reversível em um clique.",
        },
      ],
      showcase: [
        {
          badge: "Torre de vigia",
          title: "Cada canto escuro, iluminado",
          description:
            "LaunchAgents & Daemons, itens de login, cron e arquivos de inicialização do shell — o Sentry mantém uma lanterna sobre cada lugar onde algo poderia silenciosamente se enraizar. Uma lista na barra de menu, com assinatura verificada, pronta para inspecionar.",
          bullets: [
            "Enumera cada vetor de persistência do macOS num único painel",
            "Cada alvo classificado notarizado / assinado / sem assinatura via spctl + codesign",
            "Abra o plist ou script direto da linha",
            "Vive na barra de menu — sem janela para manter no topo",
          ],
          imageAlt: "Lanterna 3D cromada com um cristal violeta brilhante e amuletos de olho",
        },
        {
          badge: "Manifesto",
          title: "Note o instante em que algo novo aparece",
          description:
            "O Sentry tira um snapshot do seu estado de persistência e tira o diff. No instante em que um novo agente, item de login ou mudança de rc aterrissa, você é notificado — com um bloqueio de um clique, totalmente reversível.",
          bullets: [
            "O diff de snapshot captura cada item de persistência novo ou alterado",
            "Bloquear descarrega o item e o deixa de lado como .sentry-disabled",
            "Restaure com um clique — nada destrutivo acontece com seu sistema",
            "A notificação dá um tapinha no seu ombro antes do próximo reinício",
          ],
          imageAlt: "Pergaminho 3D com selos de cera violetas sobre uma estante cromada, com um sino de alarme cromado",
        },
      ],
    },

    fishbones: {
      tagline: "Transforme qualquer livro técnico em curso interativo.",
      description:
        "Jogue um PDF ou EPUB e o Libre gera lições, exercícios e testes ocultos. Dezesseis linguagens com um editor, um tutor de IA local no seu laptop, fogo de série que sobrevive aos fins de semana e dezessete temas.",
      catalogTagline: "Transforme qualquer livro técnico em curso interativo.",
      catalogDescription:
        "Jogue um PDF ou EPUB e o Libre gera lições, exercícios e testes ocultos. Dezesseis linguagens com um editor, um tutor de IA local no seu laptop, fogo de série que sobrevive aos fins de semana e dezessete temas.",
      requirements: "Grátis e open source",
      featuresHeading: "Aprenda de qualquer livro.",
      features: [],
    },

    tap: {
      tagline: "Servidores no seu pulso.",
      description:
        "Execute comandos SSH pré-configurados em servidores remotos do seu Apple Watch. Toque, confirme, pronto. Funciona com celular, suporta Siri e criptografa tudo de ponta a ponta.",
      catalogTagline: "O controle remoto de comandos para sua infraestrutura.",
      catalogDescription:
        "Execute comandos SSH pré-configurados em servidores remotos do seu Apple Watch. Funciona com celular, suporta Siri e criptografa tudo de ponta a ponta.",
      requirements: "watchOS  ·  iOS  ·  iPadOS  ·  macOS  ·  Grátis e open source",
      featuresHeading: "Um controle remoto para seus servidores — no seu pulso.",
      features: [
        {
          title: "Um app de relógio de verdade, não um shim de notificação",
          body: "Lista nativa de servidores no watchOS com pontos de status ao vivo, comandos fixados via o Botão de Ação, confirmação para comandos perigosos e saída rolável com a Digital Crown. Pronto para celular — sem telefone necessário.",
        },
        {
          title: "Companion + Mac, em sintonia",
          body: "Apps completos para iPhone, iPad e Mac Catalyst. Adicione servidores, configure comandos e suítes de comandos, veja o histórico, gerencie chaves SSH. Tudo sincroniza para o relógio em tempo real.",
        },
        {
          title: "Suítes, alertas, Siri, complicações",
          body: 'Junte comandos em suítes de um toque. Pings de saúde de 30 segundos e alertas APNs quando algo morre. Cinco complicações de mostrador. "E aí, Siri, Tap reinicia prod-api."',
        },
      ],
      showcase: [
        {
          badge: "App do relógio",
          title: "Reinicie produção do seu pulso.",
          description:
            "App nativo do watchOS com lista de servidores, execução de comandos e retorno háptico. Toque um comando, confirme, pronto. Saída real rolável com a Digital Crown. Funciona com celular — sem telefone necessário.",
          bullets: [
            "Lista de servidores com pontos de status ao vivo (verde/vermelho)",
            "Comandos fixados para acesso rápido via Botão de Ação",
            "Visualização de confirmação para comandos perigosos",
            "Saída truncada, rolável com a Digital Crown",
          ],
          imageAlt: "App do relógio Tap mostrando comandos de servidor",
        },
        {
          badge: "Companion",
          title: "Configure tudo do seu telefone.",
          description:
            "App completo de gerenciamento para iPhone, iPad e Mac Catalyst. Adicione servidores, configure comandos, gerencie chaves SSH, veja o histórico e configure suítes de comandos. Tudo sincroniza para o relógio na hora.",
          bullets: [
            "Painel com grade de saúde de servidores e feed de atividade",
            "Editor visual de comandos com biblioteca de templates",
            "Terminal SSH interativo completo via WebView",
            "Gera código QR para pareamento instantâneo do relógio",
          ],
          imageAlt: "Painel do app companion Tap",
        },
        {
          badge: "Suítes",
          title: "Rode 5 comandos com um toque.",
          description:
            "Agrupe comandos relacionados em suítes para fluxos de deploy de um toque. Cada passo mostra sucesso/falha em tempo real. Configure se deve continuar em caso de falha ou parar na hora.",
          bullets: [
            "Execução ordenada de passos com rastreamento de progresso",
            "Toggle de continuar-em-caso-de-falha por passo",
            "Progresso da suíte transmitido via WebSocket",
            "Perfeito para sequências de deploy e rotinas de health check",
          ],
          imageAlt: "Progresso de execução de suíte Tap no relógio",
        },
        {
          badge: "Alertas",
          title: "Saiba antes dos seus usuários.",
          description:
            "Pings de saúde em segundo plano a cada 30 segundos. Quando um servidor cai, você recebe uma notificação push imediata no seu relógio e telefone. Toggle por servidor para você só receber alertas do que importa.",
          bullets: [
            "Loop de ping de saúde de 30 segundos com rastreamento de latência",
            "Push APNs para relógio + telefone na mudança de status",
            "Toggle de notificação por servidor",
            "Padrão de alerta háptico no Apple Watch",
          ],
          imageAlt: "Notificação de servidor caído Tap no relógio",
        },
        {
          badge: "Complicações",
          title: "Saúde de servidor num olhar no seu mostrador.",
          description:
            "Cinco complicações configuráveis que mostram métricas de servidor ao vivo direto no seu mostrador. Escolha qual servidor e métrica mostrar. Os dados sincronizam automaticamente do app.",
          bullets: [
            "Status do servidor: contagem up/down da frota inteira",
            "Métricas de frota: disco, memória ou CPU por servidor",
            "Docker: contagens de containers em execução",
            "Uptime: exibição de uptime por servidor",
            "Comandos rápidos: comandos fixados num olhar",
          ],
          imageAlt: "Complicações Tap no relógio mostrando métricas de servidor",
        },
        {
          badge: "macOS",
          title: "Controle total da sua barra de menus.",
          description:
            "App nativo do macOS para acesso rápido ao servidor. Monitore sua frota, execute comandos e gerencie configurações sem abrir um navegador. Entre com a Apple para configuração sem fricção.",
          bullets: [
            "Presença na barra de menus para acesso instantâneo",
            "Execução completa de comandos com exibição de saída",
            "Importação de configuração de servidor de JSON",
            "Autenticação Apple Sign-In",
          ],
          imageAlt: "App macOS Tap mostrando painel de servidor",
        },
        {
          badge: "Siri",
          title: '"E aí, Siri, Tap reinicia prod-api."',
          description:
            "Integração completa com App Intents. Rode qualquer comando por voz. Verifique status do servidor sem usar as mãos. Siri confirma a ação e reporta o resultado. Funciona do relógio, telefone ou CarPlay.",
          bullets: [
            "Linguagem natural: 'Tap reinicia nginx em prod'",
            "Verificação de status do servidor: 'Verifique meus servidores no Tap'",
            "Diálogo de confirmação antes da execução",
            "Resultado reportado por resposta de voz",
          ],
          imageAlt: "Siri rodando um comando Tap",
        },
      ],
      stats: [
        { value: "< 3s", label: "Tempo de execução" },
        { value: "Celular", label: "Sem telefone" },
        { value: "AES-256", label: "Criptografia de chaves" },
        { value: "MIT", label: "Open source" },
      ],
      threeSecondsHeading: "Três segundos. É isso.",
      threeSecondsSub: "Do pulso ao servidor e de volta.",
      stepTap: "Toque",
      stepConfirm: "Confirme",
      stepDone: "Pronto",
      archHeading: "Arquitetura",
      archWatch: "Relógio",
      archRelay: "Relay",
      archServers: "Seus servidores",
      archCompanion: "Companion",
      archMac: "macOS",
      securityHeading: "Modelo de segurança",
      securityCards: [
        {
          title: "Chaves em repouso",
          body: "Chaves SSH criptografadas com AES-256-GCM. Frase mestra derivada via Argon2id. Chaves só existem descriptografadas em memória enquanto o relay roda.",
        },
        {
          title: "Auth por token",
          body: "Tokens Bearer por dispositivo, hash Argon2. TOTP 2FA opcional para operações destrutivas. Tokens são revogáveis na hora.",
        },
        {
          title: "TLS em todo lugar",
          body: "Renovação automática Let's Encrypt embutida. Todo o tráfego criptografado em trânsito. Opção de certificate pinning para relays auto-hospedados.",
        },
        {
          title: "Segurança do relógio",
          body: "Token armazenado no Watch Keychain criptografado por hardware. Detecção de pulso bloqueia automaticamente. Sem dados sensíveis em cache no dispositivo.",
        },
      ],
      templatesHeading: "27 templates embutidos",
      templatesSub: "Comandos comuns pré-configurados. Escolha um template, preencha os espaços, pronto.",
      templateCategories: {
        system: "Sistema",
        docker: "Docker",
        systemd: "Systemd",
        deploy: "Deploy",
        nginx: "Nginx",
        network: "Rede",
      },
      useCasesHeading: "Feito para os momentos entre",
      useCases: [
        "Reinicie um serviço que caiu no parque de cachorros",
        "Rode um health check durante uma reunião",
        "Faça deploy da academia",
        "Verifique espaço em disco da cama",
        "Verifique status do servidor do carro (Siri)",
        "Enfileire comandos antes da decolagem, execute no pouso",
      ],
      techHeading: "Stack tecnológico",
      techStack: {
        watch: { label: "Relógio", value: "Swift + SwiftUI + WidgetKit + AppIntents" },
        macos: { label: "macOS", value: "Swift + SwiftUI + Barra de menus" },
        companion: { label: "Companion", value: "React Native + TypeScript + Base RN" },
        relay: { label: "Relay", value: "Rust + axum + russh + SQLite" },
        encryption: { label: "Criptografia", value: "AES-256-GCM + Argon2id" },
        tls: { label: "TLS", value: "rustls + Let's Encrypt" },
        notifications: { label: "Notificações", value: "APNs + toggle por servidor" },
      },
      quickSetup: "Guia de configuração rápida",
      relayConfig: "Configuração do Relay",
      ctaHeading: "Seus servidores estão esperando.",
      ctaSub: "Grátis para sempre. Open source. Sem telefone necessário.",
      ctaGithub: "Ver no GitHub",
    },

    base: {
      tagline: "Primitivas. Tokens. Pronto.",
      description:
        "70 primitivas, 8 categorias de tokens de design, modo escuro e zero opiniões sobre seu stack. Componentes React limpos e componíveis que funcionam em todo lugar — incluindo o lançador.",
      catalogTagline: "Kit de design universal — monocromo, agnóstico de plataforma.",
      catalogDescription:
        "70 primitivas, 8 categorias de tokens de design, modo escuro e zero opiniões sobre seu stack. Componentes React limpos e componíveis que funcionam em todo lugar — incluindo o lançador.",
      requirements: "Grátis e open source  ·  React  ·  TypeScript",
      featuresHeading: "As primitivas. Os tokens. O interruptor.",
      ctaLabel: "Ver código-fonte",
      features: [
        {
          title: "70 primitivas prontas para produção",
          body: "Formulários, layout, dados, feedback — cada primitiva que você precisa, nenhuma que não. Inputs, tabelas, calendários, sparklines, tree views, color pickers, dialogs e mais.",
        },
        {
          title: "Um sistema de tokens, toda plataforma",
          body: "Cor, tipografia, espaçamento, raio, elevação, animação e glassmorphism — tudo definido como tokens TypeScript que exportam para variáveis CSS ou estilos React Native.",
        },
        {
          title: "Claro e escuro de fábrica",
          body: "Cada componente respeita o modo de cor automaticamente — detecção de preferência do sistema, toggle manual com localStorage e glassmorphism que se adapta nos dois modos.",
        },
      ],
      showcase: [
        {
          badge: "70 primitivas",
          title: "Cada componente que você precisa, nenhum que não",
          description:
            "De botões e inputs a tree views, color pickers e sparklines — 70 primitivas prontas para produção construídas com TypeScript e zero dependências externas além do React.",
          bullets: [
            "Formulários: input, textarea, select, checkbox, radio, pin-input, number-input, color-picker",
            "Layout: grid, stack, container, center, spacer, separator",
            "Dados: table, calendar, timeline, carousel, sparkline, tree-view",
            "Feedback: toast, alert, dialog, sheet, popover, skeleton, spinner, progress",
          ],
          imageAlt: "Biblioteca de componentes primitivos Base",
        },
        {
          badge: "Tokens de design",
          title: "Um sistema de tokens, toda plataforma",
          description:
            "Cor, tipografia, espaçamento, raio, elevação, animação e glassmorphism — tudo definido como tokens TypeScript que exportam para variáveis CSS ou estilos React Native.",
          bullets: [
            "Paleta de cores monocromática com aliases semânticos",
            "Tokens de glassmorphism para efeitos de vidro fosco",
            "Escala tipográfica com dimensionamento fluido responsivo",
            "Exportação para propriedades customizadas CSS ou React Native StyleSheet",
          ],
          imageAlt: "Tokens de design Base",
        },
        {
          badge: "Modo escuro",
          title: "Claro e escuro, embutidos desde o primeiro dia",
          description:
            "Cada componente respeita o modo de cor de fábrica. Sem configuração adicional, sem theme wrappers para esquecer — só funciona com preferências do sistema ou toggle manual.",
          bullets: [
            "Detecção automática de preferência do sistema",
            "Toggle manual com persistência localStorage",
            "Todas as 70 primitivas testadas em ambos os modos",
            "Efeitos de glassmorphism se adaptam ao modo de cor",
          ],
          imageAlt: "Suporte a modo escuro Base",
        },
      ],
    },
  },

  legal: {
    privacyTitle: "Política de Privacidade",
    termsTitle: "Termos de Serviço",
    eulaTitle: "Contrato de Licença de Usuário Final",
    tapTagline: "Tap — Relay de Comandos SSH",
    effectiveDate: "Data de entrada em vigor: 14 de abril de 2026",
    navPrivacy: "Política de Privacidade",
    navTerms: "Termos de Serviço",
    navEula: "EULA",

    privacy: {
      intro:
        'A Matt\'s Software ("nós", "nos", "nosso") opera o Tap, uma aplicação de relay de comandos SSH para Apple Watch, iPhone e Mac. Esta Política de Privacidade explica quais informações coletamos, como as usamos e seus direitos sobre seus dados. A Matt\'s Software tem sede nos Estados Unidos.',
      collectHeading: "Informações que coletamos",
      accountHeading: "Informações da conta",
      accountBody:
        "Quando você faz login com Apple Sign-In, recebemos seu endereço de e-mail Apple ID (ou o endereço de relay privado que a Apple fornece em seu nome). Esta é a única informação pessoalmente identificável que coletamos e é usada exclusivamente para autenticá-lo com seu servidor relay.",
      relayHeading: "Dados do relay auto-hospedado",
      relayBody:
        "O Tap armazena metadados de conexão, chaves SSH criptografadas, histórico de comandos e resultados de execução no servidor relay que você mesmo hospeda e opera. Não temos acesso a esses dados. Como você controla o relay, você controla seus dados.",
      useHeading: "Como usamos as informações",
      useBody:
        "Seu endereço de e-mail Apple ID é usado exclusivamente para autenticar sua conta. Não o usamos para marketing, newsletters ou qualquer outro propósito. Não o combinamos com dados de outras fontes.",
      storageHeading: "Armazenamento e segurança de dados",
      storageBody1:
        "Chaves SSH armazenadas em seu relay são criptografadas em repouso usando AES-256-GCM. Todos os dados do relay — metadados de conexão, logs de comandos e chaves — residem inteiramente em sua própria infraestrutura. A Matt's Software não opera servidores centrais que armazenem seus dados.",
      storageBody2:
        "Como o relay é auto-hospedado, a segurança dos seus dados depende em última instância de como você configura e mantém seu servidor. Recomendamos manter seu software relay atualizado e seguir práticas padrão de fortalecimento de servidor.",
      thirdPartyHeading: "Serviços de terceiros",
      thirdPartyBody:
        "O Tap usa Apple Sign-In para autenticação. A política de privacidade da Apple rege os dados que a Apple coleta durante o processo de login. Além do Apple Sign-In, o Tap não se integra com nenhum serviço de análise, publicidade ou rastreamento de terceiros.",
      notDoHeading: "O que não fazemos",
      notDoList: [
        "Não executamos análise ou rastreamento de qualquer tipo",
        "Não compartilhamos dados com terceiros",
        "Não veiculamos anúncios",
        "Não coletamos telemetria de uso",
        "Não temos acesso ao seu servidor relay ou aos seus dados",
        "Não vendemos ou alugamos suas informações pessoais",
      ],
      retentionHeading: "Retenção e exclusão de dados",
      retentionBody:
        "Você pode excluir sua conta e todos os dados associados de dentro do app Tap a qualquer momento. Como os dados são armazenados no seu relay, você também tem acesso direto para removê-los do seu servidor quando escolher.",
      childrenHeading: "Privacidade de crianças",
      childrenBody:
        "O Tap não é destinado a crianças menores de 13 anos. Não coletamos intencionalmente informações pessoais de crianças menores de 13 anos. Se você acredita que uma criança nos forneceu informações pessoais, entre em contato e tomaremos medidas para excluí-las.",
      changesHeading: "Mudanças nesta política",
      changesBody:
        "Podemos atualizar esta Política de Privacidade de tempos em tempos. Quando o fizermos, publicaremos a política revisada nesta página com uma nova data de entrada em vigor. Seu uso continuado do Tap após as mudanças publicadas constitui aceitação da política atualizada.",
      contactHeading: "Entre em contato",
      contactBody:
        "Se você tem dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato em",
    },

    terms: {
      acceptHeading: "Aceitação dos termos",
      acceptBody:
        'Ao baixar, instalar ou usar o Tap ("o App"), você concorda em ficar vinculado a estes Termos de Serviço ("Termos"). Se você não concorda com estes Termos, não use o App. Estes Termos constituem um acordo legal entre você e a Matt\'s Software ("nós", "nos", "nosso"), com sede nos Estados Unidos.',
      descriptionHeading: "Descrição do serviço",
      descriptionBody:
        "O Tap é uma aplicação de relay de comandos SSH para Apple Watch, iPhone e Mac. Permite executar comandos em servidores remotos através de um servidor relay que você mesmo hospeda e opera. A Matt's Software fornece a aplicação cliente e o software relay. Não operamos, gerenciamos ou temos acesso ao seu servidor relay ou aos servidores aos quais você se conecta.",
      accountsHeading: "Contas de usuário",
      accountsBody:
        "O Tap usa Apple Sign-In para autenticação. Cada pessoa pode manter uma conta. Você é responsável por manter a segurança da sua conta e por toda a atividade que ocorre sob ela. Você não deve compartilhar suas credenciais de conta ou permitir que outros acessem sua conta.",
      responsibilitiesHeading: "Responsabilidades do usuário",
      serversHeading: "Seus servidores",
      serversBody:
        "Você é responsável pelos servidores aos quais se conecta através do Tap. Isso inclui garantir que você tem autorização adequada para acessar esses servidores e que seu uso cumpre todas as políticas e leis aplicáveis.",
      commandsHeading: "Seus comandos",
      commandsBody:
        "O Tap é uma ferramenta que executa os comandos que você fornece. Você aceita total responsabilidade por cada comando que executa através do Tap e suas consequências. A Matt's Software não é responsável pelo resultado de comandos executados via o App.",
      relayHeading: "Seu relay",
      relayBody:
        "O servidor relay do Tap é auto-hospedado em sua infraestrutura. Você é responsável por proteger seu relay, mantê-lo atualizado e gerenciar o acesso a ele. A Matt's Software não opera, monitora ou mantém seu relay.",
      acceptableHeading: "Uso aceitável",
      acceptableIntro: "Você concorda em não usar o Tap para:",
      acceptableList: [
        "Obter acesso não autorizado a qualquer sistema, rede ou dados",
        "Violar qualquer lei local, estadual, nacional ou internacional aplicável",
        "Transmitir malware, vírus ou outro código nocivo",
        "Interferir ou interromper a integridade ou desempenho de qualquer sistema",
        "Assediar, abusar ou prejudicar outra pessoa ou entidade",
        "Engajar em qualquer atividade fraudulenta, enganosa ou enganosa",
      ],
      ipHeading: "Propriedade intelectual",
      ipBody:
        "A aplicação Tap, incluindo seu design, código e documentação, é propriedade da Matt's Software e está protegida pelas leis de propriedade intelectual aplicáveis. Seu uso do Tap não concede a você propriedade sobre nenhuma propriedade intelectual no App. Seus dados, configurações e conteúdo armazenados no seu servidor relay permanecem seus.",
      warrantyHeading: "Isenção de garantias",
      warrantyBody:
        'O Tap é fornecido "como está" e "conforme disponível" sem garantia de qualquer tipo, expressa ou implícita, incluindo mas não se limitando a garantias de comerciabilidade, adequação a um propósito particular e não-violação. A Matt\'s Software não garante que o App será ininterrupto, livre de erros, seguro ou disponível em qualquer momento particular.',
      liabilityHeading: "Limitação de responsabilidade",
      liabilityBody:
        "Na máxima extensão permitida pela lei aplicável, a Matt's Software não será responsável por danos indiretos, incidentais, especiais, consequenciais ou punitivos, ou qualquer perda de dados, lucros, receita ou oportunidades de negócio, decorrentes ou relacionados ao seu uso do Tap, independentemente da teoria de responsabilidade.",
      terminationHeading: "Rescisão",
      terminationBody:
        "Você pode excluir sua conta e parar de usar o Tap a qualquer momento. A Matt's Software se reserva o direito de suspender ou rescindir seu acesso ao App a qualquer momento, com ou sem aviso, por conduta que acreditamos violar estes Termos ou de outra forma ser prejudicial a outros usuários ou a nós.",
      governingHeading: "Lei aplicável",
      governingBody:
        "Estes Termos serão regidos e interpretados de acordo com as leis dos Estados Unidos, sem consideração a princípios de conflito de leis. Quaisquer disputas decorrentes destes Termos ou do seu uso do Tap serão resolvidas nos tribunais dos Estados Unidos.",
      changesHeading: "Mudanças nestes termos",
      changesBody:
        "Podemos atualizar estes Termos de tempos em tempos. Quando o fizermos, publicaremos os Termos revisados nesta página com uma nova data de entrada em vigor. Seu uso continuado do Tap após as mudanças publicadas constitui aceitação dos Termos atualizados.",
      contactHeading: "Contato",
      contactBody: "Se você tem dúvidas sobre estes Termos, entre em contato em",
    },

    eula: {
      intro:
        'Este Contrato de Licença de Usuário Final ("Contrato") é um acordo legal entre você e a Matt\'s Software ("nós", "nos", "nosso"), com sede nos Estados Unidos, para o uso do Tap ("o App"). Ao instalar ou usar o App, você concorda em ficar vinculado a este Contrato.',
      licensedHeading: "Aplicação licenciada",
      licensedBody:
        "O Tap é uma aplicação de relay de comandos SSH para Apple Watch, iPhone e Mac, desenvolvida e publicada pela Matt's Software. O App permite executar comandos em servidores remotos através de um servidor relay que você mesmo hospeda.",
      scopeHeading: "Escopo da licença",
      scopeBody:
        "A Matt's Software concede a você uma licença limitada, não-exclusiva, intransferível e revogável para baixar, instalar e usar o App em dispositivos que você possui ou controla, de acordo com este Contrato e os Termos e Condições do Apple Media Services.",
      scopeIntro: "Esta licença não permite que você:",
      scopeList: [
        "Distribua, sublicencie, alugue, arrende ou empreste o App a terceiros",
        "Faça engenharia reversa, descompile, desmonte ou tente derivar o código-fonte do App",
        "Modifique, adapte, traduza ou crie trabalhos derivados baseados no App",
        "Remova, altere ou obscureça qualquer aviso de direitos autorais, marca registrada ou outros avisos proprietários no App",
        "Use o App para qualquer propósito que seja ilegal ou proibido por este Contrato",
      ],
      relayHeading: "Relay auto-hospedado",
      relayBody:
        "O Tap se conecta a um servidor relay que você hospeda e opera em sua própria infraestrutura. A Matt's Software não fornece, gerencia ou mantém seu servidor relay. Não somos responsáveis por quaisquer problemas decorrentes da configuração, operação, segurança ou disponibilidade do seu servidor relay ou de quaisquer servidores remotos aos quais você se conecta através do App.",
      ownershipHeading: "Propriedade",
      ownershipBody:
        "O App e todos os direitos de propriedade intelectual relacionados são e permanecerão propriedade da Matt's Software. Este Contrato não concede a você qualquer interesse de propriedade no App. Seus dados, configurações e conteúdo armazenados no seu servidor relay permanecem seus.",
      terminationHeading: "Rescisão",
      terminationBody:
        "Esta licença é eficaz até ser rescindida. Seus direitos sob este Contrato serão automaticamente rescindidos sem aviso se você não cumprir com qualquer um de seus termos. Após a rescisão, você deve parar de usar o App e excluir todas as cópias dos seus dispositivos. A Matt's Software também pode rescindir esta licença a qualquer momento por qualquer motivo.",
      warrantyHeading: "Isenção de garantias",
      warrantyBody:
        'O App é fornecido "como está" e "conforme disponível" sem garantia de qualquer tipo, expressa ou implícita, incluindo mas não se limitando a garantias de comerciabilidade, adequação a um propósito particular e não-violação. A Matt\'s Software não garante que o App será ininterrupto, livre de erros ou livre de componentes nocivos.',
      liabilityHeading: "Limitação de responsabilidade",
      liabilityBody:
        "Na máxima extensão permitida pela lei aplicável, a Matt's Software não será responsável por danos indiretos, incidentais, especiais, consequenciais ou punitivos, ou qualquer perda de dados, lucros ou receita, decorrentes ou relacionados ao seu uso do App, independentemente da teoria de responsabilidade.",
      governingHeading: "Lei aplicável",
      governingBody:
        "Este Contrato será regido e interpretado de acordo com as leis dos Estados Unidos, sem consideração a princípios de conflito de leis.",
      contactHeading: "Contato",
      contactBody: "Se você tem dúvidas sobre este Contrato, entre em contato em",
    },
  },

  notFound: {
    altText:
      "Uma cobra fita vermelha com um capacete colonial sentada numa pedra em forma de ponto de interrogação, cercada por placas em branco",
    title: "Esta página se perdeu.",
    sub: "As placas estão em branco. A cobra também não sabe. Vamos te levar de volta a algo que existe.",
    backToSuite: "Voltar à coleção",
    rummageGithub: "Ou vasculhe no GitHub",
  },
};
