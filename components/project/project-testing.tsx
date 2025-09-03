import { Play, Image, AlertTriangle, CheckCircle } from "lucide-react"
import { Project } from "@/data/projects"

interface ProjectTestingProps {
  project: Project
}

export function ProjectTesting({ project }: ProjectTestingProps) {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Testing & Iteration</h2>
          
{/* Videos */}
{project.sections.testing.videos.length > 0 && (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-6">
      <Play className="h-6 w-6 text-primary" />
      <h3 className="text-2xl font-semibold">Testing Videos</h3>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {project.sections.testing.videos.map((video, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-sm border bg-muted"
        >
          <video
            src={video}
            controls
            className="w-full h-48 object-cover"
          >
            Your browser does not support the video tag.
          </video>
          <div className="p-4">
            <p className="text-sm text-muted-foreground">
              Video {index + 1} - Testing footage
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}


          {/* Screenshots */}
          {project.sections.testing.screenshots.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Image className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Testing Screenshots</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {project.sections.testing.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-sm border"
                  >
                    <img
                      src={screenshot}
                      alt={`Testing Screenshot ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problems & Solutions */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Problems & Solutions</h3>
            </div>
            <div className="space-y-6">
              {project.sections.testing.problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 border shadow-sm"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 text-destructive">Problem</h4>
                      <p className="text-muted-foreground mb-4">{problem.issue}</p>
                      
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2 text-primary">Solution</h4>
                          <p className="text-muted-foreground">{problem.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
