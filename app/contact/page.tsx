import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
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
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl mb-8">
                Get in touch with our team to discuss how we can help with your service needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <p className="mb-8 text-muted-foreground">
                  Fill out the form below and one of our representatives will get back to you as soon as possible.
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Interested In
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="base-operations">Base Operations</SelectItem>
                        <SelectItem value="grounds-maintenance">Grounds Maintenance</SelectItem>
                        <SelectItem value="professional-services">Professional Services</SelectItem>
                        <SelectItem value="it-solutions">IT Solutions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your service needs" rows={5} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="mb-8 text-muted-foreground">
                  You can also reach out to us directly using the contact information below.
                </p>
                <div className="grid gap-8">
                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-bold">Email</h3>
                        <p className="text-muted-foreground">info@powerplatformoffice.com</p>
                        <p className="text-muted-foreground">support@powerplatformoffice.com</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-bold">Phone</h3>
                        <p className="text-muted-foreground">Main: (555) 123-4567</p>
                        <p className="text-muted-foreground">Support: (555) 987-6543</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-bold">Address</h3>
                        <p className="text-muted-foreground">123 Business Avenue</p>
                        <p className="text-muted-foreground">Corporate Park, CA 90210</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Power Platform Office</h3>
              <p>Comprehensive services for all your business needs.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/base-operations" className="hover:underline">
                    Base Operations
                  </Link>
                </li>
                <li>
                  <Link href="/grounds-maintenance" className="hover:underline">
                    Grounds Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="/professional-services" className="hover:underline">
                    Professional Services
                  </Link>
                </li>
                <li>
                  <Link href="/it-solutions" className="hover:underline">
                    IT Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p>123 Business Avenue</p>
              <p>Corporate Park, CA 90210</p>
              <p>info@powerplatformoffice.com</p>
              <p>(555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Power Platform Office. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

