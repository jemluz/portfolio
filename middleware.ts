import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  LOCALES,
  LOCALE_COOKIE,
  parseAcceptLanguage,
  type Locale,
} from "@/i18n/config";

export function middleware(request: NextRequest) {
  const theme = request.cookies.get("theme")?.value || "light";
  const response = NextResponse.next();
  response.headers.set("x-theme", theme);

  // Set locale cookie from Accept-Language header if not already set
  const existingLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const isValidLocale = LOCALES.includes(existingLocale as Locale);

  if (!isValidLocale) {
    const detectedLocale = parseAcceptLanguage(
      request.headers.get("accept-language") ?? "",
    );
    response.cookies.set(LOCALE_COOKIE, detectedLocale, {
      path: "/",
      maxAge: 31536000, // 1 year
    });
  }

  return response;
}
