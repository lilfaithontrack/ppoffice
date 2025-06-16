"use client"

import Link from "next/link"
import { ArrowRight, Scissors, Flower, Wind, Snowflake, Bug } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function GroundsMaintenance() {
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
      title: "Mowing & Groundskeeping",
      description: "Professional landscape maintenance services",
      icon: Scissors,
      href: "/grounds-maintenance/mowing-groundskeeping",
    },
    {
      title: "Garden Maintenance",
      description: "Expert care for gardens and planted areas",
      icon: Flower,
      href: "/grounds-maintenance/garden-maintenance",
    },
    {
      title: "Seasonal Cleanup",
      description: "Thorough cleanup services for every season",
      icon: Wind,
      href: "/grounds-maintenance/seasonal-cleanup",
    },
    {
      title: "Snow Removal",
      description: "Reliable winter snow and ice management",
      icon: Snowflake,
      href: "/grounds-maintenance/snow-removal",
    },
    {
      title: "Pest Control",
      description: "Effective pest prevention and management",
      icon: Bug,
      href: "/grounds-maintenance/pest-control",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title="Grounds Maintenance"
        description="Professional landscape and grounds management services"
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
              <h2 className="text-3xl font-bold mb-6">Our Grounds Maintenance Services</h2>
              <p className="text-lg text-muted-foreground">
                Power Platform Office provides comprehensive grounds maintenance services to ensure your property's
                exterior spaces remain attractive, safe, and well-maintained throughout the year. Our professional team
                delivers reliable landscape care tailored to your specific needs.
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
                      <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <service.icon className="h-8 w-8 text-primary" />
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

        {/* Approach Section */}
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
                Our Approach to Grounds Maintenance
              </motion.h2>

              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Customized Service Plans</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        We develop tailored maintenance programs based on your property's specific needs, landscape
                        features, and usage patterns to ensure optimal care and appearance.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Seasonal Adaptation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Our services adjust throughout the year to address seasonal requirements, from spring cleanup
                        and summer maintenance to fall preparation and winter care.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Professional Equipment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        We use commercial-grade equipment and tools maintained to the highest standards to ensure
                        efficient and effective grounds maintenance services.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Environmentally Responsible</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Our maintenance practices incorporate environmentally conscious methods and products whenever
                        possible to minimize ecological impact.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Grounds Maintenance</h2>
              <p className="text-lg text-muted-foreground">
                Investing in professional grounds maintenance services provides numerous advantages for your property.
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
                <h3 className="text-xl font-bold mb-3 text-primary">Enhanced Property Value</h3>
                <p>
                  Well-maintained grounds significantly contribute to your property's overall value and appeal to
                  visitors and occupants.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Professional Appearance</h3>
                <p>
                  Create a positive first impression with consistently manicured and attractive exterior spaces
                  year-round.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Safety & Accessibility</h3>
                <p>
                  Proper maintenance reduces hazards and ensures safe, accessible grounds for everyone using your
                  property.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Time & Resource Savings</h3>
                <p>
                  Save on equipment purchases, maintenance supplies, and the time required to properly care for your
                  grounds.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Expert Plant Care</h3>
                <p>
                  Benefit from professional knowledge about optimal care for various plants, trees, and landscape
                  features.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Year-Round Coverage</h3>
                <p>
                  Maintain attractive grounds throughout all seasons with services adapted to each season's specific
                  requirements.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Property's Appearance?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our grounds maintenance services can improve your property's appearance,
                safety, and value.
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

