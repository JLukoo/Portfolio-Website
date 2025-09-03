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
      videos: string[]   // still here for structure, but left empty
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
    slug: "current-project",
    title: "Current Project",
    subtitle: "Work in Progress",
    description: "Currently I am partnering with the OVA(Ontario Volleyball Association) to develop a website for their organization and develop referee resources.",
    techStack: ["Coming Soon"],
    image: "",
    bannerImage: "",
    date: "2025 - Present",
    duration: "In Progress",
    status: "In Development",
    tools: ["Coming Soon"],
    github: "#",
    liveUrl: "#",
    sections: {
      introduction: {
        motivation: "This project is currently under development. More details coming soon."
      },
      design: {
        cadRenders: [],
        goals: [
          "Project goals will be defined as development progresses"
        ],
        partsList: [
          { category: "Coming Soon", items: ["Details to be added"] }
        ]
      },
      buildProcess: {
        timeline: [
          {
            step: "Project Planning",
            description: "Project planning and development is currently in progress.",
            images: []
          }
        ]
      },
      testing: {
        videos: [],
        screenshots: [],
        problems: [
          { issue: "Project in development", solution: "Solutions will be documented as they are implemented" }
        ]
      },
      results: {
        images: [],
        videos: [],
        metrics: [
          { name: "Progress", value: "0", unit: "%" },
          { name: "Status", value: "In Development", unit: "" }
        ]
      },
      lessons: [
        "Lessons learned will be documented as the project progresses"
      ],
      resources: {
        github: "#"
      }
    }
  },
  {
    slug: "perfect-posture",
    title: "Perfect Posture",
    subtitle: "AI-Powered Posture Correction with Real-Time Webcam Analysis",
    description: "An AI-powered web app that uses a webcam and TensorFlow.js (MoveNet + Teachable Machine) to analyze body keypoints in real-time and provide posture correction feedback — all on-device for privacy.",
    techStack: ["HTML", "CSS", "JavaScript", "TensorFlow.js", "Teachable Machine"],
    image: "/assets/Harrison.png",
    bannerImage: "/assets/PostureBanner.png",
    date: "2024",
    duration: "2 months",
    status: "Completed",
    tools: ["Webcam", "TensorFlow.js", "MoveNet", "Teachable Machine", "Browser APIs"],
    github: "https://github.com/Harrywang12/perfect-posture",
    liveUrl: "#",
    sections: {
      introduction: {
        motivation: "Poor posture is a common issue affecting millions of people, especially those working long hours at computers. Me and my partner harrison wanted to create a solution that could help users improve their posture in real-time using AI, while maintaining complete privacy by processing everything locally in the browser."
      },
      design: {
        cadRenders: [],
        goals: [
          "Real-time posture detection using webcam feed",
          "Privacy-first approach with local processing",
          "Simple, accessible interface for everyday users",
          "Accurate keypoint detection and posture analysis"
        ],
        partsList: [
          { category: "Frontend", items: ["HTML5", "CSS3", "Vanilla JavaScript", "Responsive design"] },
          { category: "AI/ML", items: ["TensorFlow.js", "MoveNet model", "Teachable Machine", "Keypoint detection"] },
          { category: "Hardware", items: ["Webcam", "Browser APIs", "Local storage"] }
        ]
      },
      buildProcess: {
        timeline: [
          {
            step: "Research & Planning",
            description: "Researched TensorFlow.js capabilities and MoveNet model for pose detection. Planned the architecture for real-time processing and user interface design.",
          images: []
          
          },
          {
            step: "Model Integration",
            description: "Integrated TensorFlow.js and MoveNet model for real-time keypoint detection. Implemented Teachable Machine for posture classification.",
            images: []
          },
          {
            step: "Webcam Integration",
            description: "Set up webcam access using browser APIs and implemented real-time video processing pipeline for continuous posture monitoring.",
            images: []

          },
          {
            step: "UI Development",
            description: "Created an intuitive user interface with real-time feedback, posture indicators, and correction suggestions for optimal user experience.",
            images: []
          }
        ]
      },
      testing: {
        videos: ["/assets/TestingVid.mp4"],
        screenshots: [
          "/assets/CodeSnippet.png"
        ],
        problems: [
          { issue: "Model loading time was too slow for good user experience", solution: "Implemented progressive loading and model optimization techniques" },
          { issue: "Inconsistent keypoint detection in varying lighting conditions", solution: "Added lighting normalization and improved model confidence thresholds" },
          { issue: "Browser compatibility issues with webcam access", solution: "Added fallback mechanisms and browser detection for better compatibility" }
        ]
      },
      results: {
        images: [

        ],
        videos: ["/assets/DemoVideo.mp4"], 
        metrics: [
          { name: "Detection Accuracy", value: "95", unit: "%" },
          { name: "Processing Speed", value: "30", unit: "fps" },
          { name: "Browser Support", value: "95", unit: "%" }
        ]
      },
      lessons: [
        "TensorFlow.js requires careful optimization for real-time performance",
        "Privacy-first design significantly increases user trust and adoption",
        "Real-time video processing needs efficient memory management",
        "Browser APIs have varying levels of support across different devices"
      ],
      resources: {
        github: "https://github.com/Harrywang12/perfect-posture",
      }
    }
  },
  {
    slug: "custom-built-drone",
    title: "Custom-Built Drone: Engineering from Scratch",
    subtitle: "Complete Drone Engineering: From Flight Controller to Mechanical Frame",
    description: "I designed, engineered, and coded my drone entirely myself, without relying on online guides. From the flight controller to the mechanical frame, every component reflects my hands-on engineering and iterative problem-solving.",
    techStack: ["Flight Controller", "Embedded Systems", "CAD Design", "Electronics", "Mechanical Engineering", "C++"],
    image: "/assets/Sky.webp",
    bannerImage: "/assets/DroneBanner.webp",
    date: "2024",
    duration: "6 months",
    status: "Completed",
    tools: ["3D Printer", "Soldering Iron", "Multimeter", "CAD Software", "Microcontroller", "Oscilloscope"],
    github: "https://github.com/JLukoo/Drone",
    sections: {
      introduction: {
        motivation: "I designed, engineered, and coded my drone entirely myself. From the flight controller to the mechanical frame, every component reflects my hands-on engineering and iterative problem-solving."
      },
      design: {
        cadRenders: ["/assets/DroneCADOverview.png", "/assets/CADOfESC.png"],
        goals: [
          "Design and code a custom flight controller from scratch",
          "Create a lightweight, stable drone frame using CAD",
          "Achieve proper thrust-to-weight ratio for controlled flight",
          "Implement iterative design improvements based on testing"
        ],
        partsList: [
          { category: "Flight Controller", items: ["Seeed Studios Raspberry Pi", "Custom PCB", "Gyro sensors", "Barometer"] },
          { category: "Frame & Structure", items: ["3D printed frame", "Lightweight mounting hardware", "Custom casing design"] },
          { category: "Propulsion System", items: ["6g ESCs", "Brushless motors", "Optimized propellers", "2-cell battery"] },
          { category: "Electronics", items: ["Power distribution", "Signal processing", "Control algorithms"] }
        ]
      },
      buildProcess: {
        timeline: [
          { step: "Flight Controller Engineering", description: "I coded the entire flight controller. My first microcontroller attempt failed, so I switched to a Seed Studios Raspberry Pi, which successfully managed drone flight.", images: ["/assets/RP2040.webp"] },
          { step: "Weight and Propulsion Challenges", description: "Initial issues with incorrect propellers, heavy ESCs (~25 g each), and excessive total weight (~380 g) prevented lift. By redesigning the frame and switching to 6 g ESCs, I reduced the drone's total weight to 160 g, achieving proper thrust.", images: ["/assets/FrameV1.JPG"] },
          { step: "Electronics Setbacks", description: "A short circuit fried the original microcontroller, requiring a complete re-engineering of the control system on a new board.", images: ["/assets/FrameV2.JPG"] },
          { step: "Flight Stability Tuning", description: "After reducing weight, the drone became too light and overpowered. Switching from a 3-cell battery to a 2-cell battery and redesigning the frame balanced thrust and weight, enabling stable flight.", images: ["/assets/FrameV3.JPG"] }
        ]
      },
      testing: {
        videos: ["/assets/VeryFirstTest.MOV"],
        screenshots: [
          "/assets/CodeSnippet.png"
        ],
        problems: [
          { issue: "Initial microcontroller failure and short circuit", solution: "Switched to Seed Studios Raspberry Pi and redesigned control system" },
          { issue: "Excessive weight preventing lift", solution: "Redesigned frame and switched to lightweight 6g ESCs" },
          { issue: "Drone too light and overpowered", solution: "Switched from 3-cell to 2-cell battery for balanced thrust and weight" },
          { issue: "Incorrect propeller selection", solution: "Researched and selected optimal propellers for the motor specifications" }
        ]
      },
      results: {
        images: [
          "/assets/FinalPhoto1.jpg",
          "/assets/FinalPhoto2.jpg"
        ],
        videos: [], // removed final demo video
        metrics: [
          { name: "Final Weight", value: "160", unit: "g" },
          { name: "Weight Reduction", value: "58", unit: "%" },
          { name: "ESC Weight", value: "6", unit: "g each" },
          { name: "Flight Stability", value: "Stable", unit: "Controlled" }
        ]
      },
      lessons: [
        "Custom flight controller development requires deep understanding of embedded systems and control theory",
        "Weight optimization is critical in drone design - every gram matters",
        "Iterative design and testing is essential for complex engineering projects",
        "CAD modeling provides complete control over mechanical design and enables rapid prototyping",
        "Component selection and compatibility research saves significant time and prevents failures"
      ],
      resources: {
        github: "https://github.com/JLukoo/Drone"
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
