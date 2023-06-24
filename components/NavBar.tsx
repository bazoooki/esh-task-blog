import Logo from "@/components/Logo";
import Link from "next/link";
import {GlobeAltIcon} from "@heroicons/react/24/outline";


export default function NavBar() {
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
            Home
          </Link>
          <Link
            href="/blog"
            className="text-sm transition-colors text-slate-900 hover:text-slate-500"
          >
            Blog
          </Link>
        </div>
      </div>
      <div>
        <GlobeAltIcon className="w-6 h-6 text-slate-600" />
      </div>
    </div>
  )
}