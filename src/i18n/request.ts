import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import {
  LOCALES,
  LOCALE_COOKIE,
  parseAcceptLanguage,
  type Locale,
} from "./config";

export {
  LOCALES,
  LOCALE_COOKIE,
  parseAcceptLanguage,
  type Locale,
} from "./config";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const headersList = await headers();

  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
  const isValidCookieLocale = LOCALES.includes(cookieLocale as Locale);

  const locale: Locale = isValidCookieLocale
    ? (cookieLocale as Locale)
    : parseAcceptLanguage(headersList.get("accept-language") ?? "");

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
