import Link from "next/link"
import { ArrowLeft, Calendar, Clock, CheckCircle, Wrench } from "lucide-react"
import { Button } from "../ui/button"
import { Project } from "@/data/projects"

interface ProjectHeroProps {
  project: Project
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative">
      {/* Banner Image */}
      <div className="h-96 md:h-[500px] relative overflow-hidden">
        <img
          src={project.bannerImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Back Button */}
      <div className="absolute top-6 left-6">
        <Button variant="secondary" size="sm" asChild>
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-end">
        <div className="container px-4 pb-8">
          <div className="bg-background/95 backdrop-blur rounded-lg p-6 md:p-8 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.subtitle}</p>
            
            {/* Quick Info Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{project.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{project.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{project.status}</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{project.tools.length} tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
