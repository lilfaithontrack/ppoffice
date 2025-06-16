"use client"

import { useState } from "react"
import PageBanner from "@/components/page-banner"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { motion } from "framer-motion"

// FAQ data
const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        id: "general-1",
        question: "What services does Power Platform Office provide?",
        answer:
          "Power Platform Office provides a comprehensive range of business services including IT Solutions, Base Operations, Grounds Maintenance, and Professional Services. Our solutions are designed to help organizations streamline their operations and focus on their core competencies.",
      },
      {
        id: "general-2",
        question: "How can I request a quote for your services?",
        answer:
          "You can request a quote by filling out our contact form on the Contact page, calling our customer service line at +240-938-4970, or scheduling a free consultation through our website. Our team will promptly respond to your inquiry and provide a customized quote based on your specific needs.",
      },
      {
        id: "general-3",
        question: "Do you offer services nationwide?",
        answer:
          "Yes, we offer our services nationwide with local teams in major metropolitan areas. For locations where we don't have a physical presence, we can provide remote support and coordinate with local partners to ensure high-quality service delivery.",
      },
      {
        id: "general-4",
        question: "What makes Power Platform Office different from other service providers?",
        answer:
          "Power Platform Office stands out through our integrated approach to business services, our commitment to excellence, and our focus on building long-term client relationships. We offer customized solutions tailored to each client's unique needs, backed by decades of industry experience and a dedicated team of professionals.",
      },
    ],
  },
  {
    category: "IT Solutions",
    questions: [
      {
        id: "it-1",
        question: "What IT support services do you offer?",
        answer:
          "Our IT support services include network support, cloud solutions, technical support, network management, installation & security, and maintenance & cybersecurity. We provide both on-site and remote support options to meet your specific requirements.",
      },
      {
        id: "it-2",
        question: "How quickly can you respond to IT emergencies?",
        answer:
          "We offer rapid response times for IT emergencies, with our standard SLA providing a response within 1-4 hours depending on the severity of the issue. For clients with premium support packages, we offer even faster response times and 24/7 emergency support.",
      },
      {
        id: "it-3",
        question: "Do you provide cloud migration services?",
        answer:
          "Yes, we provide comprehensive cloud migration services to help businesses transition their infrastructure and applications to the cloud. Our team has expertise in migrating to various cloud platforms including AWS, Microsoft Azure, and Google Cloud, ensuring a smooth and secure transition with minimal disruption to your operations.",
      },
      {
        id: "it-4",
        question: "What cybersecurity measures do you implement?",
        answer:
          "We implement a multi-layered approach to cybersecurity including network security, endpoint protection, email security, data encryption, regular security assessments, employee training, and incident response planning. Our security solutions are designed to protect your business from the latest threats while ensuring compliance with industry regulations.",
      },
    ],
  },
  {
    category: "Base Operations",
    questions: [
      {
        id: "base-1",
        question: "What types of handyman services do you provide?",
        answer:
          "Our handyman services include general repairs, maintenance tasks, fixture installation, minor plumbing and electrical work, assembly of furniture and equipment, and other small-scale improvements. Our skilled technicians can handle a wide range of tasks to keep your facility in optimal condition.",
      },
      {
        id: "base-2",
        question: "Can you handle large-scale construction projects?",
        answer:
          "While we specialize in light construction and interior remodeling, we can coordinate larger construction projects through our network of trusted partners. For major renovations or new construction, we can serve as your project manager, ensuring quality work and timely completion.",
      },
      {
        id: "base-3",
        question: "How do you manage supplies for clients?",
        answer:
          "Our supplies management service includes inventory tracking, automated reordering, vendor management, cost optimization, and delivery coordination. We use advanced inventory management systems to ensure you always have the supplies you need while minimizing costs and storage requirements.",
      },
      {
        id: "base-4",
        question: "What is included in your courier and delivery services?",
        answer:
          "Our courier and delivery services include scheduled deliveries, on-demand courier service, secure document delivery, package tracking, and specialized handling for sensitive items. We ensure reliable, timely delivery with real-time tracking and confirmation.",
      },
    ],
  },
  {
    category: "Grounds Maintenance",
    questions: [
      {
        id: "grounds-1",
        question: "How often do you provide lawn mowing services?",
        answer:
          "We offer flexible lawn mowing schedules based on your needs and the growing season. Typically, we provide weekly mowing during peak growing seasons and bi-weekly or monthly service during slower growth periods. We can customize a schedule that keeps your property looking its best year-round.",
      },
      {
        id: "grounds-2",
        question: "Do you offer snow removal services?",
        answer:
          "Yes, we provide comprehensive snow removal services including plowing, shoveling, salting, and ice management. We offer both scheduled service after snowfall and preventative treatments before storms. Our team monitors weather forecasts and responds promptly to ensure your property remains safe and accessible.",
      },
      {
        id: "grounds-3",
        question: "What pest control methods do you use?",
        answer:
          "We use Integrated Pest Management (IPM) approaches that emphasize prevention, monitoring, and environmentally responsible treatments. Our pest control specialists are trained to identify pest issues, determine the most effective and least toxic solutions, and implement treatments that protect your property while minimizing environmental impact.",
      },
      {
        id: "grounds-4",
        question: "Can you handle seasonal garden maintenance?",
        answer:
          "Yes, we provide comprehensive seasonal garden maintenance including spring cleanup, summer maintenance, fall preparation, and winter protection. Our services include pruning, mulching, fertilization, planting, weeding, and other tasks to keep your gardens healthy and attractive throughout the year.",
      },
    ],
  },
  {
    category: "Professional Services",
    questions: [
      {
        id: "prof-1",
        question: "What types of staffing solutions do you offer?",
        answer:
          "We offer temporary staffing, direct hire placement, contract-to-hire arrangements, and project-based staffing across various industries and job functions. Our staffing specialists work closely with you to understand your requirements and provide qualified candidates who match your needs.",
      },
      {
        id: "prof-2",
        question: "How do you handle event management?",
        answer:
          "Our event management services cover everything from initial planning and venue selection to day-of coordination and post-event evaluation. We handle corporate events, conferences, trade shows, and special occasions with attention to detail, ensuring successful outcomes that meet your objectives and budget.",
      },
      {
        id: "prof-3",
        question: "What logistics and supply chain services do you provide?",
        answer:
          "We offer comprehensive logistics and supply chain services including transportation management, warehouse operations, inventory control, distribution planning, supplier management, and logistics technology implementation. Our solutions are designed to optimize your supply chain, reduce costs, and improve efficiency.",
      },
      {
        id: "prof-4",
        question: "Do you offer consulting services?",
        answer:
          "Yes, we provide business consulting services across various areas including operations optimization, process improvement, technology implementation, and strategic planning. Our consultants bring industry expertise and best practices to help you solve challenges and capitalize on opportunities for growth and improvement.",
      },
    ],
  },
]

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  // Filter FAQs based on search query
  const filteredFAQs = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  // Toggle category expansion
  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services and solutions"
        backgroundImage="/placeholder.svg?height=400&width=1920"
      />

      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="search"
                placeholder="Search for questions or keywords..."
                className="pl-10 py-6 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>

          {/* FAQ Categories */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((category, index) => (
                <motion.div key={category.category} className="mb-8" variants={itemVariants}>
                  <div
                    className="flex items-center justify-between p-4 bg-primary/5 rounded-lg cursor-pointer"
                    onClick={() => toggleCategory(category.category)}
                  >
                    <h2 className="text-xl font-bold">{category.category}</h2>
                    <div
                      className={`transform transition-transform ${expandedCategories.includes(category.category) ? "rotate-180" : ""}`}
                    >
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
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>

                  {(expandedCategories.includes(category.category) || searchQuery) && (
                    <div className="mt-4">
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq) => (
                          <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-200">
                            <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground py-4">{faq.answer}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-lg text-muted-foreground">No results found for "{searchQuery}"</p>
                <p className="mt-2">Try a different search term or browse our categories.</p>
              </div>
            )}
          </motion.div>

          {/* Still Have Questions */}
          <motion.div
            className="max-w-3xl mx-auto mt-16 p-8 bg-primary/5 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg mb-6">
              Our team is ready to help you with any additional questions or concerns you may have.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Contact Us
              </a>
              <a
                href="tel:+2409384970"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Call +240-938-4970
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

