import { useEffect, useRef, useState } from "react";
import "./Logo.css";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>/\\|{}[]~^";
const FINAL_TEXT = "Matts Software";
const COMMAND = "matts-software --version";

/** Full terminal experience: window chrome, typing command, matrix resolve, blinking cursor */
export function LogoTerminal() {
  const [phase, setPhase] = useState<"prompt" | "typing" | "output" | "resolve" | "done">("prompt");
  const [cmdChars, setCmdChars] = useState(0);
  const [outputText, setOutputText] = useState("");
  const [resolvedCount, setResolvedCount] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);

  // Phase 1: Type the command
  useEffect(() => {
    const timer = setTimeout(() => setPhase("typing"), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase !== "typing") return;
    if (cmdChars >= COMMAND.length) {
      setTimeout(() => setPhase("output"), 300);
      return;
    }
    const delay = 30 + Math.random() * 60;
    const timer = setTimeout(() => setCmdChars((c) => c + 1), delay);
    return () => clearTimeout(timer);
  }, [phase, cmdChars]);

  // Phase 2: Show scrambled output then resolve
  useEffect(() => {
    if (phase !== "output") return;
    // Start with random chars
    const scrambled = Array.from({ length: FINAL_TEXT.length }, (_, i) =>
      FINAL_TEXT[i] === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]
    ).join("");
    setOutputText(scrambled);
    setTimeout(() => setPhase("resolve"), 200);
  }, [phase]);

  // Phase 3: Resolve characters one by one
  useEffect(() => {
    if (phase !== "resolve") return;
    if (resolvedCount >= FINAL_TEXT.length) {
      setPhase("done");
      return;
    }
    const timer = setTimeout(() => {
      setResolvedCount((c) => c + 1);
      // Scramble remaining unresolved characters
      setOutputText((prev) => {
        const arr = prev.split("");
        for (let i = resolvedCount + 1; i < FINAL_TEXT.length; i++) {
          if (FINAL_TEXT[i] === " ") continue;
          arr[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        // Lock in the next resolved character
        arr[resolvedCount] = FINAL_TEXT[resolvedCount];
        return arr.join("");
      });
    }, 40 + Math.random() * 30);
    return () => clearTimeout(timer);
  }, [phase, resolvedCount]);

  // Matrix rain canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();

    const cols = Math.floor(canvas.offsetWidth / 14);
    const drops = Array.from({ length: cols }, () => Math.random() * -50);

    const draw = () => {
      ctx.fillStyle = "rgba(12, 10, 18, 0.15)";
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ctx.font = "12px monospace";

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const brightness = Math.random();
        if (brightness > 0.7) {
          ctx.fillStyle = "rgba(139, 92, 246, 0.4)";
        } else if (brightness > 0.4) {
          ctx.fillStyle = "rgba(139, 92, 246, 0.15)";
        } else {
          ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
        }
        ctx.fillText(char, i * 14, drops[i] * 14);
        if (drops[i] * 14 > canvas.offsetHeight && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i] += 0.3 + Math.random() * 0.3;
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="terminal">
      <canvas ref={canvasRef} className="terminal__rain" />
      <div className="terminal__window">
        <div className="terminal__titlebar">
          <span className="terminal__dot terminal__dot--red" />
          <span className="terminal__dot terminal__dot--yellow" />
          <span className="terminal__dot terminal__dot--green" />
          <span className="terminal__titlebar-text">matt@dev ~ </span>
        </div>
        <div className="terminal__body">
          <div className="terminal__line">
            <span className="terminal__prompt-char">$</span>
            <span className="terminal__cmd">{COMMAND.slice(0, cmdChars)}</span>
            {(phase === "typing" || phase === "prompt") && <span className="terminal__cursor" />}
          </div>
          {(phase === "output" || phase === "resolve" || phase === "done") && (
            <div className="terminal__line terminal__line--output">
              <span className="terminal__output">{phase === "done" ? FINAL_TEXT : outputText}</span>
            </div>
          )}
          {phase === "done" && (
            <>
              <div className="terminal__line terminal__line--version">
                <span className="terminal__meta">v1.0.0 — open source apps that do what they say</span>
              </div>
              <div className="terminal__line">
                <span className="terminal__prompt-char">$</span>
                <span className="terminal__cursor" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Keep other exports for backwards compat
export function LogoGradient() { return <h1 className="logo logo--gradient">Matts Software</h1>; }
export function LogoGlitch() { return <div className="logo logo--glitch"><span className="logo__glitch-text" data-text="Matts Software">Matts Software</span></div>; }
export function LogoSplit() { return <h1 className="logo logo--split"><span className="logo__word-bold">Matts</span><span className="logo__word-light">Software</span></h1>; }
