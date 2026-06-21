export type CertificateBtnProps = {
  openFor: string;
  certificateUrl?: string;
};

export type EducationDetailsProps = {
  year: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
};

export type EducationItemProps = {
  year: string;
  degree: string;
  institution: string;
  certificateUrl?: string;
  institutionUrl?: string;
};
