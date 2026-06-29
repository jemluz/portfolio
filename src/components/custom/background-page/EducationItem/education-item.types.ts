export type CertificateBtnProps = {
  name: {
    [key: string]: string;
  };
  certificateUrl?: string;
};

export type EducationDetailsProps = {
  year: string;
  name: {
    [key: string]: string;
  };
  institution: {
    [key: string]: string;
  };
  institutionUrl?: string;
};

export type EducationItemProps = {
  year: string;
  name: {
    [key: string]: string;
  };
  institution: {
    [key: string]: string;
  };
  certificateUrl?: string;
  institutionUrl?: string;
};
