import { Trophy, Play, BarChart3 } from "lucide-react"
import { Project } from "@/data/projects"

interface ProjectResultsProps {
  project: Project
}

export function ProjectResults({ project }: ProjectResultsProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Final Results</h2>
          
          {/* Performance Metrics */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Performance Metrics</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.sections.results.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 border shadow-sm text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {metric.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric.unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final Images */}
          {project.sections.results.images.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Final Product Images</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {project.sections.results.images.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-sm border"
                  >
                    <img
                      src={image}
                      alt={`Final Result ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Final Videos */}
          {project.sections.results.videos.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Play className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Final Demo Videos</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {project.sections.results.videos.map((video, index) => (
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
                        Demo Video {index + 1} - Final results showcase
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
