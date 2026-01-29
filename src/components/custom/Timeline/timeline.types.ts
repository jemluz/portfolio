export type TimelineItemProps = {
  years: number[];
};

export type YearButtonProps = {
  year: number;
  isSelected: boolean;
  onClick: (year: number) => void;
  innerRef?: (el: HTMLDivElement | null) => void;
  showError?: boolean;
};

export type YearBtnLeftBulletProps = {
  isVisible: boolean;
  showError?: boolean;
};

export type TimelineNavButtonsProps = {
  onUpAll: () => void;
  onUpOne: () => void;
  onDownAll: () => void;
  onDownOne: () => void;
  errorButton: string | null;
}
