import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./HoverAnimGrid.css";

/// Tiles shown in the home-hero icon grid. Each tile mirrors
/// the launcher's APPS-grid behaviour: static icon by default,
/// fade in the hover-video on `:hover`, fade back out when the
/// video reaches its last frame or the cursor leaves.
///
/// `to` → internal route (Link). `href` → external (anchor).
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

/// Compact 3×3 grid sized to fit the bighero's left column. No
/// header text — context comes from the hero pitch sitting to
/// its right. Renders as plain anchors / links so each tile is
/// a deep-link into the relevant marketing page.
export function HoverAnimGrid() {
  return (
    <div className="ms-anim-grid" aria-label="App icon previews">
      {TILES.map((tile) => (
        <Tile key={tile.id} tile={tile} />
      ))}
    </div>
  );
}

function Tile({ tile }: { tile: (typeof TILES)[number] }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // Drives the crossfade: static icon underneath, video on top
  // at opacity 0 until showVideo flips true. Video reaches end
  // → showVideo back to false → static icon shows through.
  const [showVideo, setShowVideo] = useState(false);

  function handleEnter() {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    setShowVideo(true);
    v.play().catch(() => {});
  }

  function handleLeave() {
    const v = videoRef.current;
    setShowVideo(false);
    // Pause so background tabs / off-screen tiles don't hold a
    // decoder. The next hover seeks to 0 + plays from scratch.
    v?.pause();
  }

  function handleEnded() {
    // Video finished its loop — fade back to the static icon
    // even if the cursor is still hovering. Mirrors the
    // launcher's behaviour (actionAtItemEnd = .pause + the
    // `videoFinished` latch in AppTile).
    setShowVideo(false);
    const v = videoRef.current;
    v?.pause();
  }

  const inner = (
    <>
      <span className="ms-anim-tile__squircle">
        <img
          className="ms-anim-tile__img"
          src={`/${tile.id}/app-icon.png`}
          alt=""
          draggable={false}
        />
        <video
          ref={videoRef}
          className="ms-anim-tile__video"
          src={`/anim/${tile.id}.mp4`}
          muted
          playsInline
          preload="metadata"
          onEnded={handleEnded}
          aria-hidden="true"
          style={{ opacity: showVideo ? 1 : 0 }}
        />
      </span>
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
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link
      to={tile.to}
      className="ms-anim-tile"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {inner}
    </Link>
  );
}
