"use client"

import Link from "next/link"
import { Cloud, Database, Lock, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function CloudSolutions() {
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
        title="Cloud Solutions"
        description="Scalable and secure cloud infrastructure for modern businesses"
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
              <h2 className="text-3xl font-bold mb-6">Enterprise Cloud Solutions</h2>
              <p className="text-lg text-muted-foreground">
                Our cloud solutions provide businesses with flexible, scalable, and secure infrastructure to support
                your digital transformation journey. We help you leverage the power of cloud computing to drive
                innovation and efficiency.
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
                      <Cloud className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle>Cloud Migration</CardTitle>
                    <CardDescription>Seamless transition to the cloud</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We help businesses migrate their existing infrastructure and applications to the cloud with
                      minimal disruption.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-black/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Database className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle>Cloud Infrastructure</CardTitle>
                    <CardDescription>Scalable cloud environments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>We design and implement scalable cloud infrastructure that grows with your business needs.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-black/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Lock className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle>Cloud Security</CardTitle>
                    <CardDescription>Robust security measures</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>We implement comprehensive security protocols to protect your cloud environment and data.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-black/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <BarChart className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle>Cloud Optimization</CardTitle>
                    <CardDescription>Performance and cost optimization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>We help you optimize your cloud resources for maximum performance and cost efficiency.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cloud Platforms Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6">Cloud Platforms We Support</h2>
              <p className="text-lg text-muted-foreground">
                We provide expertise across all major cloud platforms to deliver the right solution for your business
                needs.
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
                className="bg-white p-8 rounded-lg shadow-md text-center"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="mx-auto bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M17 17h-2a2 2 0 0 0-2 2v2H7V4h10Z" />
                    <path d="M20 17V7a2 2 0 0 0-2-2h-1" />
                    <path d="M12 12h8" />
                    <path d="M4 7v14" />
                    <path d="M4 4v3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Microsoft Azure</h3>
                <p className="text-muted-foreground">
                  Comprehensive solutions using Microsoft's cloud platform, including Azure Virtual Machines, Azure App
                  Services, and Azure SQL Database.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-md text-center"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="mx-auto bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-600"
                  >
                    <path d="M4 15V9" />
                    <path d="M12 4v16" />
                    <path d="m8 4 4 4 4-4" />
                    <path d="M20 15V9" />
                    <path d="M4 9h16" />
                    <path d="M4 15h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Amazon Web Services</h3>
                <p className="text-muted-foreground">
                  Expert implementation of AWS services, including EC2, S3, RDS, and Lambda for scalable and reliable
                  cloud solutions.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-md text-center"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="mx-auto bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m4.93 4.93 4.24 4.24" />
                    <path d="m14.83 9.17 4.24-4.24" />
                    <path d="m14.83 14.83 4.24 4.24" />
                    <path d="m9.17 14.83-4.24 4.24" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Google Cloud Platform</h3>
                <p className="text-muted-foreground">
                  Specialized solutions using Google Cloud services, including Compute Engine, Cloud Storage, and
                  BigQuery for data-driven applications.
                </p>
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Cloud Solutions</h2>
              <p className="text-lg text-muted-foreground">
                Moving to the cloud offers numerous advantages for businesses of all sizes.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-black/5 p-6 rounded-lg flex items-start"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-black/10 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">Cost Efficiency</h3>
                  <p>
                    Reduce capital expenses by eliminating the need for physical hardware and infrastructure
                    maintenance.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-black/5 p-6 rounded-lg flex items-start"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-black/10 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                  >
                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                    <path d="M16 16h5v5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">Scalability</h3>
                  <p>
                    Easily scale resources up or down based on demand, ensuring optimal performance during peak times.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-black/5 p-6 rounded-lg flex items-start"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-black/10 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">Enhanced Security</h3>
                  <p>
                    Benefit from enterprise-grade security measures and regular updates to protect your data and
                    applications.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-black/5 p-6 rounded-lg flex items-start"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-black/10 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                  >
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.83 6.72 2.25" />
                    <path d="M21 3v9h-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">Business Continuity</h3>
                  <p>
                    Ensure your business operations continue smoothly with reliable backup and disaster recovery
                    solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-black/5 p-6 rounded-lg flex items-start"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-black/10 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                  >
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M12 2v2" />
                    <path d="M12 22v-2" />
                    <path d="m17 20.66-1-1.73" />
                    <path d="M11 10.27 7 3.34" />
                    <path d="m20.66 17-1.73-1" />
                    <path d="m3.34 7 1.73 1" />
                    <path d="M14 12h8" />
                    <path d="M2 12h2" />
                    <path d="m20.66 7-1.73 1" />
                    <path d="m3.34 17 1.73-1" />
                    <path d="m17 3.34-1 1.73" />
                    <path d="m7 20.66 1-1.73" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">Global Accessibility</h3>
                  <p>
                    Access your applications and data from anywhere in the world, enabling remote work and global
                    operations.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-black/5 p-6 rounded-lg flex items-start"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-black/10 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                  >
                    <path d="M12.5 3h5v5" />
                    <path d="m17.5 3-6.5 6.5" />
                    <path d="M19.5 10v4c0 4-2 6-6 6h-3c-4 0-6-2-6-6v-3c0-4 2-6 6-6h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">Innovation Enablement</h3>
                  <p>
                    Leverage advanced cloud services to drive innovation and stay ahead of the competition in your
                    industry.
                  </p>
                </div>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with Cloud Solutions?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our cloud services can help your business achieve greater flexibility,
                security, and efficiency.
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

