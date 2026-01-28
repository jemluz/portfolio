"use client";

import { cn } from "@/lib/utils";
import { GoToSection } from "./GoToSection";
import { UserInfoProps } from "./user-info.types";
import AvatarAndName from "./AvatarAndName";

export default function UserInfoMobile(userData: UserInfoProps) {
  return (
    <div id="user-info-mobile" className="user-container flex flex-col items-center justify-end">
      <TopContainer {...userData} />
      <GrowingLine />
    </div>
  );
}

function GrowingLine() {
  return (
    <div
      className={cn(
        `w-full flex flex-col items-center justify-center`
      )}
    >
      <div className="w-full h-[2px] mb-4 mt-6 border-b-[2px] border-b-zinc-200"></div>
    </div>
  );
}

function TopContainer({
  name,
  lastName,
  profilePhotoUrl,
  urls,
}: UserInfoProps) {
  return (
    <div className="md:w-fit flex items-center justify-center gap-8 md:mr-8">
      <AvatarAndName name={name} lastName={lastName} profilePhotoUrl={profilePhotoUrl} />
      <GoToSection goToUrls={urls} axis="vertical" />
    </div>
  );
}
