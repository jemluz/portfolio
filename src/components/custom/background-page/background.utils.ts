function formatMonthYear(value: string, locale: string = "en-US") {
  const [year, month] = value.split("-");

  if (!year || !month) {
    return value;
  }

  const date = new Date(Number(year), Number(month) - 1, 1);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString(locale, {
    month: "short",
    year: "numeric",
  });
}

function toMonthIndex(value: string) {
  const [year, month] = value.split("-");
  const yearNumber = Number(year);
  const monthNumber = Number(month);

  if (
    !year ||
    !month ||
    Number.isNaN(yearNumber) ||
    Number.isNaN(monthNumber)
  ) {
    return null;
  }

  return yearNumber * 12 + (monthNumber - 1);
}

function capitalize(text: string) {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatExperiencePeriod(
  startDate: string,
  endDate: string | null,
  locale: string = "en-US",
) {
  const start = formatMonthYear(startDate, locale);
  const end = endDate ? formatMonthYear(endDate, locale) : "Present";
  const startMonthIndex = toMonthIndex(startDate);
  const endMonthIndex = endDate
    ? toMonthIndex(endDate)
    : new Date().getFullYear() * 12 + new Date().getMonth();

  if (startMonthIndex === null || endMonthIndex === null) {
    return `${capitalize(start)} - ${capitalize(end)}`;
  }

  const totalMonths = Math.max(0, endMonthIndex - startMonthIndex);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (locale === "en-US") {
    const yearPart = years > 0 ? `${years}yr` : "";
    const monthPart = months > 0 ? `${months} mos` : "";
    const separator = yearPart && monthPart ? " " : "";

    return `${capitalize(start)} - ${capitalize(end)} \n (${yearPart}${separator}${monthPart})`;
  }

  if (locale === "es-ES" || locale === "fr-FR" || locale === "pt-BR") {
    const yearPart = years > 0 ? `${years}a` : "";
    const monthPart = months > 0 ? `${months} m` : "";
    const separator = yearPart && monthPart ? " " : "";

    return `${capitalize(start)} - ${capitalize(end)} \n (${yearPart}${separator}${monthPart})`;
  }
}
