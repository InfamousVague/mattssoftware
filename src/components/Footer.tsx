import { Link } from "react-router-dom";
import { Button, SegmentedControl, useToast } from "@glacier/react";
import { Copy } from "@glacier/icons";
import { useTheme, type ThemeChoice } from "../lib/theme";
import { DISCORD_INVITE } from "./icons/DiscordMark";
import { GITHUB_PROFILE } from "./icons/GithubMark";

const EMAIL = "infamousvaguerat@gmail.com";

/// Site-wide footer: the office cat, who the studio is, the theme
/// control, and plain links. English-only; drop i18n entirely so the
/// footer can drift with the rest of the site in step.
export function Footer() {
  const { choice, setChoice } = useTheme();
  const { toast } = useToast();

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast({ tone: "success", message: "Email copied" });
    } catch {
      // No clipboard (insecure context, denied permission): the mail
      // link beside this button still works.
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__inner">
          <div className="footer__about">
            <img
              className="footer__mascot"
              src="/_brand/cat-mascot.png"
              alt="A sleepy office cat curled around a mug and a houseplant"
              loading="lazy"
              width={88}
              height={88}
            />
            <div>
              <p className="footer__line">Built with espresso and loud music.</p>
              <p className="small">
                MattsSoftware is a one-person shop. Every app is free and most
                of them are open source.
              </p>
            </div>
          </div>
          <div className="footer__tools">
            <SegmentedControl
              size="sm"
              aria-label="Theme"
              value={choice}
              onValueChange={(v) => setChoice(v as ThemeChoice)}
              options={[
                { value: "system", label: "System" },
                { value: "light", label: "Light" },
                { value: "dark", label: "Dark" },
              ]}
            />
          </div>
        </div>
        <div className="footer__links">
          <Link to="/">Home</Link>
          <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
            Discord
          </a>
          <a href={`mailto:${EMAIL}`}>Email</a>
          <Button variant="ghost" size="sm" onClick={copyEmail}>
            <Copy size={14} aria-hidden /> Copy email
          </Button>
          <span className="small footer__copy">© MattsSoftware</span>
        </div>
      </div>
    </footer>
  );
}
