import {Button, buttonVariants} from "@/components/Button";
import Link from "next/link";
import {clsx} from "clsx";
import {ChevronLeftIcon} from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div className=" h-full w-full  text-center flex-1 justify-center flex flex-col flex-wrap">

      <div className="space-y-4">
        <div className="text-4xl text-slate-700  font-medium ">
          A new bank is coming
        </div>
        <Link href="/blog" className={clsx(buttonVariants({size: 'lg', variant: 'secondary'}), '-ml-5 rounded-full')}>
          Read Latest Updates
        </Link>
      </div>
    </div>
  )
}
