// ----- Personal / contact details -----
export const profile = {
  name: "Haseeb Ahmed",
 titles: [
    "AI Automation Engineer",
    "Agentic AI Engineer",
    "Full-Stack Mobile Developer",
    "React Native Developer",
  ],
  location: "Dubai, UAE",
  visaStatus: "Family Sponsor Visa",
  email: "haseeb.ahmed20035@gmail.com",
  // Phone in international format WITHOUT +, spaces, or dashes (for WhatsApp link)
  whatsapp: "971523351306",
  phoneDisplay: "+971 52 335 1306",
  github: "https://github.com/haseebahmed20035",
  linkedin: "https://linkedin.com/in/haseeb-ahmed-548b00252",
  // Resume file lives in the /public folder. Replace public/resume.pdf with
  // your own file (keep the same name) to update the download.
  resumeUrl: "/resume.pdf",
  intro:
    "I build intelligent systems and full-stack mobile apps, from agentic AI tools that turn documents into study material, to a complete university transport platform with live GPS tracking.",
};

// ----- About section paragraphs -----
export const about = [
  "I am an AI Automation Engineer and full-stack mobile developer skilled in React Native, Node.js, Express.js, REST APIs, MySQL, and Firebase, with growing expertise in LLM integration, agentic AI, and AI workflow automation.",
  "I have built an end-to-end university transport management system as my Final Year Project, combining real-time GPS tracking, role-based authentication, and relational database design, as well as a deployed AI document-to-notes application.",
  "I am seeking roles in AI Automation, AI Integration, and Intelligent Systems Development.",
];

// ----- Core skills, grouped by category -----
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

// ----- Experience timeline -----
export const experience = [
  {
    role: "Front-End Developer Intern",
    company: "ReownLogics",
    location: "Lahore, Pakistan",
    period: "May 2025 – Sep 2025",
    points: [
      "Learned HTML, CSS, and JavaScript fundamentals, then progressed to React JS to build interactive, component-based web interfaces.",
      "Practiced converting Figma designs into responsive web pages, first with plain HTML/CSS and later by rebuilding them in React JS as skills advanced; also learned React Native and built multiple mobile app screens from Figma as practice.",
      "Collaborated with the development team on real web-based projects, translating design requirements into functional, well-structured front-end components with strong attention to detail.",
      "Demonstrated a strong work ethic and consistently delivered high-quality, polished work throughout the internship.",
    ],
  },
];

// ----- Projects -----
export const projects = [
  {
    name: "AI Notes Generator",
    tagline: "Agentic AI",
    tech: ["Python", "Streamlit", "Hugging Face API", "PyMuPDF", "Tesseract OCR", "Docker"],
    description:
      "An agentic AI web app that converts PowerPoint, PDF, and image files into study notes, summaries, exam questions, and solved case scenarios. An agent detects the file type, routes to the right extractor (with OCR for scanned files), and selects the AI task. Large files are processed in chunks for full coverage, and it is containerized with Docker and deployed on Hugging Face Spaces.",
    live: "https://huggingface.co/spaces/haseebahmed2003/ai-notes-generator",
    repo: "https://github.com/haseebahmed20035/ai-notes-generator",
  },
  {
    name: "AI Interview Coach Agent",
    tagline: "Agentic AI",
    tech: ["Python", "Streamlit", "Gemini", "ReportLab", "Hugging Face Spaces"],
    description:
      "A multi-agent (agentic AI) platform that simulates real technical and HR interviews. Specialized agents generate role-based questions, manage the interview flow, evaluate answers on correctness, clarity, completeness, and technical accuracy, and produce a final performance report with strengths, weaknesses, and personalized improvement recommendations. Includes downloadable PDF reports generated with ReportLab, deployed on Hugging Face Spaces.",
    live: "https://huggingface.co/spaces/haseebahmed2003/ai-interview-coach-agent",
    repo: "https://github.com/haseebahmed20035/ai-interview-coach-agent",
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

// ----- Education timeline -----
export const education = [
  {
    degree: "BS Computer Science",
    school: "The University of Lahore",
    location: "Lahore, Pakistan",
    period: "2022 – 2026",
    detail: "CGPA: 3.29 / 4.00",
  },
];