import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProjectTypeEnum } from "@/types/showcase.types";

type FiltersProps = {
  setTypeFilter: (value: ProjectTypeEnum | "all") => void;
  setOrderFilter: (value: "asc" | "desc") => void;
};

export default function Filters({
  setTypeFilter,
  setOrderFilter,
}: FiltersProps) {
  return (
    <div className="sticky z-90 top-0 py-4 gap-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 w-full">
      <h3 className="text-xl font-semibold text-gray-600">Filters</h3>

      <div className="flex md:flex-row gap-8">
        <div className="flex items-center gap-2">
          <p className="text-md lg:text-lg text-gray-400">By type | </p>
          <Select
            defaultValue="all"
            onValueChange={(value) =>
              setTypeFilter(value as ProjectTypeEnum | "all")
            }
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All</SelectItem>
                {ProjectTypeEnum &&
                  Object.values(ProjectTypeEnum).map((tag) => (
                    <SelectItem key={tag} value={tag}>
                      {tag}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-md lg:text-lg text-gray-400">By order | </p>
          <Select
            defaultValue="desc"
            onValueChange={(value) => setOrderFilter(value as "asc" | "desc")}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Order" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="asc">Ascending</SelectItem>
                <SelectItem value="desc">Descending</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
