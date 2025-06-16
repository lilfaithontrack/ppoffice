"use client"

import Link from "next/link"
import { Truck, Clock, MapPin, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function CourierDelivery() {
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
        title="Courier & Delivery"
        description="Reliable on-site delivery and logistics services"
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
              <h2 className="text-3xl font-bold mb-6">Professional Courier & Delivery Services</h2>
              <p className="text-lg text-muted-foreground">
                Our courier and delivery services provide reliable, efficient transportation of documents, packages, and
                supplies within your organization and to external locations. We ensure timely deliveries with
                professional handling and complete tracking.
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
                    <CardTitle>On-demand Delivery</CardTitle>
                    <CardDescription>Responsive courier service</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Fast response delivery services for time-sensitive documents and packages within your requested
                      timeframe.
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
                    <CardTitle>Scheduled Routes</CardTitle>
                    <CardDescription>Regular delivery service</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Consistent scheduled deliveries for recurring needs with reliable timing and handling protocols.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Inter-office Transport</CardTitle>
                    <CardDescription>Internal logistics solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Efficient movement of materials between different departments, buildings, or campuses within your
                      organization.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Package className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Special Handling</CardTitle>
                    <CardDescription>Secure item transportation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Specialized delivery for sensitive, confidential, or valuable items requiring extra care and
                      security protocols.
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
                Our Courier & Delivery Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Document Courier Services</CardTitle>
                      <CardDescription>Secure document transportation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Confidential document delivery</li>
                        <li>Legal document handling</li>
                        <li>Inter-departmental mail distribution</li>
                        <li>Report and proposal delivery</li>
                        <li>Contract and agreement courier service</li>
                      </ul>
                      <p className="mt-4">
                        Our document courier services ensure your important papers reach their destination securely and
                        on time, with proper handling protocols for confidential materials.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Package Delivery</CardTitle>
                      <CardDescription>Efficient parcel transportation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Small to medium package delivery</li>
                        <li>Supply distribution</li>
                        <li>Equipment transfer</li>
                        <li>Product sample delivery</li>
                        <li>Gift and promotional item distribution</li>
                      </ul>
                      <p className="mt-4">
                        Our package delivery services handle the transportation of physical items with care, ensuring
                        they arrive in perfect condition at their intended destination.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Scheduled Delivery Routes</CardTitle>
                      <CardDescription>Regular delivery schedules</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Daily mail and package rounds</li>
                        <li>Weekly supply distribution</li>
                        <li>Regular inter-office transfers</li>
                        <li>Scheduled external deliveries</li>
                        <li>Recurring document exchanges</li>
                      </ul>
                      <p className="mt-4">
                        Our scheduled delivery routes provide reliable, consistent service for recurring needs,
                        optimizing efficiency and reducing costs for regular deliveries.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Rush & Priority Delivery</CardTitle>
                      <CardDescription>Expedited delivery solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Same-day urgent delivery</li>
                        <li>Time-sensitive document transportation</li>
                        <li>Critical package expediting</li>
                        <li>Emergency supply delivery</li>
                        <li>Priority handling protocols</li>
                      </ul>
                      <p className="mt-4">
                        Our rush delivery services provide expedited transportation for time-critical items, ensuring
                        they reach their destination as quickly as possible.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Courier & Delivery Services</h2>
              <p className="text-lg text-muted-foreground">
                Utilizing our professional courier and delivery services provides numerous advantages for your
                organization.
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
                <h3 className="text-xl font-bold mb-3 text-primary">Time Efficiency</h3>
                <p>
                  Free up staff time by outsourcing delivery tasks to dedicated professionals, allowing your team to
                  focus on core responsibilities.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Reliability</h3>
                <p>
                  Ensure consistent, dependable delivery with dedicated courier services that follow established
                  protocols and timeframes.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Security</h3>
                <p>
                  Maintain confidentiality and security with trained professionals handling sensitive documents and
                  valuable items.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Flexibility</h3>
                <p>
                  Adapt to changing delivery needs with on-demand services that can scale up or down based on your
                  requirements.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Cost Control</h3>
                <p>
                  Reduce transportation expenses through optimized routes, shared deliveries, and efficient scheduling
                  practices.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Accountability</h3>
                <p>
                  Track deliveries with complete documentation, confirmation protocols, and chain-of-custody records
                  when needed.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Delivery Needs?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our courier and delivery services can improve efficiency and reliability
                for your organization.
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
                  <Link href="/base-operations">Explore More Base Operations Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

