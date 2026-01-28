import { GoToButtonType } from "./user-info.types";

/**
 * Determina o tipo de botão "Go To" baseado na URL fornecida usando expressões regulares.
 *
 * @param url - A URL a ser analisada (pode ser uma URL completa ou parcial)
 * @returns O tipo de botão correspondente: GITHUB, LINKEDIN, WEBSITE ou INVALID
 *
 * @example
 * ```ts
 * urlToGoToButtonTypeRegex("https://github.com/user") // GoToButtonType.GITHUB
 * urlToGoToButtonTypeRegex("linkedin.com/in/user")    // GoToButtonType.LINKEDIN
 * urlToGoToButtonTypeRegex("example.com")             // GoToButtonType.WEBSITE
 * urlToGoToButtonTypeRegex("not-a-url")               // GoToButtonType.INVALID
 * ```
 */
export function urlToGoToButtonTypeRegex(url: string): GoToButtonType {
  const normalizedUrl = url.toLowerCase();

  // Define regex patterns for known platforms
  const patterns: Array<{ type: GoToButtonType; regex: RegExp }> = [
    {
      type: GoToButtonType.GITHUB,
      regex: /(^|https?:\/\/|www\.)github\.com(\/|$)/i,
    },
    {
      type: GoToButtonType.LINKEDIN,
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
  if (isLikelyUrl) return GoToButtonType.WEBSITE;

  return GoToButtonType.INVALID;
}
