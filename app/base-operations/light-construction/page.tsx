"use client"

import Link from "next/link"
import { Building, Ruler, HardHat, Hammer } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function LightConstruction() {
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
        title="Light Construction"
        description="Small-scale construction and improvement projects"
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
              <h2 className="text-3xl font-bold mb-6">Professional Light Construction Services</h2>
              <p className="text-lg text-muted-foreground">
                Our light construction services provide professional solutions for small to medium-scale construction
                projects and facility modifications. We handle everything from partition walls to minor structural
                changes with minimal disruption to your operations.
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
                    <CardTitle>Partition Installation</CardTitle>
                    <CardDescription>Space division solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Professional installation of various partition types to create new spaces and optimize your
                      facility layout.
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
                    <CardTitle>Space Modifications</CardTitle>
                    <CardDescription>Layout improvements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Reconfiguration of existing spaces to better meet your operational needs and improve
                      functionality.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <HardHat className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Minor Structural Work</CardTitle>
                    <CardDescription>Small-scale building changes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Professional execution of minor structural modifications to accommodate changing facility
                      requirements.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Hammer className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Facility Upgrades</CardTitle>
                    <CardDescription>Infrastructure improvements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Implementation of facility upgrades to enhance functionality, appearance, and compliance with
                      regulations.
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
                Our Light Construction Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Partition Walls & Room Dividers</CardTitle>
                      <CardDescription>Space division solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Drywall partition installation</li>
                        <li>Glass partition systems</li>
                        <li>Modular wall solutions</li>
                        <li>Acoustic partition installation</li>
                        <li>Movable wall systems</li>
                      </ul>
                      <p className="mt-4">
                        Our partition installation services create new spaces within your facility, optimizing your
                        layout while maintaining aesthetic appeal and functionality.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Office & Space Modifications</CardTitle>
                      <CardDescription>Layout reconfiguration and improvements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Office space reconfiguration</li>
                        <li>Cubicle installation and modification</li>
                        <li>Reception area renovations</li>
                        <li>Conference room construction</li>
                        <li>Workspace optimization</li>
                      </ul>
                      <p className="mt-4">
                        Our space modification services transform your existing areas to better meet your operational
                        needs, improving workflow and functionality.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Ceiling & Flooring Work</CardTitle>
                      <CardDescription>Surface improvements and modifications</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Drop ceiling installation</li>
                        <li>Ceiling tile replacement</li>
                        <li>Flooring installation and repair</li>
                        <li>Raised floor systems</li>
                        <li>ADA-compliant modifications</li>
                      </ul>
                      <p className="mt-4">
                        Our ceiling and flooring services enhance the appearance, functionality, and compliance of your
                        facility's horizontal surfaces.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Minor Structural Modifications</CardTitle>
                      <CardDescription>Small-scale building alterations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Door and window installation</li>
                        <li>Wall removal and modification</li>
                        <li>Load-bearing evaluations</li>
                        <li>Small-scale expansions</li>
                        <li>Structural reinforcement</li>
                      </ul>
                      <p className="mt-4">
                        Our structural modification services safely implement changes to your facility's structure while
                        ensuring compliance with building codes and regulations.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Light Construction Services</h2>
              <p className="text-lg text-muted-foreground">
                Utilizing our professional light construction services provides numerous advantages for your facility
                modifications.
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
                <h3 className="text-xl font-bold mb-3 text-primary">Minimal Disruption</h3>
                <p>
                  Our construction methods and scheduling minimize impact on your ongoing operations during modification
                  projects.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Code Compliance</h3>
                <p>
                  All modifications are performed in accordance with building codes, safety regulations, and
                  accessibility requirements.
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
                  facility changes.
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
                <h3 className="text-xl font-bold mb-3 text-primary">Space Optimization</h3>
                <p>
                  Expert design and implementation maximize the functionality and efficiency of your available square
                  footage.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Single-Source Solution</h3>
                <p>
                  One provider for design, construction, and finishing simplifies communication and ensures consistent
                  quality.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Facility?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our light construction services can improve your facility's
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

