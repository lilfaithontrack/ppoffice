"use client"

import Link from "next/link"
import {
  Network,
  Cloud,
  Headphones,
  Shield,
  Box,
  Hammer,
  Truck,
  Building2,
  Paintbrush,
  Lightbulb,
  Briefcase,
  Scissors,
  Leaf,
  Snowflake,
  Bug,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface SolutionsMenuProps {
  onClose: () => void
}

export default function SolutionsMenu({ onClose }: SolutionsMenuProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="bg-white text-foreground shadow-lg z-20 rounded-b-lg" onClick={onClose}>
      <div className="container mx-auto py-8">
        <motion.div className="grid grid-cols-12 gap-8" variants={container} initial="hidden" animate="show">
          <div className="col-span-9">
            {/* IT Solutions Co. */}
            <motion.div className="mb-8" variants={item}>
              <h3 className="text-lg font-bold mb-4 text-primary">IT Solutions Co.</h3>
              <div className="grid grid-cols-3 gap-4">
                <motion.div variants={item}>
                  <Link
                    href="/it-solutions/network-support"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Network className="h-5 w-5 text-primary mr-3" />
                    <span>Network Support</span>
                  </Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link
                    href="/it-solutions/cloud-solutions"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Cloud className="h-5 w-5 text-primary mr-3" />
                    <span>Cloud Solutions</span>
                  </Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link
                    href="/it-solutions/technical-support"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Headphones className="h-5 w-5 text-primary mr-3" />
                    <span>Technical Support</span>
                  </Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link
                    href="/it-solutions/network-management"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Network className="h-5 w-5 text-primary mr-3" />
                    <span>Network Management</span>
                  </Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link
                    href="/it-solutions/security"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Shield className="h-5 w-5 text-primary mr-3" />
                    <span>Installation & Security</span>
                  </Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link
                    href="/it-solutions/cybersecurity"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Shield className="h-5 w-5 text-primary mr-3" />
                    <span>Maintenance & Cybersecurity</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Base Operations Co. */}
            <motion.div className="mb-8" variants={item}>
              <h3 className="text-lg font-bold mb-4 text-primary">Base Operations Co.</h3>
              <div className="grid grid-cols-3 gap-4">
                <motion.div variants={item}>
                  <Link
                    href="/base-operations/supplies-management"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Box className="h-5 w-5 text-primary mr-3" />
                    <span>Supplies Management</span>
                  </Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link
                    href="/base-operations/handyman-services"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Hammer className="h-5 w-5 text-primary mr-3" />
                    <span>Handyman Services</span>
                  </Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link
                    href="/base-operations/courier-delivery"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Truck className="h-5 w-5 text-primary mr-3" />
                    <span>Courier & Delivery</span>
                  </Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link
                    href="/base-operations/light-construction"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Building2 className="h-5 w-5 text-primary mr-3" />
                    <span>Light Construction</span>
                  </Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link
                    href="/base-operations/interior-remodeling"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Paintbrush className="h-5 w-5 text-primary mr-3" />
                    <span>Interior Remodeling</span>
                  </Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link
                    href="/base-operations/fixture-installation"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Lightbulb className="h-5 w-5 text-primary mr-3" />
                    <span>Fixture Installation</span>
                  </Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link
                    href="/base-operations/minor-construction"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Briefcase className="h-5 w-5 text-primary mr-3" />
                    <span>Minor Construction</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Grounds Maintenance Co. */}
            <motion.div variants={item}>
              <h3 className="text-lg font-bold mb-4 text-primary">Grounds Maintenance Co.</h3>
              <div className="grid grid-cols-3 gap-4">
                <motion.div variants={item}>
                  <Link
                    href="/grounds-maintenance/mowing-groundskeeping"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Scissors className="h-5 w-5 text-primary mr-3" />
                    <span>Mowing & Groundskeeping</span>
                  </Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link
                    href="/grounds-maintenance/garden-maintenance"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Leaf className="h-5 w-5 text-primary mr-3" />
                    <span>Garden Maintenance</span>
                  </Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link
                    href="/grounds-maintenance/seasonal-cleanup"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Leaf className="h-5 w-5 text-primary mr-3" />
                    <span>Seasonal Cleanup</span>
                  </Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link
                    href="/grounds-maintenance/snow-removal"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Snowflake className="h-5 w-5 text-primary mr-3" />
                    <span>Snow Removal</span>
                  </Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link
                    href="/grounds-maintenance/pest-control"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-all hover:translate-x-1"
                    onClick={onClose}
                  >
                    <Bug className="h-5 w-5 text-primary mr-3" />
                    <span>Pest Control</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="col-span-3">
            <motion.div
              className="bg-gradient-to-br from-primary to-primary/80 text-white p-6 rounded-lg"
              variants={item}
            >
              <h3 className="text-lg font-bold mb-2">Explore All Services</h3>
              <p className="text-sm mb-4">
                Unlocking the Full Spectrum of IT Solutions and Professional Services for your needs
              </p>
              <Button asChild variant="secondary" className="w-full mb-6">
                <Link href="/solutions" onClick={onClose}>
                  Explore Now
                </Link>
              </Button>

              <div className="space-y-4">
                <motion.div className="flex items-center" variants={item}>
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="text-sm">info@powerplatformoffice.com</span>
                </motion.div>
                <motion.div className="flex items-center" variants={item}>
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-sm">+123 456 7890</span>
                </motion.div>
                <motion.div className="flex items-center space-x-3 mt-4" variants={item}>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Youtube className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

