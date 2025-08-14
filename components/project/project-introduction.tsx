import { Project } from "@/data/projects"

interface ProjectIntroductionProps {
  project: Project
}

export function ProjectIntroduction({ project }: ProjectIntroductionProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Introduction & Motivation</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {project.sections.introduction.motivation}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
