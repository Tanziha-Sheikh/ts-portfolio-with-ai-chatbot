import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Reveal from "../common/Reveal";

const trustItems = [
  "Fast response and clear communication",
  "Design-conscious UI implementation",
  "Reliable handoff and maintainable code",
];

export default function TrustBar() {
  return (
    <Box sx={{ py: { xs: 4, md: 3 } }}>
      <Container maxWidth="lg">
        <Reveal direction="up">
          <Box
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: (t) => `${t.tokens.radii.lg}px`,
              bgcolor: "background.paper",
              p: { xs: 2.5, md: 3 },
            }}
          >
            <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems={{ xs: "flex-start", md: "center" }} justifyContent="space-between">
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                Why clients and teams choose to work with me
              </Typography>
              <Stack spacing={1}>
                {trustItems.map((item) => (
                  <Stack key={item} direction="row" spacing={1} alignItems="center">
                    <CheckCircleOutlineIcon sx={{ color: "primary.main", fontSize: 18 }} />
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
