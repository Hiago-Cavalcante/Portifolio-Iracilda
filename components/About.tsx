

import React from "react"
import { Box, Typography, Container, Paper } from "@mui/material"
import { Palette, School, Nature } from "@mui/icons-material"

const About: React.FC = React.memo(() => {
  return (
    <Box
      id="about"
      sx={{
        py: 10,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
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
          Sobre Mim
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
            gap: 4,
            alignItems: "start",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: 3,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                textAlign: "left",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              <strong>Iracilda Cavalcante</strong> — nascida em 22/08/1960 em Tauá (CE), mudou-se ainda criança para
              Goiânia com sua família. Formada em Ciências Econômicas em 1987 pela PUC-GO, seguiu a paixão pelas artes
              após a aposentadoria, concluindo o curso técnico em Artes Visuais pela Escola Basileu França e
              atualmente cursa o último período de Artes Visuais na UFG.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                textAlign: "left",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              Atua na pintura em tela e papel, utilizando materiais diversos como tinta acrílica, tinta a óleo,
              aquarela e giz pastel oleoso. Sua produção artística é fortemente inspirada na natureza e em suas formas
              orgânicas, traduzindo esse olhar por meio de cores, texturas e composições que buscam transmitir a
              energia vital presente nas paisagens.
            </Typography>
          </Paper>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                textAlign: "center",
                backgroundColor: "primary.light",
                color: "white",
                borderRadius: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Palette sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Técnicas Diversas
              </Typography>
              <Typography variant="body2">Óleo, acrílica, aquarela e giz pastel</Typography>
            </Paper>

            <Paper
              elevation={2}
              sx={{
                p: 3,
                textAlign: "center",
                backgroundColor: "secondary.main",
                color: "white",
                borderRadius: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                },
              }}
            >
              <School sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Formação
              </Typography>
              <Typography variant="body2">Artes Visuais - UFG</Typography>
            </Paper>

            <Paper
              elevation={2}
              sx={{
                p: 3,
                textAlign: "center",
                backgroundColor: "primary.dark",
                color: "white",
                borderRadius: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Nature sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Inspiração
              </Typography>
              <Typography variant="body2">Natureza e formas orgânicas</Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  )
})

export default About
