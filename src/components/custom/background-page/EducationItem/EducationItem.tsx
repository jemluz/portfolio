import CertificateBtn from "./CertificateBtn";
import { EducationItemProps } from "./education-item.types";
import EducationDetails from "./EducationDetails";

export default function EducationItem({
  year,
  name,
  institution,
  certificateUrl,
  institutionUrl = "#",
}: EducationItemProps) {
  return (
    <div className="flex justify-between pr-4 gap-2 md:gap-8 group">
      <EducationDetails
        year={year}
        name={name}
        institution={institution}
        institutionUrl={institutionUrl}
      />

      <CertificateBtn certificateUrl={certificateUrl} name={name} />
    </div>
  );
}
