function formatMonthYear(value: string) {
  const [year, month] = value.split("-");

  if (!year || !month) {
    return value;
  }

  const date = new Date(Number(year), Number(month) - 1, 1);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-US", {
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

export function formatExperiencePeriod(
  startDate: string,
  endDate: string | null,
) {
  const start = formatMonthYear(startDate);
  const end = endDate ? formatMonthYear(endDate) : "Present";
  const startMonthIndex = toMonthIndex(startDate);
  const endMonthIndex = endDate
    ? toMonthIndex(endDate)
    : new Date().getFullYear() * 12 + new Date().getMonth();

  if (startMonthIndex === null || endMonthIndex === null) {
    return `${start} - ${end}`;
  }

  const totalMonths = Math.max(0, endMonthIndex - startMonthIndex);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearPart = years > 0 ? `${years}yr` : "";
  const monthPart = months > 0 ? `${months} mos` : "";
  const separator = yearPart && monthPart ? " " : "";

  return `${start} - ${end} \n (${yearPart}${separator}${monthPart})`;
}
