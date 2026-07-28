import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import SectionLabel from "../common/SectionLabel";
import StatCard from "./StatCard";
import Skills3DOrbit from "./Skills3DOrbit";

export default function AboutSection({ headline, stats = [], tools = [], show3DOrbit = true }) {
  return (
    <Box id="about" sx={{ py: { xs: 10, md: 6  } }}>
      <Container maxWidth="lg">
        <SectionLabel>ABOUT</SectionLabel>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 32, md: 48 },
            color: "text.primary",
            maxWidth: 720,
            mb: 8,
          }}
        >
          {headline}
        </Typography>

        <Grid container spacing={0} sx={{ mb: 8 }}>
          {stats.map((s) => (
            <Grid item xs={12} md={4} key={s.index}>
              <StatCard {...s} />
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="overline"
          sx={{ color: "text.disabled", display: "block", mb: 2 }}
        >
          STACK &amp; TOOLS
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1.5}>
          {tools.map((tool) => (
            <Chip
              key={tool}
              label={tool}
              variant="outlined"
              sx={{
                borderColor: "divider",
                color: "text.secondary",
                bgcolor: "background.paper",
              }}
            />
          ))}
        </Stack>

        {show3DOrbit && tools.length > 0 && (
          <Box sx={{ mt: { xs: 6, md: 8 } }}>
            <Typography
              variant="overline"
              sx={{ color: "text.disabled", display: "block", mb: 1, textAlign: "center" }}
            >
              HOVER TO PAUSE
            </Typography>
            <Skills3DOrbit items={tools.slice(0, 8)} />
          </Box>
        )}
      </Container>
    </Box>
  );
}
