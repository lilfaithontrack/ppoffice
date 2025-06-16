import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Solutions() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title="Our Solutions"
        description="Comprehensive services tailored to meet all your business needs"
        backgroundImage="/placeholder.svg?height=400&width=1920"
      />

      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Our Service Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Power Platform Office provides a wide range of services across multiple domains to support your business
              operations.
            </p>
          </div>

          <Tabs defaultValue="it-solutions" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="it-solutions">IT Solutions</TabsTrigger>
              <TabsTrigger value="base-operations">Base Operations</TabsTrigger>
              <TabsTrigger value="grounds-maintenance">Grounds Maintenance</TabsTrigger>
              <TabsTrigger value="professional-services">Professional Services</TabsTrigger>
            </TabsList>

            <TabsContent value="it-solutions" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Network Support</CardTitle>
                    <CardDescription>Comprehensive network infrastructure support</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our network support services ensure your business stays connected with reliable and secure network
                      infrastructure.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/it-solutions/network-support">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cloud Solutions</CardTitle>
                    <CardDescription>Scalable cloud infrastructure and services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Leverage the power of cloud computing with our comprehensive cloud solutions for businesses of all
                      sizes.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/it-solutions/cloud-solutions">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Technical Support</CardTitle>
                    <CardDescription>Expert IT assistance and troubleshooting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our technical support team provides prompt and effective solutions to keep your IT systems running
                      smoothly.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/it-solutions/technical-support">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Network Management</CardTitle>
                    <CardDescription>Proactive network monitoring and management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      We provide comprehensive network management services to ensure optimal performance and security.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/it-solutions/network-management">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Installation & Security</CardTitle>
                    <CardDescription>Secure setup and implementation of IT systems</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our installation and security services ensure your IT infrastructure is properly set up and
                      protected.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/it-solutions/security">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Maintenance & Cybersecurity</CardTitle>
                    <CardDescription>Ongoing system maintenance and protection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Keep your systems running smoothly and protected from threats with our maintenance and
                      cybersecurity services.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/it-solutions/cybersecurity">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button asChild>
                  <Link href="/it-solutions">
                    View All IT Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="base-operations" className="space-y-8">
              {/* Base Operations content similar to IT Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Supplies Management</CardTitle>
                    <CardDescription>Comprehensive supplies management services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our supplies management services ensure you have all the necessary office, facility, and IT
                      supplies when you need them.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/base-operations/supplies-management">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Handyman Services</CardTitle>
                    <CardDescription>Professional repair and maintenance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our skilled handymen provide a wide range of repair and maintenance services to keep your
                      facilities in top condition.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/base-operations/handyman-services">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Courier & Delivery</CardTitle>
                    <CardDescription>Reliable document and package delivery</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our courier services ensure your important documents and packages are delivered safely and on
                      time.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/base-operations/courier-delivery">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Light Construction</CardTitle>
                    <CardDescription>Small-scale construction and modifications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our light construction services help you modify and improve your facilities without major
                      disruptions.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/base-operations/light-construction">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Interior Remodeling</CardTitle>
                    <CardDescription>Office and facility renovation services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Transform your workspace with our professional interior remodeling services designed for minimal
                      disruption.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/base-operations/interior-remodeling">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Fixture Installation</CardTitle>
                    <CardDescription>Professional installation of fixtures and equipment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our experts provide reliable installation services for lighting, plumbing, and other fixtures in
                      your facility.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/base-operations/fixture-installation">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button asChild>
                  <Link href="/base-operations">
                    View All Base Operations <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="grounds-maintenance" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Mowing & Groundskeeping</CardTitle>
                    <CardDescription>Professional lawn and grounds maintenance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our mowing and groundskeeping services keep your property looking its best throughout the year.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/grounds-maintenance/mowing-groundskeeping">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Garden Maintenance</CardTitle>
                    <CardDescription>Expert care for gardens and landscaping</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our garden maintenance services ensure your landscaping remains beautiful and healthy throughout
                      the seasons.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/grounds-maintenance/garden-maintenance">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Seasonal Cleanup</CardTitle>
                    <CardDescription>Thorough cleanup services for each season</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our seasonal cleanup services prepare your property for each new season, removing debris and
                      maintaining appearance.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/grounds-maintenance/seasonal-cleanup">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Snow Removal</CardTitle>
                    <CardDescription>Reliable winter snow management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our snow removal services keep your property accessible and safe during winter weather conditions.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/grounds-maintenance/snow-removal">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Pest Control</CardTitle>
                    <CardDescription>Effective pest management solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our pest control services protect your property from unwanted pests using safe and effective
                      methods.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/grounds-maintenance/pest-control">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button asChild>
                  <Link href="/grounds-maintenance">
                    View All Grounds Maintenance <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="professional-services" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Staffing Solutions</CardTitle>
                    <CardDescription>Professional staffing and recruitment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our staffing solutions help you find the right talent for your organization, from temporary to
                      permanent positions.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/professional-services/staffing-solutions">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Event Management</CardTitle>
                    <CardDescription>Comprehensive event planning and execution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our event management services ensure your corporate and community events are professionally
                      planned and executed.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/professional-services/event-management">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Logistics & Supply Chain</CardTitle>
                    <CardDescription>Efficient logistics and supply chain management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our logistics and supply chain services optimize your operations for efficiency and
                      cost-effectiveness.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/professional-services/logistics-supply-chain">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button asChild>
                  <Link href="/professional-services">
                    View All Professional Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* CTA Section */}
        <section className="py-16 mt-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our comprehensive services can help streamline your operations and drive
              growth.
            </p>
            <Button asChild variant="secondary">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

