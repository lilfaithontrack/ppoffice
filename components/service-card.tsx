import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:translate-y-[-5px]">
      <div className="mb-4 text-black">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4 text-muted-foreground">{description}</p>
      <Link href={href} className="inline-flex items-center text-black hover:underline">
        Learn More <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  )
}

