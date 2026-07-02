"use client";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import BulletList from "./BulletList";
import ContentList from "./ContentList";
import YearTitle from "./YearTitle";

export default function ContentArea() {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <div
      className={cn(
        "content-area timeline-content-area-size flex flex-col self-start md:pl-6",
        !isDesktop && "mt-6",
      )}
    >
      {isDesktop && <YearTitle />}

      <div className="content-view timeline-content-view-size flex justify-between">
        <ContentList />
        <BulletList />
      </div>
    </div>
  );
}
