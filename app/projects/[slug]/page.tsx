import { notFound } from "next/navigation"
import { getProjectBySlug } from "@/data/projects"
import { ProjectHero } from "@/components/project/project-hero"
import { ProjectIntroduction } from "@/components/project/project-introduction"
import { ProjectDesign } from "@/components/project/project-design"
import { ProjectBuildProcess } from "@/components/project/project-build-process"
import { ProjectTesting } from "@/components/project/project-testing"
import { ProjectResults } from "@/components/project/project-results"
import { ProjectLessons } from "@/components/project/project-lessons"
import { ProjectResources } from "@/components/project/project-resources"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <ProjectHero project={project} />
      <ProjectIntroduction project={project} />
      <ProjectDesign project={project} />
      <ProjectBuildProcess project={project} />
      <ProjectTesting project={project} />
      <ProjectResults project={project} />
      <ProjectLessons project={project} />
      <ProjectResources project={project} />
    </main>
  )
}
