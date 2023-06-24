import Logo from "@/components/Logo";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full flex items-center bg-transparent w-full  space-x-6">
      <div className="-mt-2">
        <Logo/>
      </div>
      <div className="flex items-center space-x-12 ">
        <Link
          href="/"
          className="text-sm font-medium transition-colors text-slate-900 hover:text-slate-500"
        >
          Home
        </Link>
        <Link
          href="/blog"
          className="text-sm font-medium transition-colors text-slate-900 hover:text-slate-500"
        >
          Blog
        </Link>
      </div>
    </div>
  )
}