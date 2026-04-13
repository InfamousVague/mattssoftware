import type { ReactNode } from "react";
import "./WatchMockup.css";

// ── Watch shell ─────────────────────────────────────────────

export function WatchMockup({ children }: { children: ReactNode }) {
  return (
    <div className="watch-mockup">
      <div className="watch-mockup__bezel">
        <div className="watch-mockup__crown" />
        <div className="watch-mockup__button" />
        <div className="watch-mockup__screen">
          {children}
        </div>
      </div>
    </div>
  );
}

// ── Phone shell ─────────────────────────────────────────────

export function PhoneMockup({ children }: { children: ReactNode }) {
  return (
    <div className="phone-mockup">
      <div className="phone-mockup__notch" />
      <div className="phone-mockup__screen">
        {children}
      </div>
    </div>
  );
}

// ── Mac window shell ────────────────────────────────────────

export function MacMockup({ children }: { children: ReactNode }) {
  return (
    <div className="mac-mockup">
      <div className="mac-mockup__titlebar">
        <span className="mac-mockup__dot mac-mockup__dot--red" />
        <span className="mac-mockup__dot mac-mockup__dot--yellow" />
        <span className="mac-mockup__dot mac-mockup__dot--green" />
        <span className="mac-mockup__titlebar-text">Tap</span>
      </div>
      <div className="mac-mockup__content">
        {children}
      </div>
    </div>
  );
}

// ── Mockup 1: Watch App — Server list + commands ────────────

export function WatchServerList() {
  return (
    <WatchMockup>
      <div className="wm-screen wm-list">
        <div className="wm-header">Servers</div>
        <div className="wm-server-card">
          <div className="wm-server-row">
            <span className="wm-dot wm-dot--green" />
            <span className="wm-server-name">prod-api</span>
            <span className="wm-latency">23ms</span>
          </div>
          <div className="wm-metrics">
            <WmGauge value={42} label="DSK" color="#22c55e" />
            <WmGauge value={67} label="MEM" color="#22c55e" />
            <WmGauge value={0.8} label="CPU" color="#22c55e" isLoad />
          </div>
          <div className="wm-uptime">up 45 days, 3:22</div>
        </div>
        <div className="wm-server-card">
          <div className="wm-server-row">
            <span className="wm-dot wm-dot--green" />
            <span className="wm-server-name">prod-db</span>
            <span className="wm-latency">31ms</span>
          </div>
          <div className="wm-metrics">
            <WmGauge value={78} label="DSK" color="#f59e0b" />
            <WmGauge value={55} label="MEM" color="#22c55e" />
            <WmGauge value={1.2} label="CPU" color="#f59e0b" isLoad />
          </div>
          <div className="wm-uptime">up 12 days, 7:01</div>
        </div>
        <div className="wm-server-card wm-server-card--down">
          <div className="wm-server-row">
            <span className="wm-dot wm-dot--red" />
            <span className="wm-server-name">staging</span>
            <span className="wm-latency wm-latency--down">--</span>
          </div>
        </div>
      </div>
    </WatchMockup>
  );
}

// ── Mockup 2: Companion app (phone) ─────────────────────────

export function PhoneDashboard() {
  return (
    <PhoneMockup>
      <div className="wm-screen wm-phone-dash">
        <div className="wm-phone-header">
          <span>Dashboard</span>
          <span className="wm-phone-status">3 servers</span>
        </div>
        <div className="wm-phone-grid">
          <div className="wm-phone-server">
            <div className="wm-phone-server-top">
              <span className="wm-dot wm-dot--green" />
              <span>prod-api</span>
            </div>
            <div className="wm-phone-server-stats">
              <span>Disk 42%</span>
              <span>Mem 67%</span>
            </div>
            <div className="wm-phone-bar"><div className="wm-phone-bar-fill" style={{ width: "42%" }} /></div>
          </div>
          <div className="wm-phone-server">
            <div className="wm-phone-server-top">
              <span className="wm-dot wm-dot--green" />
              <span>prod-db</span>
            </div>
            <div className="wm-phone-server-stats">
              <span>Disk 78%</span>
              <span>Mem 55%</span>
            </div>
            <div className="wm-phone-bar"><div className="wm-phone-bar-fill wm-phone-bar-fill--warn" style={{ width: "78%" }} /></div>
          </div>
          <div className="wm-phone-server wm-phone-server--down">
            <div className="wm-phone-server-top">
              <span className="wm-dot wm-dot--red" />
              <span>staging</span>
            </div>
            <div className="wm-phone-server-stats"><span>Offline</span></div>
          </div>
        </div>
        <div className="wm-phone-section">
          <span className="wm-phone-section-title">Recent Activity</span>
          <div className="wm-phone-activity">
            <span className="wm-phone-activity-icon">✓</span>
            <span>Restart nginx</span>
            <span className="wm-phone-activity-time">2m ago</span>
          </div>
          <div className="wm-phone-activity">
            <span className="wm-phone-activity-icon">✓</span>
            <span>Check disk</span>
            <span className="wm-phone-activity-time">5m ago</span>
          </div>
        </div>
      </div>
    </PhoneMockup>
  );
}

