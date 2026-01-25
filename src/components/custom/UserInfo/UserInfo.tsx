"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { GoToSection } from "./GoToSection";

type UserInfoProps = {
  name: string;
  lastName: string;
  profilePhotoUrl: string;
  urls: string[];
};

type GrowingLineProps = { hiddenOnDesktop?: boolean };

export default function UserInfo(userData: UserInfoProps) {
  return (
    <div className="user-container flex items-center justify-end h-full w-full">
      <GrowingLine />
      <RightContainer {...userData} />
      <GrowingLine hiddenOnDesktop />
    </div>
  );
}

function GrowingLine({ hiddenOnDesktop = false }: GrowingLineProps) {
  return (
    <div
      className={cn(
        `w-full flex flex-col items-center justify-center`,
        hiddenOnDesktop && "md:hidden",
      )}
    >
      <div className="h-[120px]"></div>
      <div className="w-full h-[2px] mb-4 mt-2 border-b-[2px] border-b-zinc-200"></div>
      <div className="h-[36px]"></div>
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
    <div className="min-w-[300px] md:w-fit flex flex-col items-center justify-center md:mr-8">
      <div className="flex flex-col items-center">
        <Avatar className="w-[80px] h-[80px] mb-4 border-[3px] border-zinc-200">
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
