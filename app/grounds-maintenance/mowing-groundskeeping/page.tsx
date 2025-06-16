"use client"

import Link from "next/link"
import { Scissors, Sun, Calendar, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function MowingGroundskeeping() {
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
        title="Mowing & Groundskeeping"
        description="Professional landscape maintenance services"
        backgroundImage="/slide-3.jpg?height=400&width=1920"
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
              <h2 className="text-3xl font-bold mb-6">Professional Mowing & Groundskeeping Services</h2>
              <p className="text-lg text-muted-foreground">
                Our mowing and groundskeeping services maintain the appearance and health of your property's landscape.
                We provide comprehensive care to ensure your grounds remain attractive, safe, and well-maintained
                year-round.
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
                      <Scissors className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Lawn Mowing</CardTitle>
                    <CardDescription>Precision grass cutting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Regular professional mowing services to maintain optimal grass height and promote healthy lawn
                      growth.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Sun className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Edging & Trimming</CardTitle>
                    <CardDescription>Detailed border maintenance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Precise edging and trimming around walkways, flower beds, and structures for a polished landscape
                      appearance.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Scheduled Maintenance</CardTitle>
                    <CardDescription>Consistent landscape care</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Regular maintenance schedules tailored to your property's needs and seasonal requirements.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Leaf className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Debris Removal</CardTitle>
                    <CardDescription>Thorough cleanup services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Removal of grass clippings, leaves, and debris to maintain a clean and professional appearance.
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
                Our Mowing & Groundskeeping Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Lawn Care Services</CardTitle>
                      <CardDescription>Comprehensive grass maintenance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Regular mowing at optimal heights for grass type</li>
                        <li>Grass pattern cutting for aesthetic appeal</li>
                        <li>String trimming around obstacles and edges</li>
                        <li>Edging along walkways and driveways</li>
                        <li>Blowing and cleanup of clippings</li>
                        <li>Lawn health assessment</li>
                      </ul>
                      <p className="mt-4">
                        Our lawn care services maintain the health and appearance of your grass areas with precision
                        cutting and attention to detail.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Groundskeeping & Maintenance</CardTitle>
                      <CardDescription>Comprehensive landscape upkeep</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Weed control in beds and paved areas</li>
                        <li>Mulch maintenance and refreshing</li>
                        <li>Shrub and hedge trimming</li>
                        <li>Ground cover maintenance</li>
                        <li>Debris and litter removal</li>
                        <li>Leaf removal and cleanup</li>
                      </ul>
                      <p className="mt-4">
                        Our groundskeeping services address all aspects of landscape maintenance beyond just mowing to
                        ensure a well-maintained property appearance.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Commercial Property Maintenance</CardTitle>
                      <CardDescription>Professional business landscape care</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Tailored maintenance schedules for business properties</li>
                        <li>Early morning or weekend service options</li>
                        <li>Parking lot and entrance area maintenance</li>
                        <li>Common area groundskeeping</li>
                        <li>Property manager coordination</li>
                        <li>Detailed service documentation</li>
                      </ul>
                      <p className="mt-4">
                        Our commercial maintenance services are designed to enhance your business property's appearance
                        while minimizing disruption to your operations.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Seasonal Services</CardTitle>
                      <CardDescription>Year-round landscape maintenance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Spring cleanup and preparation</li>
                        <li>Summer maintenance programs</li>
                        <li>Fall leaf removal and cleanup</li>
                        <li>Winter preparation services</li>
                        <li>Seasonal planting bed maintenance</li>
                        <li>Weather-responsive service scheduling</li>
                      </ul>
                      <p className="mt-4">
                        Our seasonal services adapt to the changing needs of your landscape throughout the year,
                        ensuring appropriate care during each season.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Mowing & Groundskeeping</h2>
              <p className="text-lg text-muted-foreground">
                Investing in professional groundskeeping services provides numerous advantages for your property.
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
                <h3 className="text-xl font-bold mb-3 text-primary">Enhanced Curb Appeal</h3>
                <p>Well-maintained grounds create a positive first impression for visitors, clients, and employees.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Healthier Landscape</h3>
                <p>Regular professional maintenance promotes healthier grass, plants, and trees on your property.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Time Savings</h3>
                <p>
                  Focus on your core business while our professionals handle the time-consuming task of landscape
                  maintenance.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Consistent Appearance</h3>
                <p>
                  Regular scheduled maintenance ensures your property always looks its best, regardless of weather or
                  season.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Property Value Protection</h3>
                <p>Well-maintained grounds help preserve and potentially increase your property's value over time.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Professional Equipment</h3>
                <p>
                  Benefit from commercial-grade equipment and techniques without the investment in purchasing and
                  maintaining them.
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
                Contact us today to discuss how our mowing and groundskeeping services can maintain and improve your
                landscape.
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

