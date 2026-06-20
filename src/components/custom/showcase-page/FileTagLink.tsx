import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

import { FileTagLinkProps } from "./showcase.types";

/**
 * Renders a clickable technology tag that opens the official documentation
 * in a new tab.
 *
 * The link animation is staggered per item so the tag list does not pulse
 * in sync when multiple tags are rendered together.
 */
export default function FileTagLink({
  language,
  index,
  tagStepSeconds,
  tagCycleSeconds,
}: FileTagLinkProps) {
  console.log(language);
  const { style, link, label } = language;

  return (
    <li
      className={cn(
        "list-none px-3 py-1 rounded-md text-[13px] font-bold font-mono tracking-wider border-transparent border-1",
        style,
      )}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "no-underline text-inherit inline-block animate-pulse animation-fill-mode:both ",
        )}
        style={
          {
            // Offset each tag pulse so repeated tags animate with a stagger.
            animationDelay: `${index * tagStepSeconds}s`,
            animationDuration: `${tagCycleSeconds}s`,
          } as CSSProperties
        }
        aria-label={`Abrir documentacao de ${label}`}
      >
        .{label}
      </a>
    </li>
  );
}
