// app/blog/[slug]/page.tsx

import React from 'react'

type Props = {
  params: {
    slug: string
  }
}

// Optional: dynamic metadata for the page
export async function generateMetadata({ params }: Props) {
  const { slug } = params
  return {
    title: `Blog post: ${slug}`,
    description: `Read the blog post about ${slug}.`,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = params

  // Simulate fetching blog post data, e.g. from an API or database
  // Replace this with your real data fetching logic
  const post = {
    title: `Blog Post: ${slug}`,
    content: `This is a placeholder content for the blog post with slug "${slug}".`,
  }

  return (
    <main style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>{post.title}</h1>
      <article>
        <p>{post.content}</p>
      </article>
    </main>
  )
}
