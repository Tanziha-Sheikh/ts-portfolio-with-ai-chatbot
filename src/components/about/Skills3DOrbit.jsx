import { useMemo, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAnimationFrame } from "framer-motion";

export default function Skills3DOrbit({ items = [], radius = 220, height = 280, speed = 22 }) {
  const itemRefs = useRef([]);
  const angleRef = useRef(0);
  const pausedRef = useRef(false);

  const angleStep = 360 / Math.max(items.length, 1);
  const degPerMs = 360 / (speed * 1000);

  useAnimationFrame((_, delta) => {
    if (!pausedRef.current) {
      angleRef.current = (angleRef.current + delta * degPerMs) % 360;
    }
    const base = angleRef.current;

    items.forEach((_, i) => {
      const el = itemRefs.current[i];
      if (!el) return;

      const angleDeg = base + i * angleStep;
      const rad = (angleDeg * Math.PI) / 180;
      const x = Math.sin(rad) * radius;
      const z = Math.cos(rad) * radius;

      // depth 0..1 (1 = closest to viewer, 0 = farthest)
      const depth = (z / radius + 1) / 2;
      const scale = 0.65 + depth * 0.55; // 0.65 .. 1.2
      const opacity = 0.25 + depth * 0.75; // 0.25 .. 1
      const blur = (1 - depth) * 2; // 0 .. 2px

      el.style.transform = `translate3d(-50%, -50%, 0) translate3d(${x.toFixed(1)}px, 0, ${z.toFixed(
        1
      )}px) scale(${scale.toFixed(3)})`;
      el.style.opacity = opacity.toFixed(2);
      el.style.filter = blur > 0.05 ? `blur(${blur.toFixed(1)}px)` : "none";
      el.style.zIndex = Math.round(z + radius);
    });
  });

  const labels = useMemo(() => items, [items]);

  return (
    <Box
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      sx={{
        height,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: 900,
      }}
    >
      <Box sx={{ position: "relative", width: 1, height: 1, transformStyle: "preserve-3d" }}>
        {labels.map((label, i) => (
          <Box
            key={label}
            ref={(el) => (itemRefs.current[i] = el)}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              px: 2.5,
              py: 1,
              borderRadius: 999,
              border: "1px solid",
              borderColor: (t) => t.tokens.accentOutline,
              bgcolor: (t) => t.tokens.bgElevated,
              boxShadow: (t) => `0 0 24px ${t.tokens.accentSoft}`,
              whiteSpace: "nowrap",
              willChange: "transform, opacity, filter",
            }}
          >
            <Typography
              sx={{
                fontFamily: (t) => t.tokens.fonts.mono,
                color: "text.primary",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
