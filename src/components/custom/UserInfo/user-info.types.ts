export type UserInfoProps = {
  name: string;
  lastName: string;
  profilePhotoUrl: string;
  urls: string[];
};

export enum GoToButtonType {
  GITHUB,
  LINKEDIN,
  WEBSITE,
  INVALID,
}

export type GoToSectionProps = {
  goToUrls: string[];
};

export type GoToButtonProps = {
  url: string;
};
