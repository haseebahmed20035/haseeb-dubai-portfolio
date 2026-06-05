import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext.jsx";

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });

    let animationId;
    let particles = [];
    let width = 0;
    let height = 0;
    let lastFrame = 0;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const shouldAnimate = !reduceMotion && !isMobile;
    const dotColor = theme === "light" ? "8, 145, 178" : "34, 211, 238";

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      const count = isMobile
        ? 22
        : Math.min(55, Math.floor((width * height) / 26000));

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.3 + 0.5,
      }));

      draw(0, true);
    }

    function draw(timestamp = 0, force = false) {
      if (!force && shouldAnimate && timestamp - lastFrame < 33) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      lastFrame = timestamp;
      ctx.clearRect(0, 0, width, height);

      const maxDist = isMobile ? 95 : 120;
      const maxDistSq = maxDist * maxDist;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (shouldAnimate) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor}, 0.55)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const opacity = 0.08 * (1 - distSq / maxDistSq);

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${dotColor}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      if (shouldAnimate && !document.hidden) {
        animationId = requestAnimationFrame(draw);
      }
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else if (shouldAnimate) {
        animationId = requestAnimationFrame(draw);
      }
    }

    resize();

    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (shouldAnimate) animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  );
}