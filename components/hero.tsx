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
        <div className="flex flex-col items-center justify-center">
          {/* Text Content */}
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Hi, I'm{" "}
              <span className="text-primary">Jayden Li</span>
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
                <a href="https://github.com/JLukoo" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/jayden-li-36b757378/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:Lijayden2020@gmail.com">
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


        </div>
      </div>
    </section>
  )
}
