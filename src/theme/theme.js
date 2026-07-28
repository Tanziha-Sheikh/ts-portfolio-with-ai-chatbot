import { createTheme } from "@mui/material/styles";
import { brand, brandLight, fonts, radii } from "./palette";

// Flip to "light" to use the brandLight palette instead.
export const THEME_MODE = "dark";

const c = THEME_MODE === "dark" ? brand : brandLight;

const theme = createTheme({
  palette: {
    mode: THEME_MODE,
    primary: {
      main: c.accent,
      dark: c.accentHover,
      contrastText: THEME_MODE === "dark" ? "#0A0A0A" : "#FFFFFF",
    },
    background: {
      default: c.bgDefault,
      paper: c.bgPaper,
    },
    text: {
      primary: c.textPrimary,
      secondary: c.textSecondary,
      disabled: c.textMuted,
    },
    divider: c.divider,
    success: { main: c.success },
    warning: { main: c.warning },
    error: { main: c.error },
    info: { main: c.info },
  },
  shape: {
    borderRadius: radii.md,
  },
  typography: {
    fontFamily: fonts.body,
    h1: { fontFamily: fonts.display, fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontFamily: fonts.display, fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontFamily: fonts.display, fontWeight: 600 },
    h4: { fontFamily: fonts.display, fontWeight: 600 },
    h5: { fontFamily: fonts.display, fontWeight: 600 },
    h6: { fontFamily: fonts.display, fontWeight: 600 },
    button: { fontFamily: fonts.body, fontWeight: 600, textTransform: "none" },
    overline: {
      fontFamily: fonts.mono,
      letterSpacing: "0.12em",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: radii.pill,
          paddingInline: 22,
          paddingBlock: 10,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: radii.sm,
          fontFamily: fonts.mono,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

// Expose raw tokens for components that need values outside the MUI palette
// (glows, gradients, marquee separators, etc.)
theme.tokens = { ...c, fonts, radii };

export default theme;
