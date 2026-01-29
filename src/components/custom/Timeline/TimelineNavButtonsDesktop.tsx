import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  ChevronsDownIcon,
  ChevronsUpIcon,
  ChevronUpIcon,
} from "lucide-react";
import { useBackground } from "@/contexts/BackgroundContext";

export default function TimelineNavButtonsDesktop() {
  const { timelineNavigation } = useBackground();

  if (!timelineNavigation) return null;

  const { errorButton, handleUpAll, handleUpOne, handleDownAll, handleDownOne } = timelineNavigation;

  const navButtonErrorStyle =
    "animate-pulse !border-red-400 !bg-red-100 !text-red-600";

  return (
    <>
      <div className="top-navigation flex mt-4">
        <Button
          id="up-all"
          variant="outline"
          size="icon"
          onClick={handleUpAll}
          className={cn(errorButton === "up-all" && navButtonErrorStyle)}
        >
          <ChevronsUpIcon />
        </Button>
        <Button
          id="up-one"
          variant="outline"
          size="icon"
          className={cn(
            "ml-2",
            errorButton === "up-one" && navButtonErrorStyle,
          )}
          onClick={handleUpOne}
        >
          <ChevronUpIcon />
        </Button>
      </div>
      <div className="bottom-navigation flex mt-2">
        <Button
          id="down-all"
          variant="outline"
          size="icon"
          onClick={handleDownAll}
          className={cn(errorButton === "down-all" && navButtonErrorStyle)}
        >
          <ChevronsDownIcon />
        </Button>
        <Button
          id="down-one"
          variant="outline"
          size="icon"
          className={cn(
            "ml-2",
            errorButton === "down-one" && navButtonErrorStyle,
          )}
          onClick={handleDownOne}
        >
          <ChevronDownIcon />
        </Button>
      </div>
    </>
  );
}
