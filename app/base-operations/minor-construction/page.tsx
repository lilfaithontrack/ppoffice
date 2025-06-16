"use client"

import Link from "next/link"
import { HardHat, Ruler, Hammer, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function MinorConstruction() {
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
        title="Minor Construction"
        description="Small construction projects and facility modifications"
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
              <h2 className="text-3xl font-bold mb-6">Professional Minor Construction Services</h2>
              <p className="text-lg text-muted-foreground">
                Our minor construction services provide professional solutions for small-scale building projects and
                facility modifications. We handle everything from structural repairs to small additions with minimal
                disruption to your operations.
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
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Structural Modifications</CardTitle>
                    <CardDescription>Building alterations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Professional implementation of small-scale structural changes to accommodate evolving facility
                      needs.
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
                    <CardTitle>Small Additions</CardTitle>
                    <CardDescription>Space expansion projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Construction of small additions and extensions to expand your facility's usable space.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Hammer className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Structural Repairs</CardTitle>
                    <CardDescription>Building integrity solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Expert repair of structural issues to maintain building integrity and safety.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <HardHat className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Specialty Installations</CardTitle>
                    <CardDescription>Custom construction solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Construction of specialized features and installations to meet specific operational requirements.
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
                Our Minor Construction Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Structural Modifications & Repairs</CardTitle>
                      <CardDescription>Building alterations and integrity solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Wall removal and structural opening creation</li>
                        <li>Load-bearing wall modifications</li>
                        <li>Structural reinforcement</li>
                        <li>Foundation and structural repairs</li>
                        <li>Roof and ceiling structural work</li>
                      </ul>
                      <p className="mt-4">
                        Our structural modification services safely implement changes to your facility's structure while
                        ensuring building integrity and code compliance.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Small Additions & Expansions</CardTitle>
                      <CardDescription>Space expansion projects</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Office and workspace expansions</li>
                        <li>Entry vestibule additions</li>
                        <li>Storage area construction</li>
                        <li>Covered walkway installation</li>
                        <li>Small outbuilding construction</li>
                      </ul>
                      <p className="mt-4">
                        Our small addition services expand your usable space with construction that seamlessly
                        integrates with your existing facility.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Specialty Construction</CardTitle>
                      <CardDescription>Custom building solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>ADA accessibility improvements</li>
                        <li>Security feature installation</li>
                        <li>Equipment platforms and bases</li>
                        <li>Loading dock modifications</li>
                        <li>Specialized storage solutions</li>
                      </ul>
                      <p className="mt-4">
                        Our specialty construction services address unique operational requirements with custom building
                        solutions tailored to your specific needs.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Building System Upgrades</CardTitle>
                      <CardDescription>Infrastructure improvements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>HVAC system modifications</li>
                        <li>Electrical service upgrades</li>
                        <li>Plumbing system improvements</li>
                        <li>Energy efficiency enhancements</li>
                        <li>Technology infrastructure integration</li>
                      </ul>
                      <p className="mt-4">
                        Our building system upgrade services improve your facility's infrastructure to enhance
                        performance, efficiency, and functionality.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Minor Construction</h2>
              <p className="text-lg text-muted-foreground">
                Utilizing our professional minor construction services provides numerous advantages for your facility
                projects.
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
                <h3 className="text-xl font-bold mb-3 text-primary">Code Compliance</h3>
                <p>
                  All construction is performed in accordance with building codes, safety regulations, and permitting
                  requirements.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Minimal Disruption</h3>
                <p>
                  Our construction methods and scheduling minimize impact on your ongoing operations during projects.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Quality Craftsmanship</h3>
                <p>
                  Professional construction techniques and materials ensure durable, high-quality results for your
                  facility.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Project Management</h3>
                <p>
                  Comprehensive oversight from planning through completion ensures your project stays on schedule and
                  within budget.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Structural Integrity</h3>
                <p>
                  Expert construction ensures building integrity is maintained or enhanced during modifications and
                  additions.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Single-Source Solution</h3>
                <p>
                  One provider for design, permitting, construction, and finishing simplifies communication and ensures
                  consistent quality.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Construction Project?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our minor construction services can improve your facility's
                functionality and appearance.
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

