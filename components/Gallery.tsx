"use client"

import React, { useState, useCallback } from "react"
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material"
import { Close, ZoomIn } from "@mui/icons-material"

const artworks = [
  {
    id: 1,
    title: "Sem título",
    year: "2023",
    technique: "Misto sobre papel pardo",
    dimensions: "81,5x90 cm",
    image: "/images/obra1.png",
  },
  {
    id: 2,
    title: "Série Coleção Natureza",
    year: "2024",
    technique: "Acrílica sobre papel",
    dimensions: "29x40m cm",
    image: "/images/obra2.png",
  },
  {
    id: 3,
    title: "Série Coleção Natureza",
    year: "2024",
    technique: "Acrílica sobre papel",
    dimensions: "29x40 cm",
    image: "/images/obra3.png",
  },
  {
    id: 4,
    title: "Paisagem Urbana",
    year: "2022",
    technique: "Oleo sobre tela",
    dimensions: "60x80 cm",
    image: "/images/obra4.png",
  },
  {
    id: 5,
    title: "Hibisco",
    year: "2022",
    technique: "Giz pastel oleoso sobre papel",
    dimensions: "20x20 cm",
    image: "/images/obra5.png",
  },
  {
    id: 6,
    title: "Amoreira",
    year: "2024",
    technique: "Acrílica sobre tela",
    dimensions: "100x100 cm",
    image: "/images/obra6.png",
  },
]

const Gallery: React.FC = React.memo(() => {
  const [selectedArtwork, setSelectedArtwork] = useState<(typeof artworks)[0] | null>(null)

  const handleOpenDialog = useCallback((artwork: (typeof artworks)[0]) => {
    setSelectedArtwork(artwork)
  }, [])

  const handleCloseDialog = useCallback(() => {
    setSelectedArtwork(null)
  }, [])

  return (
    <Box
      id="gallery"
      sx={{
        py: 10,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        scrollMarginTop: "80px", // Adicionar margem para o scroll considerar o header fixo
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
          Galeria de Obras
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {artworks.map((artwork) => (
            <Card
              key={artwork.id}
              sx={{
                height: "100%",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                willChange: "transform",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                },
                borderRadius: 3,
                overflow: "hidden",
              }}
              onClick={() => handleOpenDialog(artwork)}
            >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={artwork.image}
                    alt={artwork.title}
                    sx={{
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "50%",
                      p: 1,
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      ".MuiCard-root:hover &": {
                        opacity: 1,
                      },
                    }}
                  >
                    <ZoomIn color="primary" />
                  </Box>
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      color: "primary.main",
                      mb: 1,
                    }}
                  >
                    {artwork.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    {artwork.year} • {artwork.technique}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {artwork.dimensions}
                  </Typography>
                </CardContent>
              </Card>
          ))}
        </Box>
      </Container>

      <Dialog
        open={!!selectedArtwork}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.98)",
          },
        }}
      >
        <DialogContent sx={{ p: 0, position: "relative" }}>
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              zIndex: 1,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 1)",
              },
            }}
          >
            <Close />
          </IconButton>

          {selectedArtwork && (
            <Box>
              <img
                src={selectedArtwork.image || "/placeholder.svg"}
                alt={selectedArtwork.title}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "70vh",
                  objectFit: "contain",
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?height=400&width=400"
                }}
              />
              <Box sx={{ p: 3 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: "primary.main",
                    mb: 1,
                  }}
                >
                  {selectedArtwork.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {selectedArtwork.year} • {selectedArtwork.technique} • {selectedArtwork.dimensions}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  )
})

export default Gallery
