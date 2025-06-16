"use client"

import Link from "next/link"
import { Headphones, MessageCircle, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function TechnicalSupport() {
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
        title="Technical Support"
        description="Expert technical assistance for all your IT needs"
        backgroundImage="/slide-1.jpg?height=400&width=1920"
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
              <h2 className="text-3xl font-bold mb-6">Professional Technical Support Services</h2>
              <p className="text-lg text-muted-foreground">
                Our technical support team provides prompt and effective solutions to keep your IT systems running
                smoothly. We offer comprehensive support for hardware, software, and network issues to minimize downtime
                and maximize productivity.
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
                    <div className="mx-auto bg-black/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Headphones className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle>Help Desk Support</CardTitle>
                    <CardDescription>Responsive assistance for daily IT issues</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our help desk team provides immediate assistance for everyday technical issues, ensuring minimal
                      disruption to your workflow.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-black/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <MessageCircle className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle>Remote Support</CardTitle>
                    <CardDescription>Quick resolution without on-site visits</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our remote support capabilities allow us to diagnose and resolve many issues without the need for
                      time-consuming on-site visits.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-black/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Clock className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle>24/7 Emergency Support</CardTitle>
                    <CardDescription>Round-the-clock assistance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our emergency support team is available 24/7 to address critical issues that require immediate
                      attention.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-black/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle>On-Site Support</CardTitle>
                    <CardDescription>In-person technical assistance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      For complex issues that require hands-on attention, our technicians provide professional on-site
                      support at your location.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Support Tiers Section */}
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
                Our Support Tiers
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic Support</CardTitle>
                      <CardDescription>Essential support for small businesses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Business hours help desk support (8am-6pm)</li>
                        <li>Email and phone support</li>
                        <li>Remote troubleshooting</li>
                        <li>Basic hardware and software support</li>
                        <li>Monthly system health checks</li>
                      </ul>
                      <p className="mt-4">
                        Our Basic Support package provides essential technical assistance for small businesses with
                        straightforward IT needs.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Professional Support</CardTitle>
                      <CardDescription>Comprehensive support for growing businesses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Extended hours support (7am-8pm)</li>
                        <li>Priority response times</li>
                        <li>Unlimited remote support</li>
                        <li>Quarterly on-site visits</li>
                        <li>Network and server monitoring</li>
                        <li>Software update management</li>
                      </ul>
                      <p className="mt-4">
                        Our Professional Support package is designed for growing businesses that require more
                        comprehensive technical assistance and proactive maintenance.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise Support</CardTitle>
                      <CardDescription>Premium support for complex IT environments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>24/7 support coverage</li>
                        <li>Dedicated support team</li>
                        <li>Guaranteed response times</li>
                        <li>Unlimited on-site support</li>
                        <li>Comprehensive system monitoring</li>
                        <li>Strategic IT planning and consulting</li>
                        <li>Disaster recovery planning</li>
                      </ul>
                      <p className="mt-4">
                        Our Enterprise Support package provides the highest level of technical assistance for
                        organizations with complex IT environments and mission-critical systems.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Our Technical Support</h2>
              <p className="text-lg text-muted-foreground">
                Our technical support services provide numerous advantages for your business operations.
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
                className="bg-black/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-black">Minimized Downtime</h3>
                <p>
                  Quick resolution of technical issues ensures minimal disruption to your business operations and
                  productivity.
                </p>
              </motion.div>

              <motion.div
                className="bg-black/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-black">Expert Assistance</h3>
                <p>
                  Access to skilled technicians with extensive knowledge across various hardware, software, and network
                  technologies.
                </p>
              </motion.div>

              <motion.div
                className="bg-black/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-black">Cost Efficiency</h3>
                <p>
                  Reduce the need for in-house IT staff while still maintaining comprehensive technical support
                  coverage.
                </p>
              </motion.div>

              <motion.div
                className="bg-black/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-black">Proactive Maintenance</h3>
                <p>Regular system checks and updates to prevent issues before they impact your business operations.</p>
              </motion.div>

              <motion.div
                className="bg-black/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-black">Scalable Solutions</h3>
                <p>Support services that can grow and adapt as your business and technology needs evolve.</p>
              </motion.div>

              <motion.div
                className="bg-black/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-black">Peace of Mind</h3>
                <p>Confidence that your IT systems are being monitored and maintained by experienced professionals.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Get Expert Technical Support?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our technical support services can help keep your IT systems running
                smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black"
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

