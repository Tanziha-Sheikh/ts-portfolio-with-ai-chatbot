import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Marquee from "react-fast-marquee";

export default function TechMarquee({ items = [], speed = 40 }) {
  return (
    <Box
      sx={{
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderColor: "divider",
        py: 3,
        bgcolor: "background.default",
      }}
    >
      <Marquee gradient={false} speed={speed} pauseOnHover>
        {items.map((label, i) => (
          <Box key={`${label}-${i}`} sx={{ display: "flex", alignItems: "center", mx: 4 }}>
            <Typography
              variant="h4"
              sx={{ color: "text.primary", fontWeight: 600, whiteSpace: "nowrap" }}
            >
              {label}
            </Typography>
            <Box component="span" sx={{ color: "primary.main", fontSize: 28, ml: 4 }}>
              *
            </Box>
          </Box>
        ))}
      </Marquee>
    </Box>
  );
}
