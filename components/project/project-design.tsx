import { Target, FileImage, Package } from "lucide-react"
import { Project } from "@/data/projects"

interface ProjectDesignProps {
  project: Project
}

export function ProjectDesign({ project }: ProjectDesignProps) {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Design & Planning</h2>
          
          {/* Goals */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Project Goals</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {project.sections.design.goals.map((goal, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-4 border shadow-sm"
                >
                  <p className="text-muted-foreground">{goal}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CAD Renders */}
          {project.sections.design.cadRenders.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <FileImage className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">CAD Renders & Designs</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {project.sections.design.cadRenders.map((render, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-sm border"
                  >
                    <img
                      src={render}
                      alt={`CAD Render ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Parts List */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Package className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Parts List</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.sections.design.partsList.map((category, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 border shadow-sm"
                >
                  <h4 className="font-semibold mb-4 text-primary">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
