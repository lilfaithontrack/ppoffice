"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, ChevronRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface MenuItem {
  title: string
  href?: string
  items?: {
    title: string
    href: string
  }[]
}

const solutions: MenuItem[] = [
  {
    title: "IT Solutions Co.",
    items: [
      { title: "Network Support", href: "/it-solutions/network-support" },
      { title: "Cloud Solutions", href: "/it-solutions/cloud-solutions" },
      { title: "Technical Support", href: "/it-solutions/technical-support" },
      { title: "Network Management", href: "/it-solutions/network-management" },
      { title: "Installation & Security", href: "/it-solutions/security" },
      { title: "Maintenance & Cybersecurity", href: "/it-solutions/maintenance-cybersecurity" },
    ],
  },
  {
    title: "Base Operations Co.",
    items: [
      { title: "Supplies Management", href: "/base-operations/supplies-management" },
      { title: "Handyman Services", href: "/base-operations/handyman-services" },
      { title: "Courier & Delivery", href: "/base-operations/courier-delivery" },
      { title: "Light Construction", href: "/base-operations/light-construction" },
      { title: "Interior Remodeling", href: "/base-operations/interior-remodeling" },
      { title: "Fixture Installation", href: "/base-operations/fixture-installation" },
      { title: "Minor Construction", href: "/base-operations/minor-construction" },
    ],
  },
  {
    title: "Grounds Maintenance Co.",
    items: [
      { title: "Mowing & Groundskeeping", href: "/grounds-maintenance/mowing-groundskeeping" },
      { title: "Garden Maintenance", href: "/grounds-maintenance/garden-maintenance" },
      { title: "Seasonal Cleanup", href: "/grounds-maintenance/seasonal-cleanup" },
      { title: "Snow Removal", href: "/grounds-maintenance/snow-removal" },
      { title: "Pest Control", href: "/grounds-maintenance/pest-control" },
    ],
  },
]

const company: MenuItem[] = [
  { title: "About Us", href: "/about-us" },
  { title: "Contact", href: "/contact" },
]

const pages: MenuItem[] = [
  { title: "Blog", href: "/blog" },
  { title: "FAQs", href: "/faqs" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item) => {
      if (item.items) {
        return (
          <AccordionItem value={item.title} key={item.title}>
            <AccordionTrigger className="text-sm">{item.title}</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-2">
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className="text-sm text-muted-foreground hover:text-primary pl-4 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        )
      }
      return (
        <Link
          key={item.title}
          href={item.href || "#"}
          className="flex items-center py-2 text-sm hover:text-primary"
          onClick={() => setIsOpen(false)}
        >
          {item.title}
          <ChevronRight className="ml-auto h-4 w-4" />
        </Link>
      )
    })
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <div className="flex flex-col space-y-4 py-4">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <span className="text-xl font-bold">Power Platform Office</span>
          </Link>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>+240-938-4970</span>
          </div>
          <div className="border-t" />
          <div className="flex flex-col space-y-2">
            <Link href="/" className="text-sm hover:text-primary" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="solutions">
                <AccordionTrigger className="text-sm">Solutions</AccordionTrigger>
                <AccordionContent>
                  <Accordion type="single" collapsible className="w-full">
                    {renderMenuItems(solutions)}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="company">
                <AccordionTrigger className="text-sm">Company</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">{renderMenuItems(company)}</div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="pages">
                <AccordionTrigger className="text-sm">Pages</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">{renderMenuItems(pages)}</div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="border-t" />
          <Button asChild>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

