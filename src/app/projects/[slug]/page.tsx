import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import DynamicProjectShowcase from "@/components/projects/DynamicProjectShowcase";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug || project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find(
    (p) => p.slug === slug || p.id === slug
  );

  if (!project) {
    return {
      title: "Project Not Found | Pronoy Pal",
    };
  }

  return {
    title: `${project.title} — Enterprise Case Study | Pronoy Pal`,
    description: project.fullDesc || project.desc,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find(
    (p) => p.slug === slug || p.id === slug
  );

  if (!project) {
    notFound();
  }

  return <DynamicProjectShowcase project={project} />;
}

