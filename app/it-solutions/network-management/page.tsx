"use client"

import Link from "next/link"
import { Network, Activity, BarChart, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function NetworkManagement() {
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
        title="Network Management"
        description="Comprehensive network management solutions for optimal performance"
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
              <h2 className="text-3xl font-bold mb-6">Professional Network Management Services</h2>
              <p className="text-lg text-muted-foreground">
                Our network management services ensure your business network operates at peak performance with minimal
                downtime. We provide comprehensive monitoring, maintenance, and optimization of your entire network
                infrastructure.
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
                      <Network className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Network Monitoring</CardTitle>
                    <CardDescription>24/7 network surveillance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Continuous monitoring of your network to detect and address issues before they impact your
                      business operations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Activity className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Performance Optimization</CardTitle>
                    <CardDescription>Maximize network efficiency</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Fine-tuning your network configuration to ensure optimal performance and bandwidth utilization.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <BarChart className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Traffic Analysis</CardTitle>
                    <CardDescription>Detailed network insights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Comprehensive analysis of network traffic patterns to identify bottlenecks and optimize resource
                      allocation.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Settings className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Proactive Maintenance</CardTitle>
                    <CardDescription>Preventative network care</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Regular updates, patches, and maintenance to prevent issues and ensure your network remains secure
                      and efficient.
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
                Our Network Management Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Network Infrastructure Management</CardTitle>
                      <CardDescription>Comprehensive oversight of network components</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Router and switch configuration and management</li>
                        <li>Firewall administration</li>
                        <li>VPN setup and maintenance</li>
                        <li>Wireless network optimization</li>
                        <li>Network documentation and diagramming</li>
                      </ul>
                      <p className="mt-4">
                        Our infrastructure management services ensure all components of your network are properly
                        configured, maintained, and documented for optimal performance and troubleshooting.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Network Monitoring and Alerting</CardTitle>
                      <CardDescription>Proactive issue detection and notification</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>24/7 network monitoring</li>
                        <li>Real-time performance metrics</li>
                        <li>Automated alert notifications</li>
                        <li>Bandwidth utilization tracking</li>
                        <li>Device health monitoring</li>
                      </ul>
                      <p className="mt-4">
                        Our monitoring systems continuously track your network's performance and health, alerting our
                        team to potential issues before they impact your business operations.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Network Security Management</CardTitle>
                      <CardDescription>Protecting your network from threats</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Security policy implementation</li>
                        <li>Intrusion detection and prevention</li>
                        <li>Security patch management</li>
                        <li>Vulnerability assessments</li>
                        <li>Access control management</li>
                      </ul>
                      <p className="mt-4">
                        Our security management services protect your network from external threats and unauthorized
                        access, ensuring your business data remains secure.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Network Optimization and Planning</CardTitle>
                      <CardDescription>Strategic network improvements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Performance analysis and optimization</li>
                        <li>Capacity planning</li>
                        <li>Network expansion planning</li>
                        <li>Technology upgrade recommendations</li>
                        <li>Cost optimization strategies</li>
                      </ul>
                      <p className="mt-4">
                        Our optimization services ensure your network can handle current demands while planning for
                        future growth and technological advancements.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Network Management</h2>
              <p className="text-lg text-muted-foreground">
                Entrusting your network management to our team provides numerous advantages for your business.
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
                <h3 className="text-xl font-bold mb-3 text-primary">Improved Reliability</h3>
                <p>Proactive monitoring and maintenance reduce network downtime and ensure consistent performance.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Enhanced Security</h3>
                <p>
                  Comprehensive security measures protect your network from external threats and unauthorized access.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Optimized Performance</h3>
                <p>
                  Fine-tuned network configurations ensure optimal speed, bandwidth utilization, and resource
                  allocation.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Cost Efficiency</h3>
                <p>
                  Prevent expensive emergency repairs and extend the lifespan of your network equipment through proper
                  maintenance.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Scalability</h3>
                <p>
                  Strategic planning ensures your network can grow with your business without major disruptions or
                  redesigns.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Expert Support</h3>
                <p>
                  Access to skilled network professionals who understand the complexities of modern network
                  environments.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Network?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our network management services can improve your business connectivity,
                security, and performance.
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

