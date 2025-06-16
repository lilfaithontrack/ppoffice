"use client"

import Link from "next/link"
import { ArrowRight, Network, Cloud, Headphones, Activity, Shield, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function ITSolutions() {
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

  const services = [
    {
      title: "Network Support",
      description: "Comprehensive network infrastructure support and maintenance",
      icon: Network,
      href: "/it-solutions/network-support",
    },
    {
      title: "Cloud Solutions",
      description: "Secure and scalable cloud computing services",
      icon: Cloud,
      href: "/it-solutions/cloud-solutions",
    },
    {
      title: "Technical Support",
      description: "Expert technical assistance for all your IT needs",
      icon: Headphones,
      href: "/it-solutions/technical-support",
    },
    {
      title: "Network Management",
      description: "Comprehensive network management solutions",
      icon: Activity,
      href: "/it-solutions/network-management",
    },
    {
      title: "Installation & Security",
      description: "Secure setup and implementation of IT systems",
      icon: Shield,
      href: "/it-solutions/security",
    },
    {
      title: "Maintenance & Cybersecurity",
      description: "Ongoing IT maintenance and advanced protection",
      icon: Lock,
      href: "/it-solutions/maintenance-cybersecurity",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title="IT Solutions"
        description="Comprehensive IT services for modern businesses"
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
              <h2 className="text-3xl font-bold mb-6">Our IT Solutions</h2>
              <p className="text-lg text-muted-foreground">
                Power Platform Office provides comprehensive IT solutions to help businesses leverage technology for
                growth and efficiency. Our expert team delivers reliable services tailored to your specific needs.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                  <Card className="h-full">
                    <CardHeader className="text-center">
                      <div className="mx-auto bg-black/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <service.icon className="h-8 w-8 text-black" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                      <Button asChild variant="outline">
                        <Link href={service.href} className="flex items-center">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
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
                Why Choose Our IT Solutions
              </motion.h2>

              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Expert Technical Team</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Our certified IT professionals bring years of experience and specialized knowledge to every
                        project, ensuring high-quality solutions tailored to your specific needs.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Comprehensive Service Range</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        From network support to cybersecurity, our wide range of services allows us to be your single
                        point of contact for all IT needs, simplifying management and support.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Proactive Approach</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        We don't just fix problems—we prevent them. Our proactive monitoring and maintenance services
                        identify and address potential issues before they impact your business.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Scalable Solutions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Our IT solutions grow with your business, providing the flexibility to adapt to changing needs
                        without requiring complete system overhauls or migrations.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our IT solutions can help your business thrive in the digital landscape.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

