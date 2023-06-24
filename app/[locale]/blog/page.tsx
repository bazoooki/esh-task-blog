import getPosts from "@/lib/getPosts";
import PostCard from "@/components/PostCard";


export default async function Blog() {

  const posts = await getPosts()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 my-4 lg:my-8">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  )
}