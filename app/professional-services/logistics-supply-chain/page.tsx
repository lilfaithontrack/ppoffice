"use client"

import Link from "next/link"
import { Truck, BarChart, Package, Warehouse } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function LogisticsSupplyChain() {
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
        title="Logistics & Supply Chain"
        description="Efficient logistics and supply chain management"
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
              <h2 className="text-3xl font-bold mb-6">Professional Logistics & Supply Chain Services</h2>
              <p className="text-lg text-muted-foreground">
                Our logistics and supply chain services optimize your operations for efficiency and cost-effectiveness.
                We provide comprehensive solutions for inventory management, transportation planning, and supply chain
                optimization to streamline your business processes.
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
                      <Package className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Inventory Management</CardTitle>
                    <CardDescription>Optimized stock control</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Comprehensive inventory management solutions to optimize stock levels, reduce waste, and ensure
                      product availability.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Truck className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Transportation Planning</CardTitle>
                    <CardDescription>Efficient delivery solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Strategic transportation planning to optimize routes, reduce costs, and ensure timely delivery of
                      goods.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Warehouse className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Warehouse Management</CardTitle>
                    <CardDescription>Storage optimization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Efficient warehouse management solutions to maximize space utilization, improve picking
                      efficiency, and reduce handling costs.
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
                    <CardTitle>Supply Chain Analytics</CardTitle>
                    <CardDescription>Data-driven optimization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Advanced analytics and reporting to identify inefficiencies, forecast demand, and optimize your
                      entire supply chain.
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
                Our Logistics & Supply Chain Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Inventory Management & Optimization</CardTitle>
                      <CardDescription>Strategic stock control solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Inventory level optimization</li>
                        <li>Stock forecasting and planning</li>
                        <li>Inventory tracking systems</li>
                        <li>Cycle counting and physical inventory</li>
                        <li>Obsolete inventory management</li>
                      </ul>
                      <p className="mt-4">
                        Our inventory management services help you maintain optimal stock levels, reduce carrying costs,
                        and ensure product availability when needed.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Transportation & Distribution</CardTitle>
                      <CardDescription>Efficient delivery solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Route optimization and planning</li>
                        <li>Carrier selection and management</li>
                        <li>Freight consolidation</li>
                        <li>Last-mile delivery solutions</li>
                        <li>Transportation cost analysis</li>
                      </ul>
                      <p className="mt-4">
                        Our transportation services optimize your delivery operations for efficiency, reliability, and
                        cost-effectiveness across your distribution network.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Warehouse & Fulfillment</CardTitle>
                      <CardDescription>Storage and distribution optimization</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Warehouse layout optimization</li>
                        <li>Picking and packing efficiency</li>
                        <li>Cross-docking operations</li>
                        <li>Inventory slotting strategies</li>
                        <li>Order fulfillment management</li>
                      </ul>
                      <p className="mt-4">
                        Our warehouse management solutions maximize space utilization, improve operational efficiency,
                        and reduce handling costs in your storage facilities.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Supply Chain Consulting & Analytics</CardTitle>
                      <CardDescription>Strategic supply chain optimization</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Supply chain network design</li>
                        <li>Process improvement consulting</li>
                        <li>Performance metrics and KPIs</li>
                        <li>Demand forecasting and planning</li>
                        <li>Supply chain risk management</li>
                      </ul>
                      <p className="mt-4">
                        Our consulting and analytics services identify opportunities for improvement across your entire
                        supply chain, driving efficiency and reducing costs.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Logistics & Supply Chain Management</h2>
              <p className="text-lg text-muted-foreground">
                Optimizing your logistics and supply chain operations provides numerous advantages for your business.
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
                <h3 className="text-xl font-bold mb-3 text-primary">Cost Reduction</h3>
                <p>
                  Optimize transportation, inventory, and warehousing costs through efficient processes and strategic
                  planning.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Improved Customer Service</h3>
                <p>Enhance customer satisfaction with reliable delivery, product availability, and order accuracy.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Increased Efficiency</h3>
                <p>Streamline operations with optimized processes, reduced waste, and improved resource utilization.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Better Visibility</h3>
                <p>
                  Gain comprehensive insight into your supply chain with advanced tracking, reporting, and analytics.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Risk Mitigation</h3>
                <p>Identify and address potential supply chain disruptions before they impact your operations.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Scalability</h3>
                <p>
                  Develop flexible supply chain solutions that can adapt and grow with your changing business needs.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Supply Chain?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our logistics and supply chain services can improve efficiency and
                reduce costs for your business.
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
                  <Link href="/professional-services">Explore More Professional Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

