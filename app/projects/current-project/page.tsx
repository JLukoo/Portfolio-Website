"use client"

import { Header } from "@/components/header"
import { ProjectHero } from "@/components/project/project-hero"
import { getProjectBySlug } from "@/data/projects"

export default function CurrentProjectPage() {
  const project = getProjectBySlug("current-project")

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Custom Hero Section for Current Project */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back Button */}
            <div className="absolute top-6 left-6 z-10">
              <button 
                onClick={() => window.location.href = '/projects'}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </button>
            </div>
            
            <div className="mb-8">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{project.subtitle}</p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{project.description}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Work in Progress Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold mb-4">Work in Progress</h2>
              <p className="text-xl text-muted-foreground mb-8">
                This project is currently under development. More details and content will be added as the project progresses.
              </p>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-8 border-2 border-dashed border-muted-foreground/20">
              <h3 className="text-2xl font-semibold mb-4">Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                Project details, images, videos, and technical information will be documented here as development continues.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>• Project Overview</span>
                <span>• Technical Details</span>
                <span>• Development Process</span>
                <span>• Final Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
