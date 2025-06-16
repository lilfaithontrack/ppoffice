
import { GetServerSideProps } from "next"

interface BlogPostProps {
  slug: string
  title: string
  content: string
}

export default function BlogPostPage({ slug, title, content }: BlogPostProps) {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <article>{content}</article>
      <p className="mt-4 text-sm text-gray-500">Slug: {slug}</p>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string }

  // Fetch your post data here (mock example)
  const post = {
    title: `Blog Post: ${slug}`,
    content: `This is the content for the post with slug: ${slug}`,
  }

  return {
    props: {
      slug,
      title: post.title,
      content: post.content,
    },
  }
}
