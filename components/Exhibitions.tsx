"use client"

import React from "react"
import { Box, Typography, Container, Paper, Chip } from "@mui/material"
import { Event, LocationOn } from "@mui/icons-material"

const exhibitions = [
  {
    title: "In-Quietude",
    type: "Exposição coletiva",
    location: "Escola Basileu França",
    period: "18/03 a 17/04/2022",
    year: "2022",
  },
  {
    title: "Constelar",
    type: "Exposição coletiva",
    location: "CCUFG",
    period: "20/09 a 25/10/2024",
    year: "2024",
  },
  {
    title: "Percepções em Movimento",
    type: "Exposição coletiva",
    location: "Galeria da FAV",
    period: "04/12 a 18/12/2024",
    year: "2024",
  },
]

const Exhibitions: React.FC = React.memo(() => {
  return (
    <Box
      id="exhibitions"
      sx={{
        py: 10,
        backgroundColor: "rgba(232, 245, 232, 0.5)",
        scrollMarginTop: "80px",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            color: "primary.main",
            fontWeight: 600,
          }}
        >
          Apresentações
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "repeat(auto-fit, minmax(350px, 1fr))",
            },
            gap: 4,
            maxWidth: "1200px",
            margin: "0 auto",
            justifyItems: "center",
          }}
        >
          {exhibitions.map((exhibition, index) => (
            <Paper
              key={index}
              elevation={4}
              sx={{
                p: 4,
                width: "100%",
                maxWidth: "400px",
                backgroundColor: "white",
                borderRadius: 3,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                willChange: "transform",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}              >
                <Box sx={{ mb: 2, width: "100%" }}>
                  <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <Chip label={exhibition.year} color="primary" size="small" />
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      color: "primary.main",
                      mb: 1,
                      textAlign: "center",
                    }}
                  >
                    {exhibition.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "secondary.main",
                      fontStyle: "italic",
                      mb: 2,
                      textAlign: "center",
                    }}
                  >
                    {exhibition.type}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 1, justifyContent: "center" }}>
                  <LocationOn sx={{ mr: 1, color: "primary.light" }} />
                  <Typography variant="body2" color="text.secondary">
                    {exhibition.location}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Event sx={{ mr: 1, color: "primary.light" }} />
                  <Typography variant="body2" color="text.secondary">
                    {exhibition.period}
                  </Typography>
                </Box>
              </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  )
})

export default Exhibitions
