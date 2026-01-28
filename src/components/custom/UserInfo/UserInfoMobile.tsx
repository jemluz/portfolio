"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { GoToSection } from "./GoToSection";
import { UserInfoProps } from "./user-info.types";

export default function UserInfoMobile(userData: UserInfoProps) {
  return (
    <div id="user-info-mobile" className="user-container flex items-start justify-end h-full w-full pt-12 pr-8">
      <GrowingLine />
      <RightContainer {...userData} />
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
      <div className="h-[152px]"></div>
      <div className="w-full h-[2px] mb-4 mt-2 border-b-[2px] border-b-zinc-200"></div>
    </div>
  );
}

function RightContainer({
  name,
  lastName,
  profilePhotoUrl,
  urls,
}: UserInfoProps) {
  const nameInitials: string = `${name.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;

  return (
    <div className=" md:w-fit flex flex-col items-center justify-center md:mr-8">
      <div className="flex flex-col items-center">
        <Avatar className="w-[112px] h-[112px] mb-4 border-[3px] border-zinc-200">
          <AvatarImage src={profilePhotoUrl} />
          <AvatarFallback>{nameInitials}</AvatarFallback>
        </Avatar>
        <h2 className="w-full pr-4 text-center flex justify-end text-nowrap">
          {`${name} ${lastName}`}
        </h2>
      </div>

      <div className="w-full h-[2px] mb-4 mt-2 border-b-[2px] border-b-zinc-200"></div>

      <GoToSection goToUrls={urls} />
    </div>
  );
}
