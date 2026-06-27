import { FileTag, ImageInfo } from "@/showcase-data";

export type YearAndMonthProps = {
  year: number;
  month: string;
};

export type ProjectItemInfoProps = {
  title: string;
  slug: string;
  category: string;
  description: string;
  languageStack?: string[];
  className?: string;
  webLink?: string;
  githubLink?: string;
};

export type ProjectItemImageProps = {
  images: ImageInfo[];
  title: string;
  className?: string;
  hasHoverAnimation?: boolean;
};

export type LanguageStackListProps = {
  languageStack: string[];
};

export type FileTagLinkProps = {
  key: string;
  index: number;
  language: FileTag;
  tagStepSeconds: number;
  tagCycleSeconds: number;
};

export type ProjectInfoButtonsProps = {
  githubLink?: string;
  webLink?: string;
};
