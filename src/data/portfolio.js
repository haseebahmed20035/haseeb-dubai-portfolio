// =========================================================================
//  PORTFOLIO DATA
//  This is the ONLY file you need to edit to update your content.
//  Change the values below and the whole site updates automatically.
// =========================================================================

// ----- Personal / contact details (EDIT THESE) -----
export const profile = {
  name: "Haseeb Ahmed",
  // Rotating titles shown in the hero section
  titles: [
    "AI Automation Engineer",
    "Full-Stack Mobile Developer",
    "React Native Developer",
  ],
  location: "Lahore, Pakistan",
  email: "haseeb.ahmed20035@gmail.com",
  // Phone in international format WITHOUT +, spaces, or dashes (for WhatsApp link)
  whatsapp: "923349646308",
  // Phone shown to the reader (display only)
  phoneDisplay: "+92-334-9646308",
  github: "https://github.com/haseebahmed20035",
  linkedin: "https://linkedin.com/in/haseeb-ahmed-548b00252",
  // Resume file lives in the /public folder. Replace public/resume.pdf with
  // your own file (keep the same name) to update the download.
  resumeUrl: "/resume.pdf",
  intro:
    "I build intelligent systems and full-stack mobile apps, from agentic AI tools that turn documents into study material, to a complete university transport platform with live GPS tracking.",
};

// ----- About section paragraphs (EDIT THESE) -----
export const about = [
  "I am an AI Automation Engineer and full-stack mobile developer skilled in React Native, Node.js, Express.js, REST APIs, MySQL, and Firebase, with growing expertise in LLM integration, agentic AI, and AI workflow automation.",
  "I have built an end-to-end university transport management system as my Final Year Project, combining real-time GPS tracking, role-based authentication, and relational database design, as well as a deployed AI document-to-notes application.",
  "I am seeking roles in AI Automation, AI Integration, and Intelligent Systems Development.",
];

// ----- Core skills, grouped by category (EDIT THESE) -----
export const skills = [
  {
    category: "Mobile & Frontend",
    items: [
      "React Native (Android)",
      "React Native Maps",
      "Google Maps API",
      "Google Places Autocomplete",
      "Reverse Geocoding",
      "Cross-Platform UI/UX",
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "REST API Design & Integration",
      "Role-Based Authentication",
      "OTP Password Reset",
      "Secure API Communication",
    ],
  },
  {
    category: "Database & Cloud",
    items: [
      "MySQL",
      "Relational Database Design",
      "Foreign Key Constraints",
      "Firebase Authentication",
      "Firebase Realtime Database",
      "Cloud Services",
    ],
  },
  {
    category: "AI & Automation",
    items: [
      "Python",
      "Streamlit",
      "Hugging Face Inference API",
      "LLM Integration",
      "Agentic AI",
      "Prompt Engineering",
      "OCR (Tesseract)",
      "AI Workflow Automation",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Hugging Face Spaces",
      "Android Studio",
      "Visual Studio",
      "Microsoft SQL Server",
    ],
  },
];

// ----- Experience timeline (EDIT THESE) -----
export const experience = [
  {
    role: "Front-End Developer Intern",
    company: "ReownLogics",
    location: "Lahore, Pakistan",
    period: "May 2025 – Sep 2025",
    points: [
      "Developed and optimized responsive mobile UI components in React Native for Android applications.",
      "Integrated Firebase Authentication and Realtime Database into production apps; consumed and integrated REST APIs for dynamic data handling.",
      "Collaborated with senior developers on debugging, testing, code reviews, and deployment, improving app stability and performance.",
    ],
  },
];

// ----- Projects (EDIT THESE) -----
export const projects = [
  {
    name: "AI Notes Generator",
    tagline: "Agentic AI",
    tech: ["Python", "Streamlit", "Hugging Face API", "PyMuPDF", "Tesseract OCR", "Docker"],
    description:
      "An agentic AI web app that converts PowerPoint, PDF, and image files into study notes, summaries, exam questions, and solved case scenarios. An agent detects the file type, routes to the right extractor (with OCR for scanned files), and selects the AI task. Large files are processed in chunks for full coverage, and it is containerized with Docker and deployed on Hugging Face Spaces.",
    // OPTIONAL: add your live demo and repo links here (leave "" to hide the button)
    live: "https://huggingface.co/spaces/haseebahmed2003/ai-notes-generator",
    repo: "",
  },
  {
    name: "UOL Transportation App",
    tagline: "Final Year Project",
    tech: ["React Native", "Node.js", "Express.js", "MySQL", "Google Maps API", "REST APIs"],
    description:
      "A full-stack university transport management system for the University of Lahore with independent Admin, Student, and Driver modules. Features live bus tracking, route and stop management, transport request handling, attendance, and OTP-based authentication, backed by a normalized MySQL database with 9+ tables.",
    live: "",
    repo: "https://github.com/haseebahmed20035/UOL-Transportation-Frontend",
  },
];

// ----- Education timeline (EDIT THESE) -----
export const education = [
  {
    degree: "MS Artficial Intelligence",
    school: "LUMS",
    location: "Lahore, Pakistan",
    period: "2026 – 2028",
    detail: "CGPA: 3.29 / 4.00",
  },
  {
    degree: "BS Computer Science",
    school: "The University of Lahore",
    location: "Lahore, Pakistan",
    period: "2022 – 2026",
    detail: "CGPA: 3.29 / 4.00",
  },
];
