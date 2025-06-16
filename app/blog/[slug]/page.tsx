import { Metadata } from "next"

interface Props {
  params: { slug: string }
}

// Optional: generate metadata for the page dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // You can fetch data here too
  return {
    title: `Blog post: ${params.slug}`,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = params

  // Fetch your data here (simulate with mock)
  // You can use `fetch()` or any data fetching method
  const post = await getPostData(slug)

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <article>{post.content}</article>
      <p className="mt-4 text-sm text-gray-500">Slug: {slug}</p>
    </main>
  )
}

// Mock fetching function — replace with your real data fetching
async function getPostData(slug: string) {
  // For example, fetch from your API or filesystem here
  return {
    title: `Blog Post: ${slug}`,
    content: `This is the content for the post with slug: ${slug}`,
  }
}
