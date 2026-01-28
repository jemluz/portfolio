import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AvatarAndNameProps = {
  name: string;
  lastName: string;
  profilePhotoUrl: string;
};

export default function AvatarAndName({ name, lastName, profilePhotoUrl }: AvatarAndNameProps) {
  const nameInitials: string = `${name.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;

  return (
    <div className="flex flex-col items-center">

      <Avatar className="w-[112px] h-[112px] mb-4 border-[3px] border-zinc-200">
        <AvatarImage src={profilePhotoUrl} />
        <AvatarFallback>{nameInitials}</AvatarFallback>
      </Avatar>

      <h2 className="w-full pr-4 text-center flex justify-end text-nowrap">
        {`${name} ${lastName}`}
      </h2>

    </div>
  );
}