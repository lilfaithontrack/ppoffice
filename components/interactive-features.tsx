"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const features = [
  {
    title: "Network Infrastructure",
    description: "Build and maintain robust network systems that keep your business connected and secure.",
    image: "/net1.jpeg?height=600&width=800",
    link: "/it-solutions/network-support",
  },
  {
    title: "Cloud Solutions",
    description: "Leverage cloud technology to improve flexibility, scalability, and business continuity.",
    image: "/cloud.jpg?height=600&width=800",
    link: "/it-solutions/cloud-solutions",
  },
  {
    title: "Cybersecurity",
    description: "Protect your business with comprehensive security solutions and proactive monitoring.",
    image: "/cyber.jpg?height=600&width=800",
    link: "/it-solutions/security",
  },
]

export function InteractiveFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Explore Our Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how our comprehensive IT solutions can transform your business operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <img
              src={features[activeFeature].image || "/placeholder.svg"}
              alt={features[activeFeature].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{features[activeFeature].title}</h3>
              <p className="mb-4">{features[activeFeature].description}</p>
              <Button 
                asChild 
                variant="default" 
                className="bg-black hover:bg-black/80 text-white"
              >
                <Link href={features[activeFeature].link}>Learn More</Link>
              </Button>
            </div>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-6 rounded-lg transition-all ${
                    activeFeature === index ? "bg-black text-primary-foreground" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className={activeFeature === index ? "text-primary-foreground/90" : "text-muted-foreground"}>
                    {feature.description}
                  </p>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

