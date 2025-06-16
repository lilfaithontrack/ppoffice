"use client"

import Link from "next/link"
import { Flower, Leaf, Droplets, Shovel } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function GardenMaintenance() {
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
        title="Garden Maintenance"
        description="Expert care for gardens and planted areas"
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
              <h2 className="text-3xl font-bold mb-6">Professional Garden Maintenance Services</h2>
              <p className="text-lg text-muted-foreground">
                Our garden maintenance services provide expert care for all planted areas on your property. From
                seasonal flower beds to ornamental shrubs and trees, we ensure your landscape remains healthy, vibrant,
                and attractive throughout the year.
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
                      <Flower className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Flower Bed Care</CardTitle>
                    <CardDescription>Comprehensive floral maintenance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Expert care for annual and perennial flower beds, including planting, weeding, deadheading, and
                      seasonal rotations.
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
                    <CardTitle>Shrub & Tree Maintenance</CardTitle>
                    <CardDescription>Woody plant care</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Professional pruning, shaping, and care for ornamental shrubs and small trees to maintain health
                      and aesthetic appeal.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Droplets className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Irrigation Management</CardTitle>
                    <CardDescription>Optimal watering solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Efficient irrigation monitoring and management to ensure proper hydration while conserving water
                      resources.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Shovel className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Soil & Mulch Care</CardTitle>
                    <CardDescription>Ground-level maintenance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Comprehensive soil health management, including fertilization, mulching, and soil amendments for
                      optimal plant growth.
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
                Our Garden Maintenance Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Flower Bed & Annual Plantings</CardTitle>
                      <CardDescription>Comprehensive floral area maintenance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Seasonal flower planting and rotation</li>
                        <li>Deadheading and pruning of flowering plants</li>
                        <li>Weed control in planted areas</li>
                        <li>Pest and disease management</li>
                        <li>Bed edging and definition maintenance</li>
                      </ul>
                      <p className="mt-4">
                        Our flower bed maintenance services ensure vibrant, healthy floral displays that enhance your
                        property's appearance throughout the growing season.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Shrub & Ornamental Tree Care</CardTitle>
                      <CardDescription>Woody plant maintenance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Seasonal pruning and shaping</li>
                        <li>Fertilization programs</li>
                        <li>Insect and disease monitoring</li>
                        <li>Rejuvenation pruning for older specimens</li>
                        <li>Root zone management</li>
                      </ul>
                      <p className="mt-4">
                        Our shrub and ornamental tree services maintain the health, shape, and appearance of woody
                        plants while promoting longevity and vigor.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Soil & Nutrition Management</CardTitle>
                      <CardDescription>Ground-level garden care</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Seasonal mulch application and refreshing</li>
                        <li>Soil testing and amendment recommendations</li>
                        <li>Fertilization programs for various plant types</li>
                        <li>Compost integration and organic matter management</li>
                        <li>pH balancing for optimal plant health</li>
                      </ul>
                      <p className="mt-4">
                        Our soil management services create the foundation for healthy plant growth by ensuring proper
                        nutrition, moisture retention, and weed suppression.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Garden Enhancements & Renovations</CardTitle>
                      <CardDescription>Landscape improvements and updates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Garden bed redesign and renovation</li>
                        <li>New planting installations</li>
                        <li>Hardscape integration with planted areas</li>
                        <li>Seasonal color planning and implementation</li>
                        <li>Specialty garden development (butterfly, native, etc.)</li>
                      </ul>
                      <p className="mt-4">
                        Our garden enhancement services revitalize existing planted areas or create new landscape
                        features to improve your property's appearance and functionality.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Garden Maintenance</h2>
              <p className="text-lg text-muted-foreground">
                Investing in professional garden maintenance provides numerous advantages for your property.
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
                <p>
                  Well-maintained gardens create a positive impression and significantly improve your property's overall
                  appearance.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Plant Health & Longevity</h3>
                <p>
                  Professional care ensures your landscape plants remain healthy, reducing replacement costs and
                  maintaining mature specimens.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Seasonal Interest</h3>
                <p>
                  Expert planning and maintenance provide visual interest throughout the year with appropriate seasonal
                  plantings and care.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Pest & Disease Prevention</h3>
                <p>
                  Regular monitoring and early intervention prevent small issues from becoming major problems that
                  damage plants.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Water Conservation</h3>
                <p>
                  Proper soil management and irrigation practices reduce water usage while maintaining plant health and
                  appearance.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Expertise & Efficiency</h3>
                <p>
                  Professional gardeners bring specialized knowledge and efficient techniques that produce superior
                  results compared to DIY approaches.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Property's Gardens?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our garden maintenance services can improve your landscape's appearance
                and health.
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
