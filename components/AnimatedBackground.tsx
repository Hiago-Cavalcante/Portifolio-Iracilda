"use client"

import React from "react"
import { Box } from "@mui/material"

const AnimatedBackground: React.FC = React.memo(() => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "linear-gradient(135deg, #E8F5E8 0%, #F1F8E9 50%, #C8E6C9 100%)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "150px",
          height: "150px",
          background: "radial-gradient(circle, rgba(46, 125, 50, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite",
          willChange: "transform",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "15%",
          right: "8%",
          width: "120px",
          height: "120px",
          background: "radial-gradient(circle, rgba(139, 195, 74, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite reverse",
          willChange: "transform",
        },
        "@keyframes float": {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0)",
            opacity: 0.3,
          },
          "50%": {
            transform: "translate3d(0, -20px, 0)",
            opacity: 0.6,
          },
        },
      }}
    />
  )
})

export default AnimatedBackground
