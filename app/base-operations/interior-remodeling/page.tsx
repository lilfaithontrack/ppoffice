"use client"

import Link from "next/link"
import { Brush, Ruler, Palette, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function InteriorRemodeling() {
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
      <PageBanner
        title="Interior Remodeling"
        description="Professional interior space renovations and improvements"
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
              <h2 className="text-3xl font-bold mb-6">Professional Interior Remodeling Services</h2>
              <p className="text-lg text-muted-foreground">
                Our interior remodeling services transform your spaces to enhance functionality, appearance, and
                efficiency. We provide comprehensive renovation solutions with minimal disruption to your operations,
                delivering professional results that align with your organization's needs and aesthetic goals.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Brush className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Office Renovations</CardTitle>
                    <CardDescription>Workspace transformations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Complete office remodeling to create modern, efficient workspaces that enhance productivity and
                      employee satisfaction.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Ruler className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Space Reconfiguration</CardTitle>
                    <CardDescription>Layout optimization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Strategic redesign of interior spaces to improve workflow, accommodate growth, and enhance
                      functionality.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Palette className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Aesthetic Updates</CardTitle>
                    <CardDescription>Visual improvements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Refresh your interior appearance with updated finishes, colors, and design elements that reflect
                      your brand identity.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Facility Modernization</CardTitle>
                    <CardDescription>Technology integration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Upgrade your spaces with modern amenities, technology integration, and contemporary design
                      elements.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 className="text-3xl font-bold mb-12 text-center" variants={fadeInUp}>
                Our Interior Remodeling Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Office & Workspace Remodeling</CardTitle>
                      <CardDescription>Comprehensive workspace renovations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Open office conversions</li>
                        <li>Executive office renovations</li>
                        <li>Collaborative space creation</li>
                        <li>Workstation modernization</li>
                        <li>Reception area redesign</li>
                      </ul>
                      <p className="mt-4">
                        Our office remodeling services transform outdated workspaces into modern, efficient environments
                        that enhance productivity and reflect your organizational culture.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Interior Finishes & Surfaces</CardTitle>
                      <CardDescription>Surface renovations and updates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Wall finishing and painting</li>
                        <li>Flooring installation and replacement</li>
                        <li>Ceiling renovations</li>
                        <li>Trim and molding installation</li>
                        <li>Surface material upgrades</li>
                      </ul>
                      <p className="mt-4">
                        Our interior finishing services refresh and update your facility's surfaces with quality
                        materials and professional installation techniques.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Specialty Room Renovations</CardTitle>
                      <CardDescription>Purpose-specific space remodeling</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Conference room modernization</li>
                        <li>Break room and cafeteria remodeling</li>
                        <li>Training room renovations</li>
                        <li>Restroom upgrades</li>
                        <li>Lobby and entrance transformations</li>
                      </ul>
                      <p className="mt-4">
                        Our specialty room renovation services create purpose-designed spaces that enhance functionality
                        and user experience for specific activities and needs.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Accessibility & Compliance Updates</CardTitle>
                      <CardDescription>ADA and code-compliant renovations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>ADA compliance renovations</li>
                        <li>Doorway widening and access improvements</li>
                        <li>Restroom accessibility upgrades</li>
                        <li>Ramp and handrail installations</li>
                        <li>Code compliance updates</li>
                      </ul>
                      <p className="mt-4">
                        Our accessibility renovation services ensure your facility meets current regulations while
                        creating inclusive environments for all users.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Interior Remodeling</h2>
              <p className="text-lg text-muted-foreground">
                Investing in professional interior remodeling provides numerous advantages for your organization.
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
                <h3 className="text-xl font-bold mb-3 text-primary">Enhanced Productivity</h3>
                <p>
                  Well-designed spaces improve workflow efficiency, reduce bottlenecks, and create environments that
                  support employee performance.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Improved Image</h3>
                <p>
                  Updated interiors create positive impressions for clients, visitors, and employees, reflecting your
                  organization's professionalism.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Space Optimization</h3>
                <p>
                  Strategic remodeling maximizes usable square footage, accommodates growth, and adapts to changing
                  operational needs.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Employee Satisfaction</h3>
                <p>
                  Attractive, functional workspaces contribute to employee morale, retention, and recruitment of top
                  talent.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Energy Efficiency</h3>
                <p>
                  Modern renovations can incorporate energy-efficient materials and systems that reduce operational
                  costs over time.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Minimal Disruption</h3>
                <p>
                  Our phased approach and careful planning minimize impact on your ongoing operations during the
                  remodeling process.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Interior Spaces?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our interior remodeling services can enhance your facility's appearance,
                functionality, and efficiency.
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
                  <Link href="/base-operations">Explore More Base Operations Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

