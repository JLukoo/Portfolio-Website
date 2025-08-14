import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Your Name</h3>
            <p className="text-muted-foreground">
              Full-stack developer & hardware enthusiast
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Your Name. Built with Next.js, TypeScript, and TailwindCSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
