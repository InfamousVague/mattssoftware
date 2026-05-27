import { useEffect, useRef, useState } from "react";
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

/// How many tiles play ambiently at any given moment. Two
/// reads as "the grid is alive" without being chaotic; modern
/// browsers handle two simultaneous H.264 decode streams at
/// 400×400 effortlessly.
const AMBIENT_COUNT = 2;
/// Delay between the first and second tile's initial start so
/// the two streams don't end at the same moment + immediately
/// replace as a pair. ~1.5s on a 4s clip gives a comfortable
/// stagger that's preserved through the rolling rotation.
const AMBIENT_STAGGER_MS = 1500;

/// Random tile id NOT already in the active set. Used both for
/// the initial mount and for rolling a new tile every time an
/// active one finishes its loop.
function pickReplacement(active: Set<string>): string | null {
  const available = TILES.filter((t) => !active.has(t.id));
  if (available.length === 0) return null;
  return available[Math.floor(Math.random() * available.length)].id;
}

export function HoverAnimGrid() {
  // Set of tile ids currently driven by the ambient orchestrator.
  // Tiles also play on hover regardless of whether they're in
  // this set, so the two surfaces compose cleanly.
  const [ambient, setAmbient] = useState<Set<string>>(new Set());

  // Initial mount: seed AMBIENT_COUNT tiles, staggered so they
  // never finish at the same instant. After this, the rolling
  // logic in handleAmbientFinished maintains the rhythm — each
  // tile that finishes is immediately replaced by a fresh pick.
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < AMBIENT_COUNT; i++) {
      timers.push(
        window.setTimeout(() => {
          setAmbient((prev) => {
            const next = new Set(prev);
            const pick = pickReplacement(next);
            if (pick) next.add(pick);
            return next;
          });
        }, i * AMBIENT_STAGGER_MS),
      );
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  // A tile's ambient playthrough hit its last frame. Drop it
  // from the active set + roll a fresh tile into the slot it
  // vacated, preserving the rolling-flow rhythm.
  function handleAmbientFinished(id: string) {
    setAmbient((prev) => {
      const next = new Set(prev);
      next.delete(id);
      const pick = pickReplacement(next);
      if (pick) next.add(pick);
      return next;
    });
  }

  return (
    <div className="ms-anim-grid" aria-label="App icon previews">
      {TILES.map((tile) => (
        <Tile
          key={tile.id}
          tile={tile}
          isAmbient={ambient.has(tile.id)}
          onAmbientFinished={handleAmbientFinished}
        />
      ))}
    </div>
  );
}

interface TileProps {
  tile: (typeof TILES)[number];
  isAmbient: boolean;
  onAmbientFinished: (id: string) => void;
}

function Tile({ tile, isAmbient, onAmbientFinished }: TileProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // Local hover state composes with the ambient prop —
  // whichever is true keeps the video visible + playing.
  const [isHovering, setIsHovering] = useState(false);
  const showVideo = isHovering || isAmbient;

  // Whenever `showVideo` transitions true → false → true, seek
  // to 0 and play. SwiftUI-style behaviour: each fresh activation
  // gets a fresh playthrough from the opening frame. (Re-hovering
  // mid-ambient-loop is a no-op because showVideo was already
  // true, so we don't restart and the user sees the in-progress
  // motion they'd otherwise interrupt.)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (showVideo) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [showVideo]);

  function handleEnded() {
    // Tell the orchestrator we finished (it'll roll us out of
    // the ambient set and pick a replacement). Also drop our
    // hover latch so the next mouseleave + mouseenter starts
    // cleanly — same "videoFinished" latch the launcher uses.
    if (isAmbient) onAmbientFinished(tile.id);
    setIsHovering(false);
  }

  const inner = (
    <>
      <span className="ms-anim-tile__squircle">
        {/* Static image is the video's first frame, extracted
            from the SAME re-encoded mp4 below — so the
            crossfade is pixel-for-pixel seamless. No PNG <→>
            video mismatch on the seam. */}
        <img
          className="ms-anim-tile__img"
          src={`/anim/${tile.id}.png`}
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

  const hoverHandlers = {
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false),
  };

  if ("href" in tile) {
    return (
      <a
        href={tile.href}
        target="_blank"
        rel="noopener noreferrer"
        className="ms-anim-tile"
        {...hoverHandlers}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link to={tile.to} className="ms-anim-tile" {...hoverHandlers}>
      {inner}
    </Link>
  );
}
