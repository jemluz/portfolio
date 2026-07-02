import { useLocale, useTranslations } from "next-intl";
import { SUMMARY } from "@/background-data";

export default function Title() {
  const t = useTranslations("BackgroundPage");
  const locale = useLocale();

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        {t("title")}
      </h1>
      <p className="text-md lg:text-lg text-gray-400">
        {SUMMARY.BackgroundPage[locale] ?? SUMMARY.BackgroundPage["en-US"]}
      </p>
    </section>
  );
}
