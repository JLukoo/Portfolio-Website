import { Github, ExternalLink, FileText, Settings } from "lucide-react"
import { Button } from "../ui/button"
import { Project } from "@/data/projects"

interface ProjectResourcesProps {
  project: Project
}

export function ProjectResources({ project }: ProjectResourcesProps) {
  const { resources } = project.sections

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Links & Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* GitHub Repository */}
            {resources.github && (
              <div className="bg-card rounded-lg p-6 border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Github className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">GitHub Repository</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  View the complete source code, documentation, and project files.
                </p>
                <Button asChild>
                  <a href={resources.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            )}

            {/* Parts List */}
            {resources.partsList && (
              <div className="bg-card rounded-lg p-6 border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Parts List</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Complete list of components and materials used in this project.
                </p>
                <Button variant="outline" asChild>
                  <a href={resources.partsList} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    View Parts List
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            )}

            {/* Configuration Files */}
            {resources.configFiles && resources.configFiles.length > 0 && (
              <div className="bg-card rounded-lg p-6 border shadow-sm md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Configuration Files</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Important configuration files and settings used in this project.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {resources.configFiles.map((file, index) => (
                    <Button key={index} variant="outline" asChild>
                      <a href={file} target="_blank" rel="noopener noreferrer">
                        <Settings className="mr-2 h-4 w-4" />
                        Config File {index + 1}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Additional Resources Note */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Need help with a similar project? Feel free to reach out for guidance or collaboration!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
