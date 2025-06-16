"use client"

import Link from "next/link"
import { Snowflake, Truck, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function SnowRemoval() {
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
        title="Snow Removal"
        description="Reliable winter snow and ice management"
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
              <h2 className="text-3xl font-bold mb-6">Professional Snow Removal Services</h2>
              <p className="text-lg text-muted-foreground">
                Our snow removal services keep your property accessible and safe during winter weather conditions. We
                provide comprehensive snow and ice management with reliable, timely service to minimize disruption to
                your operations.
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
                      <Truck className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Snow Plowing</CardTitle>
                    <CardDescription>Efficient snow clearing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Professional snow plowing services for parking lots, driveways, and roadways to maintain access
                      during winter weather.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Snowflake className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Ice Management</CardTitle>
                    <CardDescription>Slip hazard prevention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Comprehensive ice control services including deicing applications and preventative treatments to
                      reduce slip hazards.
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
                    <CardTitle>24/7 Winter Service</CardTitle>
                    <CardDescription>Round-the-clock response</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Reliable 24/7 snow and ice management services with prompt response to winter weather events at
                      any hour.
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
                    <CardTitle>Seasonal Contracts</CardTitle>
                    <CardDescription>Reliable winter coverage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Seasonal snow removal contracts providing guaranteed service and priority response throughout the
                      winter season.
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
                Our Snow Removal Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Snow Plowing & Clearing</CardTitle>
                      <CardDescription>Comprehensive snow management</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Parking lot snow plowing and clearing</li>
                        <li>Driveway and roadway snow removal</li>
                        <li>Sidewalk and walkway clearing</li>
                        <li>Snow relocation and hauling</li>
                        <li>Entrance and loading dock clearing</li>
                      </ul>
                      <p className="mt-4">
                        Our snow plowing services maintain access to your property during winter weather with efficient
                        clearing of vehicular and pedestrian areas.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Ice Control & Management</CardTitle>
                      <CardDescription>Slip hazard prevention</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Anti-icing pretreatment applications</li>
                        <li>De-icing salt and chemical application</li>
                        <li>Environmentally friendly ice control options</li>
                        <li>Targeted ice management for high-traffic areas</li>
                        <li>Ongoing monitoring and reapplication as needed</li>
                      </ul>
                      <p className="mt-4">
                        Our ice management services reduce slip hazards and liability concerns with effective treatments
                        before, during, and after winter weather events.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Winter Weather Monitoring</CardTitle>
                      <CardDescription>Proactive storm response</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>24/7 weather condition monitoring</li>
                        <li>Proactive deployment before storm arrival</li>
                        <li>Real-time service updates and communication</li>
                        <li>Post-storm inspections and follow-up service</li>
                        <li>Documentation of services performed</li>
                      </ul>
                      <p className="mt-4">
                        Our weather monitoring ensures timely response to winter storms with proactive service
                        deployment and ongoing communication throughout weather events.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Seasonal Contracts & Custom Plans</CardTitle>
                      <CardDescription>Tailored winter service agreements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Seasonal all-inclusive contracts</li>
                        <li>Per-event service options</li>
                        <li>Custom service plans based on property needs</li>
                        <li>Priority response guarantees</li>
                        <li>Flexible billing and service options</li>
                      </ul>
                      <p className="mt-4">
                        Our contract options provide peace of mind with guaranteed winter weather coverage tailored to
                        your property's specific requirements and budget.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Snow Removal</h2>
              <p className="text-lg text-muted-foreground">
                Investing in professional snow removal services provides numerous advantages for your property during
                winter months.
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
                <h3 className="text-xl font-bold mb-3 text-primary">Safety Enhancement</h3>
                <p>
                  Reduce slip and fall risks for employees, customers, and visitors with properly cleared walkways and
                  parking areas.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Liability Reduction</h3>
                <p>Minimize liability concerns with documented professional snow and ice management services.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Business Continuity</h3>
                <p>
                  Maintain operations during winter weather with reliable access for employees, customers, and
                  deliveries.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Property Protection</h3>
                <p>
                  Prevent damage to pavement, landscaping, and structures with proper snow removal techniques and
                  equipment.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Peace of Mind</h3>
                <p>
                  Eliminate winter weather worries with guaranteed service from professionals who monitor conditions
                  24/7.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Cost Efficiency</h3>
                <p>
                  Save on equipment purchases, maintenance, and labor costs while receiving professional-grade service.
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
              <h2 className="text-3xl font-bold mb-4">Ready for Reliable Winter Weather Management?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our snow removal services can keep your property accessible and safe
                during winter weather.
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

