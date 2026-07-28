import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Tilt3DCard from "../common/Tilt3DCard";

export default function ProjectCard({ title, description, tags = [], image, url }) {
  return (
    <Tilt3DCard
      component="a"
      href={url}
      target={url && url !== "#" ? "_blank" : undefined}
      rel="noopener"
      maxTilt={8}
      sx={{
        display: "block",
        textDecoration: "none",
        borderRadius: (t) => `${t.tokens.radii.lg}px`,
        overflow: "hidden",
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: (t) => `0 20px 40px -20px ${t.tokens.bgSunken}`,
      }}
    >
      <Box
        sx={{
          height: 220,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          bgcolor: (t) => t.tokens.bgElevated,
          transform: "translateZ(20px)",
        }}
      />
      <Box sx={{ p: 3, transform: "translateZ(30px)" }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Typography variant="h6" sx={{ color: "text.primary" }}>
            {title}
          </Typography>
          <ArrowOutwardIcon sx={{ color: "primary.main", fontSize: 20 }} />
        </Stack>
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 1, mb: 2 }}>
          {description}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {tags.map((t) => (
            <Chip
              key={t}
              label={t}
              size="small"
              sx={{ bgcolor: "background.default", color: "text.ddisabled" }}
            />
          ))}
        </Stack>
      </Box>
    </Tilt3DCard>
  );
}
