import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";

export default function BlogCard({ tag, date, readTime, title, excerpt, url }) {
  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <Box
      component={motion.a}
      href={url}
      target="_blank"
      rel="noopener"
      whileHover={{ x: 6 }}
      transition={{ duration: 0.2 }}
      sx={{
        display: "block",
        textDecoration: "none",
        py: 3,
        borderTop: "1px solid",
        borderColor: "divider",
        "&:hover .blog-title": { color: "primary.main" },
        "&:hover .blog-arrow": { color: "primary.main", transform: "translate(3px, -3px)" },
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1.5 }}>
        <Chip
          label={tag}
          size="small"
          sx={{ bgcolor: "primary.main", color: (t) => t.palette.primary.contrastText, fontWeight: 600 }}
        />
        <Typography variant="caption" sx={{ color: "text.disabled" }}>
          {formattedDate} · {readTime}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
        <Box sx={{ maxWidth: 640 }}>
          <Typography
            className="blog-title"
            variant="h6"
            sx={{ color: "text.primary", transition: "color 0.2s", mb: 0.5 }}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {excerpt}
          </Typography>
        </Box>
        <ArrowOutwardIcon className="blog-arrow" sx={{ color: "text.disabled", flexShrink: 0, transition: "transform 0.2s, color 0.2s" }} />
      </Stack>
    </Box>
  );
}
