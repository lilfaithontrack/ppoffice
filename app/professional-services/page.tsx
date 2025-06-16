import type React from "react"
import Link from "next/link"
import { ArrowRight, Users, Calendar, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfessionalServices() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Power Platform Office</h1>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/base-operations" className="hover:underline">
                Base Operations
              </Link>
              <Link href="/grounds-maintenance" className="hover:underline">
                Grounds Maintenance
              </Link>
              <Link href="/professional-services" className="hover:underline">
                Professional Services
              </Link>
              <Link href="/it-solutions" className="hover:underline">
                IT Solutions
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </nav>
            <button className="md:hidden">
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
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Services Co.</h1>
              <p className="text-xl mb-8">
                Expert staffing, event management, and logistics solutions for your organization.
              </p>
              <Button asChild variant="secondary">
                <Link href="/contact">
                  Request Service <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Staffing Solutions"
                description="IT staffing, administrative staffing, and project management staffing."
                icon={<Users className="h-10 w-10" />}
                href="/professional-services/staffing-solutions"
              />
              <ServiceCard
                title="Event Management"
                description="Corporate events, community events, and venue management."
                icon={<Calendar className="h-10 w-10" />}
                href="/professional-services/event-management"
              />
              <ServiceCard
                title="Logistics & Supply Chain"
                description="Inventory management, transportation planning, and supply chain optimization."
                icon={<Truck className="h-10 w-10" />}
                href="/professional-services/logistics-supply-chain"
              />
            </div>
          </div>
        </section>

        {/* Staffing Solutions Section */}
        <section className="py-16 bg-muted" id="staffing-solutions">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Staffing Solutions</h2>
              <div className="grid gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>IT Staffing</CardTitle>
                    <CardDescription>Technology professionals for your organization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">Services Offered:</h4>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      <li>Software Developers: Custom application development</li>
                      <li>Systems Administrators: IT infrastructure management</li>
                      <li>Cybersecurity Specialists: Data protection and security</li>
                      <li>IT Support Staff: Help desk and technical support</li>
                      <li>Cloud and Network Engineers: Cloud and network management</li>
                    </ul>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Skilled IT Professionals: Top-tier technology experts</li>
                      <li>Specialized Talent Pools: Experts in various technology fields</li>
                      <li>Project-Based or Ongoing Support: Flexible staffing options</li>
                      <li>Security-Focused: Strong emphasis on cybersecurity</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Administrative Staffing</CardTitle>
                    <CardDescription>Administrative support for your organization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">Services Offered:</h4>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      <li>Administrative Assistants: Scheduling, correspondence, and organization</li>
                      <li>Data Entry Clerks: Accurate data entry and database management</li>
                      <li>Receptionists: Professional front desk management</li>
                      <li>Office Managers: Coordination of day-to-day operations</li>
                      <li>Clerical Support: Filing, copying, and document preparation</li>
                    </ul>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Experienced Professionals: Trained for government settings</li>
                      <li>Custom Staffing Solutions: Tailored to your specific needs</li>
                      <li>Efficiency and Reliability: Ensuring tasks are completed on time</li>
                      <li>Support for Every Department: Administrative staffing across all departments</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Project Management Staffing</CardTitle>
                    <CardDescription>Expert project leadership for your initiatives</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">Services Offered:</h4>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      <li>Project Managers: Overseeing projects from inception to completion</li>
                      <li>Project Coordinators: Managing logistics and coordination</li>
                      <li>Program Managers: Overseeing multiple projects</li>
                      <li>Project Support Staff: Documentation and reporting assistance</li>
                    </ul>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Skilled Project Leaders: Experienced in government projects</li>
                      <li>Proven Methodologies: Established project management frameworks</li>
                      <li>Flexible Staffing: Project-specific or ongoing resources</li>
                      <li>End-to-End Support: Comprehensive project management support</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 text-center">
                <Button asChild>
                  <Link href="/professional-services/staffing-solutions">
                    View All Staffing Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Event Management Section */}
        <section className="py-16 bg-background" id="event-management">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Event Management</h2>
              <div className="grid gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Corporate Events</CardTitle>
                    <CardDescription>Professional event planning for your organization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">Services Offered:</h4>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      <li>Event Conceptualization: Developing event themes and formats</li>
                      <li>Logistical Support: Venue selection, transportation, and accommodations</li>
                      <li>Program Development: Creating agendas and securing speakers</li>
                      <li>Branding and Promotion: Aligning with your agency's image</li>
                    </ul>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Professional Execution: Polished and professional events</li>
                      <li>Audience Engagement: Strategies to engage attendees</li>
                      <li>Comprehensive Support: End-to-end event support</li>
                      <li>Risk Management: Identifying and mitigating potential risks</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 text-center">
                <Button asChild>
                  <Link href="/professional-services/event-management">
                    View All Event Management Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  )
}

function ServiceCard({
  title,
  description,
  icon,
  href,
}: {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}) {
  return (
    <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
      <div className="mb-4 text-black">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link href={href} className="inline-flex items-center text-black hover:underline">
        Learn More <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  )
}

