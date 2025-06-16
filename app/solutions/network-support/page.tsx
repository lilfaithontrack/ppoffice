import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"

export default function NetworkSupport() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title="Network Support"
        description="Professional network infrastructure support and maintenance services"
        backgroundImage="/placeholder.svg?height=400&width=1920"
      />

      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Network Support Services</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We provide comprehensive network support services to ensure your business stays connected and operates
                efficiently. Our team of experts is available 24/7 to handle any network-related issues.
              </p>

              <div className="grid gap-8">
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Network Infrastructure Management</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Network design and implementation</li>
                    <li>Performance monitoring and optimization</li>
                    <li>Security assessment and enhancement</li>
                    <li>24/7 network monitoring</li>
                    <li>Troubleshooting and maintenance</li>
                  </ul>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Network Security</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Firewall configuration and management</li>
                    <li>VPN setup and maintenance</li>
                    <li>Security patch management</li>
                    <li>Network access control</li>
                    <li>Security audit and compliance</li>
                  </ul>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Support Services</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>24/7 technical support</li>
                    <li>Remote and on-site assistance</li>
                    <li>Network performance reporting</li>
                    <li>Regular maintenance schedules</li>
                    <li>Emergency response services</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Request Network Support <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Network Infrastructure?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our network support services can help improve your business operations.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

