import {Post} from "@/types/types";
import getPost from "@/lib/getPost";
import PostContent from "@/components/PostContent";

export default async function Post({params}: { params: { slug: string } }) {
  const post: Post = await getPost(params.slug)

  if (!post) {
    return <div>not found</div>
  }

  return <div className="flex flex-col space-y-4 text-xl relative">
    <PostContent post={post} />
  </div>
}