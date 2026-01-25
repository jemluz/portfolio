import { ReactNode } from "react";
import { Button } from "../../ui/button";
import Link from "next/link";
import {
  GithubLogoIcon,
  GlobeIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { urlToGoToButtonTypeRegex } from "./go-to-section.utils";
import {
  GoToButtonProps,
  GoToButtonType,
  GoToSectionProps,
} from "./go-to-section.types";

export function GoToSection({ goToUrls }: GoToSectionProps) {
  return (
    <div className="flex gap-2 pr-4">
      {goToUrls.map((url: string) => (
        <GoToButton key={url} url={url} />
      ))}
    </div>
  );
}

function GoToButton({ url }: GoToButtonProps) {
  const type: GoToButtonType = urlToGoToButtonTypeRegex(url);
  const renderGoToButton: ReactNode = getGoButton(type, url);

  if (type === GoToButtonType.INVALID) {
    console.error(`Invalid URL provided to GoToButton: ${url}`);
    return null;
  }

  return renderGoToButton;
}

function getGoButton(type: GoToButtonType, url: string): ReactNode {
  switch (type) {
    case GoToButtonType.GITHUB:
      return (
        <Button
          variant="outline"
          size="icon"
          className="rounded-lg cursor-pointer border- hover:bg-zinc-100"
        >
          <Link href={url} target="_blank">
            <GithubLogoIcon
              weight="duotone"
              size={32}
              color="oklch(55.2% 0.016 285.938)"
            />
          </Link>
        </Button>
      );
    case GoToButtonType.LINKEDIN:
      return (
        <Button
          variant="outline"
          size="icon"
          className="rounded-lg cursor-pointer border-blue-200 hover:bg-blue-50"
        >
          <Link href={url} target="_blank">
            <LinkedinLogoIcon
              weight="duotone"
              size={32}
              color="oklch(62.3% 0.214 259.815)"
            />
          </Link>
        </Button>
      );
    case GoToButtonType.WEBSITE:
      return (
        <Button
          variant="outline"
          size="icon"
          className="rounded-lg cursor-pointer border-violet-200 hover:bg-violet-50"
        >
          <Link href={url} target="_blank">
            <GlobeIcon
              weight="duotone"
              size={32}
              color="oklch(60.6% 0.25 292.717)"
            />
          </Link>
        </Button>
      );
    default:
      return null;
  }
}
