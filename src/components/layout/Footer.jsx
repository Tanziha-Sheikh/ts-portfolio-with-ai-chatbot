import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Reveal from "../common/Reveal";

export default function Footer({ name = "Your Name", email, location, socials = [] }) {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: (t) => t.tokens.bgSunken, pt: { xs: 8, md: 12 }, pb: 4 }}>
      <Container maxWidth="lg">
        <Reveal direction="up">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 48, md: 96 },
              color: "text.primary",
              lineHeight: 1,
            }}
          >
            Say
          </Typography>
          <Typography
            // variant="h1"
            sx={{
              // fontSize: { xs: 48, md: 96 },
              fontFamily: "Manrope, sans-serif",
              color: "primary.main",
              lineHeight: 1,
              mb: { xs: 4, md: 6 },
              letterSpacing: "-.05em",
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1.5px #B6FF00",
              fontWeight: 900,
              fontSize: { xs: 64, sm: 96, md: '4.5rem' },
            }}
          >
            hello.
          </Typography>
        </Reveal>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
          sx={{ borderTop: "1px solid", borderColor: "divider", pt: 3 }}
        >
          <Link href={`mailto:${email}`} underline="hover" sx={{ color: "text.secondary" }}>
            {email}
          </Link>

          <Stack direction="row" spacing={3}>
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener"
                underline="hover"
                sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
              >
                {s.label}
              </Link>
            ))}
          </Stack>

          <Typography variant="body2" sx={{ color: "text.disabled" }}>
            {location}
          </Typography>
        </Stack>

        <Typography variant="caption" sx={{ display: "block", mt: 3, color: "text.disabled" }}>
          © {year} {name}. Built with React &amp; MUI.
        </Typography>
      </Container>
    </Box>
  );
}
