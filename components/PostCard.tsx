import Link from "next/link";
import Image from "next/image";
import {Post} from "@/types/types";

export default function PostCard({post}: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} key={post.id} className="p-6  rounded-lg font-semibold flex flex-col space-y-3">
      <div className="w-full h-60 relative overflow-hidden rounded-xl">
        <Image src={`/${post.coverImage}`} priority fill alt="" style={{objectFit: "cover"}}/>
      </div>
      <div className="text-2xl">{post.title}</div>
      <p className="text-slate-600 font-normal">
        {post.excerpt}
      </p>
    </Link>
  )
}