import { notFound } from 'next/navigation';
import {PROJECT} from '@/app/_utils/Constant'

export function generateStaticParams() {
  return PROJECT.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECT.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div>
      <h1>{project.title}</h1>
      {/* detailed page UI */}
    </div>
  );
}