import { notFound } from "next/navigation";
import { PROJECTS } from "@/showcase-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ShowcasePage({ params }: PageProps) {
  const { slug } = await params;

  const item = PROJECTS.find((project) => project.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">{item.title}</h1>
      <p className="mt-4 text-gray-700">{item.description}</p>
      <p className="mt-2 text-sm text-gray-500">Slug: {item.slug}</p>
    </main>
  );
}
