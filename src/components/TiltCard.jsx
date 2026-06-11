import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

// =========================================================================
//  TiltCard — reusable 3D mouse-tracking wrapper.
//  Wrap ANY card in <TiltCard> and it tilts in 3D toward the cursor,
//  with a moving light "glare" that follows the mouse.
//  Props:
//    children  – card content
//    className – classes applied to the inner card
//    max       – maximum tilt angle in degrees (default 10)
//    glare     – show the moving light reflection (default true)
// =========================================================================
export default function TiltCard({
  children,
  className = "",
  max = 10,
  glare = true,
}) {
  const ref = useRef(null);

  // Normalised cursor position inside the card (0 → 1)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Springs make the tilt feel physical instead of robotic
  const spring = { stiffness: 160, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(y, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(x, [0, 1], [-max, max]), spring);

  // Glare follows the cursor as a soft radial highlight
  const glareX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(y, [0, 1], ["0%", "100%"]);
  const glareBg = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgb(var(--primary) / 0.14), transparent 65%)`;

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    // Glide back to flat
    x.set(0.5);
    y.set(0.5);
  }

  return (
    // Perspective lives on the PARENT so the child can rotate in 3D space
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`relative h-full ${className}`}
      >
        {children}

        {glare && (
          <motion.div
            aria-hidden
            style={{ background: glareBg }}
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
          />
        )}
      </motion.div>
    </div>
  );
}
