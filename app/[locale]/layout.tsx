import {ploni} from "@/app/fonts";
import {notFound} from 'next/navigation';
import {useLocale} from 'next-intl';
import {ReactNode} from 'react';
import NavBar from "@/components/NavBar";
import {NextIntlClientProvider} from 'next-intl';
import Link from "next/link";

type Props = {
  children: ReactNode;
  params: { locale: string };
};


export default async function LocaleLayout({children, params}: Props) {
  const locale = useLocale();
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html className="h-full" lang={locale}>
    <body className={ploni.className}>
    <main
      className="flex min-h-screen flex-col relative overflow-hidden items-center  p-6 lg:px-24 bg-fuchsia-100 bg-opacity-60">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <NavBar locale={locale}/>
        <div className="flex flex-col flex-1 w-full z-10 max-w-7xl">
          <div className="flex-1 z-10 flex flex-col w-full ">
            {children}
          </div>
          <div className="py-6 border-t border-slate-900 z-10 w-full">
            <footer className="flex flex-col space-y-4">
              <Link href="/policy" className="text-xs text-slate-800 hover:text-slate-600">Privacy policy</Link>
              <Link href="/policy" className="text-xs text-slate-800 hover:text-slate-600">Accessibility Statement</Link>
            </footer>
          </div>
        </div>
      </NextIntlClientProvider>
    </main>
    </body>
    </html>
  );
}