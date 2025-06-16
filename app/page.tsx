"use client"

import Link from "next/link"
import { ArrowRight, Building, Cpu, Leaf, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSlider from "@/components/hero-slider"
import ServiceCard from "@/components/service-card"
import { Testimonial } from "@/components/testimonial"
import { motion } from "framer-motion"
import PartnerLogos from "@/components/partner-logos"
import ConsultationForm from "@/components/consultation-form"
import { InteractiveFeatures } from "@/components/interactive-features"
import { StatsSection } from "@/components/stats-section"

export default function Home() {
  const slides = [
    {
      image: "/slide-1.jpg?height=800&width=1920",
      title: "Comprehensive Business Solutions",
      description:
        "From facility management to IT solutions, we provide all the services you need to run your operations smoothly.",
      buttonText: "Explore Services",
      buttonLink: "/solutions",
    },
    {
      image: "/slide-3.jpg?height=800&width=1920",
      title: "Professional IT Services",
      description: "Cutting-edge technology solutions to keep your business ahead of the competition.",
      buttonText: "IT Solutions",
      buttonLink: "/it-solutions",
    },
    {
      image: "/slide-2.jpg?height=800&width=1920",
      title: "Facility Management Excellence",
      description: "Maintain your facilities in top condition with our comprehensive maintenance services.",
      buttonText: "Learn More",
      buttonLink: "/base-operations",
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Slider */}
      <HeroSlider slides={slides} />

      {/* Stats Section */}
      <StatsSection />

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4">Our Service Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Power Platform Office provides comprehensive services across multiple domains to meet all your business
              needs.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={fadeInUp}>
              <ServiceCard
                title="Base Operations Co."
                description="Supplies management, handyman services, courier & delivery, and light construction."
                icon={<Building className="h-10 w-10" />}
                href="/base-operations"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ServiceCard
                title="Grounds Maintenance Co."
                description="Mowing & groundskeeping, snow removal, pest control, and janitorial services."
                icon={<Leaf className="h-10 w-10" />}
                href="/grounds-maintenance"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ServiceCard
                title="Professional Services Co."
                description="Staffing solutions, event management, logistics & supply chain management."
                icon={<Users className="h-10 w-10" />}
                href="/professional-services"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ServiceCard
                title="IT Solutions Co."
                description="Network management, hosting, cybersecurity, and custom software development."
                icon={<Cpu className="h-10 w-10" />}
                href="/it-solutions"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button asChild>
              <Link href="/solutions">
                View All Services <ArrowRight className="bg-black " />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <InteractiveFeatures />

      {/* Partner Logos Section */}
      <PartnerLogos />

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from organizations that have experienced the Power Platform Office difference.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={fadeInUp}>
              <Testimonial
                quote="Power Platform Office transformed our IT infrastructure with their expert solutions. Their team was professional and efficient throughout the entire process."
                author="John Smith"
                position="CTO, Tech Innovations"
                image="/placeholder.svg?height=100&width=100"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Testimonial
                quote="The grounds maintenance services have kept our corporate campus looking immaculate year-round. Their attention to detail is unmatched."
                author="Sarah Johnson"
                position="Facility Manager, Global Corp"
                image="/placeholder.svg?height=100&width=100"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Testimonial
                quote="Their staffing solutions helped us quickly scale our team during a critical growth phase. The quality of candidates was exceptional."
                author="Michael Brown"
                position="HR Director, Growth Enterprises"
                image="/placeholder.svg?height=100&width=100"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <ConsultationForm />

      {/* CTA Section */}
      <section className="py-16 bg-black text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business Operations?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our comprehensive services can help streamline your operations and drive
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/solutions">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

