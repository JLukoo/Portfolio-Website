import { BookOpen } from "lucide-react"
import { Project } from "@/data/projects"

interface ProjectLessonsProps {
  project: Project
}

export function ProjectLessons({ project }: ProjectLessonsProps) {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Lessons Learned</h2>
          
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold">Key Takeaways</h3>
          </div>
          
          <div className="space-y-6">
            {project.sections.lessons.map((lesson, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground leading-relaxed">
                      {lesson}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
