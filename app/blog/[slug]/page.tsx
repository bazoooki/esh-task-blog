import {Post} from "@/types/types";
import getPost from "@/lib/getPost";
import DOMPurify from 'isomorphic-dompurify';
import {Button, buttonVariants} from "@/components/Button";
import {ChevronLeftIcon} from "@heroicons/react/20/solid";
import Link from "next/link";
import {clsx} from "clsx";
import Image from "next/image";
import {Input} from "@/components/Input";

export default async function Page({params}: { params: { slug: string } }) {
  const post: Post = await getPost(params.slug)
  if (!post) {
    return <div>not found</div>
  }
  return <div className="flex flex-col space-y-4 text-xl relative">
    <div>
      <Link href="/blog" className={clsx(buttonVariants({size: 'xs', variant: 'ghost'}), '-ml-5')}>
        <ChevronLeftIcon className="w-6 h-6 "/> Back
      </Link>
    </div>
    <div className="text-4xl font-medium">{post.title}</div>
    <div className="text-sm text-slate-600 "> {post.date} · {post.author.name} {!!post?.author?.role?.length ? `, ${post.author.role}` : ''}</div>
    {post.coverImage &&
      <div className="w-full h-[300px] md:[400px] lg:h-[500px] relative rounded-2xl px-12 overflow-hidden">
        <Image src={`/${post.coverImage}`} priority fill alt="" className="object-cover"/>
      </div>}
    <div className="font-semibold pt-6">{post.excerpt}</div>
    {post.content && <div
      dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.content)}}
    />}

    <div className="flex items-center flex-col w-full">
      <div className="max-w-sm text-center w-full space-y-4 my-12">
        <div className="text-lg py-4">Stay up to date with our latest news</div>
        <div className="flex items-center relative">
          <Input placeholder="Enter your email address" />
          <Button className="relative rounded-none rounded-tr-lg rounded-br-lg -ml-2" size="lg" >SUBSCRIBE</Button></div>
        <div className="text-xs text-start">
          By submitting my email address, I agree to receive marketing emails, newsletters and updates.
        </div>
      </div>
    </div>
  </div>
}