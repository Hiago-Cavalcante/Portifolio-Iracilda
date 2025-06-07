"use client"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { Box } from "@mui/material"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Exhibitions from "@/components/Exhibitions"
import Gallery from "@/components/Gallery"
import Contact from "@/components/Contact"
import AnimatedBackground from "@/components/AnimatedBackground"
// Adicionar o botão de voltar ao topo
import ScrollToTopButton from "@/components/ScrollToTopButton"

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E7D32", // Verde inspirado nas obras
      light: "#4CAF50",
      dark: "#1B5E20",
    },
    secondary: {
      main: "#8BC34A",
      light: "#CDDC39",
      dark: "#689F38",
    },
    background: {
      default: "#F1F8E9",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1B5E20",
      secondary: "#2E7D32",
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", serif',
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
    },
    h3: {
      fontWeight: 500,
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.7,
    },
  },
})

export default function Portfolio() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <AnimatedBackground />
        <Header />
        <Hero />
        <About />
        <Exhibitions />
        <Gallery />
        <Contact />
        <ScrollToTopButton />
      </Box>
    </ThemeProvider>
  )
}
