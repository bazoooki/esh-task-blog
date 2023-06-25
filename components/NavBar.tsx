'use client';
import Logo from "@/components/Logo";
import Link from "next/link";
import {useTranslations} from 'next-intl';
import TranslationMenu from "@/components/TranslationMenu";
import {IL} from "@/lib/lang.constant";

export default function NavBar({locale}: { locale: string }) {
  const t = useTranslations('NavBar');

  const isHebrew = locale === IL;
  return (
    <div
      className={`w-full flex justify-between items-center bg-transparent w-full z-20  px-6 py-2 ${isHebrew ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`items-center flex space-x-6 ${isHebrew ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="-mt-2">
          <Logo/>
        </div>
        <div className={`flex items-center space-x-12 pr-12 ${isHebrew ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
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
        <TranslationMenu/>
      </div>
    </div>
  )
}