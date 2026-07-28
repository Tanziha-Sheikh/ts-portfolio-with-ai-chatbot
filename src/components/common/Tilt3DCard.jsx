import { useRef } from "react";
import Box from "@mui/material/Box";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Tilt3DCard({
  children,
  component = "div",
  maxTilt = 10,
  glare = true,
  scaleOnHover = 1.02,
  sx,
  ...rest
}) {
  const ref = useRef(null);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });

  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.18), transparent 55%)`
  );

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1

    rotateY.set((px - 0.5) * maxTilt * 2);
    rotateX.set((0.5 - py) * maxTilt * 2);
    glareX.set(px * 100);
    glareY.set(py * 100);
    glareOpacity.set(1);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  };

  const MotionTag = motion[component] || motion.div;

  return (
    <Box sx={{ perspective: 1200 }}>
      <Box
        component={MotionTag}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: scaleOnHover }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ scale: { duration: 0.2 } }}
        sx={{ position: "relative", willChange: "transform", ...sx }}
        {...rest}
      >
        {children}

        {glare && (
          <Box
            component={motion.div}
            style={{ background: glareBackground, opacity: glareOpacity }}
            sx={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              borderRadius: "inherit",
              mixBlendMode: "overlay",
            }}
          />
        )}
      </Box>
    </Box>
  );
}
