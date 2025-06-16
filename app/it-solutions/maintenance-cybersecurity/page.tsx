"use client"

import Link from "next/link"
import { Shield, RefreshCw, AlertTriangle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function MaintenanceCybersecurity() {
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
        title="Maintenance & Cybersecurity"
        description="Comprehensive IT maintenance and advanced cybersecurity protection"
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
              <h2 className="text-3xl font-bold mb-6">Comprehensive IT Maintenance & Cybersecurity Services</h2>
              <p className="text-lg text-muted-foreground">
                Our maintenance and cybersecurity services ensure your IT systems remain operational, up-to-date, and
                protected from evolving cyber threats. We provide proactive maintenance and robust security measures to
                safeguard your business.
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
                      <RefreshCw className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Preventative Maintenance</CardTitle>
                    <CardDescription>Proactive system care</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Regular system updates, patches, and maintenance to prevent issues before they impact your
                      business operations.
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
                    <CardTitle>Cybersecurity Protection</CardTitle>
                    <CardDescription>Advanced threat defense</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Comprehensive security solutions to protect your systems and data from cyber threats, malware, and
                      unauthorized access.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <AlertTriangle className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Threat Monitoring</CardTitle>
                    <CardDescription>Continuous security vigilance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      24/7 monitoring of your systems to detect and respond to security threats before they can cause
                      damage.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Compliance Management</CardTitle>
                    <CardDescription>Regulatory adherence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Ensuring your IT systems meet industry regulations and compliance requirements for data protection
                      and security.
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
                Our Maintenance & Cybersecurity Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>IT System Maintenance</CardTitle>
                      <CardDescription>Proactive system care and updates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Regular software updates and patch management</li>
                        <li>Hardware maintenance and performance optimization</li>
                        <li>System health monitoring and reporting</li>
                        <li>Preventative maintenance schedules</li>
                        <li>System backup and recovery management</li>
                      </ul>
                      <p className="mt-4">
                        Our maintenance services ensure your IT systems remain up-to-date, secure, and operating at peak
                        performance to minimize downtime and disruptions.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Cybersecurity Solutions</CardTitle>
                      <CardDescription>Comprehensive threat protection</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Advanced firewall implementation and management</li>
                        <li>Endpoint protection and anti-malware solutions</li>
                        <li>Email security and phishing protection</li>
                        <li>Data encryption and secure access controls</li>
                        <li>Multi-factor authentication implementation</li>
                      </ul>
                      <p className="mt-4">
                        Our cybersecurity solutions provide multiple layers of protection to defend your business
                        against the ever-evolving landscape of cyber threats.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Monitoring & Response</CardTitle>
                      <CardDescription>Vigilant threat detection and mitigation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>24/7 security monitoring and alerting</li>
                        <li>Intrusion detection and prevention</li>
                        <li>Security incident response and remediation</li>
                        <li>Threat intelligence and vulnerability management</li>
                        <li>Security log analysis and reporting</li>
                      </ul>
                      <p className="mt-4">
                        Our monitoring services continuously watch for security threats and suspicious activities,
                        allowing for rapid response to potential security incidents.
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
                        <li>Security vulnerability assessments</li>
                        <li>Penetration testing and security audits</li>
                        <li>Compliance gap analysis (GDPR, HIPAA, PCI DSS, etc.)</li>
                        <li>Security policy development and implementation</li>
                        <li>Employee security awareness training</li>
                      </ul>
                      <p className="mt-4">
                        Our assessment services identify security weaknesses and ensure your systems meet regulatory
                        requirements and industry best practices for data protection.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Maintenance & Cybersecurity Services</h2>
              <p className="text-lg text-muted-foreground">
                Investing in professional maintenance and cybersecurity services provides numerous advantages for your
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
                <h3 className="text-xl font-bold mb-3 text-primary">Reduced Downtime</h3>
                <p>
                  Proactive maintenance prevents system failures and minimizes disruptions to your business operations.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Enhanced Security</h3>
                <p>
                  Comprehensive protection against cyber threats safeguards your sensitive business data and customer
                  information.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Regulatory Compliance</h3>
                <p>Ensure your systems meet industry regulations and standards for data protection and security.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Cost Efficiency</h3>
                <p>
                  Prevent expensive emergency repairs and security breaches through regular maintenance and proactive
                  security measures.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Business Continuity</h3>
                <p>
                  Maintain operations even in the face of technical issues or security incidents with proper backup and
                  recovery systems.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Peace of Mind</h3>
                <p>
                  Confidence that your IT systems are properly maintained, secured, and protected by experienced
                  professionals.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Secure and Maintain Your IT Systems?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our maintenance and cybersecurity services can protect your business and
                keep your systems running smoothly.
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

