"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Search } from "lucide-react"
import PageBanner from "@/components/page-banner"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Blog post data
const blogPosts = [
  {
    id: "it-solutions-trends-2023",
    title: "Top IT Solutions Trends for 2023",
    excerpt:
      "Discover the latest trends in IT solutions that are transforming businesses and driving innovation in 2023.",
    date: "March 15, 2023",
    readTime: "8 min read",
    category: "IT Solutions",
    tags: ["Cloud Computing", "Cybersecurity", "AI", "Digital Transformation"],
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
  },
  {
    id: "office-maintenance-guide",
    title: "The Complete Guide to Office Maintenance",
    excerpt:
      "Learn how proper office maintenance can improve productivity, employee satisfaction, and reduce operational costs.",
    date: "February 28, 2023",
    readTime: "6 min read",
    category: "Base Operations",
    tags: ["Facility Management", "Workplace Efficiency", "Cost Reduction"],
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
  },
  {
    id: "sustainable-landscaping-practices",
    title: "Sustainable Landscaping Practices for Commercial Properties",
    excerpt:
      "Explore eco-friendly landscaping approaches that reduce environmental impact while enhancing your property's appearance.",
    date: "January 20, 2023",
    readTime: "5 min read",
    category: "Grounds Maintenance",
    tags: ["Sustainability", "Commercial Landscaping", "Water Conservation"],
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
  },
  {
    id: "remote-work-solutions",
    title: "Optimizing Remote Work with Professional IT Support",
    excerpt:
      "How professional IT support can help businesses maintain productivity and security in remote work environments.",
    date: "December 12, 2022",
    readTime: "7 min read",
    category: "IT Solutions",
    tags: ["Remote Work", "IT Support", "Productivity", "Cybersecurity"],
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
  },
  {
    id: "event-planning-tips",
    title: "10 Essential Tips for Successful Corporate Event Planning",
    excerpt:
      "Expert advice on planning and executing memorable corporate events that achieve your business objectives.",
    date: "November 5, 2022",
    readTime: "9 min read",
    category: "Professional Services",
    tags: ["Event Planning", "Corporate Events", "Business Development"],
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
  },
  {
    id: "cybersecurity-best-practices",
    title: "Cybersecurity Best Practices Every Business Should Implement",
    excerpt:
      "Essential cybersecurity measures to protect your business from evolving digital threats and data breaches.",
    date: "October 18, 2022",
    readTime: "10 min read",
    category: "IT Solutions",
    tags: ["Cybersecurity", "Data Protection", "Risk Management"],
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
  },
  {
    id: "seasonal-maintenance-checklist",
    title: "Seasonal Maintenance Checklist for Commercial Properties",
    excerpt: "A comprehensive guide to maintaining your commercial property throughout the changing seasons.",
    date: "September 30, 2022",
    readTime: "6 min read",
    category: "Grounds Maintenance",
    tags: ["Seasonal Maintenance", "Property Management", "Preventative Care"],
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
  },
  {
    id: "supply-chain-optimization",
    title: "Strategies for Supply Chain Optimization in Uncertain Times",
    excerpt:
      "How businesses can strengthen their supply chains and maintain operational resilience during disruptions.",
    date: "August 15, 2022",
    readTime: "8 min read",
    category: "Professional Services",
    tags: ["Supply Chain", "Logistics", "Business Continuity"],
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
  },
]

// Get all unique categories
const categories = ["All", ...new Set(blogPosts.map((post) => post.category))]

// Get all unique tags
const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Filter posts based on search, category, and tags
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeCategory === "All" || post.category === activeCategory

    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => post.tags.includes(tag))

    return matchesSearch && matchesCategory && matchesTags
  })

  // Featured posts
  const featuredPosts = filteredPosts.filter((post) => post.featured)
  // Regular posts
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
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
        title="Our Blog"
        description="Insights, tips, and news from Power Platform Office"
        backgroundImage="/placeholder.svg?height=400&width=1920"
      />

      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className="mb-12">
            <motion.div
              className="max-w-2xl mx-auto mb-8"
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
                  placeholder="Search articles..."
                  className="pl-10 py-6 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Tabs defaultValue="All" className="w-full">
                <TabsList className="flex flex-wrap justify-center mb-6">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      onClick={() => setActiveCategory(category)}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="relative h-60">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary">{post.category}</Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{post.title}</h3>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <div className="flex items-center mr-4">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section>
            <h2 className="text-2xl font-bold mb-8">All Articles</h2>
            {filteredPosts.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {regularPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={itemVariants}
                    className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="relative h-48">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary/80">{post.category}</Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors">{post.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <div className="flex items-center mr-3">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
                <p className="mt-2">Try adjusting your search or filters.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategory("All")
                    setSelectedTags([])
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </section>

          {/* Newsletter Signup */}
          <motion.section
            className="mt-20 p-8 bg-primary/5 rounded-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground mb-6">
                Stay updated with our latest articles, industry insights, and company news.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input type="email" placeholder="Your email address" className="flex-grow" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  )
}

