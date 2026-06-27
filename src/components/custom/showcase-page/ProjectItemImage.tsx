import Image from "next/image";

import { env } from "@/env";
import { cn } from "@/lib/utils";
import { ProjectItemImageProps } from "./showcase.types";

/**
 * Renders the project preview image using the first available screenshot.
 *
 * Transparent images keep a clean background, while non-transparent images
 * get a framed card treatment for better contrast.
 */
export default function ProjectItemImage({
  images,
  title,
  className,
  hasHoverAnimation = true,
}: ProjectItemImageProps) {
  const s3BucketUrl = env.NEXT_PUBLIC_S3_BUCKET_URL;

  // The showcase uses the first image as the main preview.
  const img = images[0];

  // Transparent assets should blend with the page background.
  const transparentBgStyle = img.isTransparent
    ? "bg-transparent"
    : "border-2 border-white shadow-lg rounded-lg";

  const hoverAnimationStyle = hasHoverAnimation
    ? "transform-gpu origin-center transition-transform duration-300 ease-out hover:-rotate-[3deg] hover:scale-[1.03]"
    : "";

  if (!img?.src) {
    return (
      <figure className={className}>
        <div className="w-full aspect-[16/10] rounded-lg border-2 border-dashed border-zinc-200 bg-zinc-50" />
      </figure>
    );
  }

  return (
    <figure className={className}>
      <Image
        // Images are stored in S3 and served from the configured bucket URL.
        src={`${s3BucketUrl}/${img.src}`}
        alt={`${title} screenshot`}
        width={760}
        height={475}
        className={cn(
          "project-item-image object-cover ",
          transparentBgStyle,
          hoverAnimationStyle,
        )}
      />
    </figure>
  );
}
