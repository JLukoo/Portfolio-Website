import { Code, Database, Cpu, Palette, Globe, Zap } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML/CSS"]
  },
  {
    category: "Backend",
    icon: Database,
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"]
  },                  
  {
    category: "Hardware",
    icon: Cpu,
    skills: ["Arduino", "Raspberry Pi", "Embedded Systems", "IoT", "3D Printing"]
  },
  {
    category: "Design",
    icon: Palette,
    skills: ["Figma", "Adobe Creative Suite", "UI/UX Design", "Prototyping"]
  },
  {
    category: "DevOps",
    icon: Globe,
    skills: ["Docker", "AWS", "Vercel", "Git", "CI/CD"]
  },
  {
    category: "Other",
    icon: Zap,
    skills: ["Machine Learning", "Computer Vision", "FPV Drones", "Electronics"]
  }
]

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a full-stack developer with a passion for creating innovative solutions 
            that bridge the gap between software and hardware. With experience in both 
            web development and embedded systems, I enjoy tackling complex problems 
            and bringing ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                My journey in technology began with a curiosity about how things work. 
                This led me to explore both software development and hardware engineering, 
                giving me a unique perspective on building complete solutions.
              </p>
              <p className="text-muted-foreground">
                I believe in the power of hands-on learning and experimentation. 
                Whether it's building a drone from scratch or developing a full-stack 
                application, I approach each project with enthusiasm and attention to detail.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding or soldering, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the community.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/Jayden.jpg"
                alt="Working on projects"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-2xl">🚀</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-12">Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <skillGroup.icon className="h-6 w-6 text-primary" />
                  <h4 className="font-semibold">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
