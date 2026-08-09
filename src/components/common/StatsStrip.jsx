import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Reveal from "./Reveal";

const stats = [
  { value: "6+", label: "years of learning & building" },
  { value: "20+", label: "projects shaped across web teams" },
  { value: "100%", label: "focus on polished UX" },
];

export default function StatsStrip() {
  return (
    <Box sx={{ py: { xs: 4, md: 2 }, mt: 6 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: (t) => `${t.tokens.radii.lg}px`,
            bgcolor: "background.paper",
            overflow: "hidden",
          }}
        >
          <Grid container>
            {stats.map((item, index) => (
              <Grid item xs={12} md={4} key={item.label}>
                <Reveal direction="up" delay={0.05 * index}>
                  <Box
                    sx={{
                      p: { xs: 2.5, md: 3 },
                      textAlign: "center",
                      borderRight: { md: index < stats.length - 1 ? "1px solid" : 0 },
                      borderBottom: { xs: index < stats.length - 1 ? "1px solid" : 0, md: 0 },
                      borderColor: "divider",
                    }}
                  >
                    <Typography variant="h4" sx={{ color: "primary.main", fontWeight: 700 }}>
                      {item.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                      {item.label}
                    </Typography>
                  </Box>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
