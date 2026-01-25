import { Background, Project } from "@/background-data";

export type ContentItemProps = {
  background: Background;
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
  isGrayScale?: boolean;
};

export type LocationInfoProps = {
  location: string;
};

export type DurationInfoProps = {
  durationInMonths: number;
};

export type ColorKey = keyof typeof colorMap;

export const colorMap = {
  red: { bg: "bg-red-200", border: "border-red-400" },
  orange: { bg: "bg-orange-200", border: "border-orange-400" },
  amber: { bg: "bg-amber-200", border: "border-amber-400" },
  yellow: { bg: "bg-yellow-200", border: "border-yellow-400" },
  lime: { bg: "bg-lime-200", border: "border-lime-400" },
  green: { bg: "bg-green-200", border: "border-green-400" },
  emerald: { bg: "bg-emerald-200", border: "border-emerald-400" },
  teal: { bg: "bg-teal-200", border: "border-teal-400" },
  cyan: { bg: "bg-cyan-200", border: "border-cyan-400" },
  sky: { bg: "bg-sky-200", border: "border-sky-400" },
  blue: { bg: "bg-blue-200", border: "border-blue-400" },
  indigo: { bg: "bg-indigo-200", border: "border-indigo-400" },
  violet: { bg: "bg-violet-200", border: "border-violet-400" },
  purple: { bg: "bg-purple-200", border: "border-purple-400" },
  fuchsia: { bg: "bg-fuchsia-200", border: "border-fuchsia-400" },
  pink: { bg: "bg-pink-200", border: "border-pink-400" },
  rose: { bg: "bg-rose-200", border: "border-rose-400" },
} as const;
