"use client"

import { useCallback } from "react"

export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    try {
      // Remover o # do início do href para obter apenas o ID
      const id = sectionId.replace("#", "")
      const element = document.getElementById(id)

      if (element) {
        // Scroll suave com offset para o header fixo
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
        
        return true
      } else {
        console.warn(`Element with id ${id} not found`)
        return false
      }
    } catch (error) {
      console.error("Error scrolling to section:", error)
      return false
    }
  }, [])

  return scrollToSection
}
