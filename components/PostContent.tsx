'use client';
import Link from "next/link";
import {clsx} from "clsx";
import {Button, buttonVariants} from "@/components/Button";
import {ChevronLeftIcon} from "@heroicons/react/20/solid";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import {Input} from "@/components/Input";
import {useTranslations} from "next-intl";
import type {Post} from "@/types/types";

export default function PostContent({post}: { post: Post }) {

  const t = useTranslations('Post')

  if (!post) {
    return <div>not found</div>
  }
  return (
    <div>
      <div className="text-start">
        <Link href="/blog" className={clsx(buttonVariants({size: 'xs', variant: 'ghost'}), '-ml-5')}>
          <ChevronLeftIcon className="w-6 h-6 "/> {t('backButton')}
        </Link>
      </div>
      <div className="text-4xl font-medium">{post.title}</div>
      <div
        className="text-sm text-slate-600 "> {post.date} · {post.author.name} {!!post?.author?.role?.length ? `, ${post.author.role}` : ''}</div>
      {
        post.coverImage &&
        <div className="w-full h-[300px] md:[400px] lg:h-[500px] relative rounded-2xl px-12 overflow-hidden">
          <Image src={`/${post.coverImage}`} priority fill alt="" className="object-cover"/>
        </div>
      }
      <div className="font-semibold pt-6">{post.excerpt}</div>
      {
        post.content && <div
          dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.content)}}
        />
      }
      <div className="flex items-center flex-col w-full">
        <div className="max-w-sm text-center w-full space-y-4 my-12">
          <div className="text-lg py-4">{t('stayUp')}</div>
          <div className="flex items-center relative">
            <Input placeholder={t('emailPlaceholder')}/>
            <Button className="relative rounded-none rounded-tr-lg rounded-br-lg -ml-2"
                    size="lg">{t('subscribe')}</Button>
          </div>
          <div className="text-xs text-start">
            {t('note')}
          </div>
        </div>
      </div>
    </div>
  )
}