# Professional Developer Portfolio

A modern, high-performance developer portfolio built with **React**, **Vite**, and **Vanilla CSS**. Engineered specifically for elite software engineers, architects, and technical leaders who value clean architecture, rapid customization, and rich visual aesthetics.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🛠️ How to Customize (Easy 1-File Setup)

All website content, biography, skills, projects, and contact channels are decoupled from the UI code and centralized inside:
👉 **[`src/data/portfolioData.js`](src/data/portfolioData.js)**

### 1. Update Personal Info
Open `src/data/portfolioData.js` and modify the `personal` object:
```javascript
personal: {
  name: "Your Name",
  role: "Your Title (e.g. Senior Frontend Engineer)",
  tagline: "Your personal tagline or engineering focus",
  email: "your.email@example.com",
  location: "Your City, Country / Remote",
  avatar: "/images/avatar.jpg",
  resumeUrl: "https://your-resume-link.pdf",
  // ...
}
```

### 2. Add or Edit Projects
Add your project objects to the `projects` array:
```javascript
{
  id: "my-project-slug",
  title: "Project Name",
  category: "Full Stack", // Must match one of projectCategories
  subtitle: "Brief one-line summary",
  description: "Detailed description of the problem and engineering solution",
  impact: "+150% query speedup or 50k MAU",
  image: "/images/your-project-image.jpg",
  tags: ["React", "TypeScript", "Node.js"],
  liveUrl: "https://yourdemo.com",
  githubUrl: "https://github.com/yourhandle/project",
  features: [
    "Key architectural highlight 1",
    "Key architectural highlight 2"
  ]
}
```

### 3. Update Skills & Proficiency
Add or reorder skill categories and percentage proficiencies inside the `skills` array.

### 4. Work Experience & Career Timeline
Add your previous and current companies, roles, dates, and bulleted achievements in the `experience` array.

---

## 🎨 Visual Features Included
- **Dark Obsidian Theme (Default)**: Sleek, high-contrast palette preferred by top tech engineers at Stripe, Vercel, Linear, and GitHub.
- **Light Theme Toggle**: Seamless switch between dark and light modes with state persistence.
- **Interactive Project Showcase**: Filter projects by domain + full case study modal window.
- **Interactive Contact Form**: Instant validation and feedback toast notifications + one-click copy email button.
- **Responsive Mobile Navigation**: Fluid slide-down mobile menu and smooth section scrolling.
- **Zero External UI Dependency**: Handcrafted SVG icon system (`src/components/Icons.jsx`) ensures zero bundle bloat and zero npm version breakage.

---

## 📁 Project Architecture

```
protfolio/
├── public/
│   └── images/              # Avatar portrait and project mockups
│       ├── avatar.jpg
│       ├── project-analytics.jpg
│       ├── project-ai.jpg
│       └── project-fintech.jpg
├── src/
│   ├── components/          # Reusable, modular UI components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Icons.jsx        # Handcrafted SVG icons
│   │   ├── Navbar.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Projects.jsx
│   │   ├── ServicesAndFAQ.jsx
│   │   ├── Skills.jsx
│   │   └── Toast.jsx
│   ├── data/
│   │   └── portfolioData.js # 🌟 Centralized single-source of content
│   ├── App.jsx              # Main application orchestrator
│   ├── index.css            # Complete design system tokens & styles
│   └── main.jsx             # React entry point
├── index.html               # Semantic HTML5 & Google Fonts
├── package.json             # React 18 & Vite configuration
└── vite.config.js           # Vite dev server configuration
```
