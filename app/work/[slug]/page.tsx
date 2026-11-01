import { notFound } from 'next/navigation';
import { PROJECT } from '@/app/_utils/Constant';
import ProjectDetail from '../_components/WorkDetail';

export function generateStaticParams() {
  return PROJECT.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECT.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}