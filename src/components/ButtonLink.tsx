import type { ComponentProps, ReactNode } from "react";
import { Link } from "react-router-dom";

/// A link drawn as the kit's Button.
///
/// GlacierUI's Button renders a <button>, which is right for an action and
/// wrong for a destination: a download, a route and a link out should be
/// anchors, so they open in a new tab, show where they go, and are counted
/// by the outbound-link analytics. The `.lbtn` rules in site.css restate the
/// kit's Button styles from the same tokens.
///
/// `to` is a route on this site; `href` is anywhere else.

type Variant = "solid" | "soft" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface Common {
  variant?: Variant;
  size?: Size;
  children?: ReactNode;
  className?: string;
}

type RouteProps = Common & { to: string } & Omit<ComponentProps<typeof Link>, "to" | "className" | "children">;
type AnchorProps = Common & { href: string; external?: boolean } & Omit<ComponentProps<"a">, "href" | "className" | "children">;

function classes(variant: Variant, size: Size, extra?: string): string {
  return ["lbtn", `lbtn--${variant}`, size !== "md" ? `lbtn--${size}` : "", extra ?? ""]
    .filter(Boolean)
    .join(" ");
}

export function ButtonLink(props: RouteProps | AnchorProps) {
  if ("to" in props) {
    const { variant = "solid", size = "md", className, children, to, ...rest } = props;
    return (
      <Link to={to} className={classes(variant, size, className)} {...rest}>
        {children}
      </Link>
    );
  }
  const { variant = "solid", size = "md", className, children, href, external, ...rest } = props;
  return (
    <a
      href={href}
      className={classes(variant, size, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
