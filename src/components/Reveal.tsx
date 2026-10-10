import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Motion, motionProps, staggerDelay } from "@glacier/motion";

/// The kit's RiseIn entrance, played once as the element scrolls into view.
/// `index` staggers a row of siblings by the kit's stagger step. Under
/// reduced motion it renders a plain element and nothing moves.
export function Reveal({
  children,
  index = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }
  const rise = motionProps(Motion.RiseIn);
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={rise.initial}
      whileInView={rise.animate}
      viewport={{ once: true, amount: 0.1 }}
      transition={staggerDelay(index)}
    >
      {children}
    </Tag>
  );
}
