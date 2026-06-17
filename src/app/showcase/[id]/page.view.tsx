import { notFound } from "next/navigation";
import { PROJECTS } from "@/showcase-data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ShowcasePage({ params }: PageProps) {
  const { id } = await params;

  // We need to parse the id as an integer, since the params are received as strings.
  const parsedId = Number.parseInt(id, 10);

  if (Number.isNaN(parsedId)) {
    notFound();
  }

  const item = PROJECTS.find((p) => p.id === parsedId);

  if (!item) {
    notFound();
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">{item.title}</h1>
      <p className="mt-4 text-gray-700">{item.description}</p>
      <p className="mt-2 text-sm text-gray-500">ID: {item.id}</p>
    </main>
  );
}