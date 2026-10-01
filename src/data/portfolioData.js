/**
 * =============================================================================
 * SOHAIL KHAN - PORTFOLIO DATA CONFIGURATION
 * =============================================================================
 * Real portfolio configuration for Sohail Khan.
 * Full Stack Laravel PHP & MERN Stack Developer.
 * =============================================================================
 */

export const portfolioData = {
  // ---------------------------------------------------------------------------
  // 1. PERSONAL DETAILS & BRANDING
  // ---------------------------------------------------------------------------
  personal: {
    name: "Sohail Khan",
    role: "Full-Stack Developer (Laravel PHP & MERN Stack)",
    tagline: "Building scalable web applications, robust REST APIs, and responsive digital solutions with Laravel & modern JavaScript.",
    availability: "Available for Freelance & Full-time Roles",
    isAvailable: true,
    location: "Dera Ismail Khan, Pakistan",
    email: "skpattan850911@gmail.com",
    whatsapp: "+92 347 0232059",
    whatsappUrl: "https://wa.me/923470232059",
    avatar: "/images/avatar.jpg",
    resumeUrl: "#contact",
    yearsOfExperience: 2,
    headlineHighlights: [
      "Specialized in Laravel (PHP), MySQL & MERN Stack (React, Node, Express, MongoDB)",
      "Engineered & deployed production systems including Hospital Management (HMS) on Railway",
      "Focused on clean MVC architecture, secure RESTful APIs, and responsive user interfaces"
    ],
    bio: [
      "Hello! I am Sohail Khan, a passionate Full-Stack Developer based in Dera Ismail Khan, Pakistan, with nearly 2 years of practical experience building and deploying end-to-end web applications.",
      "My core strengths lie in building robust, secure backend architectures using Laravel & PHP, alongside crafting fast, reactive user interfaces with React and the MERN stack.",
      "I have successfully delivered applications ranging from enterprise clinical systems and property advertisement portals to restaurant operating software and cloud-connected web tools."
    ]
  },

  // ---------------------------------------------------------------------------
  // 2. SOCIAL & CONTACT REDIRECTION CHANNELS (ICON-BASED REDIRECTION)
  // ---------------------------------------------------------------------------
  socialLinks: [
    {
      name: "WhatsApp",
      url: "https://wa.me/923470232059",
      icon: "whatsapp",
      label: "Chat on WhatsApp"
    },
    {
      name: "GitHub",
      url: "https://github.com/SohailKhan-313",
      icon: "github",
      label: "GitHub Profile"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sohail-khan-88b201375",
      icon: "linkedin",
      label: "LinkedIn Profile"
    },
    {
      name: "Email",
      url: "mailto:skpattan850911@gmail.com",
      icon: "mail",
      label: "Send Direct Email"
    }
  ],

  // ---------------------------------------------------------------------------
  // 3. KEY METRICS & EXPERIENCE HIGHLIGHTS
  // ---------------------------------------------------------------------------
  stats: [
    { value: "2", label: "Years Experience", description: "Hands-on full-stack development" },
    { value: "6+", label: "Key Projects", description: "Production & practical applications" },
    { value: "2", label: "Core Stacks", description: "Laravel PHP & MERN Stack" },
    { value: "100%", label: "Dedication", description: "Clean code & on-time delivery" }
  ],

  // ---------------------------------------------------------------------------
  // 4. TECHNICAL SKILLS & PROFICIENCY
  // ---------------------------------------------------------------------------
  skills: [
    {
      category: "Backend Development (Laravel & PHP)",
      description: "Secure, scalable server-side systems and MVC design",
      items: [
        { name: "Laravel Framework", level: 90 },
        { name: "Core PHP", level: 90 },
        { name: "RESTful API Development", level: 88 },
        { name: "Authentication, RBAC & Middleware", level: 86 },
        { name: "Blade Templating & MVC", level: 88 }
      ]
    },
    {
      category: "Frontend Development (React & Web)",
      description: "Modern, interactive, and mobile-responsive interfaces",
      items: [
        { name: "React.js", level: 88 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "HTML5 & Modern CSS3", level: 92 },
        { name: "Tailwind CSS & Bootstrap", level: 90 },
        { name: "Responsive Mobile-First UI", level: 92 }
      ]
    },
    {
      category: "MERN Stack & Node.js",
      description: "JavaScript ecosystem across client and server",
      items: [
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 84 },
        { name: "RESTful Endpoints & JSON APIs", level: 86 },
        { name: "CRUD Operations & API Testing", level: 88 }
      ]
    },
    {
      category: "Databases, Cloud & Tools",
      description: "Data modeling, version control, and cloud deployments",
      items: [
        { name: "MySQL & Relational Design", level: 88 },
        { name: "MongoDB & NoSQL", level: 80 },
        { name: "Git & GitHub Version Control", level: 88 },
        { name: "Deployment (Railway, Netlify)", level: 85 }
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  // 5. REAL PROJECTS & LIVE DEPLOYMENTS
  // ---------------------------------------------------------------------------
  projectCategories: ["All", "Laravel & PHP", "MERN Stack", "React & APIs", "Full Stack"],
  projects: [
    {
      id: "hms-portal",
      title: "Hospital Management System (HMS)",
      category: "Laravel & PHP",
      subtitle: "A comprehensive clinical and hospital portal for staff, doctors, appointments, and patient records.",
      description: "Engineered an end-to-end hospital management portal featuring multi-role authentication (admins, doctors, receptionists), appointment scheduling, digital medical records, and billing management.",
      impact: "Live in production on Railway cloud with secure authentication and multi-tier role access control.",
      image: "/images/project-analytics.jpg",
      tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "Railway Cloud", "REST API"],
      liveUrl: "https://hms-production-2e9b.up.railway.app/login",
      githubUrl: "https://github.com/SohailKhan-313",
      featured: true,
      features: [
        "Multi-role authentication & portal access (Doctor, Admin, Staff)",
        "Patient registration and medical history management",
        "Doctor appointment scheduling and status updates",
        "Live production deployment hosted on Railway Cloud"
      ]
    },
    {
      id: "school-management-system",
      title: "School Management System & Academic Portal",
      category: "Laravel & PHP",
      subtitle: "Comprehensive academic ERP for student enrollment, attendance tracking, grade reporting, and fee management.",
      description: "Architected a full-featured School Management System engineered to digitize school administration and classroom operations. Features dedicated role-based portals for administrators, teachers, parents, and students, with modules for course schedules, daily attendance records, exam grade cards, and fee receipt generation.",
      impact: "Streamlines institutional workflow, digitizes report card distribution, and reduces record lookup times by over 80%.",
      image: "/images/project-school.jpg",
      tags: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Blade"],
      liveUrl: "https://github.com/SohailKhan-313",
      githubUrl: "https://github.com/SohailKhan-313",
      featured: true,
      features: [
        "Role-based dashboards for School Admins, Teachers, Parents, and Students",
        "Student enrollment, class allocations, and profile management",
        "Daily attendance tracking with automated absence alerts and analytics",
        "Exam scheduling, mark sheets, and printable report card generation",
        "Fee collection tracker with payment receipts and billing history"
      ]
    },
    {
      id: "weather-app",
      title: "Weather Forecast Application",
      category: "React & APIs",
      subtitle: "Interactive real-time weather analytics application providing localized meteorological forecasts.",
      description: "Designed and built an intuitive, responsive weather dashboard connecting to live weather APIs with instant location search, temperature metrics, humidity, wind conditions, and dynamic weather status icons.",
      impact: "Live and deployed on Netlify with sub-second API fetch response and fluid mobile UI.",
      image: "/images/project-ai.jpg",
      tags: ["React", "JavaScript", "Weather API", "CSS3", "Netlify"],
      liveUrl: "https://wheatherappsohail.netlify.app/",
      githubUrl: "https://github.com/SohailKhan-313",
      featured: true,
      features: [
        "Real-time weather data fetching via external REST APIs",
        "Instant city/location search with error handling",
        "Dynamic conditions display (temperature, wind, humidity, weather icons)",
        "Live production deployment hosted on Netlify"
      ]
    },
    {
      id: "property-advertisement",
      title: "Property Advertisement Application",
      category: "Full Stack",
      subtitle: "Real estate listing platform connecting buyers, sellers, and agents with interactive property discovery.",
      description: "Developed a property advertisement web application allowing users to browse, filter, and post residential and commercial property listings with pricing, specifications, and direct agent inquiries.",
      impact: "Engineered high-performance relational database schemas for listings, categories, and contact leads.",
      image: "/images/project-fintech.jpg",
      tags: ["Laravel", "PHP", "React", "MySQL", "Tailwind CSS"],
      liveUrl: "https://github.com/SohailKhan-313",
      githubUrl: "https://github.com/SohailKhan-313",
      featured: true,
      features: [
        "Property filtering by location, price range, and property type",
        "Seller listing dashboard with image uploads and specifications",
        "Direct inquiry connection between buyers and listing owners",
        "Responsive grid design optimized for mobile and desktop"
      ]
    },
    {
      id: "restaurant-management",
      title: "Restaurant Management System",
      category: "Laravel & PHP",
      subtitle: "All-in-one platform managing restaurant tables, digital food menus, kitchen orders, and bills.",
      description: "Designed a centralized restaurant operating system providing digital menu management, table reservations, live kitchen order tickets, and customer billing.",
      impact: "Streamlines dining room turnover and order accuracy with clear status tracking.",
      image: "/images/project-analytics.jpg",
      tags: ["Laravel", "PHP", "MySQL", "JavaScript", "REST APIs"],
      liveUrl: "https://github.com/SohailKhan-313",
      githubUrl: "https://github.com/SohailKhan-313",
      featured: true,
      features: [
        "Digital menu management with dish categories and pricing",
        "Table reservation system and seating status tracker",
        "Order generation, bill calculation, and invoice printing",
        "Admin dashboard for sales and inventory monitoring"
      ]
    },
    {
      id: "notes-app",
      title: "Modern Notes Application",
      category: "MERN Stack",
      subtitle: "Minimalist, distraction-free digital notepad with categorization, tags, and search.",
      description: "Created an agile notes application offering instant text note creation, category sorting, search-as-you-type, and persistent data storage.",
      impact: "Provides a clean, lightweight personal productivity workspace with zero clutter.",
      image: "/images/project-ai.jpg",
      tags: ["React", "Node.js", "Express", "MongoDB", "CSS"],
      liveUrl: "https://github.com/SohailKhan-313",
      githubUrl: "https://github.com/SohailKhan-313",
      featured: true,
      features: [
        "Instant note creation, editing, and deletion (CRUD)",
        "Live keyword search and category tag filtering",
        "Responsive minimalist UI designed for fast capture",
        "Secure backend storage and RESTful endpoints"
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  // 6. WORK EXPERIENCE & CAREER TIMELINE
  // ---------------------------------------------------------------------------
  experience: [
    {
      role: "Full-Stack Developer (Laravel & MERN)",
      company: "Software Development & Client Projects",
      period: "2023 - Present (Almost 2 Years)",
      location: "Dera Ismail Khan, Pakistan (Remote & Freelance)",
      type: "Full-Stack Engineer",
      description: "Designing, building, and deploying real-world web applications for clients and personal initiatives.",
      achievements: [
        "Architected and deployed a multi-tier Hospital Management System (HMS) live on Railway Cloud with role-based portal access.",
        "Built responsive, modern web applications including a live Weather app (Netlify), School Management System, Property Advertisement portal, and Restaurant system.",
        "Constructed clean, secure RESTful APIs using Laravel (PHP) and Node.js/Express, integrated with MySQL and MongoDB.",
        "Maintained complete codebases using Git version control and handled cloud deployments on Railway and Netlify."
      ],
      technologies: ["Laravel", "PHP", "React", "Node.js", "MySQL", "MongoDB", "Tailwind CSS", "Git"]
    }
  ],

  // ---------------------------------------------------------------------------
  // 7. SERVICES & WHAT SOHAIL OFFERS
  // ---------------------------------------------------------------------------
  services: [
    {
      icon: "server",
      title: "Laravel & PHP Web Applications",
      description: "Custom backend architectures, secure user authentication (RBAC), database schemas, and admin dashboards built with Laravel & PHP."
    },
    {
      icon: "layout",
      title: "MERN Stack Development",
      description: "Modern, reactive full-stack web applications combining React.js frontend interfaces with Node.js, Express, and MongoDB."
    },
    {
      icon: "database",
      title: "RESTful API & Database Design",
      description: "Designing structured REST APIs for web and mobile apps, with optimized database queries in MySQL and MongoDB."
    },
    {
      icon: "zap",
      title: "Cloud Deployment & Bug Fixing",
      description: "Deploying applications to platforms like Railway and Netlify, configuring environment variables, and troubleshooting web applications."
    }
  ],

  // ---------------------------------------------------------------------------
  // 8. FREQUENTLY ASKED QUESTIONS (FAQ)
  // ---------------------------------------------------------------------------
  faqs: [
    {
      question: "What technologies and stacks do you specialize in?",
      answer: "I specialize in Laravel (PHP) and MySQL for robust backend web development, as well as the MERN stack (MongoDB, Express, React, Node.js) for full-stack JavaScript applications."
    },
    {
      question: "Are you available for freelance projects or full-time roles?",
      answer: "Yes! I am actively available for freelance web development projects, contract work, and full-time remote developer positions."
    },
    {
      question: "How can I contact you directly?",
      answer: "You can click on the WhatsApp icon to message me immediately at 03470232059, or click the Email icon to send me a message directly at skpattan850911@gmail.com."
    },
    {
      question: "Can I inspect the live demos and code of your projects?",
      answer: "Absolutely! The Hospital Management System (HMS) is live on Railway, the Weather App is live on Netlify, and the repositories are accessible on my GitHub profile."
    }
  ]
};
