"use client"

import type React from "react"
import { Box, Typography, Container, Avatar } from "@mui/material"

const Hero: React.FC = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: 8,
        position: "relative",
        scrollMarginTop: "80px", // Adicionar margem para o scroll considerar o header fixo
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            color: "primary.main",
            opacity: 0,
            animation: "fadeIn 1s ease-in-out forwards",
            "@keyframes fadeIn": {
              "0%": {
                opacity: 0,
                transform: "translateY(20px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          <Avatar
            sx={{
              width: 200,
              height: 200,
              mx: "auto",
              mb: 4,
              border: "4px solid",
              borderColor: "primary.light",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}
            src="\images\Avatar.jpeg"
            alt="Iracilda Cavalcante"
          />

          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 2,
              background: "linear-gradient(45deg, #2E7D32, #4CAF50)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Iracilda Cavalcante
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 3,
              color: "secondary.main",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            Artista Visual
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 600,
              mx: "auto",
              fontSize: "1.3rem",
              color: "text.secondary",
              lineHeight: 1.8,
            }}
          >
            Explorando a natureza através de cores, texturas e composições que transmitem a energia vital presente nas
            paisagens
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
