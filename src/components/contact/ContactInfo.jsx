import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SectionLabel from "../common/SectionLabel";
import Reveal from "../common/Reveal";
import ContactForm from "./ContactForm";

export default function ContactSection({
  heading = "Let's build something great.",
  subtitle,
  email,
  onSubmit,
}) {
  return (
    <Box id="contact" sx={{ py: { xs: 10, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Reveal direction="right">
              <SectionLabel>CONTACT</SectionLabel>
              <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 44 }, color: "text.primary", mb: 3 }}>
                {heading}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
                {subtitle}
              </Typography>
              {email && (
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <EmailOutlinedIcon sx={{ color: "primary.main" }} />
                  <Typography sx={{ color: "text.primary" }}>{email}</Typography>
                </Stack>
              )}
            </Reveal>
          </Grid>
          <Grid item xs={12} md={7}>
            <Reveal direction="left" delay={0.1}>
              <ContactForm onSubmit={onSubmit} />
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
