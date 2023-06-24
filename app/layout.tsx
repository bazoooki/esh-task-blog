import './globals.css'
import {ploni} from "@/app/fonts";
import NavBar from "@/components/NavBar";


export const metadata = {
  title: 'esh. Discover the benefits of a bank that provides a hassle-free banking experience.',
  description: 'esh. Discover the benefits of a bank that provides a hassle-free banking experience. Enjoy no-fee and high-interest accounts. Experience the future of banking with esh today.',
}

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
    <body className={ploni.className}>
    <main className="flex min-h-screen flex-col relative overflow-hidden items-center  p-6 lg:px-24 bg-fuchsia-100 bg-opacity-60">
      <NavBar/>
      <div className="flex flex-col flex-1 w-full z-10 max-w-7xl">
        <div className="flex-1 z-10 flex flex-col w-full ">
          {children}
        </div>
        <div className="py-6 border-t border-slate-900 z-10 w-full">
          <footer>footer</footer>
        </div>
      </div>
    </main>
    </body>
    </html>
  )
}
