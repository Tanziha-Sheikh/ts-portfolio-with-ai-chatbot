import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SectionLabel from "../common/SectionLabel";
import Reveal from "../common/Reveal";
import BlogCard from "./BlogCard";

export default function BlogSection({ heading = "From the blog", subtitle, posts = [] }) {
  return (
    <Box id="blog" sx={{ py: { xs: 10, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" spacing={4} sx={{ mb: 2 }}>
          <Grid item xs={12} md={6}>
            <SectionLabel>WRITING</SectionLabel>
            <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 48 }, color: "text.primary" }}>
              {heading}
            </Typography>
          </Grid>
          {subtitle && (
            <Grid item xs={12} md={5}>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: { md: 6 } }}>
                {subtitle}
              </Typography>
            </Grid>
          )}
        </Grid>

        <Box>
          {posts.map((p, i) => (
            <Reveal key={p.title} direction="up" delay={i * 0.08}>
              <BlogCard {...p} />
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
