"use client"

import Link from "next/link"
import { Lightbulb, Wrench, Plug, Droplet } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function FixtureInstallation() {
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
        title="Fixture Installation"
        description="Professional installation of fixtures and equipment"
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
              <h2 className="text-3xl font-bold mb-6">Professional Fixture Installation Services</h2>
              <p className="text-lg text-muted-foreground">
                Our fixture installation services provide expert installation of lighting, plumbing, and other fixtures
                for your facility. We ensure proper installation, functionality, and appearance with minimal disruption
                to your operations.
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
                      <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Lighting Fixtures</CardTitle>
                    <CardDescription>Illumination solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Professional installation of various lighting fixtures, from ceiling lights to task lighting and
                      decorative elements.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Droplet className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Plumbing Fixtures</CardTitle>
                    <CardDescription>Water-related installations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Expert installation of sinks, faucets, toilets, and other plumbing fixtures with proper
                      connections and sealing.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Plug className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Electrical Fixtures</CardTitle>
                    <CardDescription>Power-related installations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Safe installation of outlets, switches, ceiling fans, and other electrical fixtures with proper
                      wiring and connections.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Wrench className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Specialty Fixtures</CardTitle>
                    <CardDescription>Custom installation solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Installation of specialty fixtures such as ADA-compliant equipment, security fixtures, and custom
                      solutions.
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
                Our Fixture Installation Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Lighting Fixture Installation</CardTitle>
                      <CardDescription>Comprehensive illumination solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Ceiling light fixture installation</li>
                        <li>Wall sconce and accent lighting</li>
                        <li>Task and under-cabinet lighting</li>
                        <li>Exterior and security lighting</li>
                        <li>LED retrofitting and upgrades</li>
                      </ul>
                      <p className="mt-4">
                        Our lighting installation services ensure proper illumination throughout your facility with
                        fixtures that enhance both functionality and appearance.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Plumbing Fixture Installation</CardTitle>
                      <CardDescription>Water fixture solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Sink and faucet installation</li>
                        <li>Toilet and urinal replacement</li>
                        <li>Water fountain installation</li>
                        <li>Shower and bathroom fixture updates</li>
                        <li>Water-efficient fixture upgrades</li>
                      </ul>
                      <p className="mt-4">
                        Our plumbing fixture installation services provide leak-free, properly functioning water
                        fixtures with professional finishing and sealing.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Electrical Fixture Installation</CardTitle>
                      <CardDescription>Power-related installations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Outlet and switch installation</li>
                        <li>Ceiling fan mounting and wiring</li>
                        <li>GFCI installation in wet areas</li>
                        <li>USB and specialty outlet upgrades</li>
                        <li>Smart fixture integration</li>
                      </ul>
                      <p className="mt-4">
                        Our electrical fixture installation services ensure safe, code-compliant electrical connections
                        with proper mounting and finishing.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Specialty & Commercial Fixtures</CardTitle>
                      <CardDescription>Custom and specialized installations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>ADA-compliant fixture installation</li>
                        <li>Security fixture mounting</li>
                        <li>Commercial bathroom accessories</li>
                        <li>Hand dryer and sanitizer dispenser installation</li>
                        <li>Signage and wayfinding fixture mounting</li>
                      </ul>
                      <p className="mt-4">
                        Our specialty fixture installation services address unique requirements with proper mounting
                        techniques and attention to compliance standards.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Fixture Installation</h2>
              <p className="text-lg text-muted-foreground">
                Utilizing our professional fixture installation services provides numerous advantages for your facility.
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
                <h3 className="text-xl font-bold mb-3 text-primary">Proper Functionality</h3>
                <p>
                  Professional installation ensures fixtures work correctly from the start, reducing callbacks and
                  operational issues.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Code Compliance</h3>
                <p>
                  Our installations meet all relevant building codes and safety standards, preventing compliance issues.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Professional Appearance</h3>
                <p>
                  Expert installation ensures fixtures are level, properly aligned, and finished with attention to
                  aesthetic details.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Warranty Protection</h3>
                <p>
                  Professional installation maintains manufacturer warranties that might be voided by improper DIY
                  installation.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Time Efficiency</h3>
                <p>
                  Our experienced installers complete projects quickly and correctly, minimizing disruption to your
                  operations.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Problem Prevention</h3>
                <p>
                  Professional installation prevents future issues like leaks, electrical problems, or fixture failures
                  due to improper mounting.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Facility's Fixtures?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our fixture installation services can improve your facility's
                functionality and appearance.
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

