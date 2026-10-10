import type { CSSProperties } from "react";

/// An app's icon, clipped to one squircle whatever the art's own corners do.
/// Decorative by default (the app's name is always beside it); pass `alt`
/// where the icon stands alone.
export function AppIcon({
  src,
  size,
  alt = "",
  eager = false,
}: {
  src: string;
  /// Any CSS length. Omit to let the stylesheet size it.
  size?: string;
  alt?: string;
  eager?: boolean;
}) {
  return (
    <img
      className="appicon"
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      style={size ? ({ "--icon": size } as CSSProperties) : undefined}
    />
  );
}
