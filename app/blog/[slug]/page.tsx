import {Post} from "@/types/types";
import getPost from "@/lib/getPost";
import DOMPurify from 'isomorphic-dompurify';

export default async function Page({ params }: { params: { slug: string } }) {
  const post:Post = await getPost(params.slug)
  if (!post) {
    return <div>not found</div>
  }
  return <div className="flex flex-col space-y-4 text-xl">
    <div>
      <button>back</button>
    </div>
    <div className="text-4xl font-medium">{post.title}</div>
    <div className="text-sm text-slate-600 "> 07/01/2023  ·  By Yuval Aloni, Co-Founder & CEO of esh Group</div>
    <div className="font-semibold pt-6">{post.excerpt}</div>
    {post.content && <div
      dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.content)}}
    /> }
  </div>
}