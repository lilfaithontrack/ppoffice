"use client"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

const solutions = [
  {
    title: "IT Solutions Co.",
    items: [
      {
        title: "Network Support",
        href: "/it-solutions/network-support",
      },
      {
        title: "Cloud Solutions",
        href: "/it-solutions/cloud-solutions",
      },
      {
        title: "Technical Support",
        href: "/it-solutions/technical-support",
      },
      {
        title: "Network Management",
        href: "/it-solutions/network-management",
      },
      {
        title: "Installation & Security",
        href: "/it-solutions/security",
      },
      {
        title: "Maintenance & Cybersecurity",
        href: "/it-solutions/maintenance-cybersecurity",
      },
    ],
  },
  {
    title: "Base Operations Co.",
    items: [
      {
        title: "Supplies Management",
        href: "/base-operations/supplies-management",
      },
      {
        title: "Handyman Services",
        href: "/base-operations/handyman-services",
      },
      {
        title: "Courier & Delivery",
        href: "/base-operations/courier-delivery",
      },
      {
        title: "Light Construction",
        href: "/base-operations/light-construction",
      },
      {
        title: "Interior Remodeling",
        href: "/base-operations/interior-remodeling",
      },
      {
        title: "Fixture Installation",
        href: "/base-operations/fixture-installation",
      },
      {
        title: "Minor Construction",
        href: "/base-operations/minor-construction",
      },
    ],
  },
  {
    title: "Grounds Maintenance Co.",
    items: [
      {
        title: "Mowing & Groundskeeping",
        href: "/grounds-maintenance/mowing-groundskeeping",
      },
      {
        title: "Garden Maintenance",
        href: "/grounds-maintenance/garden-maintenance",
      },
      {
        title: "Seasonal Cleanup",
        href: "/grounds-maintenance/seasonal-cleanup",
      },
      {
        title: "Snow Removal",
        href: "/grounds-maintenance/snow-removal",
      },
      {
        title: "Pest Control",
        href: "/grounds-maintenance/pest-control",
      },
    ],
  },
]

const company = [
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Our Team",
    href: "/team",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

const pages = [
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "FAQs",
    href: "/faqs",
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
  {
    title: "Terms of Service",
    href: "/terms",
  },
]

export function MainNav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Power Platform Office</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
   <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent className="left-1/2 -translate-x-1/2">
                <ul className="grid w-[200px] gap-2 p-3">
                  {company.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block p-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent className="left-1/2 -translate-x-1/2">
                <div className="grid gap-4 p-6 w-[800px] grid-cols-3">
                  {solutions.map((section) => (
                    <div key={section.title} className="space-y-3">
                      <h4 className="text-sm font-bold leading-none">{section.title}</h4>
                      <ul className="grid gap-2">
                        {section.items.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block p-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                              >
                                {item.title}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

         
            
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="/who-we-serve" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Who We Serve</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm">+240-938-4970</span>
          </div>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
  

