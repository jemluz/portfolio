import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center animate-fade-in-up">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">{t("title")}</h1>
        <p className="text-gray-500 leading-relaxed text-lg">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
