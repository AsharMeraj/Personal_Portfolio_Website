import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROJECT } from '@/app/_utils/Constant';
import ProjectDetail from '../_components/WorkDetail';

export function generateStaticParams() {
  return PROJECT.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECT.find((p) => p.slug === slug);
  if (!project) return {};

  const description = Array.isArray(project.description)
    ? project.description[0]
    : project.description;

  return {
    title: project.title,
    description,
    alternates: { canonical: `/work/${slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECT.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}