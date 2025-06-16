"use client"

import { motion } from "framer-motion"
import PageBanner from "@/components/page-banner"

export default function TeamPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const hoverScale = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title="Team"
        description="Coming Soon"
        backgroundImage="/Congress.jpg?height=400&width=1920"
      />

     
    </div>
  )
}