// ── Mockup 3: Suite execution ───────────────────────────────

export function WatchSuiteProgress() {
  return (
    <WatchMockup>
      <div className="wm-screen wm-suite">
        <div className="wm-header">Deploy Suite</div>
        <div className="wm-suite-step wm-suite-step--done">
          <span className="wm-suite-icon">✓</span>
          <span>git pull origin main</span>
        </div>
        <div className="wm-suite-step wm-suite-step--done">
          <span className="wm-suite-icon">✓</span>
          <span>npm install</span>
        </div>
        <div className="wm-suite-step wm-suite-step--running">
          <span className="wm-suite-icon wm-spin">⟳</span>
          <span>npm run build</span>
        </div>
        <div className="wm-suite-step wm-suite-step--pending">
          <span className="wm-suite-icon">○</span>
          <span>pm2 restart api</span>
        </div>
        <div className="wm-suite-step wm-suite-step--pending">
          <span className="wm-suite-icon">○</span>
          <span>health check</span>
        </div>
        <div className="wm-suite-progress">
          <div className="wm-suite-progress-bar" style={{ width: "50%" }} />
        </div>
        <div className="wm-suite-status">2/5 complete</div>
      </div>
    </WatchMockup>
  );
}

// ── Mockup 4: Alert notification ────────────────────────────

export function WatchAlert() {
  return (
    <WatchMockup>
      <div className="wm-screen wm-alert">
        <div className="wm-alert-icon">⚠</div>
        <div className="wm-alert-title">Server Down</div>
        <div className="wm-alert-server">staging</div>
        <div className="wm-alert-detail">
          <div className="wm-alert-row">
            <span>Last seen</span>
            <span>2 min ago</span>
          </div>
          <div className="wm-alert-row">
            <span>Last ping</span>
            <span className="wm-alert-fail">timeout</span>
          </div>
          <div className="wm-alert-row">
            <span>Uptime was</span>
            <span>12 days</span>
          </div>
        </div>
        <div className="wm-alert-actions">
          <div className="wm-alert-btn wm-alert-btn--primary">Ping Now</div>
          <div className="wm-alert-btn">Dismiss</div>
        </div>
      </div>
    </WatchMockup>
  );
}

// ── Mockup 5: Complications (watch face) ────────────────────

export function WatchComplications() {
  return (
    <WatchMockup>
      <div className="wm-screen wm-face">
        <div className="wm-face-time">10:09</div>
        <div className="wm-face-date">SUN 13</div>
        <div className="wm-face-complications">
          {/* Circular complication — server status gauge */}
          <div className="wm-complication wm-complication--circular">
            <svg viewBox="0 0 40 40" className="wm-complication-gauge">
              <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
              <circle cx="20" cy="20" r="16" fill="none" stroke="#22c55e" strokeWidth="3"
                strokeDasharray="100.5" strokeDashoffset="33.5" strokeLinecap="round"
                transform="rotate(-90 20 20)" />
              <text x="20" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">2</text>
            </svg>
          </div>
          {/* Circular — disk gauge */}
          <div className="wm-complication wm-complication--circular">
            <svg viewBox="0 0 40 40" className="wm-complication-gauge">
              <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
              <circle cx="20" cy="20" r="16" fill="none" stroke="#f59e0b" strokeWidth="3"
                strokeDasharray="100.5" strokeDashoffset="22.1" strokeLinecap="round"
                transform="rotate(-90 20 20)" />
              <text x="20" y="18" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="6">DSK</text>
              <text x="20" y="26" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">78%</text>
            </svg>
          </div>
          {/* Circular — docker */}
          <div className="wm-complication wm-complication--circular">
            <svg viewBox="0 0 40 40" className="wm-complication-gauge">
              <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
              <circle cx="20" cy="20" r="16" fill="none" stroke="#22c55e" strokeWidth="3"
                strokeDasharray="100.5" strokeDashoffset="0" strokeLinecap="round"
                transform="rotate(-90 20 20)" />
              <text x="20" y="18" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="6">DKR</text>
              <text x="20" y="26" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">5/5</text>
            </svg>
          </div>
        </div>
        {/* Rectangular complication at bottom */}
        <div className="wm-complication wm-complication--rect">
          <div className="wm-rect-header">
            <span className="wm-rect-icon">↑</span>
            <span>Uptime</span>
          </div>
          <div className="wm-rect-row">
            <span className="wm-dot wm-dot--green wm-dot--tiny" />
            <span>prod-api</span>
            <span className="wm-rect-val">45d 3:22</span>
          </div>
          <div className="wm-rect-row">
            <span className="wm-dot wm-dot--green wm-dot--tiny" />
            <span>prod-db</span>
            <span className="wm-rect-val">12d 7:01</span>
          </div>
        </div>
      </div>
    </WatchMockup>
  );
}

