/// Korean translations. Mirrors en.ts shape.

import type { Translation } from "../types";

export const ko: Translation = {
  meta: {
    siteTitle: "Matt's Software — 제 몫을 하는 작은 앱들",
    siteDescription:
      "작고 무료이며 오픈 소스인 앱들의 작은 가게. 런처 하나로 전부 설치하고 자동 업데이트합니다.",
    htmlLang: "ko",
    direction: "ltr",
  },

  langSelector: {
    label: "언어",
    selectLanguage: "언어 선택",
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
    apps: "앱",
    appsAllLabel: "모든 앱",
    launcher: "런처",
    githubAria: "GitHub",
    suiteFooter: "{count}개의 앱, 하나의 런처.",
    getLauncher: "런처 받기",
    tipLabel: "팁",
    tipTitle: "팁 보내기",
    tipCopy: "복사",
    tipCopied: "복사됨",
  },

  footer: {
    mascotAlt:
      "청사진과 커피잔 주위에 몸을 만 흰 고양이 — 음악 속에서도 어쩐지 잠들어 있다",
    line: "에스프레소와 시끄러운 음악으로 만들었습니다.",
    sub: "Matt's Software는 1인 가게입니다. 모든 앱은 서명되고 공증되었으며 무료입니다.",
    github: "GitHub",
    allApps: "모든 앱",
    contact: "연락처",
  },

  channels: {
    appstore: "App Store",
    library: "라이브러리",
    source: "소스",
    download: "다운로드",
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
    all: "전체",
    developerTools: "개발자 도구",
    privacySecurity: "프라이버시 및 보안",
    utilities: "유틸리티",
    learning: "학습",
    design: "디자인",
  },

  home: {
    eyebrow: "MATT'S SOFTWARE",
    title: "제 몫을 하는 작은 앱들.",
    sub: "엄선된 {count}개 이상의 작고 무료인 앱들의 작은 가게. 런처 하나로 전부 설치하고 자동 업데이트합니다 — 또는 개별로 받을 수도 있습니다.",
    downloadLauncher: "런처 다운로드",
    browseSuite: "모음집 둘러보기",
    metaLine: "무료 · 오픈 소스 · 오늘 macOS, 더 많은 플랫폼 곧 지원",
    brandName: "Matt's Software",
    brandSub: "제가 만든 모든 앱을 한 곳에서",
    searchPlaceholder: "앱 검색…",
    searchAria: "앱 검색",
    categoriesAria: "카테고리",
    noResults: "「{query}」와(과) 일치하는 앱이 없습니다.",
    view: "보기",
  },

  appPage: {
    downloadBtn: "다운로드",
    viewGithub: "GitHub에서 보기",
    openInBrowser: "브라우저에서 열기",
    featuresHeadingDefault: "할 수 있는 것",
    suiteEyebrow: "모음집",
    suiteHeading: "가게에서 더 보기",
    suiteSub: "각각이 하나의 일을 제대로 합니다 — 필요한 것만 설치하세요.",
    bottomAddToMenuBar: "{name}을(를) 메뉴 막대에 추가하세요.",
    bottomGet: "{name} 받기.",
  },

  featureShowcase: {
    screenshotComingSoon: "스크린샷 곧 공개",
  },

  apps: {
    espresso: {
      tagline: "잠들기를 거부하라.",
      description:
        "시스템 트레이용 깨어 있기 유틸리티: 시간 지정 세션 또는 무제한 모드, 유휴 감지를 속이는 서브픽셀 마우스 움직임, 모든 것을 즉시 멈추는 전역 비상 단축키. 덮개 닫힘 무시와 평생 가동 시간 통계 포함.",
      catalogTagline: "당신의 컴퓨터는 자고 싶어합니다. Espresso는 동의하지 않습니다.",
      catalogDescription:
        "컴퓨터가 잠들지 못하게 하는 깨어 있기 유틸리티. 시간 지정 세션, 마우스 움직임 시뮬레이션, 덮개 닫힘 무시, 즉시 비활성화 비상 단축키.",
      requirements: "macOS  ·  Windows  ·  Linux  ·  무료 & 오픈 소스",
      featuresHeading: "깨어 있어라. 활동하라. 고용되어 있어라.",
      features: [
        {
          title: "타이머로 또는 영원히 깨어 있기",
          body: "5분에서 8시간까지 사전 설정된 타이머, 또는 진지할 때를 위한 무제한 모드. 디스플레이를 켜두거나 시스템이 깨어 있는 동안 디스플레이만 잠들게 하세요.",
        },
        {
          title: "상태 표시기를 속여라",
          body: "서브픽셀 마우스 움직임 — 보이지 않지만 Slack, Teams, Zoom 및 유휴를 감시하는 모든 앱의 유휴 감지를 속이기에 충분합니다.",
        },
        {
          title: "비상 버튼 포함",
          body: "Ctrl+Shift+Esc로 모든 것을 즉시 멈춥니다: 디스플레이 깨어남, 움직임 정지, 타이머 취소. 노트북용 덮개 닫힘 무시. 평생 통계로 총 가동 시간을 추적합니다.",
        },
      ],
    },

    stickykeys: {
      tagline: "그 키들을 잠가라.",
      description:
        "작은 메뉴 막대 앱. 클릭하여 키보드를 잠그고, 앱을 실행하거나 이메일을 보내거나 작업을 중단하지 않고 극세사 천으로 키를 닦은 다음, 오버레이를 클릭하여 잠금 해제합니다. 서리 낀 전체 화면 오버레이가 모든 모니터를 덮고, 마우스는 활성 상태를 유지하며, 안전 자동 잠금 해제 덕분에 갇히지 않습니다.",
      catalogTagline: "청소 천이 단축키를 발동시키지 않도록 키보드를 잠그세요.",
      catalogDescription:
        "청소용 메뉴 막대 키보드 잠금. 클릭하여 시스템 전체의 모든 키, 수정 키, 미디어 키를 삼킵니다; 서리 낀 전체 화면 오버레이가 각 디스플레이를 덮고, 마우스는 잠금 해제를 위해 활성 상태를 유지하며, 안전 자동 잠금 해제 덕분에 갇히지 않습니다.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  무료  ·  Developer ID 서명 & 공증",
      featuresHeading: "키를 닦아라. 아무것도 실행하지 마라.",
      features: [
        {
          title: "한 번의 클릭으로 모두 잠금",
          body: "활성 키보드 캡처가 시스템 전체의 모든 키, 수정 키, 미디어 키를 삼킵니다 — 단축키 하나도 발동시키지 않고 키를 닦으세요.",
        },
        {
          title: "서리 낀 전체 화면 오버레이",
          body: "맑고 색이 없는 블러가 모든 디스플레이를 덮어 키보드가 잠겼다는 것을 한눈에 볼 수 있으며, 자동 잠금 해제까지의 실시간 카운트다운이 함께합니다.",
        },
        {
          title: "마우스로만 잠금 해제, 결코 갇히지 않음",
          body: "오버레이 버튼이나 메뉴 막대 아이콘으로 잠금을 해제할 수 있고, 무슨 일이 있어도 안전 자동 잠금 해제가 작동하여 결코 멈추지 않습니다.",
        },
      ],
    },

    stats: {
      tagline: "모든 신호. 한눈에.",
      description:
        "네이티브 메뉴 막대 시스템 모니터. 코어별 실시간 CPU, 메모리 압력, 디스크 읽기/쓰기, 네트워크 업/다운, 센서 측정값 — 상태 표시줄에서 함께 다니는 선택적인 작은 위젯과 각 신호의 기록 스파크라인까지 포함하여, 활동 모니터를 열지 않고도 급증을 발견할 수 있습니다.",
      catalogTagline: "모든 시스템 신호를 한눈에 — 당신의 메뉴 막대에서.",
      catalogDescription:
        "네이티브 메뉴 막대 시스템 모니터. 코어별 실시간 CPU, 메모리 압력, 디스크 읽기/쓰기, 네트워크 업/다운, 센서 측정값 — 작은 위젯과 기록 스파크라인까지.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  무료  ·  Developer ID 서명 & 공증",
      featuresHeading: "전체 기계를 보세요. 전체 창 없이.",
      features: [
        {
          title: "모든 시스템 신호를 한눈에",
          body: "코어별 CPU, 메모리 압력(유선/압축/앱/캐시 분해 포함), 디스크 읽기/쓰기, 네트워크 업/다운, 센서, 실시간 상위 프로세스 목록 — 모두 하나의 작은 메뉴 막대 패널에.",
        },
        {
          title: "작은 메뉴 막대 위젯",
          body: "어떤 숫자(또는 작은 실시간 파형)가 상태 표시줄에서 함께 다닐지 선택하세요. 작업 중에도 보이며, 결코 방해되지 않습니다.",
        },
        {
          title: "스파크라인, 스프레드시트가 아닌",
          body: "각 신호의 최근 기록이 그래프로 표시되므로, 급증이나 폭주 프로세스가 활동 모니터를 뒤지지 않아도 명백합니다.",
        },
      ],
    },

    port: {
      tagline: "모든 포트, 한 번의 클릭.",
      description:
        "작은 네이티브 메뉴 막대 포트 관리자. 무엇이 듣고 있는지 보고, 프로세스를 종료하거나 일시 중지하고, 전달하거나 NAT-PMP 매핑하고, 실시간 지도에서 활성 연결을 관찰하세요 — 하나를 클릭하면 Blip에서 검사할 수 있습니다.",
      catalogTagline: "Mac의 모든 열린 포트, 한 번의 클릭으로.",
      catalogDescription:
        "네이티브 메뉴 막대 포트 관리자: 무엇이 듣고 있는지 보고, 프로세스를 종료하거나 일시 중지하고, 전달하거나 NAT-PMP 매핑하고, 실시간 지도에서 활성 연결을 관찰하세요 — 클릭하면 Blip에서 검사.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  무료  ·  Developer ID 서명",
      featuresHeading: "보세요. 종료하세요. 전달하세요.",
      features: [
        {
          title: "모든 열린 포트, 실시간",
          body: "수신 중인 모든 TCP/UDP 포트와 그 뒤의 프로세스 및 PID 목록이 메뉴 막대에서 매초 갱신됩니다. 종료, 일시 중지(SIGSTOP/SIGCONT) 또는 그대로 두기.",
        },
        {
          title: "전달 & 매핑",
          body: "내장된 TCP 전달자로 로컬 포트를 다른 포트로 프록시하고, LAN에 노출하고, 네이티브 NAT-PMP로 라우터를 뚫으세요 — 설정 없이.",
        },
        {
          title: "지도 위의 연결 → Blip",
          body: "활성 연결이 실제 목적지에 따라 실시간 지도에 그려집니다. 어떤 엔드포인트를 클릭해도 Blip에서 자세히 검사할 수 있습니다(없으면 Blip을 받으세요).",
        },
      ],
    },

    alfred: {
      tagline: "디스크를 되찾자.",
      description:
        "안전하게 삭제할 수 있는 개발자 쓰레기를 찾는 네이티브 메뉴 막대 발레 파킹 — node_modules, Cargo target/, 빌드 및 테스트 캐시, Xcode DerivedData, 패키지 관리자 캐시 — 크기 순으로 정렬하고 휴지통으로 옮깁니다. 한 번의 클릭으로 복구 가능.",
      catalogTagline: "개발 쓰레기가 차지한 디스크 공간을 되찾으세요.",
      catalogDescription:
        "안전하게 삭제할 수 있는 개발자 쓰레기를 찾는 네이티브 메뉴 막대 발레 파킹 — node_modules, Cargo target/, 빌드 및 테스트 캐시, Xcode DerivedData, 패키지 관리자 캐시 — 크기 순으로 정렬하고 휴지통으로 옮깁니다(복구 가능).",
      requirements: "macOS 14+  ·  Apple Silicon  ·  무료  ·  Developer ID 서명",
      featuresHeading: "찾으세요. 버리세요. 디스크를 되찾으세요.",
      features: [
        {
          title: "쓰레기를 찾으세요, 큰 것부터",
          body: "node_modules, Cargo target/, 빌드 및 테스트 캐시, Xcode DerivedData, Homebrew/Yarn/npm 캐시 — 스캔되고, 크기가 측정되고, 큰 것부터 나열되어 정확히 무엇이 디스크를 차지하고 있는지 알 수 있습니다.",
        },
        {
          title: "설계상 안전한 삭제",
          body: "Alfred는 재생성 가능한 폴더 — 캐시, 빌드 산출물, 의존성 트리 — 만 건드리고, 소스 코드는 절대 건드리지 않습니다. 모든 것이 휴지통으로 가며, 마음이 바뀌면 한 번의 클릭으로 복구할 수 있습니다.",
        },
        {
          title: "메뉴 막대에서",
          body: "작은 메뉴 막대 앱으로 존재합니다. 원할 때 스캔하고, 얼마나 되찾았는지 확인하거나, 다음 SSD 경고를 위한 일회성 정리 도구로 남겨두세요.",
        },
      ],
    },

    blip: {
      tagline: "떠나는 것을 보세요.",
      description:
        "당신의 데이터가 어디로 가는지, 누가 수집하는지 정확히 보고 차단하세요 — 모두 매우 예쁜 3D 지도 위에서.",
      catalogTagline: "당신의 컴퓨터는 뒤에서 이야기하고 있었습니다.",
      catalogDescription:
        "3D 연결 지도, 스마트 방화벽, DNS 차단, 해저 케이블 라우팅, 대역폭 분석을 갖춘 실시간 네트워크 모니터링. 당신의 데이터가 어디로 가는지 정확히 보세요.",
      requirements: "무료 & 오픈 소스",
      featuresHeading: "지도. 문지기. 벽.",
      features: [
        {
          title: "모든 연결의 실시간 3D 지도",
          body: "각 앱의 트래픽이 지구본에 그려지고, 서비스별로 색이 입혀진 호. 200개의 연결, 700개 이상의 실제 해저 케이블, 방향을 보여주는 입자. 당신이 무시해 온 인터넷을 보이게 합니다.",
        },
        {
          title: "당신 대역폭의 문지기",
          body: "모든 앱에 허가가 필요합니다, 예외 없이. 엄격 모드는 당신이 다르게 말할 때까지 모든 것을 차단합니다. 앱별 대역폭 바가 데이터 식충이를 폭로합니다. 한 번의 클릭 킬 스위치.",
        },
        {
          title: "연결 전 차단된 20만 개의 추적기",
          body: "DNS 차단 목록이 광고 및 추적기 도메인을 즉시 파괴합니다; 실시간 쿼리 로그가 모든 조회를 드러냅니다; 추적기 순위가 최악의 위반자를 지목합니다.",
        },
      ],
      showcase: [
        {
          badge: "네트워크 지도",
          title: "200개의 연결. 어느 것도 허가를 묻지 않았습니다.",
          description:
            "당신 컴퓨터의 모든 앱이 조용히 집에 전화를 걸고 있습니다. Blip은 그것들을 모두 3D 지도에 놓아 실시간으로 혼란이 펼쳐지는 것을 볼 수 있게 합니다.",
          bullets: [
            "연결은 바다를 건너는 실제 해저 케이블을 통해 라우팅됩니다",
            "서비스별로 색이 입혀진 호 — Google, Discord, Apple 및 수백 개를 즉시 식별",
            "애니메이션 입자가 양방향으로 흐르는 데이터를 표시",
            "홉별 traceroute가 패킷이 가는 실제 경로를 표시",
          ],
          imageAlt: "Blip 3D 네트워크 지도가 연결 호를 표시",
        },
        {
          badge: "방화벽",
          title: "당신 대역폭의 문지기",
          description:
            "모든 앱에 허가가 필요합니다. 예외 없음, 변명 없음. 엄격 모드는 당신이 다르게 말할 때까지 모든 것을 차단합니다. 당신의 앱들이 너무 편해졌기 때문입니다.",
          bullets: [
            "엄격 모드: 무죄가 입증될 때까지 유죄",
            "앱별 대역폭 바가 데이터 식충이를 폭로",
            "범위 규칙 — 포트 443은 허용하지만 다른 모든 것은 차단",
            "킬 스위치: 한 번의 클릭, 인터넷 제로, 즉각적인 침묵",
          ],
          imageAlt: "Blip 방화벽이 앱 수준 네트워크 접근 제어를 표시",
        },
        {
          badge: "가드",
          title: "연결을 시도하기도 전에 차단된 20만 개의 추적기",
          description:
            "당신의 DNS는 고자질쟁이입니다. 모든 앱, 모든 광고 SDK, 모든 분석 핑 — 가드가 문 앞에서 잡습니다. 누가 집에 전화를 걸려고 하는지 보고 차단하세요.",
          bullets: [
            "DNS 차단 목록이 20만 개 이상의 추적기 및 광고 도메인을 즉시 파괴",
            "실시간 쿼리 로그 — 모든 조회를 실시간으로 관찰",
            "추적기 순위가 가장 끈질긴 위반자를 표시",
            "방화벽과 결합 — 두 개의 벽, 자비 제로",
          ],
          imageAlt: "Blip 가드가 DNS 차단 및 추적기 감지를 표시",
        },
        {
          badge: "시각화",
          title: "인터넷은 그저 젖은 케이블들",
          description:
            "당신의 YouTube 영상은 정원 호스보다 얇은 케이블로 세 개의 바다를 건넜습니다. Blip이 정확히 어느 것인지 보여줍니다 — 700개 이상의 실제 해저 케이블 경로가 당신의 데이터가 흐를 때 빛납니다.",
          bullets: [
            "TeleGeography의 실제 해저 케이블 경로가 해저에 그려짐",
            "당신의 트래픽이 흐를 때 활성 케이블이 빛남",
            "행진하는 대시 입자가 업로드 대 다운로드 방향 표시",
            "핑 기반 속도 — 빠른 연결은 빠르게, 느린 것은 기어감",
          ],
          imageAlt: "Blip 시각화가 해저 케이블과 데이터 흐름을 표시",
        },
        {
          badge: "Traceroute",
          title: "한 페이지를 로드하기 위해 6개 도시를 거치는 14홉",
          description:
            "모든 패킷은 도착하기 전에 12개의 라우터를 튕깁니다. Blip은 그 경로를 추적합니다 — 홉별로, 도시별로, 케이블별로 — 그리고 지도에 그립니다.",
          bullets: [
            "3D 지도에 직접 겹쳐진 홉별 마커",
            "지연 시간 색상: 녹색은 빠름, 호박색은 괜찮음, 빨강은 고통",
            "바다 횡단의 실제 해저 케이블을 통한 경로",
            "모든 활성 연결에 대한 자동 traceroute",
          ],
          imageAlt: "Blip traceroute가 홉별 네트워크 경로를 표시",
        },
      ],
    },

    diane: {
      tagline: "녹음을 누르세요. 말하세요.",
      description:
        "실시간 음성-텍스트 변환, 카세트 테이프 라이브러리, 받아쓰기 모드를 갖춘 레트로 음성 녹음기. 특별 요원 데일 쿠퍼의 테이프 메모에서 영감을 받았습니다.",
      catalogTagline: "내 손에 작은 테이프 녹음기를 들고 있습니다.",
      catalogDescription:
        "실시간 음성-텍스트 변환, 카세트 테이프 라이브러리, 받아쓰기 모드를 갖춘 스큐어모픽 레트로 음성 녹음기. 특별 요원 데일 쿠퍼에서 영감을 받았습니다.",
      requirements: "무료 & 오픈 소스",
      featuresHeading: "녹음을 누르세요. 말하세요. 걸으세요.",
      features: [
        {
          title: "스큐어모픽 카세트 녹음기",
          body: "포토리얼리스틱한 녹음기가 있는 떠다니는 사이드바: 애니메이션 릴, VU 미터, 물리적 버튼 컨트롤. 녹음을 누르고 말하세요 — 전역 단축키로 어떤 앱에서도 녹음할 수 있습니다.",
        },
        {
          title: "기기 내 실시간 전사",
          body: "Apple의 SFSpeechRecognizer가 당신이 말하는 동안 전사합니다 — 클라우드 없이, API 키 없이. 전사의 어떤 단어든 클릭하여 녹음의 그 순간으로 이동하세요.",
        },
        {
          title: "카세트로 가득 찬 신발 상자",
          body: "모든 녹음은 오디오와 전사가 포함된 컬러 카세트 테이프로 저장됩니다. 컬렉션을 스크롤하고, 아무 거나 불러오고, 언제든 재생하세요.",
        },
      ],
      showcase: [
        {
          badge: "음성 녹음기",
          title: "데스크탑용 스큐어모픽 카세트 녹음기",
          description:
            "포토리얼리스틱한 카세트 녹음기가 있는 떠다니는 사이드바. 녹음을 누르고 말하세요. 당신의 목소리가 캡처되고, 실시간으로 전사되고, 탐색하고 되감고 재생할 수 있는 카세트 테이프에 저장됩니다.",
          bullets: [
            "애니메이션 릴과 VU 미터가 있는 포토리얼리스틱한 카세트 녹음기",
            "물리적 버튼 컨트롤로 녹음, 재생, 되감기, 빨리 감기",
            "테이프 스풀이 재생 위치를 실시간으로 시각적으로 추적",
            "전역 단축키로 창을 전환하지 않고 어떤 앱에서도 녹음",
          ],
          imageAlt: "Diane 카세트 녹음기 인터페이스",
        },
        {
          badge: "실시간 전사",
          title: "당신의 말, 말하는 대로 타이핑됨",
          description:
            "Diane은 Apple의 기기 내 음성 인식을 사용하여 당신의 음성을 실시간으로 전사합니다. 클라우드 없이, API 키 없이, 지연 없이. 그냥 말하고 단어가 나타나는 것을 보세요.",
          bullets: [
            "macOS SFSpeechRecognizer로 구동되는 실시간 음성-텍스트",
            "완전히 기기 내에서 처리, 당신의 기계를 벗어나는 데이터 제로",
            "전사의 어떤 단어든 클릭하여 녹음의 그 순간으로 이동",
            "받아쓰기 모드가 당신의 말을 포커스된 텍스트 필드에 직접 타이핑",
          ],
          imageAlt: "Diane 실시간 전사 오버레이",
        },
        {
          badge: "테이프 라이브러리",
          title: "카세트 테이프로 가득 찬 신발 상자",
          description:
            "모든 녹음은 고유한 색상 변형이 있는 카세트 테이프로 저장됩니다. 컬렉션을 스크롤하고, 클릭하여 불러오고, 언제든 재생하세요.",
          bullets: [
            "무작위로 할당된 10가지 고유한 카세트 테이프 색상 변형",
            "전체 오디오와 전사가 있는 세션 간 테이프 지속",
            "방향키로 테이프 컬렉션 순환",
            "각 테이프 라벨에 단어 수 표시",
          ],
          imageAlt: "Diane 카세트 테이프 라이브러리",
        },
      ],
    },

    peephole: {
      tagline: "누가 보고 있는지 보세요.",
      description:
        "카메라와 마이크를 위한 메뉴 막대 보초. Peephole은 지금 어떤 앱이 그것들을 사용하고 있는지 표시하고, 접근 기록을 유지하며, 무언가가 그것들을 켤 때 알립니다 — 특별한 권한 없이, 커널 확장 없이.",
      catalogTagline: "누가 보고 있는지 보세요.",
      catalogDescription:
        "카메라와 마이크를 위한 메뉴 막대 보초: 지금 어떤 앱이 사용하고 있는지, 접근 기록, 그리고 무언가가 그것들을 켜는 순간의 알림.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  무료  ·  Developer ID 서명",
      featuresHeading: "당신이 모르게 녹화되는 것은 없습니다.",
      features: [
        {
          title: "실시간 카메라 및 마이크 상태",
          body: "카메라나 마이크가 활성화되는 순간 메뉴 막대 기호가 즉시 전환되므로, 무언가가 녹화하는 시점을 항상 알 수 있습니다.",
        },
        {
          title: "접근 기록",
          body: "어떤 앱이 카메라나 마이크를 언제 사용했는지에 대한 지속적인 로그 — 하루의 활동을 거슬러 스크롤하세요.",
        },
        {
          title: "알림",
          body: "앱이 카메라나 마이크를 사용하기 시작하는 순간 경고를 받으세요. 특별한 권한 없이, 커널 확장 없이.",
        },
      ],
    },

    quarantine: {
      tagline: "모든 다운로드를 검토하세요.",
      description:
        "~/Downloads용 메뉴 막대 검사기. 각 새 파일에 대해 격리 출처 URL, Gatekeeper/codesign 상태, SHA-256, 선택적 VirusTotal 판정을 표시합니다 — 그런 다음 당신이 열기 전에 검토할 수 있도록 알립니다.",
      catalogTagline: "신뢰하되, 모든 다운로드를 확인하세요.",
      catalogDescription:
        "~/Downloads용 메뉴 막대 검사기: 격리 출처, Gatekeeper/codesign 상태, SHA-256, 각 새 파일에 대한 선택적 VirusTotal 판정, 검토 알림.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  무료  ·  Developer ID 서명",
      featuresHeading: "Downloads에 방금 도착한 것을 아세요.",
      features: [
        {
          title: "출처 & 격리",
          body: "com.apple.quarantine 속성을 통해 파일이 정확히 어디서 왔는지 확인하세요 — 다운로드한 에이전트와 출처 URL.",
        },
        {
          title: "Gatekeeper & 해시",
          body: "~/Downloads에 도착하는 각 새 파일에 대한 codesign/Gatekeeper 평가와 SHA-256.",
        },
        {
          title: "선택적 VirusTotal",
          body: "API 키를 추가하면 Quarantine이 평판 판정을 인라인으로 표시하므로, 다운로드를 열기도 전에 검토할 수 있습니다.",
        },
      ],
    },

    sentry: {
      tagline: "어두운 구석을 지켜보세요.",
      description:
        "macOS 지속성을 위한 메뉴 막대 감사관. LaunchAgents 및 Daemons, 로그인 항목, cron, 셸 시작 파일을 나열하고, 각 대상의 코드 서명과 공증을 확인하며, 새로 추가되거나 변경된 항목이 나타나는 순간 경고합니다 — 그런 다음 메뉴 막대에서 직접 검사, 차단 또는 복원할 수 있게 합니다.",
      catalogTagline: "무언가가 자리 잡는 순간을 아세요.",
      catalogDescription:
        "macOS 지속성을 위한 메뉴 막대 감사관 — LaunchAgents, 로그인 항목, cron, 셸 시작 파일 — 서명 확인과 새로 추가되거나 변경된 것이 나타날 때의 경고. 그것들 중 어느 것이든 검사, 차단 또는 복원.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  무료  ·  Developer ID 서명",
      featuresHeading: "악성코드가 숨는 곳을 지켜보세요.",
      features: [
        {
          title: "모든 지속성 벡터",
          body: "LaunchAgents 및 Daemons, 로그인 항목, cron, 셸 시작 파일 — 무언가가 재부팅을 살아남기 위해 자리 잡을 수 있는 모든 곳이 하나의 메뉴 막대 목록에.",
        },
        {
          title: "서명 인식",
          body: "각 대상 바이너리는 spctl과 codesign을 통해 공증됨 / 서명됨 / 서명되지 않음으로 분류되므로, 서명되지 않은 launch agent가 즉시 눈에 띕니다.",
        },
        {
          title: "변경 시 경고, 거기 있어서는 안 되는 것을 차단",
          body: "스냅샷 비교가 새 지속성 항목이 나타나거나 변경되는 순간 알립니다. plist 또는 스크립트를 검사한 다음 차단하세요 — Sentry가 언로드하고 .sentry-disabled로 옆에 둡니다. 한 번의 클릭으로 되돌릴 수 있습니다.",
        },
      ],
    },

    fishbones: {
      tagline: "어떤 기술 책이든 인터랙티브 코스로 바꾸세요.",
      description:
        "PDF나 EPUB를 넣으면 Libre가 강의, 연습 문제, 숨겨진 테스트를 생성합니다. 한 편집기에서 16개 언어, 노트북의 로컬 AI 튜터, 주말을 살아남는 연속 기록 불꽃, 17개의 테마.",
      catalogTagline: "어떤 기술 책이든 인터랙티브 코스로 바꾸세요.",
      catalogDescription:
        "PDF나 EPUB를 넣으면 Libre가 강의, 연습 문제, 숨겨진 테스트를 생성합니다. 한 편집기에서 16개 언어, 노트북의 로컬 AI 튜터, 주말을 살아남는 연속 기록 불꽃, 17개의 테마.",
      requirements: "무료 & 오픈 소스",
      featuresHeading: "어떤 책에서든 배우세요.",
      features: [],
    },

    tap: {
      tagline: "손목 위의 서버.",
      description:
        "Apple Watch에서 원격 서버의 사전 구성된 SSH 명령을 실행하세요. 탭, 확인, 완료. 셀룰러로 작동, Siri 지원, 모든 것을 종단 간 암호화.",
      catalogTagline: "당신 인프라를 위한 명령 리모컨.",
      catalogDescription:
        "Apple Watch에서 원격 서버의 사전 구성된 SSH 명령을 실행하세요. 셀룰러로 작동, Siri 지원, 모든 것을 종단 간 암호화.",
      requirements: "watchOS  ·  iOS  ·  iPadOS  ·  macOS  ·  무료 & 오픈 소스",
      featuresHeading: "당신 서버를 위한 리모컨 — 손목 위에.",
      features: [
        {
          title: "실제 워치 앱, 알림 심이 아닌",
          body: "실시간 상태 점이 있는 네이티브 watchOS 서버 목록, 액션 버튼을 통한 고정 명령, 위험한 명령에 대한 확인, Digital Crown으로 스크롤 가능한 출력. 셀룰러 준비 — 전화 필요 없음.",
        },
        {
          title: "Companion + Mac, 발맞춰",
          body: "iPhone, iPad, Mac Catalyst 전체 앱. 서버 추가, 명령 및 명령 스위트 구성, 기록 보기, SSH 키 관리. 모든 것이 실시간으로 워치에 동기화.",
        },
        {
          title: "스위트, 경고, Siri, 컴플리케이션",
          body: '명령을 한 번의 탭 스위트로 묶으세요. 30초 건강 핑과 무언가가 죽을 때의 APNs 경고. 다섯 개의 시계 페이스 컴플리케이션. "헤이 Siri, Tap으로 prod-api 재시작."',
        },
      ],
      showcase: [
        {
          badge: "워치 앱",
          title: "손목에서 프로덕션 재시작.",
          description:
            "서버 목록, 명령 실행, 햅틱 피드백을 갖춘 네이티브 watchOS 앱. 명령을 탭하고, 확인하고, 완료. 실제 출력이 Digital Crown으로 스크롤 가능. 셀룰러로 작동 — 전화 필요 없음.",
          bullets: [
            "실시간 상태 점이 있는 서버 목록 (녹색/빨강)",
            "액션 버튼을 통한 빠른 접근을 위한 고정 명령",
            "위험한 명령에 대한 확인 보기",
            "Digital Crown으로 스크롤 가능한 잘린 출력",
          ],
          imageAlt: "Tap 워치 앱이 서버 명령을 표시",
        },
        {
          badge: "Companion",
          title: "전화에서 모든 것을 구성.",
          description:
            "iPhone, iPad, Mac Catalyst를 위한 전체 관리 앱. 서버 추가, 명령 구성, SSH 키 관리, 기록 보기, 명령 스위트 설정. 모든 것이 즉시 워치에 동기화.",
          bullets: [
            "서버 건강 그리드와 활동 피드가 있는 대시보드",
            "템플릿 라이브러리가 있는 시각적 명령 편집기",
            "WebView를 통한 전체 대화형 SSH 터미널",
            "즉각적인 워치 페어링을 위한 QR 코드 생성",
          ],
          imageAlt: "Tap Companion 앱 대시보드",
        },
        {
          badge: "스위트",
          title: "한 번의 탭으로 5개의 명령 실행.",
          description:
            "관련 명령을 한 번의 탭 배포 워크플로우를 위한 스위트로 그룹화하세요. 각 단계는 실시간으로 통과/실패를 표시합니다. 실패 시 계속할지 즉시 멈출지 구성하세요.",
          bullets: [
            "진행 추적이 있는 순서 있는 단계 실행",
            "단계별 실패 시 계속 토글",
            "WebSocket을 통해 스트리밍되는 스위트 진행",
            "배포 시퀀스와 건강 확인 루틴에 완벽",
          ],
          imageAlt: "워치에서의 Tap 스위트 실행 진행",
        },
        {
          badge: "경고",
          title: "사용자보다 먼저 아세요.",
          description:
            "30초마다 백그라운드 건강 핑. 서버가 다운되면 워치와 전화에 즉각적인 푸시 알림이 옵니다. 서버별 토글로 중요한 것에 대해서만 경고를 받으세요.",
          bullets: [
            "지연 추적이 있는 30초 건강 핑 루프",
            "상태 변경 시 워치 + 전화로 APNs 푸시",
            "서버별 알림 토글",
            "Apple Watch의 햅틱 경고 패턴",
          ],
          imageAlt: "워치에서의 Tap 서버 다운 알림",
        },
        {
          badge: "컴플리케이션",
          title: "시계 페이스에서 한눈에 보는 서버 건강.",
          description:
            "시계 페이스에 실시간 서버 메트릭을 표시하는 다섯 개의 구성 가능한 컴플리케이션. 표시할 서버와 메트릭을 선택하세요. 데이터는 앱에서 자동으로 동기화됩니다.",
          bullets: [
            "서버 상태: 함대 전체 가동/중단 수",
            "함대 메트릭: 서버당 디스크, 메모리 또는 CPU",
            "Docker: 실행 중인 컨테이너 수",
            "가동 시간: 서버당 가동 시간 표시",
            "빠른 명령: 한눈에 보는 고정 명령",
          ],
          imageAlt: "Tap 워치 컴플리케이션이 서버 메트릭을 표시",
        },
        {
          badge: "macOS",
          title: "메뉴 막대에서의 완전한 제어.",
          description:
            "빠른 서버 접근을 위한 네이티브 macOS 앱. 브라우저를 열지 않고 함대를 모니터링하고, 명령을 실행하고, 구성을 관리하세요. 매끄러운 설정을 위해 Apple로 로그인.",
          bullets: [
            "즉각적인 접근을 위한 메뉴 막대 존재",
            "출력 표시가 있는 전체 명령 실행",
            "JSON에서 서버 구성 가져오기",
            "Apple Sign-In 인증",
          ],
          imageAlt: "Tap macOS 앱이 서버 대시보드를 표시",
        },
        {
          badge: "Siri",
          title: '"헤이 Siri, Tap으로 prod-api 재시작."',
          description:
            "전체 App Intents 통합. 음성으로 어떤 명령이든 실행하세요. 핸즈프리로 서버 상태를 확인하세요. Siri가 작업을 확인하고 결과를 보고합니다. 워치, 전화 또는 CarPlay에서 작동.",
          bullets: [
            "자연어: 'Tap으로 prod의 nginx 재시작'",
            "서버 상태 확인: 'Tap에서 내 서버 확인'",
            "실행 전 확인 대화",
            "음성 응답으로 결과 보고",
          ],
          imageAlt: "Siri가 Tap 명령을 실행 중",
        },
      ],
      stats: [
        { value: "< 3초", label: "실행 시간" },
        { value: "셀룰러", label: "전화 필요 없음" },
        { value: "AES-256", label: "키 암호화" },
        { value: "MIT", label: "오픈 소스" },
      ],
      threeSecondsHeading: "3초. 그게 다입니다.",
      threeSecondsSub: "손목에서 서버로 그리고 돌아오기.",
      stepTap: "탭",
      stepConfirm: "확인",
      stepDone: "완료",
      archHeading: "아키텍처",
      archWatch: "워치",
      archRelay: "릴레이",
      archServers: "당신의 서버",
      archCompanion: "Companion",
      archMac: "macOS",
      securityHeading: "보안 모델",
      securityCards: [
        {
          title: "정지 상태의 키",
          body: "AES-256-GCM으로 암호화된 SSH 키. Argon2id를 통해 파생된 마스터 패스프레이즈. 키는 릴레이가 실행되는 동안에만 메모리에서 복호화된 상태로 존재합니다.",
        },
        {
          title: "토큰 인증",
          body: "기기별 Bearer 토큰, Argon2 해시. 파괴적인 작업에 대한 선택적 TOTP 2FA. 토큰은 즉시 폐기 가능.",
        },
        {
          title: "모든 곳에서 TLS",
          body: "내장된 Let's Encrypt 자동 갱신. 모든 트래픽이 전송 중 암호화. 자체 호스팅 릴레이에 대한 인증서 피닝 옵션.",
        },
        {
          title: "워치 보안",
          body: "하드웨어 암호화된 워치 키체인에 저장된 토큰. 손목 감지가 자동 잠금. 기기에 캐시된 민감한 데이터 없음.",
        },
      ],
      templatesHeading: "27개의 내장 템플릿",
      templatesSub: "사전 구성된 일반 명령. 템플릿을 선택하고, 빈칸을 채우고, 완료.",
      templateCategories: {
        system: "시스템",
        docker: "Docker",
        systemd: "Systemd",
        deploy: "배포",
        nginx: "Nginx",
        network: "네트워크",
      },
      useCasesHeading: "사이의 순간들을 위해 만들어졌습니다",
      useCases: [
        "강아지 공원에서 죽은 서비스 재시작",
        "회의 중에 건강 확인 실행",
        "체육관에서 배포",
        "침대에서 디스크 공간 확인",
        "차에서 서버 상태 확인 (Siri)",
        "이륙 전에 명령을 대기열에 넣고, 착륙 시 실행",
      ],
      techHeading: "기술 스택",
      techStack: {
        watch: { label: "워치", value: "Swift + SwiftUI + WidgetKit + AppIntents" },
        macos: { label: "macOS", value: "Swift + SwiftUI + 메뉴 막대" },
        companion: { label: "Companion", value: "React Native + TypeScript + Base RN" },
        relay: { label: "릴레이", value: "Rust + axum + russh + SQLite" },
        encryption: { label: "암호화", value: "AES-256-GCM + Argon2id" },
        tls: { label: "TLS", value: "rustls + Let's Encrypt" },
        notifications: { label: "알림", value: "APNs + 서버별 토글" },
      },
      quickSetup: "빠른 설정 가이드",
      relayConfig: "릴레이 구성",
      ctaHeading: "당신의 서버가 기다리고 있습니다.",
      ctaSub: "영원히 무료. 오픈 소스. 전화 필요 없음.",
      ctaGithub: "GitHub에서 보기",
    },

    base: {
      tagline: "프리미티브. 토큰. 완료.",
      description:
        "70개의 프리미티브, 8개의 디자인 토큰 카테고리, 다크 모드, 그리고 당신의 스택에 대한 의견 제로. 모든 곳에서 작동하는 깔끔하고 조합 가능한 React 컴포넌트 — 런처를 포함하여.",
      catalogTagline: "범용 디자인 툴킷 — 모노크롬, 플랫폼 독립.",
      catalogDescription:
        "70개의 프리미티브, 8개의 디자인 토큰 카테고리, 다크 모드, 그리고 당신의 스택에 대한 의견 제로. 모든 곳에서 작동하는 깔끔하고 조합 가능한 React 컴포넌트 — 런처를 포함하여.",
      requirements: "무료 & 오픈 소스  ·  React  ·  TypeScript",
      featuresHeading: "프리미티브. 토큰. 토글.",
      ctaLabel: "소스 보기",
      features: [
        {
          title: "70개의 프로덕션 준비된 프리미티브",
          body: "폼, 레이아웃, 데이터, 피드백 — 당신이 필요한 모든 프리미티브, 필요 없는 것은 하나도 없음. 입력, 테이블, 캘린더, 스파크라인, 트리 뷰, 컬러 피커, 다이얼로그 등.",
        },
        {
          title: "하나의 토큰 시스템, 모든 플랫폼",
          body: "색상, 타이포그래피, 간격, 반경, 고도, 애니메이션, 글래스모피즘 — 모두 CSS 변수나 React Native 스타일로 내보내는 TypeScript 토큰으로 정의됨.",
        },
        {
          title: "기본 제공 라이트 & 다크",
          body: "모든 컴포넌트가 자동으로 색상 모드를 존중합니다 — 시스템 환경 설정 감지, localStorage가 있는 수동 토글, 그리고 두 모드 모두에서 적응하는 글래스모피즘.",
        },
      ],
      showcase: [
        {
          badge: "70개의 프리미티브",
          title: "당신이 필요한 모든 컴포넌트, 필요 없는 것은 하나도 없음",
          description:
            "버튼과 입력에서 트리 뷰, 컬러 피커, 스파크라인까지 — TypeScript로 빌드되고 React 외에 외부 의존성 제로인 70개의 프로덕션 준비된 프리미티브.",
          bullets: [
            "폼: input, textarea, select, checkbox, radio, pin-input, number-input, color-picker",
            "레이아웃: grid, stack, container, center, spacer, separator",
            "데이터: table, calendar, timeline, carousel, sparkline, tree-view",
            "피드백: toast, alert, dialog, sheet, popover, skeleton, spinner, progress",
          ],
          imageAlt: "Base 프리미티브 컴포넌트 라이브러리",
        },
        {
          badge: "디자인 토큰",
          title: "하나의 토큰 시스템, 모든 플랫폼",
          description:
            "색상, 타이포그래피, 간격, 반경, 고도, 애니메이션, 글래스모피즘 — 모두 CSS 변수나 React Native 스타일로 내보내는 TypeScript 토큰으로 정의됨.",
          bullets: [
            "시맨틱 별칭이 있는 모노크롬 우선 컬러 팔레트",
            "젖빛 유리 효과를 위한 글래스모피즘 토큰",
            "유체 반응형 크기 조정이 있는 타이포그래피 스케일",
            "CSS 사용자 정의 속성 또는 React Native StyleSheet로 내보내기",
          ],
          imageAlt: "Base 디자인 토큰",
        },
        {
          badge: "다크 모드",
          title: "라이트와 다크, 첫날부터 내장",
          description:
            "모든 컴포넌트가 색상 모드를 기본으로 존중합니다. 추가 설정 없이, 잊어버릴 테마 래퍼 없이 — 그냥 시스템 환경 설정이나 수동 토글로 작동합니다.",
          bullets: [
            "자동 시스템 환경 설정 감지",
            "localStorage 지속성이 있는 수동 토글",
            "두 모드 모두에서 테스트된 70개의 프리미티브 전부",
            "글래스모피즘 효과가 색상 모드에 적응",
          ],
          imageAlt: "Base 다크 모드 지원",
        },
      ],
    },
  },

  legal: {
    privacyTitle: "개인정보 처리방침",
    termsTitle: "서비스 약관",
    eulaTitle: "최종 사용자 라이선스 계약",
    tapTagline: "Tap — SSH 명령 릴레이",
    effectiveDate: "발효일: 2026년 4월 14일",
    navPrivacy: "개인정보 처리방침",
    navTerms: "서비스 약관",
    navEula: "EULA",

    privacy: {
      intro:
        'Matt\'s Software("당사")는 Apple Watch, iPhone, Mac을 위한 SSH 명령 릴레이 애플리케이션인 Tap을 운영합니다. 본 개인정보 처리방침은 당사가 수집하는 정보, 사용 방법, 그리고 귀하의 데이터에 관한 권리를 설명합니다. Matt\'s Software는 미국에 본사를 두고 있습니다.',
      collectHeading: "당사가 수집하는 정보",
      accountHeading: "계정 정보",
      accountBody:
        "Apple Sign-In으로 로그인하면 당사는 귀하의 Apple ID 이메일 주소(또는 Apple이 귀하를 대신하여 제공하는 비공개 릴레이 주소)를 받습니다. 이는 당사가 수집하는 유일한 개인 식별 정보이며, 귀하의 릴레이 서버 인증에만 사용됩니다.",
      relayHeading: "자체 호스팅 릴레이 데이터",
      relayBody:
        "Tap은 연결 메타데이터, 암호화된 SSH 키, 명령 기록, 실행 결과를 귀하가 직접 호스팅하고 운영하는 릴레이 서버에 저장합니다. 당사는 이 데이터에 접근할 수 없습니다. 귀하가 릴레이를 통제하므로, 귀하가 데이터를 통제합니다.",
      useHeading: "정보 사용 방법",
      useBody:
        "귀하의 Apple ID 이메일 주소는 귀하의 계정 인증에만 독점적으로 사용됩니다. 당사는 이를 마케팅, 뉴스레터 또는 다른 어떤 목적으로도 사용하지 않습니다. 다른 출처의 데이터와 결합하지 않습니다.",
      storageHeading: "데이터 저장 및 보안",
      storageBody1:
        "귀하의 릴레이에 저장된 SSH 키는 AES-256-GCM을 사용하여 정지 상태에서 암호화됩니다. 모든 릴레이 데이터 — 연결 메타데이터, 명령 로그, 키 — 는 전적으로 귀하 자신의 인프라에 위치합니다. Matt's Software는 귀하의 데이터를 저장하는 중앙 서버를 운영하지 않습니다.",
      storageBody2:
        "릴레이가 자체 호스팅되므로, 귀하 데이터의 보안은 궁극적으로 귀하가 서버를 어떻게 구성하고 유지하는지에 달려 있습니다. 당사는 귀하의 릴레이 소프트웨어를 최신 상태로 유지하고 표준 서버 강화 관행을 따를 것을 권장합니다.",
      thirdPartyHeading: "제3자 서비스",
      thirdPartyBody:
        "Tap은 인증을 위해 Apple Sign-In을 사용합니다. 로그인 과정 중 Apple이 수집하는 데이터는 Apple의 개인정보 처리방침에 의해 규제됩니다. Apple Sign-In 외에, Tap은 제3자 분석, 광고 또는 추적 서비스와 통합되지 않습니다.",
      notDoHeading: "당사가 하지 않는 일",
      notDoList: [
        "어떤 종류의 분석이나 추적도 실행하지 않습니다",
        "제3자와 데이터를 공유하지 않습니다",
        "광고를 게재하지 않습니다",
        "사용 텔레메트리를 수집하지 않습니다",
        "귀하의 릴레이 서버나 그 데이터에 접근하지 않습니다",
        "귀하의 개인 정보를 판매하거나 임대하지 않습니다",
      ],
      retentionHeading: "데이터 보존 및 삭제",
      retentionBody:
        "귀하는 언제든지 Tap 앱 내에서 계정과 모든 관련 데이터를 삭제할 수 있습니다. 데이터가 귀하의 릴레이에 저장되므로, 귀하가 선택할 때 언제든지 서버에서 직접 제거할 수도 있습니다.",
      childrenHeading: "아동의 개인정보",
      childrenBody:
        "Tap은 13세 미만의 아동을 대상으로 하지 않습니다. 당사는 의도적으로 13세 미만 아동의 개인 정보를 수집하지 않습니다. 아동이 당사에 개인 정보를 제공했다고 생각되면, 당사에 연락해 주시면 삭제 조치를 취하겠습니다.",
      changesHeading: "본 처리방침의 변경",
      changesBody:
        "당사는 본 개인정보 처리방침을 수시로 업데이트할 수 있습니다. 업데이트할 때, 새로운 발효일과 함께 본 페이지에 수정된 처리방침을 게시합니다. 변경 사항이 게시된 후 Tap의 계속된 사용은 업데이트된 처리방침의 수락을 구성합니다.",
      contactHeading: "문의하기",
      contactBody:
        "본 개인정보 처리방침에 관해 질문이나 우려 사항이 있으시면 다음으로 문의해 주십시오:",
    },

    terms: {
      acceptHeading: "약관의 수락",
      acceptBody:
        'Tap("본 앱")을 다운로드, 설치 또는 사용함으로써 귀하는 본 서비스 약관("약관")에 구속되는 데 동의합니다. 본 약관에 동의하지 않으시면 본 앱을 사용하지 마십시오. 본 약관은 미국에 본사를 둔 Matt\'s Software("당사")와 귀하 사이의 법적 계약을 구성합니다.',
      descriptionHeading: "서비스 설명",
      descriptionBody:
        "Tap은 Apple Watch, iPhone, Mac을 위한 SSH 명령 릴레이 애플리케이션입니다. 귀하가 직접 호스팅하고 운영하는 릴레이 서버를 통해 원격 서버에서 명령을 실행할 수 있게 합니다. Matt's Software는 클라이언트 애플리케이션과 릴레이 소프트웨어를 제공합니다. 당사는 귀하의 릴레이 서버나 귀하가 연결하는 서버를 운영, 관리하거나 접근하지 않습니다.",
      accountsHeading: "사용자 계정",
      accountsBody:
        "Tap은 인증을 위해 Apple Sign-In을 사용합니다. 각 사람은 하나의 계정을 유지할 수 있습니다. 귀하는 계정의 보안 유지와 계정에서 발생하는 모든 활동에 대해 책임이 있습니다. 계정 자격 증명을 공유하거나 다른 사람이 계정에 접근하도록 허용해서는 안 됩니다.",
      responsibilitiesHeading: "사용자 책임",
      serversHeading: "귀하의 서버",
      serversBody:
        "귀하는 Tap을 통해 연결하는 서버에 대해 책임이 있습니다. 여기에는 해당 서버에 접근할 적절한 권한이 있는지, 그리고 귀하의 사용이 모든 적용 가능한 정책 및 법률을 준수하는지 확인하는 것이 포함됩니다.",
      commandsHeading: "귀하의 명령",
      commandsBody:
        "Tap은 귀하가 제공하는 명령을 실행하는 도구입니다. 귀하는 Tap을 통해 실행하는 모든 명령과 그 결과에 대해 전적인 책임을 받아들입니다. Matt's Software는 본 앱을 통해 실행된 명령의 결과에 대해 책임지지 않습니다.",
      relayHeading: "귀하의 릴레이",
      relayBody:
        "Tap 릴레이 서버는 귀하의 인프라에 자체 호스팅됩니다. 귀하는 릴레이의 보안, 최신 상태 유지, 그리고 접근 관리에 대해 책임이 있습니다. Matt's Software는 귀하의 릴레이를 운영, 모니터링하거나 유지하지 않습니다.",
      acceptableHeading: "허용 가능한 사용",
      acceptableIntro: "귀하는 다음의 목적으로 Tap을 사용하지 않을 것에 동의합니다:",
      acceptableList: [
        "어떤 시스템, 네트워크 또는 데이터에 대한 무단 접근 획득",
        "적용 가능한 지역, 주, 국가 또는 국제법 위반",
        "악성 코드, 바이러스 또는 다른 유해한 코드 전송",
        "어떤 시스템의 무결성이나 성능을 방해하거나 중단",
        "다른 사람이나 단체에 대한 괴롭힘, 학대 또는 해악",
        "사기, 기만 또는 오해의 소지가 있는 활동에 참여",
      ],
      ipHeading: "지적 재산권",
      ipBody:
        "Tap 애플리케이션은 디자인, 코드, 문서를 포함하여 Matt's Software가 소유하며 적용 가능한 지적 재산법에 의해 보호됩니다. 귀하의 Tap 사용은 본 앱의 어떤 지적 재산권에 대한 소유권도 부여하지 않습니다. 귀하의 릴레이 서버에 저장된 귀하의 데이터, 구성, 콘텐츠는 귀하의 것으로 유지됩니다.",
      warrantyHeading: "보증의 부인",
      warrantyBody:
        'Tap은 상품성, 특정 목적에의 적합성, 비침해를 포함하되 이에 국한되지 않는 명시적 또는 묵시적 어떠한 종류의 보증 없이 "있는 그대로" 그리고 "이용 가능한 대로" 제공됩니다. Matt\'s Software는 본 앱이 중단되지 않거나, 오류가 없거나, 안전하거나, 특정 시점에 이용 가능할 것을 보장하지 않습니다.',
      liabilityHeading: "책임의 제한",
      liabilityBody:
        "적용 가능한 법률에 의해 허용되는 최대 범위 내에서, Matt's Software는 책임 이론에 관계없이, 귀하의 Tap 사용으로 인한 또는 그와 관련된 간접적, 부수적, 특별, 결과적 또는 징벌적 손해, 또는 데이터, 이익, 수익 또는 사업 기회의 손실에 대해 책임지지 않습니다.",
      terminationHeading: "종료",
      terminationBody:
        "귀하는 언제든지 계정을 삭제하고 Tap 사용을 중단할 수 있습니다. Matt's Software는 통지 여부와 관계없이, 본 약관을 위반하거나 다른 사용자나 당사에 해로운 것으로 당사가 판단하는 행위에 대해, 언제든지 본 앱에 대한 귀하의 접근을 정지하거나 종료할 권리를 보유합니다.",
      governingHeading: "준거법",
      governingBody:
        "본 약관은 법률 충돌 원칙에 관계없이 미국 법률에 따라 규제되고 해석됩니다. 본 약관 또는 귀하의 Tap 사용으로 인한 모든 분쟁은 미국 법원에서 해결됩니다.",
      changesHeading: "본 약관의 변경",
      changesBody:
        "당사는 본 약관을 수시로 업데이트할 수 있습니다. 업데이트할 때, 새로운 발효일과 함께 본 페이지에 수정된 약관을 게시합니다. 변경 사항이 게시된 후 Tap의 계속된 사용은 업데이트된 약관의 수락을 구성합니다.",
      contactHeading: "문의",
      contactBody: "본 약관에 관해 질문이 있으시면 다음으로 문의해 주십시오:",
    },

    eula: {
      intro:
        '본 최종 사용자 라이선스 계약("본 계약")은 Tap("본 앱")의 사용을 위한, 미국에 본사를 둔 Matt\'s Software("당사")와 귀하 사이의 법적 계약입니다. 본 앱을 설치하거나 사용함으로써 귀하는 본 계약에 구속되는 데 동의합니다.',
      licensedHeading: "라이선스된 애플리케이션",
      licensedBody:
        "Tap은 Matt's Software에 의해 개발되고 발행된, Apple Watch, iPhone, Mac을 위한 SSH 명령 릴레이 애플리케이션입니다. 본 앱은 귀하가 직접 호스팅하는 릴레이 서버를 통해 원격 서버에서 명령을 실행할 수 있게 합니다.",
      scopeHeading: "라이선스의 범위",
      scopeBody:
        "Matt's Software는 본 계약과 Apple Media Services 이용 약관에 따라, 귀하가 소유하거나 통제하는 기기에서 본 앱을 다운로드, 설치, 사용할 수 있는 제한적, 비독점적, 양도 불가능, 취소 가능한 라이선스를 귀하에게 부여합니다.",
      scopeIntro: "본 라이선스는 다음을 허용하지 않습니다:",
      scopeList: [
        "본 앱을 제3자에게 배포, 재라이선스, 임대, 대여 또는 빌려주기",
        "본 앱의 역공학, 디컴파일, 분해 또는 소스 코드 도출 시도",
        "본 앱을 기반으로 수정, 적응, 번역 또는 파생 작품 생성",
        "본 앱의 저작권, 상표 또는 기타 소유권 통지의 제거, 변경 또는 가림",
        "본 계약에 의해 불법이거나 금지된 어떤 목적을 위해 본 앱 사용",
      ],
      relayHeading: "자체 호스팅 릴레이",
      relayBody:
        "Tap은 귀하 자신의 인프라에서 호스팅하고 운영하는 릴레이 서버에 연결합니다. Matt's Software는 귀하의 릴레이 서버를 제공, 관리 또는 유지하지 않습니다. 당사는 귀하의 릴레이 서버 또는 본 앱을 통해 연결하는 어떤 원격 서버의 구성, 운영, 보안 또는 가용성으로 인한 어떤 문제에도 책임지지 않습니다.",
      ownershipHeading: "소유권",
      ownershipBody:
        "본 앱과 모든 관련 지적 재산권은 Matt's Software의 재산이며 계속 그러할 것입니다. 본 계약은 귀하에게 본 앱에 대한 어떤 소유권 이익도 부여하지 않습니다. 귀하의 릴레이 서버에 저장된 귀하의 데이터, 구성, 콘텐츠는 귀하의 것으로 유지됩니다.",
      terminationHeading: "종료",
      terminationBody:
        "본 라이선스는 종료될 때까지 유효합니다. 본 계약의 어떤 조항이라도 준수하지 않으면 본 계약에 따른 귀하의 권리는 통지 없이 자동으로 종료됩니다. 종료 시 귀하는 본 앱 사용을 중단하고 기기에서 모든 사본을 삭제해야 합니다. Matt's Software는 어떤 이유로든 언제든지 본 라이선스를 종료할 수도 있습니다.",
      warrantyHeading: "보증의 부인",
      warrantyBody:
        '본 앱은 상품성, 특정 목적에의 적합성, 비침해를 포함하되 이에 국한되지 않는 명시적 또는 묵시적 어떠한 종류의 보증 없이 "있는 그대로" 그리고 "이용 가능한 대로" 제공됩니다. Matt\'s Software는 본 앱이 중단되지 않거나, 오류가 없거나, 유해한 구성 요소가 없을 것을 보증하지 않습니다.',
      liabilityHeading: "책임의 제한",
      liabilityBody:
        "적용 가능한 법률에 의해 허용되는 최대 범위 내에서, Matt's Software는 책임 이론에 관계없이, 귀하의 본 앱 사용으로 인한 또는 그와 관련된 간접적, 부수적, 특별, 결과적 또는 징벌적 손해, 또는 데이터, 이익 또는 수익의 손실에 대해 책임지지 않습니다.",
      governingHeading: "준거법",
      governingBody:
        "본 계약은 법률 충돌 원칙에 관계없이 미국 법률에 따라 규제되고 해석됩니다.",
      contactHeading: "문의",
      contactBody: "본 계약에 관해 질문이 있으시면 다음으로 문의해 주십시오:",
    },
  },

  notFound: {
    altText:
      "탐험가 모자를 쓴 빨간 가터뱀이 물음표 모양의 바위 위에 앉아 있고, 주위에는 빈 표지판들이 있다",
    title: "이 페이지는 길을 잃었습니다.",
    sub: "표지판은 비어 있습니다. 뱀도 모릅니다. 존재하는 곳으로 돌려보내 드리겠습니다.",
    backToSuite: "모음집으로 돌아가기",
    rummageGithub: "또는 GitHub에서 뒤지기",
  },
};
