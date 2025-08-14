"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { Button } from "./ui/button"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Hi, I'm{" "}
              <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              A passionate developer and maker who loves building things that matter. 
              From software to hardware, I enjoy bringing ideas to life.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Currently focused on full-stack development, embedded systems, and 
              exploring the intersection of technology and creativity.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:your.email@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* CTA Button */}
            <Button onClick={scrollToAbout} className="group">
              Learn More About Me
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Profile Picture */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-lg">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
