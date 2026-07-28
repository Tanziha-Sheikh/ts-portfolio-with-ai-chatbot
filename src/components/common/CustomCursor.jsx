import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor({
  interactiveSelector = "a, button, [role='button'], input, textarea",
}) {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 30 });
  const ringY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const isFinePointer = window.matchMedia?.("(pointer: fine)").matches;
    setEnabled(!!isFinePointer);
    if (!isFinePointer) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const overCheck = (e) => setHovering(!!e.target.closest(interactiveSelector));

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", overCheck);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", overCheck);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [interactiveSelector, x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* dot: exact position */}
      <Box
        component={motion.div}
        style={{ translateX: x, translateY: y }}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          marginLeft: "-3px",
          marginTop: "-3px",
          borderRadius: "50%",
          bgcolor: "primary.main",
          pointerEvents: "none",
          zIndex: 2000,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      />
      {/* ring: trailing, grows on hover */}
      <Box
        component={motion.div}
        style={{ translateX: ringX, translateY: ringY }}
        animate={{ scale: hovering ? 1.8 : 1 }}
        transition={{ scale: { duration: 0.25 } }}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          marginLeft: "-16px",
          marginTop: "-16px",
          borderRadius: "50%",
          border: "1px solid",
          borderColor: "primary.main",
          bgcolor: hovering ? (t) => t.tokens.accentSoft : "transparent",
          pointerEvents: "none",
          zIndex: 2000,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s, background-color 0.25s",
        }}
      />
    </>
  );
}
