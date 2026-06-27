import { resumePdfENUrl, resumePdfPTUrl } from "@/background-data";
import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { Download } from "lucide-react";

export default function DownloadButtons() {
  const s3BucketUrl = `${env.NEXT_PUBLIC_S3_BUCKET_URL}`;

  return (
    <div className="flex flex-col mb-6 gap-2">
      <h3 className="font-semibold text-gray-700">Download Resume</h3>

      <div className="flex gap-2">
        <Button asChild variant="outline" className="gap-2" size={"sm"}>
          <a
            href={`${s3BucketUrl}/${resumePdfENUrl}`}
            target="_blank"
            download="resume.pdf"
            aria-label="Download resume as PDF"
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
            aria-label="Download resume as PDF"
          >
            <Download size={16} />
            PT (PDF)
          </a>
        </Button>
      </div>
    </div>
  );
}
