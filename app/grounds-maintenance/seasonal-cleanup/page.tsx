"use client"

import Link from "next/link"
import { Wind, Leaf, Sun, Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function SeasonalCleanup() {
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
        title="Seasonal Cleanup"
        description="Thorough cleanup services for every season"
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
              <h2 className="text-3xl font-bold mb-6">Professional Seasonal Cleanup Services</h2>
              <p className="text-lg text-muted-foreground">
                Our seasonal cleanup services prepare your property for each new season with thorough maintenance and
                debris removal. We ensure your grounds remain attractive, safe, and well-maintained throughout the
                changing seasons.
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
                      <Sun className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Spring Cleanup</CardTitle>
                    <CardDescription>Post-winter rejuvenation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Comprehensive spring cleanup to remove winter debris, prepare beds, and revitalize your landscape
                      after the cold season.
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
                    <CardTitle>Fall Cleanup</CardTitle>
                    <CardDescription>Leaf and debris removal</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Thorough fall cleanup services to remove leaves, prepare plants for winter, and maintain a neat
                      appearance during autumn.
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
                    <CardTitle>Winter Preparation</CardTitle>
                    <CardDescription>Cold weather readiness</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Winter preparation services to protect plants, clear drainage systems, and ensure your property is
                      ready for cold weather.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Wind className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Storm Cleanup</CardTitle>
                    <CardDescription>Weather event recovery</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Prompt cleanup services after storms and severe weather to remove debris and restore your
                      property's appearance and safety.
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
                Our Seasonal Cleanup Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Spring Cleanup</CardTitle>
                      <CardDescription>Post-winter landscape rejuvenation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Winter debris removal and property cleanup</li>
                        <li>Bed cleaning and preparation for new growth</li>
                        <li>Mulch refreshing and application</li>
                        <li>Early season pruning and trimming</li>
                        <li>Lawn dethatching and aeration</li>
                      </ul>
                      <p className="mt-4">
                        Our spring cleanup services revitalize your landscape after winter, preparing it for the growing
                        season with thorough maintenance and debris removal.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Fall Cleanup</CardTitle>
                      <CardDescription>Autumn maintenance and preparation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Comprehensive leaf removal and collection</li>
                        <li>Perennial cutback and bed cleanup</li>
                        <li>Gutter cleaning and drainage maintenance</li>
                        <li>Final mowing and lawn preparation</li>
                        <li>Plant protection for winter</li>
                      </ul>
                      <p className="mt-4">
                        Our fall cleanup services prepare your property for winter by removing leaves and debris,
                        protecting plants, and ensuring proper drainage before cold weather arrives.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Winter Preparation</CardTitle>
                      <CardDescription>Cold weather readiness services</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Anti-desiccant application for evergreens</li>
                        <li>Burlap wrapping for sensitive plants</li>
                        <li>Drainage system clearing and preparation</li>
                        <li>Snow plow marker installation</li>
                        <li>Winter equipment preparation</li>
                      </ul>
                      <p className="mt-4">
                        Our winter preparation services protect your landscape investments during cold weather and
                        prepare your property for snow and ice management.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Storm Cleanup & Emergency Services</CardTitle>
                      <CardDescription>Weather event recovery</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Fallen branch and debris removal</li>
                        <li>Minor tree damage cleanup</li>
                        <li>Property assessment after severe weather</li>
                        <li>Drainage clearing and flood mitigation</li>
                        <li>Emergency response services</li>
                      </ul>
                      <p className="mt-4">
                        Our storm cleanup services provide prompt response after weather events to restore your
                        property's safety and appearance with efficient debris removal and damage mitigation.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Seasonal Cleanup</h2>
              <p className="text-lg text-muted-foreground">
                Investing in professional seasonal cleanup services provides numerous advantages for your property.
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
                <h3 className="text-xl font-bold mb-3 text-primary">Year-Round Appeal</h3>
                <p>
                  Maintain an attractive property appearance throughout all seasons with timely cleanup and preparation.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Plant Health Protection</h3>
                <p>
                  Proper seasonal maintenance protects your landscape investments and promotes healthy growth in the
                  following season.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Pest Prevention</h3>
                <p>
                  Regular cleanup reduces habitat for pests and diseases that can damage your landscape and property.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Safety Enhancement</h3>
                <p>Debris removal and proper maintenance reduce slip, trip, and fall hazards on your property.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Drainage Protection</h3>
                <p>
                  Seasonal cleanup prevents clogged drainage systems that can lead to water damage and property issues.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Time & Equipment Savings</h3>
                <p>
                  Professional services save you time and eliminate the need for seasonal equipment purchases and
                  maintenance.
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
              <h2 className="text-3xl font-bold mb-4">Ready for Professional Seasonal Cleanup?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our seasonal cleanup services can maintain your property's appearance
                and health throughout the year.
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

