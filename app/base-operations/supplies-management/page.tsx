"use client"

import Link from "next/link"
import { Package, Truck, ClipboardList, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function SuppliesManagement() {
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
        title="Supplies Management"
        description="Efficient inventory and supplies management solutions"
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
              <h2 className="text-3xl font-bold mb-6">Professional Supplies Management Services</h2>
              <p className="text-lg text-muted-foreground">
                Our supplies management services streamline your inventory processes, reduce costs, and ensure you
                always have the right supplies when you need them. We provide comprehensive solutions for procurement,
                inventory control, and distribution management.
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
                      Comprehensive inventory tracking and management to ensure optimal stock levels and minimize waste.
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
                    <CardTitle>Procurement Services</CardTitle>
                    <CardDescription>Strategic purchasing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Efficient procurement processes to source quality supplies at competitive prices with reliable
                      delivery.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <ClipboardList className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Order Management</CardTitle>
                    <CardDescription>Streamlined requisitions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Simplified order processing systems to track requests, approvals, and deliveries with complete
                      transparency.
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
                    <CardTitle>Usage Analysis</CardTitle>
                    <CardDescription>Data-driven insights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Detailed reporting and analysis of supply usage patterns to identify cost-saving opportunities and
                      optimize budgets.
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
                Our Supplies Management Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Inventory Control & Management</CardTitle>
                      <CardDescription>Optimized stock levels and organization</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Inventory tracking and management systems</li>
                        <li>Stock level optimization and par level setting</li>
                        <li>Barcode and RFID inventory solutions</li>
                        <li>Storage organization and space optimization</li>
                        <li>Inventory auditing and reconciliation</li>
                      </ul>
                      <p className="mt-4">
                        Our inventory management services ensure you maintain optimal stock levels, reduce waste, and
                        always have essential supplies available when needed.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Procurement & Vendor Management</CardTitle>
                      <CardDescription>Strategic purchasing and supplier relations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Strategic sourcing and vendor selection</li>
                        <li>Contract negotiation and management</li>
                        <li>Purchase order processing</li>
                        <li>Vendor performance evaluation</li>
                        <li>Cost analysis and budget optimization</li>
                      </ul>
                      <p className="mt-4">
                        Our procurement services help you source quality supplies at competitive prices while building
                        reliable vendor relationships for consistent delivery.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Distribution & Logistics</CardTitle>
                      <CardDescription>Efficient supply delivery and allocation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Internal distribution systems</li>
                        <li>Just-in-time delivery coordination</li>
                        <li>Department allocation tracking</li>
                        <li>Supply chain optimization</li>
                        <li>Emergency supply protocols</li>
                      </ul>
                      <p className="mt-4">
                        Our distribution services ensure supplies reach the right departments at the right time,
                        minimizing disruptions and maintaining operational efficiency.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Reporting & Analytics</CardTitle>
                      <CardDescription>Data-driven supply management</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Usage pattern analysis</li>
                        <li>Cost tracking and budget reporting</li>
                        <li>Inventory turnover analysis</li>
                        <li>Waste reduction metrics</li>
                        <li>Custom reporting dashboards</li>
                      </ul>
                      <p className="mt-4">
                        Our analytics services provide valuable insights into your supply usage patterns, helping
                        identify cost-saving opportunities and optimize your supply management processes.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Supplies Management</h2>
              <p className="text-lg text-muted-foreground">
                Implementing professional supplies management services provides numerous advantages for your
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
                <h3 className="text-xl font-bold mb-3 text-primary">Cost Reduction</h3>
                <p>
                  Optimize purchasing, reduce waste, and negotiate better vendor terms to significantly lower your
                  supply expenses.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Improved Efficiency</h3>
                <p>
                  Streamlined processes for ordering, receiving, and distributing supplies save time and reduce
                  administrative burden.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Reduced Stockouts</h3>
                <p>
                  Maintain optimal inventory levels to prevent disruptions caused by unavailable supplies and materials.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Better Cash Flow</h3>
                <p>
                  Avoid tying up capital in excess inventory while ensuring you have what you need when you need it.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Data-Driven Decisions</h3>
                <p>
                  Leverage analytics to make informed decisions about purchasing, usage patterns, and budget allocation.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Scalability</h3>
                <p>Easily adapt your supply management processes as your organization grows or needs change.</p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Supplies Management?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our supplies management services can reduce costs and improve efficiency
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

