import { useBackground } from "@/contexts/BackgroundContext";

export default function YearTitle() {
  const { selectedYear } = useBackground();

  return (
    <h1 className="text-3xl pb-4 mb-6 sticky top-0 z-10 bg-white shadow-xs">
        {selectedYear}
      </h1>
  );
}
