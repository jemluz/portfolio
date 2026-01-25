/**
 * Maps month numbers to English month names using a numeric enum.
 * The enum values start at 1 so we can use reverse-mapping: NumberToMonth[1] === 'January'
 */
export enum NumberToMonth {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

/**
 * Convert a number (1-12) to the English month name.
 *
 * @param monthNumber - A number between 1 and 12 representing a month
 * @returns The month name (e.g. 1 -> "January") or null if the input is out of range
 */
export function numberToMonthEN(monthNumber: number): string | null {
  if (!Number.isInteger(monthNumber) || monthNumber < 1 || monthNumber > 12)
    return null;
  // Numeric enums in TS have reverse mapping: NumberToMonth[1] === 'January'
  return NumberToMonth[monthNumber] ?? null;
}

/**
 * Convert a number (1-12) to the Portuguese (pt-BR) month name.
 *
 * @param monthNumber - A number between 1 and 12 representing a month
 * @returns The month name (e.g. 1 -> "Janeiro") or null if the input is out of range
 */
export function numberToMonthPTBR(monthNumber: number): string | null {
  if (!Number.isInteger(monthNumber) || monthNumber < 1 || monthNumber > 12)
    return null;

  const monthsPTBR = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return monthsPTBR[monthNumber - 1];
}
