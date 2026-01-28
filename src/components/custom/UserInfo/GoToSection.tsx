import { ReactNode } from "react";
import { Button } from "../../ui/button";
import Link from "next/link";
import {
  GithubLogoIcon,
  GlobeIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { urlToGoToButtonTypeRegex } from "./user-info.utils";
import {
  GetGoButtonProps,
  GoToButtonProps,
  GoToButtonType,
  GoToSectionProps,
} from "./user-info.types";

export function GoToSection({ goToUrls, axis = "horizontal" }: GoToSectionProps) {
  return (
    <div className={`flex gap-2 pr-4 ${axis === "vertical" ? "flex-col" : "flex-row"}`}>
      {goToUrls.map((url: string) => (
        <GoToButton key={url} url={url} axis={axis} />
      ))}
    </div>
  );
}

function GoToButton({ url, axis }: GoToButtonProps) {
  const type: GoToButtonType = urlToGoToButtonTypeRegex(url);
  const renderGoToButton: ReactNode = getGoButton({ type, url, axis });

  if (type === GoToButtonType.INVALID) {
    console.error(`Invalid URL provided to GoToButton: ${url}`);
    return null;
  }

  return renderGoToButton;
}

function getGoButton({ type, url, axis }: GetGoButtonProps): ReactNode {
  const mobileVersion = axis === "vertical";

  switch (type) {
    case GoToButtonType.GITHUB:
      return (
        <Button
          variant="outline"
          size={mobileVersion ? "lg" : "icon"}
          className="rounded-lg cursor-pointer border- hover:bg-zinc-100"
        >
          <Link href={url} target="_blank" className="flex items-center gap-2">
            <GithubLogoIcon
              weight="duotone"
              size={32}
              color="oklch(55.2% 0.016 285.938)"
            />
            { mobileVersion && "Github" }
          </Link>
        </Button>
      );
    case GoToButtonType.LINKEDIN:
      return (
        <Button
          variant="outline"
          size={mobileVersion ? "lg" : "icon"}
          className="rounded-lg cursor-pointer border-blue-200 hover:bg-blue-50"
        >
          <Link href={url} target="_blank" className="flex items-center gap-2">
            <LinkedinLogoIcon
              weight="duotone"
              size={32}
              color="oklch(62.3% 0.214 259.815)"
            />
            { mobileVersion && "Linkedin" }
          </Link>
        </Button>
      );
    case GoToButtonType.WEBSITE:
      return (
        <Button
          variant="outline"
          size={mobileVersion ? "lg" : "icon"}
          className="rounded-lg cursor-pointer border-violet-200 hover:bg-violet-50"
        >
          <Link href={url} target="_blank" className="flex items-center gap-2">
            <GlobeIcon
              weight="duotone"
              size={32}
              color="oklch(60.6% 0.25 292.717)"
            />
          </Link>
          { mobileVersion && "Website" }
        </Button>
      );
    default:
      return null;
  }
}
