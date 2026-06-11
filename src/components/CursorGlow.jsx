import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// =========================================================================
//  CursorGlow — a soft cyan light that trails the mouse on desktop.
//  Disabled automatically on touch devices and for reduced-motion users.
// =========================================================================
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const x = useSpring(mx, { stiffness: 220, damping: 30, mass: 0.5 });
  const y = useSpring(my, { stiffness: 220, damping: 30, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    const move = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      className="pointer-events-none fixed left-0 top-0 z-[55] h-72 w-72 rounded-full bg-primary/10 blur-[90px]"
    />
  );
}
