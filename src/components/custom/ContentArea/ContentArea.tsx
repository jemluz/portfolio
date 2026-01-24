"use client";

import { useBackground } from "../../../contexts/BackgroundContext";
import BulletList from "./BulletList";
import { ContentList } from "./ContentList";

export default function ContentArea() {
  const { selectedYear } = useBackground();

  return (
    <div className="content-area flex flex-col self-start md:pl-6 max-h-[290px] h-[290px]">
      <h1 className="text-3xl pb-4 mb-6 sticky top-0 z-10 bg-white shadow-xs">
        {selectedYear}
      </h1>

      <div className="content-view flex justify-between max-h-[230px] h-[230px]">
        <ContentList />
        <BulletList />
      </div>
    </div>
  );
}
