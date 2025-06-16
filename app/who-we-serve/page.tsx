"use client"

import Link from "next/link"
import { useState, useRef } from "react"
import { ArrowRight, ChevronRight, Users, Building, GraduationCap, Briefcase, FileText } from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Custom components
const PageBanner = ({ title, description, backgroundImage }) => {
  return (
    <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
      <div className="container relative z-20 h-full flex flex-col justify-center px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge variant="outline" className="mb-4 text-white border-white/30 backdrop-blur-sm bg-black/20 px-4 py-1">
            Our Industries
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">{title}</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">{description}</p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  )
}

const StatCard = ({ icon: Icon, value, label, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
    >
      <div className="p-3 mb-4 rounded-full bg-primary/10 text-primary">
        <Icon size={28} />
      </div>
      <motion.h3
        className="text-3xl font-bold mb-1"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {value}
      </motion.h3>
      <p className="text-muted-foreground text-center">{label}</p>
    </motion.div>
  )
}

const IndustryCard = ({ title, description, icon: Icon, image, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 z-10"></div>
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className={cn(
          "w-full h-[300px] object-cover transition-transform duration-700",
          isHovered ? "scale-110" : "scale-100",
        )}
      />
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
        <div className="flex items-center mb-3">
          <div className="p-2 rounded-full bg-primary/90 text-white mr-3">
            <Icon size={20} />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-white/80 mb-4 line-clamp-3">{description}</p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
          >
            Learn More <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function WhoWeServe() {
  const { scrollYProgress } = useScroll()
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const overviewRef = useRef(null)
  const isOverviewInView = useInView(overviewRef, { once: true, margin: "-100px" })

  const industries = [
    {
      title: "Public Sector",
      icon: Building,
      description:
        "We specialize in serving federal, state, and local government entities—providing end-to-end IT solutions, consulting, and hardware to agencies that keep our nation running.",
      image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=2070&auto=format&fit=crop",
      details:
        "Whether it's robust networking for the U.S. Department of Defense or cost-effective devices for county offices, we equip public sector teams with the latest technology for increased efficiency, security, and compliance.",
    },
    {
      title: "Education",
      icon: GraduationCap,
      description:
        "From early childhood classrooms to renowned universities, we support education institutions with cutting-edge hardware, intuitive software, and secure platforms.",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070&auto=format&fit=crop",
      details:
        "We believe technology is a catalyst for learning—offering students and educators the tools they need to innovate, collaborate, and excel in the digital age.",
    },
    {
      title: "Enterprise Businesses",
      icon: Briefcase,
      description:
        "For large-scale enterprises and commercial clients, our comprehensive suite of solutions covers everything from data-driven analytics to enterprise-grade security software.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
      details:
        "We deliver scalable, future-proof systems that enable companies to thrive in today's fast-paced market—helping them stay agile, innovative, and competitive.",
    },
    {
      title: "Technology & Consulting",
      icon: Users,
      description:
        "We partner with technology and consulting firms looking to enhance their service offerings through reliable hardware, advanced software solutions, and collaborative platforms.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
      details:
        "From cloud integrations to specialized product sourcing, we're committed to being a trusted extension of your team, driving mutual success.",
    },
    {
      title: "Government Contractors",
      icon: FileText,
      description:
        "In addition to direct government engagements, we also serve a diverse range of contractors and sub-contractors across key service categories.",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2074&auto=format&fit=crop",
      details:
        "We support contractors in Base Operations, Grounds Maintenance, Professional Services, and IT Solutions with tailored technology solutions.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageBanner
        title="Who We Serve"
        description="Empowering industries with innovative technology solutions tailored to their unique challenges and opportunities."
        backgroundImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
      />

      <main className="flex-grow relative">
        
        {/* Overview Section */}
        <section id="overview" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              style={{ y: parallaxY }}
              className="absolute -right-64 -top-64 w-[500px] h-[500px] rounded-full bg-primary/5"
            />
            <motion.div
              style={{ y: parallaxY }}
              className="absolute -left-32 top-96 w-[300px] h-[300px] rounded-full bg-primary/5"
            />
          </div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                ref={overviewRef}
                initial={{ opacity: 0, x: -50 }}
                animate={isOverviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg z-0"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg z-0"></div>
                  <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                      alt="Overview Image"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 bg-primary text-white p-6 rounded-lg shadow-xl z-20">
                  <p className="text-2xl font-bold">15+ YEARS</p>
                  <p className="text-sm opacity-80">OF EXCELLENCE</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isOverviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Badge className="mb-4">Our Mission</Badge>
                <h2 className="text-4xl font-bold mb-6 tracking-tight">Empowering Industries Through Technology</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  We specialize in delivering innovative technology solutions to a wide range of industries, empowering
                  them to achieve their goals and drive growth. Our expertise spans across public sector, education,
                  enterprise businesses, and more.
                </p>
                <p className="text-lg mb-8 text-muted-foreground">
                  With over 15 years of experience, we are committed to providing cutting-edge hardware, intuitive
                  software, and secure platforms that enable our clients to thrive in the digital age.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full">
                    <Link href="/our-team">Meet Our Team</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        {/* Industries Section */}
        <section id="industries" className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4">Industries</Badge>
              <h2 className="text-4xl font-bold mb-4 tracking-tight">Who We Serve</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We provide tailored solutions to a diverse range of industries, empowering them with cutting-edge
                technology and innovative strategies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <IndustryCard
                  key={industry.title}
                  title={industry.title}
                  description={industry.description}
                  icon={industry.icon}
                  image={industry.image}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section with Tabs */}
        <section id="approach" className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4">Our Approach</Badge>
              <h2 className="text-4xl font-bold mb-4 tracking-tight">How We Work With You</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our collaborative approach ensures we deliver solutions that perfectly align with your unique needs and
                objectives.
              </p>
            </motion.div>

            <Tabs defaultValue="public" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-8">
                <TabsTrigger value="public">Public Sector</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
                <TabsTrigger value="tech">Technology</TabsTrigger>
                <TabsTrigger value="contractors">Contractors</TabsTrigger>
              </TabsList>

              {industries.map((industry, index) => {
                // Map industry titles to tab values
                let tabValue = "public"
                if (industry.title.includes("Education")) tabValue = "education"
                else if (industry.title.includes("Enterprise")) tabValue = "enterprise"
                else if (industry.title.includes("Technology")) tabValue = "tech"
                else if (industry.title.includes("Government")) tabValue = "contractors"

                return (
                  <TabsContent key={industry.title.toLowerCase().replace(/\s+/g, "")} value={tabValue}>
                    <Card>
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                          <div className="h-full">
                            <img
                              src={industry.image || "/placeholder.svg"}
                              alt={industry.title}
                              className="w-full h-full object-cover aspect-square md:aspect-auto"
                            />
                          </div>
                          <div className="p-8">
                            <div className="p-3 mb-4 w-fit rounded-full bg-primary/10 text-primary">
                              <industry.icon size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                            <p className="mb-4 text-muted-foreground">{industry.description}</p>
                            <p className="mb-6 text-muted-foreground">{industry.details}</p>
                            <Button>
                              Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                )
              })}
            </Tabs>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.05),transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4">Testimonials</Badge>
              <h2 className="text-4xl font-bold mb-4 tracking-tight">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Hear from the organizations we've helped transform through innovative technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-background p-8 rounded-xl shadow-lg border border-border relative"
                >
                  <div className="absolute -top-5 left-8 text-5xl text-primary">"</div>
                  <p className="text-muted-foreground mb-6 pt-4">
                    Their technology solutions have transformed how we operate, increasing efficiency by over 40% and
                    providing us with tools that truly make a difference in our day-to-day operations.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${i + 10}.jpg`}
                        alt="Client"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Client Name</p>
                      <p className="text-sm text-muted-foreground">Organization {i}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 bg-repeat"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
              <p className="text-xl mb-8 text-primary-foreground/80">
                Contact us today to discuss how our comprehensive services can help streamline your operations and drive
                growth in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="rounded-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary rounded-full"
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

