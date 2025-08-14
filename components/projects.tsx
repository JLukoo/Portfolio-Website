import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { getAllProjects } from "@/data/projects"

export function Projects() {
  const projects = getAllProjects()

  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my passion projects that showcase my skills in both 
            software development and hardware engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.slug} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{project.date}</span>
                    <span>•</span>
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    <Button asChild>
                      <Link href={`/projects/${project.slug}`}>
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button variant="outline" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Visit My GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
