import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const locales = ["pt-BR", "en-US", "es-ES", "fr-FR"];
const defaultLocale = "pt-BR";

export default function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: "never",
  });

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
