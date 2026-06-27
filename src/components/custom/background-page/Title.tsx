import { summary } from "@/background-data";

export default function Title() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Background
      </h1>
      <p className="text-md lg:text-lg text-gray-400">{summary}</p>
    </section>
  );
}
