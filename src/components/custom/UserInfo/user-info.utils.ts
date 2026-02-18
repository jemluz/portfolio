import { GoToButtonTypeEnum } from "./user-info.types";

/**
 * Determina o tipo de botão "Go To" baseado na URL fornecida usando expressões regulares.
 *
 * @param url - A URL a ser analisada (pode ser uma URL completa ou parcial)
 * @returns O tipo de botão correspondente: GITHUB, LINKEDIN, WEBSITE ou INVALID
 *
 * @example
 * ```ts
 * urlToGoToButtonTypeRegex("https://github.com/user") // GoToButtonTypeEnum.GITHUB
 * urlToGoToButtonTypeRegex("linkedin.com/in/user")    // GoToButtonTypeEnum.LINKEDIN
 * urlToGoToButtonTypeRegex("example.com")             // GoToButtonTypeEnum.WEBSITE
 * urlToGoToButtonTypeRegex("not-a-url")               // GoToButtonTypeEnum.INVALID
 * ```
 */
export function urlToGoToButtonTypeRegex(url: string): GoToButtonTypeEnum {
  const normalizedUrl = url.toLowerCase();

  // Define regex patterns for known platforms
  const patterns: Array<{ type: GoToButtonTypeEnum; regex: RegExp }> = [
    {
      type: GoToButtonTypeEnum.GITHUB,
      regex: /(^|https?:\/\/|www\.)github\.com(\/|$)/i,
    },
    {
      type: GoToButtonTypeEnum.LINKEDIN,
      regex: /(^|https?:\/\/|www\.)linkedin\.com(\/|$)/i,
    },
  ];

  // Check against each pattern
  for (const p of patterns) {
    if (p.regex.test(normalizedUrl)) return p.type;
  }

  // If it's a valid http(s) URL or a host with dot (domain), we consider it a WEBSITE
  const isLikelyUrl =
    /^(https?:)?\/\//i.test(normalizedUrl) || /[a-z0-9-]+\.[a-z]{2,}/i.test(normalizedUrl);
  if (isLikelyUrl) return GoToButtonTypeEnum.WEBSITE;

  return GoToButtonTypeEnum.INVALID;
}
