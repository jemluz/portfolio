"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import BulletList from "./BulletList";
import ContentList from "./ContentList";
import YearTitle from "./YearTitle";
import { cn } from "@/lib/utils";

export default function ContentArea() {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <div className={cn("content-area flex flex-col self-start md:pl-6 max-h-[290px] h-[290px]", !isDesktop && "mt-6")}>
      {isDesktop && <YearTitle />}

      <div className="content-view flex justify-between max-h-[230px] h-[230px]">
        <ContentList />
        <BulletList />
      </div>
    </div>
  );
}
