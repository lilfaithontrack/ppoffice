"use client"

import Link from "next/link"
import { PenToolIcon as Tool, Clock, Wrench, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function HandymanServices() {
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
        title="Handyman Services"
        description="Professional maintenance and repair solutions for your facility"
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
              <h2 className="text-3xl font-bold mb-6">Professional Handyman Services</h2>
              <p className="text-lg text-muted-foreground">
                Our handyman services provide reliable maintenance and repair solutions for your facility. From minor
                repairs to ongoing maintenance, our skilled technicians ensure your property remains in optimal
                condition.
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
                      <Tool className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>General Repairs</CardTitle>
                    <CardDescription>Comprehensive fix-it solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      From door repairs to fixture replacements, our technicians handle a wide range of general
                      maintenance tasks.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Preventative Maintenance</CardTitle>
                    <CardDescription>Proactive facility care</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Regular maintenance schedules to prevent issues before they become costly problems requiring major
                      repairs.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Wrench className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Installation Services</CardTitle>
                    <CardDescription>Expert equipment setup</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Professional installation of fixtures, equipment, and accessories to ensure proper function and
                      longevity.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <ThumbsUp className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Emergency Services</CardTitle>
                    <CardDescription>Rapid response repairs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Quick response to urgent maintenance issues to minimize disruption to your operations and
                      facility.
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
                Our Handyman Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>General Repairs & Maintenance</CardTitle>
                      <CardDescription>Comprehensive facility upkeep</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Door and window repairs</li>
                        <li>Drywall patching and repair</li>
                        <li>Ceiling tile replacement</li>
                        <li>Basic plumbing repairs</li>
                        <li>Furniture assembly and repair</li>
                        <li>Cabinet and drawer repairs</li>
                      </ul>
                      <p className="mt-4">
                        Our general repair services address a wide range of maintenance needs to keep your facility
                        functioning properly and looking professional.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Electrical & Lighting</CardTitle>
                      <CardDescription>Illumination and power solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Light fixture replacement</li>
                        <li>Bulb and ballast replacement</li>
                        <li>Switch and outlet repairs</li>
                        <li>Basic electrical troubleshooting</li>
                        <li>Emergency lighting maintenance</li>
                        <li>Ceiling fan installation and repair</li>
                      </ul>
                      <p className="mt-4">
                        Our electrical services ensure your facility remains well-lit and all electrical components
                        function safely and efficiently.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Installation Services</CardTitle>
                      <CardDescription>Professional equipment and fixture setup</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Shelving and storage solutions</li>
                        <li>TV and monitor mounting</li>
                        <li>Whiteboard and bulletin board installation</li>
                        <li>Bathroom fixtures and accessories</li>
                        <li>Office equipment setup</li>
                        <li>Signage installation</li>
                      </ul>
                      <p className="mt-4">
                        Our installation services ensure all equipment and fixtures are properly installed for safety,
                        functionality, and professional appearance.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Preventative Maintenance</CardTitle>
                      <CardDescription>Proactive facility care</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Regular facility inspections</li>
                        <li>Seasonal maintenance programs</li>
                        <li>HVAC filter replacement</li>
                        <li>Door and window adjustments</li>
                        <li>Weather stripping and caulking</li>
                        <li>Preventative lubrication of moving parts</li>
                      </ul>
                      <p className="mt-4">
                        Our preventative maintenance programs identify and address potential issues before they become
                        major problems, saving you time and money.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Handyman Services</h2>
              <p className="text-lg text-muted-foreground">
                Utilizing our professional handyman services provides numerous advantages for your facility management.
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
                <h3 className="text-xl font-bold mb-3 text-primary">Cost Efficiency</h3>
                <p>
                  Save money by addressing small issues before they become expensive problems requiring major repairs.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Time Savings</h3>
                <p>Focus on your core business while our professionals handle facility maintenance and repair tasks.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Professional Results</h3>
                <p>Skilled technicians ensure repairs and installations are completed correctly the first time.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Single Point of Contact</h3>
                <p>One service provider for multiple maintenance needs simplifies facility management.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Improved Facility Appearance</h3>
                <p>Well-maintained facilities create a positive impression for employees, clients, and visitors.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Reduced Downtime</h3>
                <p>Quick response to maintenance issues minimizes disruption to your operations and productivity.</p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Facility Maintenance?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our handyman services can keep your facility in optimal condition while
                saving you time and money.
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

