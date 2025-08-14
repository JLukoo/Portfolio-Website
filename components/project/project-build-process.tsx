import { Clock, ArrowRight } from "lucide-react"
import { Project } from "@/data/projects"

interface ProjectBuildProcessProps {
  project: Project
}

export function ProjectBuildProcess({ project }: ProjectBuildProcessProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Build Process</h2>
          
          <div className="space-y-12">
            {project.sections.buildProcess.timeline.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < project.sections.buildProcess.timeline.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border" />
                )}
                
                <div className="flex gap-8">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">{step.step}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Images */}
                    {step.images.length > 0 && (
                      <div className="grid md:grid-cols-2 gap-4">
                        {step.images.map((image, imageIndex) => (
                          <div
                            key={imageIndex}
                            className="rounded-lg overflow-hidden shadow-sm border"
                          >
                            <img
                              src={image}
                              alt={`${step.step} - Image ${imageIndex + 1}`}
                              className="w-full h-48 object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
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
