import { memo } from "react";

import { cn } from "@/lib/utils";
import { UserExternalLinks } from "./UserExternalLinks";
import { UserInfoProps } from "./user-info.types";
import AvatarAndName from "./AvatarAndName";

function UserInfoDesktop(userData: UserInfoProps) {
  return (
    <div
      id="user-info-desktop"
      className="user-area flex items-start justify-end h-full w-full pt-12 pr-8"
    >
      <GrowingLine />
      <RightContainer {...userData} />
    </div>
  );
}

function GrowingLine() {
  return (
    <div className={cn(`w-full flex flex-col items-center justify-center`)}>
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
  return (
    <div className=" md:w-fit flex flex-col items-center justify-center md:mr-8">
      <AvatarAndName
        name={name}
        lastName={lastName}
        profilePhotoUrl={profilePhotoUrl}
      />

      <div className="w-full h-[2px] mb-4 mt-2 border-b-[2px] border-b-zinc-200"></div>

      <UserExternalLinks goToUrls={urls} />
    </div>
  );
}

export default memo(UserInfoDesktop);
