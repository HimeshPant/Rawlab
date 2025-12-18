import React, { useEffect, useRef } from "react";

/**
 * NeonCursor
 * - Desktop-only (disabled on touch / coarse pointer devices)
 * - Smooth LERP movement
 * - Neon trail with decay
 * - NO pointer circle (desktop-friendly)
 * - ESLint & Vercel safe
 */
const NeonCursor = () => {
  const canvasRef = useRef(null);
  const points = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const cursor = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on touch devices
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(hover: none)").matches;

    if (isTouchDevice) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Prevent jump on first move
      if (cursor.current.x === 0 && cursor.current.y === 0) {
        cursor.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    resizeCanvas();

    const config = {
      trailLifetime: 30,
      strokeColor: "#22d3ee",
      strokeWidth: 4,
      glowBlur: 15,
      lerpFactor: 0.15,
    };

    const animate = () => {
      const dx = mouse.current.x - cursor.current.x;
      const dy = mouse.current.y - cursor.current.y;

      cursor.current.x += dx * config.lerpFactor;
      cursor.current.y += dy * config.lerpFactor;

      // Age & trim trail
      points.current.forEach((p) => (p.age += 1));
      while (
        points.current.length &&
        points.current[0].age > config.trailLifetime
      ) {
        points.current.shift();
      }

      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 0.1) {
        points.current.push({
          x: cursor.current.x,
          y: cursor.current.y,
          age: 0,
        });
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw neon trail only
      if (points.current.length > 1) {
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.shadowBlur = config.glowBlur;
        ctx.shadowColor = config.strokeColor;
        ctx.lineWidth = config.strokeWidth;
        ctx.strokeStyle = config.strokeColor;

        ctx.beginPath();
        ctx.moveTo(points.current[0].x, points.current[0].y);

        for (let i = 1; i < points.current.length - 1; i++) {
          const p = points.current[i];
          const n = points.current[i + 1];
          ctx.quadraticCurveTo(p.x, p.y, (p.x + n.x) / 2, (p.y + n.y) / 2);
        }

        ctx.lineTo(cursor.current.x, cursor.current.y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        width: "100vw",
        height: "100vh",
        mixBlendMode: "screen",
      }}
    />
  );
};

export default NeonCursor;
