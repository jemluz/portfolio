import { resumePdfENUrl, resumePdfPTUrl } from "@/background-data";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { AlertTriangle, Download } from "lucide-react";
import { useTranslations } from "next-intl";

export default function DownloadButtons() {
  const t = useTranslations("BackgroundPage");
  const s3BucketUrl = `${env.NEXT_PUBLIC_S3_BUCKET_URL}`;

  return (
    <div className="flex flex-col mb-6 gap-2">
      <h3 className="font-semibold text-gray-700">{t("download")}</h3>

      <div className="download-buttons flex gap-2">
        <Button asChild variant="outline" className="gap-2" size={"sm"}>
          <a
            href={`${s3BucketUrl}/${resumePdfENUrl}`}
            target="_blank"
            download="resume.pdf"
            aria-label={t("downloadAriaLabel")}
          >
            <Download size={16} />
            EN (PDF)
          </a>
        </Button>

        <Button asChild variant="outline" className="gap-2" size={"sm"}>
          <a
            href={`${s3BucketUrl}/${resumePdfPTUrl}`}
            target="_blank"
            download="resume.pdf"
            aria-label={t("downloadAriaLabel")}
          >
            <Download size={16} />
            PT-BR (PDF)
          </a>
        </Button>
      </div>

      <Alert variant="warning" className="mt-2 py-1">
        <AlertTriangle className="text-amber-400 dark:text-amber-100" />
        <AlertDescription>{t("downloadWarning")}</AlertDescription>
      </Alert>
    </div>
  );
}
