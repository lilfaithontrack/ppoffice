"use client"

import Link from "next/link"
import { Calendar, Users, Megaphone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function EventManagement() {
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
        title="Event Management"
        description="Comprehensive event planning and execution services"
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
              <h2 className="text-3xl font-bold mb-6">Professional Event Management Services</h2>
              <p className="text-lg text-muted-foreground">
                Our event management services provide comprehensive planning, coordination, and execution for corporate
                and community events. We handle every detail to ensure successful, memorable events that achieve your
                objectives.
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
                    <div className="mx-auto bg-black/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Calendar className="h-8 w-8 text- black" />
                    </div>
                    <CardTitle>Corporate Events</CardTitle>
                    <CardDescription>Business function management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Comprehensive planning and execution of corporate events including conferences, meetings, team
                      building, and company celebrations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-black/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle>Community Events</CardTitle>
                    <CardDescription>Public gathering coordination</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Expert planning and management of community events, public functions, and special occasions for
                      various organizations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-black/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Megaphone className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle>Event Marketing</CardTitle>
                    <CardDescription>Promotion and attendance strategies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Strategic marketing and promotion services to maximize event attendance, engagement, and overall
                      impact.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-black/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Clock className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle>Full-Service Management</CardTitle>
                    <CardDescription>End-to-end event solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Comprehensive event management from initial concept through final execution, including all
                      logistics, vendors, and details.
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
                Our Event Management Services
              </motion.h2>

              <motion.div className="space-y-8" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Corporate Event Management</CardTitle>
                      <CardDescription>Business function planning and execution</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Conferences and seminars</li>
                        <li>Corporate meetings and retreats</li>
                        <li>Team building events</li>
                        <li>Product launches and promotional events</li>
                        <li>Company celebrations and milestone events</li>
                      </ul>
                      <p className="mt-4">
                        Our corporate event management services deliver professional, polished events that align with
                        your business objectives and organizational culture.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Community and Public Events</CardTitle>
                      <CardDescription>Public gathering coordination</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Community festivals and celebrations</li>
                        <li>Fundraising events and charity functions</li>
                        <li>Public awareness campaigns</li>
                        <li>Educational events and workshops</li>
                        <li>Cultural and arts events</li>
                      </ul>
                      <p className="mt-4">
                        Our community event services create engaging, well-organized public gatherings that achieve your
                        outreach goals and create positive community connections.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Event Planning & Logistics</CardTitle>
                      <CardDescription>Comprehensive event coordination</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Venue selection and management</li>
                        <li>Vendor coordination and management</li>
                        <li>Catering and food service arrangements</li>
                        <li>Audio-visual and technology setup</li>
                        <li>Transportation and accommodation coordination</li>
                      </ul>
                      <p className="mt-4">
                        Our planning and logistics services handle all the complex details of your event, ensuring
                        seamless execution and a positive experience for all attendees.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Event Marketing & Promotion</CardTitle>
                      <CardDescription>Attendance and engagement strategies</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Event branding and identity development</li>
                        <li>Digital marketing and social media promotion</li>
                        <li>Registration management and ticketing</li>
                        <li>Attendee communication strategies</li>
                        <li>Post-event follow-up and engagement</li>
                      </ul>
                      <p className="mt-4">
                        Our marketing services maximize event attendance and engagement through strategic promotion,
                        professional branding, and effective communication channels.
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Professional Event Management</h2>
              <p className="text-lg text-muted-foreground">
                Partnering with our event management services provides numerous advantages for your organization's
                events.
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
                className="bg- black/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-black">Expertise & Experience</h3>
                <p>
                  Benefit from our team's extensive event management experience and industry knowledge for professional
                  execution.
                </p>
              </motion.div>

              <motion.div
                className="bg- black/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-black">Time & Resource Savings</h3>
                <p>
                  Focus on your core responsibilities while we handle the time-consuming details of event planning and
                  execution.
                </p>
              </motion.div>

              <motion.div
                className="bg- black/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-black">Stress Reduction</h3>
                <p>
                  Eliminate the stress of event planning with our comprehensive management of all logistics and
                  potential issues.
                </p>
              </motion.div>

              <motion.div
                className="bg- black/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-black">Budget Optimization</h3>
                <p>
                  Maximize your event budget with our vendor relationships, negotiation expertise, and cost management
                  strategies.
                </p>
              </motion.div>

              <motion.div
                className="bg- black/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-black">Professional Execution</h3>
                <p>
                  Create a polished, professional impression with expertly managed events that reflect positively on
                  your organization.
                </p>
              </motion.div>

              <motion.div
                className="bg- black/5 p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-black">Risk Management</h3>
                <p>
                  Minimize potential problems with our contingency planning, risk assessment, and on-site management
                  expertise.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-black-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Next Successful Event?</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our event management services can help you create memorable, effective
                events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text- black"
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

