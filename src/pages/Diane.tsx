import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";

const FEATURES = [
  {
    title: "A skeuomorphic cassette recorder",
    body: "A floating sidebar with a photorealistic recorder: animated reels, VU meters, and physical button controls. Press record and talk — global hotkeys let you record from any app.",
  },
  {
    title: "Live transcription, on-device",
    body: "Apple's SFSpeechRecognizer transcribes as you speak — no cloud, no API keys. Click any word in the transcript to jump to that moment in the recording.",
  },
  {
    title: "A shoebox full of cassettes",
    body: "Every recording is saved as a colored cassette tape with its audio and transcript. Scroll through your collection, load any one, play back anytime.",
  },
];

const SHOWCASE: FeatureSection[] = [
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

export function DianePage() {
  return (
    <AppPage
      themeId="diane"
      title="Diane"
      tagline="Press record. Talk."
      description="A retro voice recorder with live speech-to-text transcription, a cassette-tape library, and dictation mode. Inspired by Special Agent Dale Cooper's tape memos."
      heroImage="/diane/hero.png"
      icon="/diane/app-icon.png"
      requirements="Free & Open Source"
      features={FEATURES}
      featuresHeading="Press record. Talk. Walk."
      cta={{ kind: "github", repo: "Diane" }}
    >
      <FeatureShowcase features={SHOWCASE} />
    </AppPage>
  );
}
