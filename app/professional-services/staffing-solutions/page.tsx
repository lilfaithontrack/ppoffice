"use client"

import Link from "next/link"
import { Users, Briefcase, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function StaffingSolutions() {
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
        title="Staffing Solutions"
        description="Professional staffing and recruitment services"
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
              <h2 className="text-3xl font-bold mb-6">Professional Staffing Solutions</h2>
              <p className="text-lg text-muted-foreground">
                Our staffing solutions help you find the right talent for your organization, from temporary to permanent
                positions. We provide comprehensive recruitment and staffing services to meet your workforce needs with
                qualified professionals.
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
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>IT Staffing</CardTitle>
                    <CardDescription>Technology professionals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Specialized recruitment of IT professionals including developers, network engineers, cybersecurity
                      experts, and support staff.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Briefcase className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Administrative Staffing</CardTitle>
                    <CardDescription>Office support personnel</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Recruitment of administrative professionals including executive assistants, office managers,
                      receptionists, and clerical staff.
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
                    <CardTitle>Temporary Staffing</CardTitle>
                    <CardDescription>Flexible workforce solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Temporary staffing services for project-based needs, seasonal demands, and interim positions
                      across various departments.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Executive Search</CardTitle>
                    <CardDescription>Leadership recruitment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Specialized recruitment of executive and leadership positions with comprehensive candidate
                      assessment and selection.
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
                Our Staffing Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>IT & Technical Staffing</CardTitle>
                      <CardDescription>Technology talent solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Software developers and programmers</li>
                        <li>Network engineers and administrators</li>
                        <li>Cybersecurity specialists</li>
                        <li>Database administrators</li>
                        <li>IT support and help desk professionals</li>
                      </ul>
                      <p className="mt-4">
                        Our IT staffing services connect you with qualified technology professionals who have the
                        specific skills and experience needed for your projects and ongoing operations.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Administrative & Office Staffing</CardTitle>
                      <CardDescription>Office support personnel</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Executive assistants and administrative assistants</li>
                        <li>Office managers and coordinators</li>
                        <li>Receptionists and front desk staff</li>
                        <li>Data entry specialists</li>
                        <li>Customer service representatives</li>
                      </ul>
                      <p className="mt-4">
                        Our administrative staffing services provide skilled office professionals who maintain efficient
                        operations and provide essential support to your organization.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Flexible Staffing Options</CardTitle>
                      <CardDescription>Customized employment arrangements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Temporary staffing for short-term needs</li>
                        <li>Temp-to-hire arrangements</li>
                        <li>Direct placement for permanent positions</li>
                        <li>Project-based staffing</li>
                        <li>Seasonal workforce solutions</li>
                      </ul>
                      <p className="mt-4">
                        Our flexible staffing options provide various employment arrangements to meet your specific
                        workforce needs, timeline, and budget requirements.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Executive & Professional Search</CardTitle>
                      <CardDescription>Leadership talent acquisition</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>C-suite and executive recruitment</li>
                        <li>Department directors and managers</li>
                        <li>Specialized professional roles</li>
                        <li>Confidential search services</li>
                        <li>Comprehensive candidate assessment</li>
                      </ul>
                      <p className="mt-4">
                        Our executive search services identify and recruit top-tier leadership talent through a thorough
                        process that evaluates skills, experience, and cultural fit for your organization.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Staffing Solutions</h2>
              <p className="text-lg text-muted-foreground">
                Partnering with our staffing services provides numerous advantages for your organization's workforce
                needs.
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
                  Save valuable time with pre-screened candidates who match your specific requirements and
                  qualifications.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Reduced Hiring Risk</h3>
                <p>Minimize hiring mistakes with thoroughly vetted candidates and flexible employment arrangements.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Workforce Flexibility</h3>
                <p>Adapt quickly to changing business needs with scalable staffing solutions for various timeframes.</p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Cost Control</h3>
                <p>
                  Reduce recruitment costs and overhead expenses associated with the hiring process and employee
                  benefits.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Specialized Expertise</h3>
                <p>
                  Access industry-specific recruitment expertise and networks to find specialized talent for your needs.
                </p>
              </motion.div>

              <motion.div
                className="bg-primary/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">Focus on Core Business</h3>
                <p>Concentrate on your primary operations while we handle the time-consuming recruitment process.</p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Find the Right Talent?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our staffing solutions can help you build the workforce your
                organization needs.
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

