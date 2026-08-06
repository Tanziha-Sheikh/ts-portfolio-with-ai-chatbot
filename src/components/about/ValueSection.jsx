import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import SpeedIcon from "@mui/icons-material/Speed";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import GroupsIcon from "@mui/icons-material/Groups";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SectionLabel from "../common/SectionLabel";
import Reveal from "../common/Reveal";

const iconMap = {
  speed: SpeedIcon,
  spark: AutoAwesomeIcon,
  team: GroupsIcon,
  design: DesignServicesIcon,
};

export default function ValueSection({
  title,
  intro,
  highlights = [],
  proofPoints = [],
  badge = "OPEN TO NEW OPPORTUNITIES",
}) {
  return (
    <Box id="value" sx={{ py: { xs: 10, md: 8 }, position: "relative" }}>
      <Container maxWidth="lg">
        <SectionLabel>WHY WORK WITH ME</SectionLabel>

        <Reveal direction="up">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 30, md: 44 },
              color: "text.primary",
              maxWidth: 760,
              mb: 2,
            }}
          >
            {title}
          </Typography>
        </Reveal>

        <Reveal direction="up" delay={0.06}>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 760,
              mb: { xs: 4, md: 6 },
              lineHeight: 1.8,
            }}
          >
            {intro}
          </Typography>
        </Reveal>

        <Grid container spacing={3}>
          <Grid item xs={12} lg={8} sx={{ display: "flex" }}>
            <Reveal direction="up" delay={0.1} sx={{ width: "100%", display: "flex" }}>
              <Box
                sx={{
                  p: { xs: 2.5, md: 3.25 },
                  borderRadius: (t) => `${t.tokens.radii.lg}px`,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "background.paper",
                  boxShadow: (t) => `0 20px 50px -30px ${t.tokens.bgSunken}`,
                  height: "100%",
                  width: "100%",
                }}
              >
                <Grid container spacing={2}>
                  {highlights.map((item, index) => {
                    const Icon = iconMap[item.icon] || AutoAwesomeIcon;
                    return (
                      <Grid item xs={12} md={6} key={item.title} sx={{ display: "flex" }}>
                        <Reveal direction="up" delay={0.08 + index * 0.04} sx={{ width: "100%", display: "flex" }}>
                          <Box
                            sx={{
                              p: 2.5,
                              borderRadius: (t) => `${t.tokens.radii.md}px`,
                              border: "1px solid",
                              borderColor: "divider",
                              bgcolor: "background.default",
                              height: "100%",
                              width: "100%",
                              display: "flex",
                              flexDirection: "column",
                              transition: "transform 220ms ease, border-color 220ms ease",
                              "&:hover": {
                                transform: "translateY(-4px)",
                                borderColor: "primary.main",
                              },
                            }}
                          >
                            <Stack direction="row" spacing={1.1} alignItems="center" sx={{ mb: 1.25 }}>
                              <Box
                                sx={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: 36,
                                  height: 36,
                                  borderRadius: "50%",
                                  bgcolor: (t) => t.tokens.accentSoft,
                                  color: "primary.main",
                                }}
                              >
                                <Icon fontSize="small" />
                              </Box>
                              <Typography variant="h6" sx={{ color: "text.primary" }}>
                                {item.title}
                              </Typography>
                            </Stack>

                            <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.75 }}>
                              {item.description}
                            </Typography>
                          </Box>
                        </Reveal>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Reveal>
          </Grid>

          <Grid item xs={12} lg={4} sx={{ display: "flex" }}>
            <Reveal direction="up" delay={0.16} sx={{ width: "100%", display: "flex" }}>
              <Box
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderRadius: (t) => `${t.tokens.radii.lg}px`,
                  border: "1px solid",
                  borderColor: "primary.main",
                  bgcolor: (t) => t.tokens.accentSoft,
                  boxShadow: (t) => `0 24px 60px -30px ${t.tokens.accent}`,
                  height: "100%",
                }}
              >
                <Typography variant="overline" sx={{ color: "primary.main" }}>
                  PROOF POINTS
                </Typography>

                <Stack spacing={1.4} sx={{ mt: 2 }}>
                  {proofPoints.map((point) => (
                    <Box
                      key={point}
                      sx={{
                        px: 1.4,
                        py: 1,
                        borderRadius: (t) => `${t.tokens.radii.sm}px`,
                        bgcolor: "background.paper",
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Stack spacing={1.2} sx={{ mt: 3 }}>
                  <Chip
                    label={badge}
                    color="primary"
                    sx={{ alignSelf: "flex-start", borderRadius: (t) => `${t.tokens.radii.pill}px` }}
                  />
                  <Typography variant="body2" sx={{ color: "text.primary", lineHeight: 1.75 }}>
                    I’m especially interested in product-focused teams that value thoughtful UI, fast collaboration, and polished execution.
                  </Typography>
                </Stack>
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
