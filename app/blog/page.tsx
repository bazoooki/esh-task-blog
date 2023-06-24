import getPosts from "@/lib/getPosts";
import Link from "next/link";
import Image from "next/image";


export default async function Blog () {

  const posts = await getPosts()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 my-8">
      {posts.map((post) => (
        <div key={post.id} className="p-6 bg-purple-50 bg-opacity-60 rounded-lg font-semibold flex flex-col space-y-3">
          <div className="w-full h-60 relative overflow-hidden rounded-xl">
            <Image src={`/${post.coverImage}`} priority fill alt="" style={{objectFit:"cover"}} />
          </div>
          <Link className="text-2xl" href={`/blog/${post.slug}`}>{post.title}</Link>
          <p className="text-slate-600 font-normal">
            {post.excerpt}
          </p>
        </div>
      ))}
    </div>
  )
}