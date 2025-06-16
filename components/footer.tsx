import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Youtube, Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-black text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-primary-foreground/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p>Stay updated with our latest services and company news</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6">Power Platform Office</h3>
            <p className="mb-6">
              Comprehensive services for all your business needs, from facility management to IT solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1" />
                <div>
                  <p>12515 35th Ave NE</p>
                  <p>Seattle, Washington 98125</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <p>+240-938-4970</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <p>info@powerplatformoffice.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/it-solutions" className="flex items-center hover:underline">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  IT Solutions
                </Link>
              </li>
              <li>
                <Link href="/base-operations" className="flex items-center hover:underline">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Base Operations
                </Link>
              </li>
              <li>
                <Link href="/grounds-maintenance" className="flex items-center hover:underline">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Grounds Maintenance
                </Link>
              </li>
              <li>
                <Link href="/professional-services" className="flex items-center hover:underline">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Professional Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className="flex items-center hover:underline">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="flex items-center hover:underline">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="flex items-center hover:underline">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center hover:underline">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Contact Us
                </Link>
              </li>
                <li>
                <Link href="/privacy" className="flex items-center hover:underline">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  privacy and policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="flex items-center hover:underline">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Terms and Condition 
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="flex items-center hover:underline">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Working Hours PST</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-bold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-primary-foreground/20 text-center">
          <p>&copy; {new Date().getFullYear()} Power Platform Office. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

