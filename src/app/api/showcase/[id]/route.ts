import { PROJECTS } from '@/showcase-data';
import { NextResponse } from 'next/server';


export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // The params are received as a promise, so we need to await them to get the actual values.
  // We also need to parse the id as an integer, since the params are received as strings.
  const { id } = await params;
  const parsedId = Number.parseInt(id, 10);

  // If the id is not a valid number, we return a 400 Bad Request response.
  if (Number.isNaN(parsedId)) {
    return NextResponse.json({ error: 'Invalid item id' }, { status: 400 });
  }

  // We search for the item in our data source (in this case, a static array).
  const item = PROJECTS.find((item) => item.id === parsedId);

  // If the item is not found, we return a 404 Not Found response.
  if (!item) {
    return NextResponse.json({ error: 'Item not found' }, { status: 404 });
  }

  return NextResponse.json(item);
}