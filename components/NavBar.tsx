'use client';
import Logo from "@/components/Logo";
import Link from "next/link";
import {useTranslations} from 'next-intl';
import TranslationMenu from "@/components/TranslationMenu";

export default function NavBar() {
  const t = useTranslations('NavBar');
  return (
    <div className="w-full flex justify-between items-center bg-transparent w-full   px-6 py-2">
      <div className="items-center flex space-x-6">
        <div className="-mt-2">
          <Logo/>
        </div>
        <div className="flex items-center space-x-12 ">
          <Link
            href="/"
            className="text-sm transition-colors text-slate-900 hover:text-slate-500"
          >
            {t('home')}
          </Link>
          <Link
            href="/blog"
            className="text-sm transition-colors text-slate-900 hover:text-slate-500"
          >
            {t('blog')}
          </Link>
        </div>
      </div>
      <div>
        <TranslationMenu />
      </div>
    </div>
  )
}