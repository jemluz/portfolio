export type CompanyLogoProps = {
  company: string;
  companyLogo: string | null;
  className?: string;
};

export type CompanyInfoProps = {
  company: string;
  period: string;
  className?: string;
};

export type CompanyLocationProps = {
  location: string;
  className?: string;
};

export type CompanyHeaderProps = {
  company: string;
  companyLogo: string | null;
  period: string;
  location: string;
  className?: string;
};

export type CampanyItemRole = {
  title: string;
  startDate: string;
  endDate: string | null;
  description: {
    "en-US": string[];
    "pt-BR": string[];
  };
};

export type CampanyItemProps = {
  company: string;
  companyLogo: string | null;
  location: string;
  startDate: string;
  endDate: string | null;
  roles: CampanyItemRole[];
  className?: string;
};

export type RoleContentProps = {
  title: string;
  period: string;
  description: {
    "en-US": string[];
    "pt-BR": string[];
  };
  className?: string;
};

export type RoleHeaderProps = {
  title: string;
  period: string;
};

export type RoleItemProps = {
  title: string;
  period: string;
  description: {
    "en-US": string[];
    "pt-BR": string[];
  };
  className?: string;
};

export type KeyArchievementListProps = {
  items: string[];
  className?: string;
};
