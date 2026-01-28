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

type Axis = "horizontal" | "vertical";

export type GoToSectionProps = {
  goToUrls: string[];
  axis?: Axis;
};

export type GoToButtonProps = {
  url: string;
  axis?: Axis;
};

export type GetGoButtonProps = {
  type: GoToButtonType;
  url: string;
  axis?: Axis;
};
