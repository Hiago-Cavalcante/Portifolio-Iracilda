"use client"

import React from "react"
import { Box, Typography, Container, Paper, Button, Link } from "@mui/material"
import { Email, Phone } from "@mui/icons-material"

const Contact: React.FC = React.memo(() => {
  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        backgroundColor: "rgba(46, 125, 50, 0.1)",
        position: "relative",
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
          Contato
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 2fr 1fr" },
            gap: 4,
            justifyItems: "center",
            gridTemplateAreas: { xs: "'content'", md: "'. content .'" }
          }}
        >
          <Box sx={{ gridArea: "content", width: "100%", maxWidth: "800px" }}>
            <Paper
              elevation={6}
              sx={{
                p: 6,
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderRadius: 4,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  mb: 4,
                  color: "primary.main",
                  fontWeight: 600,
                }}
              >
                Entre em Contato
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "text.secondary",
                  fontSize: "1.1rem",
                }}
              >
                Interessado em conhecer mais sobre meu trabalho ou adquirir uma obra? Entre em contato comigo!
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 3,
                  justifyContent: "center",
                  mb: 4
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 1
                  }}
                >
                  <Email sx={{ color: "primary.main" }} />
                  <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Email
                    </Typography>
                    <Link
                      href="mailto:cavalcante2@discente.ufg.br"
                      sx={{
                        color: "primary.main",
                        textDecoration: "none",
                        fontWeight: 500,
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      cavalcante2@discente.ufg.br
                    </Link>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 1
                  }}
                >
                  <Phone sx={{ color: "primary.main" }} />
                  <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Telefone
                    </Typography>
                    <Link
                      href="tel:+5562963733332"
                      sx={{
                        color: "primary.main",
                        textDecoration: "none",
                        fontWeight: 500,
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      +55 62 9637-3332
                    </Link>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  href="mailto:cavalcante2@discente.ufg.br"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    background: "linear-gradient(45deg, #2E7D32, #4CAF50)",
                    "&:hover": {
                      background: "linear-gradient(45deg, #1B5E20, #2E7D32)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(46, 125, 50, 0.3)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Enviar Email
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.9rem" }}>
            © 2024 Iracilda Cavalcante. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
})

export default Contact
