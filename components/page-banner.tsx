interface PageBannerProps {
  title: string
  description?: string
  backgroundImage?: string
}

export default function PageBanner({
  title,
  description,
  backgroundImage = "/slide-2.jpg?height=400&width=1920",
}: PageBannerProps) {
  return (
    <div
      className="relative py-20 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && <p className="text-xl max-w-3xl mx-auto">{description}</p>}
      </div>
    </div>
  )
}

