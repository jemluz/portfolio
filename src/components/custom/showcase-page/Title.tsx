import { useTranslations } from "next-intl";

export default function Title() {
  const t = useTranslations("ShowcasePage");

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        {t("title")}
      </h1>
      <p className="text-md lg:text-lg text-gray-400">{t("description")}</p>
    </section>
  );
}
