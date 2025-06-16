export interface TestimonialProps {
  quote: string
  author: string
  position: string
  image: string
}

export function Testimonial({ quote, author, position, image }: TestimonialProps) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image || "/placeholder.svg"} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-muted-foreground">{position}</p>
        </div>
      </div>
      <p className="italic text-muted-foreground">"{quote}"</p>
    </div>
  )
}