// ── Mockup 6: macOS menu bar ────────────────────────────────

export function MacMenuBar() {
  return (
    <MacMockup>
      <div className="wm-mac">
        <div className="wm-mac-sidebar">
          <div className="wm-mac-sidebar-item wm-mac-sidebar-item--active">
            <span>Servers</span>
          </div>
          <div className="wm-mac-sidebar-item">
            <span>History</span>
          </div>
          <div className="wm-mac-sidebar-item">
            <span>Settings</span>
          </div>
        </div>
        <div className="wm-mac-main">
          <div className="wm-mac-server-row">
            <span className="wm-dot wm-dot--green" />
            <span className="wm-mac-sname">prod-api</span>
            <span className="wm-mac-detail">42% disk · 67% mem · 0.8 load</span>
            <span className="wm-mac-ping">23ms</span>
          </div>
          <div className="wm-mac-server-row">
            <span className="wm-dot wm-dot--green" />
            <span className="wm-mac-sname">prod-db</span>
            <span className="wm-mac-detail">78% disk · 55% mem · 1.2 load</span>
            <span className="wm-mac-ping">31ms</span>
          </div>
          <div className="wm-mac-server-row wm-mac-server-row--down">
            <span className="wm-dot wm-dot--red" />
            <span className="wm-mac-sname">staging</span>
            <span className="wm-mac-detail">offline</span>
            <span className="wm-mac-ping wm-mac-ping--down">--</span>
          </div>
          <div className="wm-mac-divider" />
          <div className="wm-mac-cmd-section">Commands · prod-api</div>
          <div className="wm-mac-cmd">
            <span className="wm-mac-cmd-icon">▶</span>
            <span>Restart nginx</span>
          </div>
          <div className="wm-mac-cmd">
            <span className="wm-mac-cmd-icon">▶</span>
            <span>Check disk</span>
          </div>
          <div className="wm-mac-cmd">
            <span className="wm-mac-cmd-icon">▶</span>
            <span>Docker stats</span>
          </div>
        </div>
      </div>
    </MacMockup>
  );
}

// ── Mockup 7: Siri dialog ───────────────────────────────────

export function WatchSiri() {
  return (
    <WatchMockup>
      <div className="wm-screen wm-siri">
        <div className="wm-siri-waves">
          <div className="wm-siri-wave" />
          <div className="wm-siri-wave" />
          <div className="wm-siri-wave" />
        </div>
        <div className="wm-siri-text">"Restart nginx on prod-api"</div>
        <div className="wm-siri-response">
          <div className="wm-siri-app-badge">Tap</div>
          <div className="wm-siri-result">
            <span className="wm-siri-check">✓</span>
            <span>nginx restarted successfully</span>
          </div>
          <div className="wm-siri-detail">Exit code 0 · 1.2s</div>
        </div>
      </div>
    </WatchMockup>
  );
}

// ── Helper: mini gauge for server cards ──────────────────────

function WmGauge({ value, label, color, isLoad }: { value: number; label: string; color: string; isLoad?: boolean }) {
  const pct = isLoad ? Math.min(value / 4, 1) * 100 : value;
  const displayVal = isLoad ? value.toFixed(1) : `${value}%`;
  const r = 14;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  return (
    <div className="wm-gauge">
      <svg viewBox="0 0 36 36">
        <circle cx="18" cy="18" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2.5" />
        <circle cx="18" cy="18" r={r} fill="none" stroke={color} strokeWidth="2.5"
          strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
          transform="rotate(-90 18 18)" />
        <text x="18" y="16" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5">{label}</text>
        <text x="18" y="22" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="bold">{displayVal}</text>
      </svg>
    </div>
  );
}
