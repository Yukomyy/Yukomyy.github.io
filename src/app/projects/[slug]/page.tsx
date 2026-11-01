import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS, PROFILE_DATA } from "@/data/portfolio";
import { ProjectCaseStudyView } from "@/components/ProjectCaseStudyView";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: `Project Not Found — ${PROFILE_DATA.name}`,
    };
  }

  return {
    title: `${project.title.en} (${project.index}) — ${PROFILE_DATA.name}`,
    description: project.shortDescription.en,
    openGraph: {
      title: `${project.title.en} — Case Study by ${PROFILE_DATA.name}`,
      description: project.shortDescription.en,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudyView project={project} />;
}
