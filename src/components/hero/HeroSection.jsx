import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import DownloadIcon from "@mui/icons-material/FileDownloadOutlined";
import { motion } from "framer-motion";
import PillButton from "../common/PillButton";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const heroTypography = {
  fontFamily: '"Manrope", sans-serif',
  fontWeight: 900,
  fontSize: { xs: 64, sm: 96, md: '9.5rem' },
  lineHeight: 0.9,
  letterSpacing: "-0.04em",
};

export default function HeroSection({
  badge,
  name,
  tagline,
  resumeUrl,
  onContactClick,
}) {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        backgroundImage: (t) => `
          linear-gradient(${t.tokens.divider} 1px, transparent 1px),
          linear-gradient(90deg, ${t.tokens.divider} 1px, transparent 1px),
          radial-gradient(circle at 15% 20%, ${t.tokens.accentSoft} 0%, transparent 45%)
        `,
        backgroundSize: "48px 48px, 48px 48px, 100% 100%",
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 4 } }}>
        <Box
          component={motion.div}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <Box component={motion.div} variants={item}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                borderBottom: "1px solid",
                borderColor: (t) => t.tokens.accentOutline,
                pb: 1,
                mb: 4,
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  display: "inline-block",
                }}
              />
              {badge}
            </Typography>
          </Box>

          {/* <Typography
            component={motion.div}
            variants={item}
            variant="h1"
            sx={{
              fontSize: { xs: 64, sm: 96, md: 140 },
              lineHeight: 0.95,
              color: "text.primary",
            }}
          >
            {name[0]}
          </Typography>

          <Typography
            component={motion.div}
            variants={item}
            // variant="h1"
            sx={{
              fontSize: { xs: 64, sm: 96, md: 140 },
              lineHeight: 0.95,
              color: "transparent",
              WebkitTextStroke: (t) => `2px ${t.palette.primary.main}`,
              mb: 4,
            }}
          >
            {name[1]}
          </Typography> */}

          <Typography
            component={motion.div}
            variants={item}
            sx={{
              ...heroTypography,
              color: "#F5F5F2",
            }}
            fontFamily="Outfit, sans-serif"
          >
            {name[0]}
          </Typography>

          <Typography
            component={motion.div}
            variants={item}
            sx={{
              ...heroTypography,
              color: "transparent",
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1.5px #B6FF00",
              mb: 4,
            }}
          >
            {name[1]}
          </Typography>

          <Stack
            component={motion.div}
            variants={item}
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            alignItems={{ xs: "flex-start", sm: "center" }}
          >
            <Typography
              variant="h6"
              sx={{ color: "text.secondary", fontWeight: 400, maxWidth: 420 }}
            >
              {tagline}
            </Typography>
          </Stack>

          <Stack
            component={motion.div}
            variants={item}
            direction="row"
            spacing={2}
            sx={{ mt: 5 }}
          >
            <PillButton
              variant="solid"
              startIcon={<DownloadIcon />}
              href={resumeUrl}
              download
            >
              Download Resume
            </PillButton>
            <PillButton variant="ghost" onClick={onContactClick}>
              Get in touch
            </PillButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
