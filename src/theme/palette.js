
export const brand = {
  // Primary accent — the neon "signature" color (buttons, links, glow, highlights)
  accent: "#C6FF3D",
  accentHover: "#B2EA25",
  accentSoft: "rgba(198, 255, 61, 0.12)", // tinted backgrounds/badges
  accentOutline: "rgba(198, 255, 61, 0.35)", // borders/strokes

  // Backgrounds
  bgDefault: "#0A0A0A", // page background
  bgPaper: "#121212", // cards, panels, nav
  bgElevated: "#171717", // hovered/raised surfaces (chat panel, modals)
  bgSunken: "#000000", // footer / deepest sections

  // Text
  textPrimary: "#F5F5F0",
  textSecondary: "#9C9C9C",
  textMuted: "#6B6B6B",

  // Structural
  divider: "rgba(255, 255, 255, 0.08)",
  borderSubtle: "rgba(255, 255, 255, 0.12)",

  // Semantic
  success: "#4ADE80",
  warning: "#FBBF24",
  error: "#F87171",
  info: "#60A5FA",
};

// Optional light-mode variant — flip THEME_MODE in theme.js to "light" to use it.
export const brandLight = {
  accent: "#7CB518",
  accentHover: "#649414",
  accentSoft: "rgba(124, 181, 24, 0.10)",
  accentOutline: "rgba(124, 181, 24, 0.35)",

  bgDefault: "#FAFAF8",
  bgPaper: "#FFFFFF",
  bgElevated: "#F1F1EC",
  bgSunken: "#111111",

  textPrimary: "#111111",
  textSecondary: "#5B5B5B",
  textMuted: "#8A8A8A",

  divider: "rgba(0, 0, 0, 0.08)",
  borderSubtle: "rgba(0, 0, 0, 0.12)",

  success: "#2E7D32",
  warning: "#B45309",
  error: "#B91C1C",
  info: "#1D4ED8",
};

export const fonts = {
  display: "'Space Grotesk', sans-serif", // headlines / hero name
  body: "'Inter', sans-serif", // paragraphs, UI
  mono: "'JetBrains Mono', monospace", // eyebrows, labels, tags
};

export const radii = {
  sm: 8,
  md: 14,
  lg: 20,
  pill: 999,
};
