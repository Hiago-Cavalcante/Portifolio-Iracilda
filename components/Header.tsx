"use client"

import React, { useState, useCallback } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

const Header: React.FC = React.memo(() => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const menuItems = [
    { label: "Início", href: "hero" },
    { label: "Sobre", href: "about" },
    { label: "Apresentações", href: "exhibitions" },
    { label: "Galeria", href: "gallery" },
    { label: "Contato", href: "contact" },
  ]

  // Função de scroll direta e simples
  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId)
    
    if (element) {
      // Scroll usando scrollIntoView com offset
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      })
      
      // Ajustar para o header fixo após o scroll
      setTimeout(() => {
        const headerHeight = 80
        const currentScroll = window.pageYOffset
        window.scrollTo({
          top: currentScroll - headerHeight,
          behavior: "smooth"
        })
      }, 100)
      
      // Update URL
      window.history.pushState(null, '', `#${elementId}`)
    }
  }, [])

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen)
  }, [mobileOpen])

  const handleNavigation = useCallback((href: string) => {
    scrollToSection(href)
    setMobileOpen(false)
  }, [scrollToSection])

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.label} 
            onClick={(e) => {
              e.preventDefault()
              handleNavigation(item.href)
            }}
            sx={{ cursor: "pointer" }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                "& .MuiListItemText-primary": {
                  color: "primary.main",
                  fontWeight: 500,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  // Resto do componente permanece o mesmo, mas atualizando os onClick para usar handleNavigation
  // ...

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "primary.main",
              fontWeight: 700,
              fontSize: "1.5rem",
            }}
          >
            Iracilda Cavalcante
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: "primary.main" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation(item.href)
                  }}
                  sx={{
                    color: "primary.main",
                    fontWeight: 500,
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "primary.light",
                      color: "white",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  )
})

export default Header
