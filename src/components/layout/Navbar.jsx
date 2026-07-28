import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/FileDownloadOutlined";
import Drawer from "@mui/material/Drawer";
import PillButton from "../common/PillButton";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ logoText = "// TS", resumeUrl = "#" }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: scrolled ? "background.paper" : "transparent",
        borderBottom: "1px solid",
        borderColor: scrolled ? "divider" : "transparent",
        transition: "all 0.25s ease",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: 2, px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, letterSpacing: "0.02em", color: "text.primary" }}
        >
          <Box component="span" sx={{ color: "primary.main" }}>
            {logoText.slice(0, 2)}
          </Box>
          {logoText.slice(2)}
        </Typography>

        <Stack direction="row" spacing={4} sx={{ display: { xs: "none", md: "flex" } }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              underline="none"
              sx={{
                position: "relative",
                color: "text.secondary",
                fontSize: 13,
                letterSpacing: "0.08em",
                fontFamily: (t) => t.tokens.fonts.mono,
                pb: 0.5,
                "&:hover": { color: "text.primary" },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  height: "1px",
                  bgcolor: "primary.main",
                  transform: "scaleX(0)",
                  transformOrigin: "right",
                  transition: "transform 0.25s ease",
                },
                "&:hover::after": {
                  transform: "scaleX(1)",
                  transformOrigin: "left",
                },
              }}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </Stack>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <PillButton
            variant="solid"
            startIcon={<DownloadIcon />}
            href={resumeUrl}
            download
          >
            Resume
          </PillButton>
        </Box>

        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, color: "text.primary" }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260, bgcolor: "background.paper", height: "100%", p: 3 }}>
          <Stack direction="row" justifyContent="flex-end">
            <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "text.primary" }}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack spacing={3} sx={{ mt: 4 }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                underline="none"
                onClick={() => setDrawerOpen(false)}
                sx={{ color: "text.primary", fontSize: 18, fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
            <PillButton variant="solid" startIcon={<DownloadIcon />} href={resumeUrl} download>
              Resume
            </PillButton>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
}
