import createMiddleware from 'next-intl/middleware';
import {IL, EN} from "@/lib/lang.constant";

export default createMiddleware({
  locales: [EN, IL],
  defaultLocale: EN
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};