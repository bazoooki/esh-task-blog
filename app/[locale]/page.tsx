'use client';
import {buttonVariants} from "@/components/Button";
import Link from "next/link";
import {clsx} from "clsx";
import {useTranslations} from "next-intl";

export default function Home() {
  const t = useTranslations('Home');
  return (
    <div className=" h-full w-full  text-center flex-1 justify-center flex flex-col flex-wrap">
      <div className="space-y-4">
        <div className="text-4xl text-slate-700  font-medium ">
          {t('title')}
        </div>
        <Link href="/blog" className={clsx(buttonVariants({size: 'lg', variant: 'secondary'}), '-ml-5 rounded-full')}>
          {t('readLatest')}
        </Link>
      </div>
    </div>
  )
}
