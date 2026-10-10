import type { ReactNode } from "react";
import { Check } from "@glacier/icons";
import { Reveal } from "./Reveal";

/// The smaller sections an app page is assembled from. Each is a plain
/// composition of the kit's tokens (site.css); none carries copy of its own.

export function Section({
  eyebrow,
  title,
  sub,
  center = false,
  children,
}: {
  eyebrow?: string;
  title: string;
  sub?: ReactNode;
  center?: boolean;
  children: ReactNode;
}) {
  return (
    <section className="sec sec--ruled">
      <div className={`sec__head${center ? " sec__head--center" : ""}`}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="h2">{title}</h2>
        {sub ? <p className="body">{sub}</p> : null}
      </div>
      {children}
    </section>
  );
}

/// A row of figures, each a value over a label.
export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <ul className="stats">
      {items.map((s) => (
        <li key={s.label}>
          <span className="stats__value">{s.value}</span>
          <span className="stats__label">{s.label}</span>
        </li>
      ))}
    </ul>
  );
}

/// Boxes joined by labelled links: "Watch → HTTPS → Relay → SSH → Servers".
export type FlowPart = { node: ReactNode; icon?: ReactNode } | { link: ReactNode };

export function Flow({ parts }: { parts: FlowPart[] }) {
  return (
    <div className="flow">
      {parts.map((part, i) =>
        "node" in part ? (
          <span key={i} className="flow__node">
            {part.icon}
            {part.node}
          </span>
        ) : (
          <span key={i} className="flow__link" aria-hidden={typeof part.link !== "string"}>
            {part.link}
          </span>
        ),
      )}
    </div>
  );
}

/// A ticked list, two across where there is room.
export function Checks({ items }: { items: string[] }) {
  return (
    <ul className="checks">
      {items.map((text) => (
        <li key={text}>
          <Check size={16} aria-hidden />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

/// Titled tiles: a label and what there is to say about it.
export function Tiles({ items }: { items: { title: ReactNode; body: ReactNode; icon?: ReactNode; key?: string }[] }) {
  return (
    <ul className="tiles">
      {items.map((item, i) => (
        <Reveal as="li" key={item.key ?? i} index={i} className="tile">
          {item.icon}
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </Reveal>
      ))}
    </ul>
  );
}
