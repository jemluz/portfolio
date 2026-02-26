export type UserInfoProps = {
  name: string;
  lastName: string;
  profilePhotoUrl: string;
  urls: string[];
};

export type AvatarAndNameProps = Omit<UserInfoProps, "urls">;

export enum GoToButtonTypeEnum {
  GITHUB = "GITHUB",
  LINKEDIN = "LINKEDIN",
  WEBSITE = "WEBSITE",
  INVALID = "INVALID",
}

type Axis = "horizontal" | "vertical";

export type UserExternalLinksProps = {
  goToUrls: string[];
  axis?: Axis;
};

export type GoToButtonProps = {
  url: string;
  axis?: Axis;
};

export type GetGoButtonProps = {
  type: GoToButtonTypeEnum;
  url: string;
  axis?: Axis;
};
