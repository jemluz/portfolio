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
