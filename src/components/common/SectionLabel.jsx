import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

export default function SectionLabel({ children, sx }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      sx={{ display: "inline-flex", alignItems: "center", gap: 1, mb: 2, ...sx }}
    >
      <Typography
        variant="overline"
        sx={{
          color: "primary.main",
          border: "1px solid",
          borderColor: (t) => t.tokens.accentOutline,
          bgcolor: (t) => t.tokens.accentSoft,
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          fontSize: 12,
        }}
      >
        [ {children} ]
      </Typography>
    </Box>
  );
}
