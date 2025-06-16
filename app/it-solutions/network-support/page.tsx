"use client"

import Link from "next/link"
import { Network, Server, Wifi, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function NetworkSupport() {
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
        title="Network Support"
        description="Comprehensive network infrastructure support for your business"
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
              <h2 className="text-3xl font-bold mb-6">Professional Network Support Services</h2>
              <p className="text-lg text-muted-foreground">
                Our network support services ensure your business stays connected with reliable and secure network
                infrastructure. We provide comprehensive solutions to keep your network running smoothly and securely.
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
                      <Network className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle>Network Design</CardTitle>
                    <CardDescription>Custom network architecture design</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We design scalable network architectures tailored to your business needs, ensuring optimal
                      performance and security.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-black/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Server className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle>Infrastructure Support</CardTitle>
                    <CardDescription>Comprehensive hardware support</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our team provides expert support for all network hardware, including routers, switches, and access
                      points.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-black/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Wifi className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle>Wireless Solutions</CardTitle>
                    <CardDescription>Reliable wireless connectivity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We implement and maintain high-performance wireless networks with optimal coverage and security.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-black/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Shield className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle>Network Security</CardTitle>
                    <CardDescription>Advanced security protocols</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We implement robust security measures to protect your network from threats and unauthorized
                      access.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Detailed Services Section */}
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
                Our Network Support Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Network Assessment and Optimization</CardTitle>
                      <CardDescription>Comprehensive evaluation of your network infrastructure</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Complete network infrastructure assessment</li>
                        <li>Performance bottleneck identification</li>
                        <li>Optimization recommendations</li>
                        <li>Network documentation and diagramming</li>
                        <li>Bandwidth utilization analysis</li>
                      </ul>
                      <p className="mt-4">
                        Our network assessment services help identify issues and optimize your network for peak
                        performance, ensuring your business operations run smoothly without interruptions.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Network Monitoring and Maintenance</CardTitle>
                      <CardDescription>Proactive monitoring and regular maintenance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>24/7 network monitoring</li>
                        <li>Real-time alert notifications</li>
                        <li>Regular maintenance and updates</li>
                        <li>Performance reporting</li>
                        <li>Preventative issue resolution</li>
                      </ul>
                      <p className="mt-4">
                        We provide continuous monitoring of your network to detect and address issues before they impact
                        your business, ensuring maximum uptime and reliability.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Network Security Implementation</CardTitle>
                      <CardDescription>Comprehensive security solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Firewall configuration and management</li>
                        <li>VPN implementation</li>
                        <li>Intrusion detection and prevention</li>
                        <li>Security policy development</li>
                        <li>Vulnerability assessments</li>
                      </ul>
                      <p className="mt-4">
                        Our security experts implement robust measures to protect your network from external threats and
                        unauthorized access, safeguarding your valuable business data.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Our Network Support</h2>
              <p className="text-lg text-muted-foreground">
                Partner with us for comprehensive network support and experience these key advantages for your business.
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
                <h3 className="text-xl font-bold mb-3 text-black">Increased Reliability</h3>
                <p>
                  Minimize downtime with proactive monitoring and maintenance, ensuring your network is always available
                  when you need it.
                </p>
              </motion.div>

              <motion.div
                className="bg-black/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-black">Enhanced Security</h3>
                <p>
                  Protect your business data with advanced security measures designed to prevent unauthorized access and
                  cyber threats.
                </p>
              </motion.div>

              <motion.div
                className="bg-black/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-black">Improved Performance</h3>
                <p>
                  Optimize your network for peak performance, ensuring fast and reliable connectivity for all your
                  business applications.
                </p>
              </motion.div>

              <motion.div
                className="bg-black/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-black">Cost Efficiency</h3>
                <p>
                  Reduce IT costs with preventative maintenance that addresses issues before they become expensive
                  problems.
                </p>
              </motion.div>

              <motion.div
                className="bg-black/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-black">Scalability</h3>
                <p>
                  Easily scale your network as your business grows, with infrastructure designed to accommodate future
                  expansion.
                </p>
              </motion.div>

              <motion.div
                className="bg-black/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-black">Expert Support</h3>
                <p>
                  Access to our team of certified network professionals who provide timely assistance and technical
                  expertise.
                </p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Network Infrastructure?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our network support services can help improve your business connectivity
                and security.
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

