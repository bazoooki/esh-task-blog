'use client';
import {buttonVariants} from "@/components/Button";
import Link from "next/link";
import {clsx} from "clsx";
import {useTranslations} from "next-intl";
import Lottie from "lottie-react";
import blob from "@/public/blob.json";
import {useEffect, useRef} from "react";
export default function Home() {
  const t = useTranslations('Home');
  const lottieRef = useRef(null);
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef?.current?.setSpeed(0.4);
    }

  }, []);
  return (
    <div className=" h-full w-full  text-center flex-1 justify-center flex flex-col flex-wrap relative">
      <div className="absolute left-0 top-0 right-0 bottom-0 z-10 lg:-translate-y-1/4 blur-2xl opacity-60">
        <Lottie lottieRef={lottieRef} animationData={blob} loop={true} />;
      </div>
      <div className="space-y-4 z-20">
        <div className="text-5xl text-slate-600  font-medium ">
          {t('title')}
        </div>
        <Link href="/blog" className={clsx(buttonVariants({size: 'lg', variant: 'secondary', className:'-ml-5 rounded-full'}))}>
          {t('readLatest')}
        </Link>
      </div>
    </div>
  )
}
