// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
// import { motion } from "framer-motion";
// import SectionLabel from "../common/SectionLabel";

// function ExperienceItem({ role, company, location, period, points }) {
//   return (
//     <Box
//       component={motion.div}
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//       sx={{
//         borderTop: "1px solid",
//         borderColor: "divider",
//         py: 5,
//         display: "grid",
//         gridTemplateColumns: { xs: "1fr", md: "1fr auto" },
//         gap: 2,
//       }}
//     >
//       <Box>
//         <Typography variant="h5" sx={{ color: "text.primary", mb: 0.5 }}>
//           {role}
//         </Typography>
//         <Typography sx={{ color: "primary.main", fontWeight: 500, mb: 0.5 }}>
//           {company}
//         </Typography>
//         <Typography variant="body2" sx={{ color: "text.disabled", mb: 2 }}>
//           {location}
//         </Typography>
//         <Stack spacing={1}>
//           {points.map((p, i) => (
//             <Typography key={i} variant="body2" sx={{ color: "text.secondary" }}>
//               — {p}
//             </Typography>
//           ))}
//         </Stack>
//       </Box>
//       <Typography
//         sx={{
//           fontFamily: (t) => t.tokens.fonts.mono,
//           color: "text.disabled",
//           fontSize: 13,
//           whiteSpace: "nowrap",
//         }}
//       >
//         {period}
//       </Typography>
//     </Box>
//   );
// }

// export default function ExperienceTimeline({ heading, items = [] }) {
//   return (
//     <Box id="work" sx={{ py: { xs: 10, md: 14 } }}>
//       <Container maxWidth="lg">
//         <SectionLabel>EXPERIENCE</SectionLabel>
//         <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 48 }, color: "text.primary", mb: 4 }}>
//           {heading}
//         </Typography>
//         <Box>
//           {items.map((exp, i) => (
//             <ExperienceItem key={i} {...exp} />
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
// import { motion } from "framer-motion";
// import SectionLabel from "../common/SectionLabel";

// function ExperienceItem({ role, company, location, period, points }) {
//   return (
//     <Box
//       component={motion.div}
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.5 }}
//       sx={{
//         borderTop: "1px solid",
//         borderColor: "divider",
//         py: 5,
//         display: "grid",
//         gridTemplateColumns: { xs: "1fr", md: "1fr auto" },
//         gap: 2,
//       }}
//     >
//       <Box>
//         <Typography variant="h5" sx={{ color: "text.primary", mb: 0.5 }}>
//           {role}
//         </Typography>
//         <Typography sx={{ color: "primary.main", fontWeight: 500, mb: 0.5 }}>
//           {company}
//         </Typography>
//         <Typography variant="body2" sx={{ color: "text.disabled", mb: 2 }}>
//           {location}
//         </Typography>
//         <Stack spacing={1}>
//           {points.map((p, i) => (
//             <Typography key={i} variant="body2" sx={{ color: "text.secondary" }}>
//               — {p}
//             </Typography>
//           ))}
//         </Stack>
//       </Box>
//       <Typography
//         sx={{
//           fontFamily: (t) => t.tokens.fonts.mono,
//           color: "text.disabled",
//           fontSize: 13,
//           whiteSpace: "nowrap",
//         }}
//       >
//         {period}
//       </Typography>
//     </Box>
//   );
// }

// export default function ExperienceTimeline({ heading, items = [] }) {
//   return (
//     <Box id="work" sx={{ py: { xs: 10, md: 14 } }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={{ xs: 4, md: 8 }}>
//           <Grid item xs={12} md={4}>
//             <Box
//               sx={{
//                 position: { xs: "static", md: "sticky" },
//                 top: { md: 120 },
//                 alignSelf: "flex-start",
//               }}
//             >
//               <SectionLabel>EXPERIENCE</SectionLabel>
//               <Typography
//                 variant="h2"
//                 sx={{ fontSize: { xs: 32, md: 48 }, color: "text.primary" }}
//               >
//                 {heading}
//               </Typography>
//             </Box>
//           </Grid>

//           <Grid item xs={12} md={8}>
//             <Box>
//               {items.map((exp, i) => (
//                 <ExperienceItem key={i} {...exp} />
//               ))}
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

import SectionLabel from "../common/SectionLabel";

function ExperienceItem({
  role,
  company,
  location,
  period,
  points = [],
}) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.5,
      }}
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        py: 5,
        width: "100%",
      }}
    >
      {/* Role + Period */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
          gap: 3,

          // Responsive
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        {/* Role */}
        <Typography
          variant="h5"
          sx={{
            color: "primary.main",
            fontWeight: 700,
            m: 0,
          }}
        >
          {role}
        </Typography>

        {/* Period */}
        <Typography
          sx={{
            fontFamily: (t) => t.tokens.fonts.mono,
            color: "text.disabled",
            fontSize: 13,
            whiteSpace: "nowrap",
            pt: 0.5,
          }}
        >
          {period}
        </Typography>
      </Box>

      {/* Company */}
      <Typography
        sx={{
          color: "text.primary",
          fontWeight: 700,
          fontSize: "1rem",
          lineHeight: 1.5,
          mt: 3,
        }}
      >
        {company}
      </Typography>

      {/* Location */}
      <Typography
        sx={{
          color: "text.disabled",
          fontWeight: 400,
          fontSize: "1rem",
          lineHeight: 1.5,
          mt: 0.25,
        }}
      >
        {location}
      </Typography>

      {/* Experience Points */}
      <Stack
        spacing={2.5}
        sx={{
          mt: 4,
          width: "100%",
        }}
      >
        {points.map((point, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              width: "100%",
              gap: 2,
            }}
          >
            {/* Green Chevron */}
            <Typography
              component="span"
              sx={{
                color: "primary.main",
                fontSize: "1.25rem",
                lineHeight: 1.43,
                fontWeight: 400,
                flexShrink: 0,
              }}
            >
              ›
            </Typography>

            {/* Point Text */}
            <Typography
              component="p"
              sx={{
                color: "text.secondary",
                fontWeight: 400,
                fontSize: "0.975rem",
                lineHeight: 1.43,
                m: 0,
                flex: 1,
              }}
            >
              {point}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default function ExperienceTimeline({
  heading,
  items = [],
}) {
  return (
    <Box
      id="work"
      sx={{
        pb: {
          xs: 10,
          md: 8,
        },
        pt: {
          xs: 10,
          md: 2,
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{
            xs: 4,
            md: 8,
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
          >
            <Box
              sx={{
                position: {
                  xs: "static",
                  md: "sticky",
                },
                top: {
                  md: 120,
                },
                alignSelf: "flex-start",
              }}
            >
              {/* Section Label */}
              <SectionLabel>
                EXPERIENCE
              </SectionLabel>

              {/* Section Heading */}
              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: 32,
                    md: 48,
                  },
                  lineHeight: 1.1,
                  fontWeight: 700,
                  color: "text.primary",
                  mt: 2,
                }}
              >
                {heading}
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              {items.map((experience, index) => (
                <ExperienceItem
                  key={index}
                  {...experience}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}