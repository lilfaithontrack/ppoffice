"use client"

import Link from "next/link"
import { Bug, Shield, Leaf, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function PestControl() {
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
        title="Pest Control"
        description="Effective pest prevention and management"
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
              <h2 className="text-3xl font-bold mb-6">Professional Pest Control Services</h2>
              <p className="text-lg text-muted-foreground">
                Our pest control services protect your property from unwanted pests using safe and effective methods. We
                provide comprehensive prevention and management solutions to maintain a pest-free environment for your
                facility.
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
                      <Bug className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Pest Identification</CardTitle>
                    <CardDescription>Expert problem assessment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Professional identification of pest issues and comprehensive property inspection to determine
                      appropriate treatment.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Preventative Programs</CardTitle>
                    <CardDescription>Proactive pest management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Ongoing preventative maintenance programs to keep pests away before they become a problem for your
                      property.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Leaf className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Eco-Friendly Solutions</CardTitle>
                    <CardDescription>Environmentally responsible</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Environmentally conscious pest control methods that effectively manage pests while minimizing
                      environmental impact.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <FileCheck className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Compliance Management</CardTitle>
                    <CardDescription>Regulatory adherence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Pest control services that meet health department, OSHA, and other regulatory requirements for
                      commercial facilities.
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
                Our Pest Control Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Commercial Pest Management</CardTitle>
                      <CardDescription>Comprehensive business pest control</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Office building pest control programs</li>
                        <li>Retail space pest management</li>
                        <li>Industrial facility pest control</li>
                        <li>Healthcare facility specialized services</li>
                        <li>Food service pest management compliance</li>
                      </ul>
                      <p className="mt-4">
                        Our commercial pest management services address the unique requirements of business environments
                        with discreet, effective solutions that minimize disruption.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Targeted Pest Solutions</CardTitle>
                      <CardDescription>Specific pest management</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Rodent control and prevention</li>
                        <li>Insect management (ants, roaches, flies, etc.)</li>
                        <li>Bird control and deterrent systems</li>
                        <li>Termite inspection and treatment</li>
                        <li>Bed bug detection and elimination</li>
                      </ul>
                      <p className="mt-4">
                        Our targeted pest solutions provide specialized treatments for specific pest issues with methods
                        designed for maximum effectiveness against particular species.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Preventative Programs</CardTitle>
                      <CardDescription>Proactive pest prevention</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Scheduled preventative service visits</li>
                        <li>Exterior perimeter treatments</li>
                        <li>Entry point monitoring and sealing</li>
                        <li>Seasonal pest prevention planning</li>
                        <li>Monitoring systems and early detection</li>
                      </ul>
                      <p className="mt-4">
                        Our preventative programs stop pest problems before they start with regular maintenance and
                        monitoring to identify and address potential issues early.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Integrated Pest Management (IPM)</CardTitle>
                      <CardDescription>Comprehensive ecological approach</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Environmentally responsible pest control</li>
                        <li>Multiple control method integration</li>
                        <li>Habitat modification recommendations</li>
                        <li>Biological control options when appropriate</li>
                        <li>Minimal chemical application philosophy</li>
                      </ul>
                      <p className="mt-4">
                        Our IPM approach combines multiple strategies to control pests effectively while minimizing
                        environmental impact and chemical use through a science-based methodology.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Pest Control</h2>
              <p className="text-lg text-muted-foreground">
                Investing in professional pest control services provides numerous advantages for your property and
                operations.
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
                <h3 className="text-xl font-bold mb-3 text-primary">Health Protection</h3>
                <p>
                  Prevent disease transmission and allergen exposure by controlling pests that can affect human health.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Property Preservation</h3>
                <p>
                  Protect your facility from damage caused by pests that can destroy structures, equipment, and
                  inventory.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Regulatory Compliance</h3>
                <p>
                  Meet health department, OSHA, and industry-specific requirements for pest control in commercial
                  facilities.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Professional Image</h3>
                <p>Maintain a positive impression for clients, customers, and employees with pest-free facilities.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Expert Knowledge</h3>
                <p>
                  Benefit from professional technicians who understand pest biology, behavior, and the most effective
                  control methods.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Long-Term Prevention</h3>
                <p>
                  Address the root causes of pest problems with comprehensive prevention strategies, not just temporary
                  treatments.
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
              <h2 className="text-3xl font-bold mb-4">Ready for Effective Pest Management?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our pest control services can protect your property and maintain a
                healthy environment.
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
                  <Link href="/grounds-maintenance">Explore More Grounds Maintenance Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

