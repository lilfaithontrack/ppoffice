"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { motion } from "framer-motion"

export default function AboutUs() {
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
        title="About Us"
        description="Learn more about Power Platform Office and our commitment to excellence"
        backgroundImage="/slider-1.jpg?height=400&width=1920"
      />

      <main className="flex-grow">
        {/* Company Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative"
              >
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="Power Platform Office Headquarters"
                    className="w-full h-auto"
                  />
                </div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <h2 className="text-3xl font-bold mb-6">Education</h2>
                <p className="text-lg mb-4">
                We specialize in serving federal, state, and local government entities—providing end-to-end IT solutions, 
consulting, and hardware to agencies that keep our nation running. Whether it’s robust networking for 
the U.S. Department of Defense or cost-effective devices for county offices, we equip public sector 
teams with the latest technology for increased efficiency, security, and compliance.
                </p>
                <p className="text-lg mb-4">
                 From early childhood classrooms to renowned universities, we support education institutions with 
cutting-edge hardware, intuitive software, and secure platforms. We believe technology is a catalyst for 
learning—offering students and educators the tools they need to innovate, collaborate, and excel in the 
digital age.
                </p>
                <p className="text-lg mb-6">
                  We believe in building long-term partnerships with our clients, understanding their unique needs, and
                  delivering tailored solutions that drive efficiency, reduce costs, and enhance productivity.
                </p>
                <Button asChild>
                  <Link href="/our-team">
                    Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

             
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                  <p className="text-2xl font-bold">15+ Years</p>
                  <p>of Excellence</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Guided by our core values, we strive to deliver exceptional service and build lasting relationships with
                our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-background p-8 rounded-lg shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground mb-4">
                  To provide comprehensive, high-quality business services that enable our clients to focus on their
                  core operations while we handle the essential support functions with expertise and efficiency.
                </p>
                <p className="text-muted-foreground">
                  We are committed to delivering solutions that are tailored to each client's unique needs, ensuring
                  optimal results and exceptional value.
                </p>
              </motion.div>

              <motion.div
                className="bg-background p-8 rounded-lg shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M2 12h5" />
                    <path d="M17 12h5" />
                    <path d="M9 6v12" />
                    <path d="M15 6v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground mb-4">
                  To be the premier provider of integrated business services, recognized for our innovation,
                  reliability, and commitment to excellence in every aspect of our operations.
                </p>
                <p className="text-muted-foreground">
                  We aspire to set the industry standard for service quality and client satisfaction, continuously
                  evolving to meet the changing needs of businesses in a dynamic marketplace.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These principles guide our actions and decisions as we serve our clients and grow our business.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                <h3 className="text-xl font-bold mb-3 text-primary">Excellence</h3>
                <p>
                  We strive for excellence in everything we do, consistently delivering high-quality services that
                  exceed client expectations.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Integrity</h3>
                <p>
                  We conduct our business with the highest level of integrity, maintaining transparency and ethical
                  standards in all our interactions.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Innovation</h3>
                <p>
                  We embrace innovation and continuously seek new ways to improve our services and deliver greater value
                  to our clients.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Collaboration</h3>
                <p>
                  We believe in the power of collaboration, working closely with our clients and partners to achieve
                  shared goals.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our comprehensive services can help streamline your operations and drive
                growth.
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
                  <Link href="/solutions">Explore Our Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

