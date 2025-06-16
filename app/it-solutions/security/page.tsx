"use client"

import Link from "next/link"
import { Shield, Lock, Server, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Security() {
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
        title="Installation & Security"
        description="Secure setup and implementation of IT systems"
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
              <h2 className="text-3xl font-bold mb-6">Professional Installation & Security Services</h2>
              <p className="text-lg text-muted-foreground">
                Our installation and security services ensure your IT infrastructure is properly set up and protected
                from threats. We provide comprehensive solutions for secure implementation of hardware, software, and
                network systems.
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
                      <Server className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Hardware Installation</CardTitle>
                    <CardDescription>Professional equipment setup</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Expert installation of servers, workstations, networking equipment, and peripherals with proper
                      configuration.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Wifi className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Network Setup</CardTitle>
                    <CardDescription>Secure network implementation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Comprehensive network installation with secure configurations, proper segmentation, and optimized
                      performance.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Lock className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Security Implementation</CardTitle>
                    <CardDescription>Robust protection measures</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Implementation of comprehensive security solutions including firewalls, intrusion detection, and
                      access controls.
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
                    <CardTitle>Security Auditing</CardTitle>
                    <CardDescription>Vulnerability assessment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Thorough evaluation of your IT infrastructure to identify and address security vulnerabilities and
                      compliance issues.
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
                Our Installation & Security Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Hardware & Software Installation</CardTitle>
                      <CardDescription>Professional setup of IT equipment and applications</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Server installation and configuration</li>
                        <li>Workstation setup and deployment</li>
                        <li>Network equipment installation</li>
                        <li>Software deployment and configuration</li>
                        <li>Peripheral device setup</li>
                      </ul>
                      <p className="mt-4">
                        Our installation services ensure your hardware and software are properly set up, configured, and
                        optimized for your specific business needs.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Network Security Implementation</CardTitle>
                      <CardDescription>Comprehensive network protection</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Firewall installation and configuration</li>
                        <li>VPN setup for secure remote access</li>
                        <li>Network segmentation implementation</li>
                        <li>Intrusion detection and prevention systems</li>
                        <li>Secure Wi-Fi network configuration</li>
                      </ul>
                      <p className="mt-4">
                        Our network security services protect your business data from unauthorized access and cyber
                        threats through multiple layers of defense.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Endpoint Security</CardTitle>
                      <CardDescription>Protection for individual devices</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Antivirus and anti-malware implementation</li>
                        <li>Endpoint encryption solutions</li>
                        <li>Device access controls</li>
                        <li>Mobile device management</li>
                        <li>Security patch management</li>
                      </ul>
                      <p className="mt-4">
                        Our endpoint security solutions ensure all devices connecting to your network are protected
                        against malware, unauthorized access, and data breaches.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Assessment & Compliance</CardTitle>
                      <CardDescription>Evaluation and regulatory alignment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Vulnerability assessments</li>
                        <li>Penetration testing</li>
                        <li>Security policy development</li>
                        <li>Compliance auditing (GDPR, HIPAA, PCI DSS, etc.)</li>
                        <li>Security awareness training</li>
                      </ul>
                      <p className="mt-4">
                        Our assessment services identify security weaknesses in your IT infrastructure and help ensure
                        compliance with relevant regulations and industry standards.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Installation & Security</h2>
              <p className="text-lg text-muted-foreground">
                Investing in professional installation and security services provides numerous advantages for your
                business.
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
                <h3 className="text-xl font-bold mb-3 text-primary">Enhanced Security</h3>
                <p>
                  Protect your business data and systems from cyber threats, unauthorized access, and potential
                  breaches.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Optimal Performance</h3>
                <p>
                  Properly installed and configured systems operate more efficiently, with fewer issues and better
                  performance.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Regulatory Compliance</h3>
                <p>Meet industry-specific regulations and standards for data protection and security compliance.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Reduced Downtime</h3>
                <p>Minimize system failures and security incidents that can lead to costly business disruptions.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Expert Implementation</h3>
                <p>
                  Benefit from the knowledge and experience of certified professionals who follow industry best
                  practices.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Peace of Mind</h3>
                <p>
                  Confidence that your IT infrastructure is properly installed, secured, and protected against threats.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Secure Your IT Infrastructure?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our installation and security services can protect your business and
                optimize your IT systems.
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
                  <Link href="/it-solutions">Explore More IT Solutions</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

