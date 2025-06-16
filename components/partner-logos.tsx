"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface PartnerLogosProps {
  title?: string
  description?: string
}

export default function PartnerLogos({
  title = "Our Trusted Partners",
  description = "We collaborate with industry leaders to deliver exceptional service and solutions",
}: PartnerLogosProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Sample partner logos - replace with actual partner logos
  const partners = [
    { name: "Acme Corp", logo: "/1.png?height=80&width=180" },
    { name: "TechGiant", logo: "/2.png?height=80&width=180" },
    { name: "Innovate Inc", logo: "/3.png?height=80&width=180" },
    { name: "Future Systems", logo: "/4.png?height=80&width=180" },
    { name: "Global Solutions", logo: "/5.png?height=80&width=180" },
    { name: "Nexus Partners", logo: "/6.png?height=80&width=180" },
    { name: "Elevate Group", logo: "/7.png?height=80&width=180" },
    { name: "Prime Industries", logo: "/8.png?height=80&width=180" },
    { name: "Vertex Technologies", logo: "/9.png?height=80&width=180" },
    { name: "Alliance Partners", logo: "/1.png?height=80&width=180" },
  ]

  const itemsPerPage = 5
  const totalPages = Math.ceil(partners.length / itemsPerPage)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages)
    }, 3000)

    return () => clearInterval(interval)
  }, [totalPages])

  const currentPartners = partners.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex justify-center gap-8"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {currentPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${currentPage}-${index}`}
                className="flex-shrink-0 bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-32 w-48"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <img
                  src={partner.logo || "/1.png"}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === currentPage ? "bg-primary" : "bg-gray-300"}`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

