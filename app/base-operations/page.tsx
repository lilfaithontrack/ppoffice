"use client"

import Link from "next/link"
import { ArrowRight, Package, Wrench, Truck, Building, Brush, Lightbulb, HardHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function BaseOperations() {
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

  const services = [
    {
      title: "Supplies Management",
      description: "Efficient inventory and supplies management solutions",
      icon: Package,
      href: "/base-operations/supplies-management",
    },
    {
      title: "Handyman Services",
      description: "Professional maintenance and repair services",
      icon: Wrench,
      href: "/base-operations/handyman-services",
    },
    {
      title: "Courier & Delivery",
      description: "Reliable on-site delivery and logistics",
      icon: Truck,
      href: "/base-operations/courier-delivery",
    },
    {
      title: "Light Construction",
      description: "Small-scale construction and improvement projects",
      icon: Building,
      href: "/base-operations/light-construction",
    },
    {
      title: "Interior Remodeling",
      description: "Professional interior space renovations",
      icon: Brush,
      href: "/base-operations/interior-remodeling",
    },
    {
      title: "Fixture Installation",
      description: "Expert installation of fixtures and equipment",
      icon: Lightbulb,
      href: "/base-operations/fixture-installation",
    },
    {
      title: "Minor Construction",
      description: "Small construction projects and modifications",
      icon: HardHat,
      href: "/base-operations/minor-construction",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title="Base Operations"
        description="Comprehensive facility management and operational services"
        backgroundImage="/placeholder.svg?height=400&width=1920"
      />

      <main className="flex-grow">
        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6">Our Base Operations Services</h2>
              <p className="text-lg text-muted-foreground">
                Power Platform Office provides comprehensive base operations services to ensure your facility runs
                smoothly and efficiently. From supplies management to construction services, we handle all aspects of
                your operational needs.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                  <Card className="h-full">
                    <CardHeader className="text-center">
                      <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                      <Button asChild variant="outline">
                        <Link href={service.href} className="flex items-center">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6">Benefits of Our Base Operations Services</h2>
              <p className="text-lg text-muted-foreground">
                Partnering with Power Platform Office for your base operations provides numerous advantages for your
                organization.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Streamlined Operations</h3>
                <p>
                  Simplify your facility management with a single provider handling multiple operational aspects,
                  reducing administrative burden.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Cost Efficiency</h3>
                <p>
                  Optimize operational costs through efficient resource allocation, preventative maintenance, and
                  strategic supply management.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Improved Facility Quality</h3>
                <p>
                  Maintain a professional and well-functioning environment with regular maintenance and prompt repairs.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Specialized Expertise</h3>
                <p>
                  Access skilled professionals across various operational disciplines without maintaining a large
                  in-house staff.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Scalable Solutions</h3>
                <p>
                  Easily adapt your operational support as your organization grows or needs change without major
                  restructuring.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Focus on Core Business</h3>
                <p>
                  Concentrate on your organization's primary mission while we ensure your operational foundation runs
                  smoothly.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Base Operations?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our base operations services can improve efficiency and reduce costs for
                your organization.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

