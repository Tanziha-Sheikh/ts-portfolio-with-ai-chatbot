import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

export default function StatCard({ index, title, description }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      sx={{
        p: 3,
        borderTop: "1px solid",
        borderColor: "divider",
        height: "100%",
      }}
    >
      <Typography
        sx={{
          fontFamily: (t) => t.tokens.fonts.mono,
          color: "primary.main",
          fontSize: 13,
          mb: 2,
        }}
      >
        {index}
      </Typography>
      <Typography variant="h6" sx={{ color: "text.primary", mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {description}
      </Typography>
    </Box>
  );
}
