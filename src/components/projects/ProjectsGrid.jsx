import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SectionLabel from "../common/SectionLabel";
import Reveal from "../common/Reveal";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ heading = "Projects", items = [] }) {
  return (
    <Box id="projects" sx={{ py: { xs: 10, md: 8 } }}>
      <Container maxWidth="lg">
        <SectionLabel>SELECTED WORK</SectionLabel>
        <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 48 }, color: "text.primary", mb: 6 }}>
          {heading}
        </Typography>
        <Grid container spacing={3}>
          {items.map((p, i) => (
            <Grid item xs={12} sm={6} key={p.title}>
              <Reveal direction="up" delay={(i % 2) * 0.1}>
                <ProjectCard {...p} />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
