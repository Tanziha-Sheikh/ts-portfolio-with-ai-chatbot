import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Tilt3DCard from "../common/Tilt3DCard";

export default function ProjectCaseStudy({ title, description, tags = [], image, url, type, impact, result }) {
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
        boxShadow: (t) => `0 22px 50px -24px ${t.tokens.bgSunken}`,
        transition: "transform 220ms ease, border-color 220ms ease",
        "&:hover": {
          borderColor: "primary.main",
        },
      }}
    >
      <Box
        sx={{
          height: 220,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          bgcolor: (t) => t.tokens.bgElevated,
          position: "relative",
          transform: "translateZ(20px)",
          "::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
          },
        }}
      />

      <Box sx={{ p: 3, transform: "translateZ(30px)" }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1}>
          <Box>
            <Typography variant="overline" sx={{ color: "primary.main", mb: 0.5 }}>
              {type}
            </Typography>
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              {title}
            </Typography>
          </Box>
          <ArrowOutwardIcon sx={{ color: "primary.main", fontSize: 20, mt: 0.5 }} />
        </Stack>

        <Typography variant="body2" sx={{ color: "text.secondary", mt: 1, mb: 2, lineHeight: 1.75 }}>
          {description}
        </Typography>

        {impact && (
          <Typography variant="body2" sx={{ color: "text.primary", mb: 1.5, fontWeight: 600 }}>
            Impact: {impact}
          </Typography>
        )}

        {result && (
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2, lineHeight: 1.7 }}>
            {result}
          </Typography>
        )}

        <Stack direction="row" flexWrap="wrap" gap={1}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                bgcolor: "background.default",
                color: "text.secondary",
                border: "1px solid",
                borderColor: "divider",
              }}
            />
          ))}
        </Stack>
      </Box>
    </Tilt3DCard>
  );
}
