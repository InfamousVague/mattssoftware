import { useRef } from "react";
import { Link } from "react-router-dom";
import "./HoverAnimGrid.css";

/// Tiles to show in the 3×3 showcase. Each row is rendered
/// left-to-right; the layout grids them with CSS, so reordering
/// here just shuffles the visual.
///
/// `to` is the route the tile links to on click. Apps whose
/// catalog rows still use external URLs (`viewExternal: true`)
/// get the external URL inline.
const TILES = [
  { id: "alfred",      name: "Alfred",      to: "/alfred" },
  { id: "espresso",    name: "Espresso",    to: "/espresso" },
  { id: "uninstaller", name: "Uninstaller", to: "/uninstaller" },
  { id: "stats",       name: "Stats",       to: "/stats" },
  { id: "peephole",    name: "Peephole",    to: "/peephole" },
  { id: "halo",        name: "Halo",
    href: "https://github.com/InfamousVague/Halo" },
  { id: "blip",        name: "Blip",        to: "/blip" },
  { id: "base",        name: "Base",        to: "/base" },
  { id: "diane",       name: "Diane",       to: "/diane" },
] as const;

/// Lazy intersection-observer hook would be the proper finish
/// here, but with 9 video tags at 100–250KB each + autoplay-
/// muted-loop + decoding from ~24fps source, modern browsers
/// idle out the off-screen ones automatically. Skip the hook.
export function HoverAnimGrid() {
  return (
    <section className="ms-anim-showcase" aria-label="Hover-to-play app icons">
      <div className="ms-anim-showcase__eyebrow">
        <span className="ms-anim-showcase__chip">NEW</span>
        Live icons in the launcher
      </div>
      <h2 className="ms-anim-showcase__title">
        Every app has a&nbsp;little life now.
      </h2>
      <p className="ms-anim-showcase__sub">
        Hover any tile in the MattsSoftware launcher and its
        squircle takes a breath — a four-second loop that crosses
        right back into the static icon when it&apos;s done. Same
        chibi-Pixar voice the whole suite shares.
      </p>
      <div className="ms-anim-showcase__grid">
        {TILES.map((tile) => (
          <Tile key={tile.id} tile={tile} />
        ))}
      </div>
    </section>
  );
}

function Tile({ tile }: { tile: (typeof TILES)[number] }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // The video autoplays muted on mount (Safari + Chrome allow
  // muted autoplay without user gesture). We DON'T loop in the
  // <video> tag itself — instead we listen for `ended` and
  // restart on a small delay so the brand has a moment of
  // stillness between plays, mirroring the launcher's behaviour.
  function handleEnded() {
    const v = videoRef.current;
    if (!v) return;
    window.setTimeout(() => {
      if (!v.isConnected) return;
      v.currentTime = 0;
      v.play().catch(() => {});
    }, 600);
  }

  // On hover, restart immediately so a passing cursor always
  // catches the opening frame instead of mid-loop.
  function handleMouseEnter() {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  }

  const inner = (
    <>
      <video
        ref={videoRef}
        className="ms-anim-tile__video"
        src={`/anim/${tile.id}.mp4`}
        muted
        playsInline
        autoPlay
        preload="auto"
        onEnded={handleEnded}
        onMouseEnter={handleMouseEnter}
        aria-hidden="true"
      />
      <span className="ms-anim-tile__label">{tile.name}</span>
    </>
  );

  if ("href" in tile) {
    return (
      <a
        href={tile.href}
        target="_blank"
        rel="noopener noreferrer"
        className="ms-anim-tile"
      >
        {inner}
      </a>
    );
  }
  return (
    <Link to={tile.to} className="ms-anim-tile">
      {inner}
    </Link>
  );
}
