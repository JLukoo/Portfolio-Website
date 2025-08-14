export interface Project {
  slug: string
  title: string
  subtitle: string
  description: string
  techStack: string[]
  image: string
  bannerImage: string
  date: string
  duration: string
  status: string
  tools: string[]
  github?: string
  liveUrl?: string
  sections: {
    introduction: {
      motivation: string
    }
    design: {
      goals: string[]
      cadRenders: string[]
      partsList: {
        category: string
        items: string[]
      }[]
    }
    buildProcess: {
      timeline: {
        step: string
        description: string
        images: string[]
      }[]
    }
    testing: {
      videos: string[]
      screenshots: string[]
      problems: {
        issue: string
        solution: string
      }[]
    }
    results: {
      images: string[]
      videos: string[]
      metrics: {
        name: string
        value: string
        unit: string
      }[]
    }
    lessons: string[]
    resources: {
      github?: string
      partsList?: string
      configFiles?: string[]
    }
  }
}

export const projects: Project[] = [
  {
    slug: "fpv-drone-build",
    title: "FPV Drone Build",
    subtitle: "Custom Racing Drone with Advanced Flight Controller",
    description: "A complete build of a high-performance FPV racing drone with custom flight controller programming and advanced features.",
    techStack: ["Flight Controller", "ESC", "FPV Camera", "VTX", "Receiver", "Betaflight"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=400&fit=crop",
    date: "2024",
    duration: "3 months",
    status: "Completed",
    tools: ["3D Printer", "Soldering Iron", "Multimeter", "Betaflight Configurator"],
    github: "https://github.com/yourusername/fpv-drone-build",
    sections: {
      introduction: {
        motivation: "I've always been fascinated by the intersection of hardware and software in aviation. This project combines my passion for electronics, programming, and flight. The goal was to build a drone that could compete in local FPV racing events while serving as a platform for experimenting with custom flight controller algorithms."
      },
      design: {
        goals: [
          "Achieve sub-250g weight for recreational flying",
          "Implement custom PID tuning for optimal performance",
          "Create a modular design for easy maintenance",
          "Integrate advanced telemetry and logging"
        ],
        cadRenders: [
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
        ],
        partsList: [
          {
            category: "Frame",
            items: ["5-inch carbon fiber frame", "Aluminum standoffs", "Rubber grommets"]
          },
          {
            category: "Flight Controller",
            items: ["F7 flight controller", "Gyro sensor", "Barometer"]
          },
          {
            category: "Motors & ESCs",
            items: ["4x 2306 2400KV motors", "4-in-1 45A ESC", "Motor mounts"]
          },
          {
            category: "FPV System",
            items: ["FPV camera", "5.8GHz VTX", "Circular polarized antenna"]
          }
        ]
      },
      buildProcess: {
        timeline: [
          {
            step: "Frame Assembly",
            description: "Started with the carbon fiber frame, carefully aligning all components and ensuring proper spacing for optimal airflow and weight distribution.",
            images: [
              "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"
            ]
          },
          {
            step: "Electronics Installation",
            description: "Mounted the flight controller, ESCs, and power distribution board. Soldered all connections and added heat shrink for protection.",
            images: [
              "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"
            ]
          },
          {
            step: "Motor Setup",
            description: "Installed and calibrated all four motors, ensuring proper direction and smooth operation. Applied thread lock to prevent loosening during flight.",
            images: [
              "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"
            ]
          },
          {
            step: "FPV System Integration",
            description: "Mounted the camera and VTX, routing cables cleanly through the frame. Configured video settings for optimal transmission quality.",
            images: [
              "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"
            ]
          }
        ]
      },
      testing: {
        videos: [
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
        ],
        screenshots: [
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"
        ],
        problems: [
          {
            issue: "Initial PID values caused oscillation during flight",
            solution: "Gradually reduced P and I values while increasing D for better stability"
          },
          {
            issue: "VTX overheating during extended flights",
            solution: "Added additional cooling and reduced transmission power when not racing"
          },
          {
            issue: "Motor desync at high throttle",
            solution: "Upgraded ESC firmware and adjusted motor timing settings"
          }
        ]
      },
      results: {
        images: [
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
        ],
        videos: [
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
        ],
        metrics: [
          {
            name: "Weight",
            value: "248",
            unit: "g"
          },
          {
            name: "Max Speed",
            value: "85",
            unit: "km/h"
          },
          {
            name: "Flight Time",
            value: "6",
            unit: "minutes"
          },
          {
            name: "Thrust",
            value: "2.8",
            unit: "kg"
          }
        ]
      },
      lessons: [
        "Proper cable management is crucial for both aesthetics and functionality",
        "PID tuning requires patience and systematic testing",
        "Component compatibility research saves significant time during assembly",
        "Regular maintenance extends component lifespan significantly"
      ],
      resources: {
        github: "https://github.com/yourusername/fpv-drone-build",
        partsList: "https://docs.google.com/spreadsheets/d/example",
        configFiles: [
          "https://github.com/yourusername/fpv-drone-build/blob/main/betaflight-config.txt"
        ]
      }
    }
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

export function getAllProjects(): Project[] {
  return projects
}
