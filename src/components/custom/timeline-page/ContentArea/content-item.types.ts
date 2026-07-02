import { ColorKey } from "@/lib/constants";
import type { CareerMilestone, Project, TimelineLocale } from "@/timeline-data";

export type ContentItemProps = {
  milestone: CareerMilestone;
  isNotUniqueOrLast: boolean;
  color: ColorKey;
  isNext: boolean;
  isPrevious: boolean;
  isLastItem?: boolean;
  containerHeight?: number;
};

export type ProjectListProps = {
  projects?: { url: string; name: string }[];
};

export type ProjectButtonProps = {
  project: Project;
  isNotUniqueOrLast: boolean;
};

export type MonthBulletProps = {
  color: ColorKey;
  month: number;
  locale: TimelineLocale;
  isGrayScale?: boolean;
};

export type BulletProps = {
  isActive: boolean;
  onClick: () => void;
};

export type PeriodInfoProps = Omit<
  CareerMilestone,
  "year" | "month" | "projects" | "id" | "isCurrent" | "title" | "description"
> & {
  title: string;
  description: string;
  isInactive?: boolean;
};

export type LocationInfoProps = {
  location: string;
};

export type DurationInfoProps = {
  durationInMonths: number;
};
