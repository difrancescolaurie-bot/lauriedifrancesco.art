export interface Project {
  slug: string;
  title: string;
}

export const projectOrder: Project[] = [
  { slug: 'quando-sono-qui',           title: 'Quando sono qui, non sono là' },
  { slug: 'la-mer-en-corps',           title: 'La Mer en Corps' },
  { slug: 'toward-the-blue',           title: 'Toward the Blue' },
  { slug: 'en-corps-en-la-mer',        title: 'En Corps à la Mer' },
  { slug: 'vedere-venezia',            title: 'Vedere Venezia e Non Morire' },
  { slug: 'spilling-beyond-the-lines', title: 'Spilling Beyond the Lines' },
];

export function getNextProject(currentSlug: string): Project | null {
  const i = projectOrder.findIndex(p => p.slug === currentSlug);
  if (i < 0) return null;
  return projectOrder[(i + 1) % projectOrder.length];
}
