import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import { useBackground } from "@/contexts/BackgroundContext";

export default function TimelineNavButtonsMobile() {
  const { timelineNavigation } = useBackground();

  if (!timelineNavigation) return null;

  const { errorButton, handleUpAll, handleUpOne, handleDownAll, handleDownOne } = timelineNavigation;

  const navButtonErrorStyle =
    "animate-pulse !border-red-400 !bg-red-100 !text-red-600";

  return (
    <div className="navigation-area flex justify-center pb-12">
      <div className="left-navigation flex mt-4 gap-4 mr-4">
        <Button
          id="up-all"
          variant="outline"
          size="lg"
          onClick={handleUpAll}
          className={cn(errorButton === "up-all" && navButtonErrorStyle)}
        >
          <ChevronsLeftIcon /> Primeiro
        </Button>
        <Button
          id="up-one"
          variant="outline"
          size="lg"
          className={cn(
            errorButton === "up-one" && navButtonErrorStyle,
          )}
          onClick={handleUpOne}
        >
          Ant. <ChevronLeftIcon />
        </Button>
      </div>
      <div className="right-navigation flex mt-4 gap-4">
        <Button
          id="down-one"
          variant="outline"
          size="lg"
          className={cn(
            errorButton === "down-one" && navButtonErrorStyle,
          )}
          onClick={handleDownOne}
        >
          Próx.<ChevronRightIcon />
        </Button>
        <Button
          id="down-all"
          variant="outline"
          size="lg"
          onClick={handleDownAll}
          className={cn(errorButton === "down-all" && navButtonErrorStyle)}
        >
          Último <ChevronsRightIcon />
        </Button>
      </div>
    </div>
  );
}
