"use client"

import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function PromoBanner() {
  return (
    <div className="bg-black  py-3 text-primary-foreground sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <motion.div
            className="flex items-center mb-3 sm:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Phone className="h-5 w-5 mr-2" />
            <span className="text-sm mr-4">+240-938-4970</span>
            <Mail className="h-5 w-5 mr-2" />
            <span className="text-sm">info@powerplatformoffice.com</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild variant="secondary" size="sm">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

