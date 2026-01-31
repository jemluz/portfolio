"use client";

import BulletList from "./BulletList";
import ContentList from "./ContentList";
import YearTitle from "./YearTitle";

export default function ContentArea() {

  return (
    <div className="content-area flex flex-col self-start md:pl-6 max-h-[290px] h-[290px]">
      <YearTitle />

      <div className="content-view flex justify-between max-h-[230px] h-[230px]">
        <ContentList />
        <BulletList />
      </div>
    </div>
  );
}
