import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import K10FootballShowcase from "@/components/projects/K10FootballShowcase";
import GenericProjectShowcase from "@/components/projects/GenericProjectShowcase";
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

  // If this is K10 Football, render the dedicated custom showcase
  if (project.slug === "k10-football" || project.id === "01") {
    return <K10FootballShowcase project={project} />;
  }

  return <GenericProjectShowcase project={project} />;
}

