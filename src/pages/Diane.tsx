import { useEffect, useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import "./AppPage.css";

const FEATURES: FeatureSection[] = [
  {
    badge: "Voice Recorder",
    title: "A skeuomorphic cassette recorder for your desktop",
    description: "A floating sidebar with a photorealistic cassette recorder. Press record and talk. Your voice is captured, transcribed live, and saved to a cassette tape you can browse, rewind, and play back.",
    bullets: [
      "Photorealistic cassette recorder with animated reels and VU meters",
      "Record, play, rewind, and fast-forward with physical button controls",
      "Tape spools visually track playback position in real time",
      "Global hotkeys let you record from any app without switching windows",
    ],
    image: "/diane/screenshots/recorder.png",
    imageAlt: "Diane cassette recorder interface",
  },
  {
    badge: "Live Transcription",
    title: "Your words, typed as you speak them",
    description: "Diane transcribes your speech in real time using Apple's on-device speech recognition. No cloud, no API keys, no latency. Just talk and watch the words appear.",
    bullets: [
      "Live speech-to-text powered by macOS SFSpeechRecognizer",
      "Fully on-device processing with zero data leaving your machine",
      "Click any word in the transcript to jump to that moment in the recording",
      "Dictation mode types your words directly into any focused text field",
    ],
    image: "/diane/screenshots/transcription.png",
    imageAlt: "Diane live transcription overlay",
  },
  {
    badge: "Tape Library",
    title: "A shoebox full of cassette tapes",
    description: "Every recording is saved as a cassette tape with its own color variant. Scroll through your collection, click to load, and play back anytime.",
    bullets: [
      "10 unique cassette tape color variants assigned randomly",
      "Tapes persist across sessions with full audio and transcript",
      "Arrow keys cycle through your tape collection",
      "Word count displayed on each tape label",
    ],
    image: "/diane/screenshots/library.png",
    imageAlt: "Diane cassette tape library",
  },
];

async function getDianeDownloadUrl(): Promise<string> {
  try {
    const res = await fetch("https://api.github.com/repos/InfamousVague/Diane/releases/latest");
    if (!res.ok) return "https://github.com/InfamousVague/Diane/releases/latest";
    const data = await res.json();
    const dmg = data.assets?.find((a: { name: string }) => a.name.endsWith(".dmg"));
    return dmg?.browser_download_url || "https://github.com/InfamousVague/Diane/releases/latest";
  } catch {
    return "https://github.com/InfamousVague/Diane/releases/latest";
  }
}

export function DianePage() {
  const [downloadUrl, setDownloadUrl] = useState("https://github.com/InfamousVague/Diane/releases/latest");

  useEffect(() => {
    getDianeDownloadUrl().then(setDownloadUrl);
  }, []);

  return (
    <div className="app-page">
      <section className="app-page__hero">
        <img src="/diane/app-icon.png" alt="Diane" className="app-page__icon" />
        <h1 className="app-page__title">Diane</h1>
        <p className="app-page__tagline">I'm holding in my hand a small tape recorder.</p>
        <p className="app-page__desc">
          A retro voice recorder with live speech-to-text transcription, inspired by Special Agent Dale Cooper's cassette tape memos.
        </p>
        <div className="app-page__actions">
          <a href={downloadUrl} className="btn btn--primary"><Download size={16} /> Download for macOS</a>
          <a href="https://github.com/InfamousVague/Diane" className="btn btn--ghost" target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> View on GitHub</a>
        </div>
        <span className="app-page__req">Free &amp; Open Source</span>
      </section>

      <FeatureShowcase features={FEATURES} />

      <section className="section" style={{ textAlign: "center" }}>
        <h2 className="section__title">Ready to start recording?</h2>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 32 }}>
          <a href={downloadUrl} className="btn btn--primary"><Download size={16} /> Download for macOS</a>
          <a href="https://github.com/InfamousVague/Diane" className="btn btn--ghost" target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> View on GitHub</a>
        </div>
      </section>
    </div>
  );
}
