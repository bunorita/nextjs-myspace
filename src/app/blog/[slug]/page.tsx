// export const dynamic = 'force-dynamic'

type Post = {
  title: string
  slug: string
  content: string
}

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/api/content')
  const posts = (await res.json()) as Post[]
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const res = await fetch('http://localhost:3000/api/content', {
    // cache: 'no-cache',
  })
  const posts = (await res.json()) as Post[]
  const post = posts.find((post) => post.slug === params.slug)! // TODO: post might be undefined
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
