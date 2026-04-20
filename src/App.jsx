import { useState, useEffect } from "react"
import {
  Globe,
  User,
  Mail,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Layout,
  GitBranch,
  Cpu,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
} from "lucide-react"

const personalInfo = {
  name: "Nishanth.k",
  role: "Full Stack Developer",
  sub: "Third-year CS Undergraduate · AI Integration · Product Builder",
  location: "Chennai, India",
  email: "nis380639@gmail.com",
  github: "https://github.com/NishanthKamalakkannan",
  linkedin: "https://www.linkedin.com/in/nishanth-kamalakkannan-b44b89327/",
}

const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "HTML", "CSS"], icon: Code2 },
  { category: "Frameworks", items: ["React", "FastAPI", "Express.js", "Tailwind CSS", "Node.js"], icon: Layout },
  { category: "Databases", items: ["MongoDB"], icon: Database },
  { category: "Tools", items: ["Git", "GitHub", "Vercel", "Render"], icon: GitBranch },
  { category: "AI & APIs", items: ["JWT Auth", "REST APIs", "Grok AI", "Groq API", "LLM Integration"], icon: Cpu },
]

const projects = [
  {
    title: "GigInsure",
    tag: "Hackathon Project",
    tagColor: "#f59e0b",
    description:
      "AI-powered parametric insurance platform for food delivery gig workers. Built for Guidewire DEV Trails Hackathon with automated claims processing and fraud detection.",
    tech: ["React", "FastAPI", "MongoDB", "Groq API", "OpenWeatherMap", "Razorpay", "JWT"],
    features: ["5 automated parametric triggers", "Zero-touch claims", "AI dynamic pricing", "Fraud detection", "Live risk heatmap"],
    link: "https://github.com/NishanthKamalakkannan/giginsure",
    deployed: "gig-insure-five.vercel.app",
    accent: "#f59e0b",
  },
  {
    title: "FranchiseBridge",
    tag: "Full Stack App",
    tagColor: "#06b6d4",
    description:
      "AI-powered franchise discovery platform helping first-time entrepreneurs find the right business opportunities with intelligent recommendations.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Grok AI", "JWT", "Tailwind CSS"],
    features: ["AI recommendations", "Multi-turn chat advisor", "90-day launch roadmap", "Side-by-side comparison", "Dual role system"],
    link: "https://github.com/NishanthKamalakkannan/Franchisebridge",
    deployed: "franchisebridge.vercel.app",
    accent: "#06b6d4",
  },
  {
    title: "FlowEngine.HR",
    tag: "Production Grade",
    tagColor: "#a855f7",
    description:
      "Production-grade visual HR workflow designer for building, validating and simulating internal HR workflows using an interactive drag-and-drop canvas.",
    tech: ["React", "TypeScript", "React Flow", "Zustand", "Dagre", "Tailwind CSS", "Vitest", "Zod"],
    features: ["Drag-and-drop builder", "6 custom node types", "Graph validation engine", "Live simulation sandbox", "Undo/Redo support"],
    link: "https://github.com/NishanthKamalakkannan/flow-engine-hr",
    deployed: "flow-engine-hr.vercel.app",
    accent: "#a855f7",
  },
  {
    title: "EV Demand Forecasting & Infrastructure Planning System",
    tag: "Research Project",
    tagColor: "#22c55e",
    description:
      "Built a county-level EV demand forecasting and infrastructure planning system using large-scale historical registration and demographic datasets.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Statsmodels", "Power BI", "Matplotlib"],
    features: [
      "Comprehensive EDA and feature engineering for adoption drivers",
      "ARIMA and XGBoost forecasting for short and long-term trends",
      "Scenario simulations with policy, income, and infrastructure assumptions",
      "Interactive dashboards for planning and capital allocation",
      "Actionable demand-supply optimization insights",
    ],
    link: "#",
    deployed: "Nov 2025 - Jan 2026",
    accent: "#22c55e",
  },
]

const certifications = [
  { title: "SalesForce Certified Agent Specialist", issuer: "SalesForce" },
  { title: "Google Analytics Certification", issuer: "Google" },
  { title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", issuer: "Oracle" },
  { title: "Oracle Fusion Cloud Applications ERP Process Essentials Certified - Rel 1", issuer: "Oracle" },
  { title: "Artificial Intelligence: Digital Skills", issuer: "Accenture" },
  { title: "AI/ML AWS Udacity Scholar Program", issuer: "AWS" },
  { title: "Cisco Academy Certification", issuer: "Cisco" },
  { title: "MATLAB Onramp", issuer: "Mathworks" },
]

const competitions = [
  {
    title: "InfraMarket 2K25 Hackathon - Runner Up",
    org: "St. Peter's Institute of Higher Education and Research (with Bisleri Pvt. Ltd. and Institution's Innovation Council)",
    date: "Oct 2025",
    highlights: [
      "Designed and deployed an AI-powered dashboard to optimize EV charging station placement using adoption trends and grid load forecasts",
      "Built predictive models across 270+ counties using 7 years of historical data",
      "Integrated OpenAI GPT for Q&A, scenario narration, and executive summary generation",
      "Enabled what-if simulations and demand heatmaps for infrastructure decisions",
    ],
    tech: ["Python", "Streamlit", "OpenAI API (GPT)", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "GitHub"],
  },
]

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  useScrollReveal()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = ["home", "about", "skills", "projects", "achievements", "contact"]
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #080b10;
          --bg2: #0d1117;
          --bg3: #111827;
          --border: rgba(255,255,255,0.07);
          --text: #f0f4ff;
          --muted: #8892a4;
          --accent: #4fffb0;
          --accent2: #00d4ff;
          --accent3: #a855f7;
          --glow: 0 0 30px rgba(79,255,176,0.15);
          --font-display: 'Syne', sans-serif;
          --font-body: 'DM Sans', sans-serif;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-body);
          line-height: 1.6;
          overflow-x: hidden;
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }

        /* -- Noise overlay -- */
        body::before {
          content: '';
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.35;
        }

        /* -- Grid bg -- */
        .grid-bg {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(79,255,176,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,255,176,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* -- Reveal animations -- */
        .reveal {
          opacity: 0; transform: translateY(30px);
          transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1);
        }
        .reveal.revealed { opacity: 1; transform: none; }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }
        .reveal-delay-5 { transition-delay: 0.5s; }

        /* -- Navbar -- */
        .navbar {
          position: fixed; top: 0; width: 100%; z-index: 100;
          transition: all 0.3s ease;
          padding: 20px 0;
        }
        .navbar.scrolled {
          background: rgba(8,11,16,0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          padding: 14px 0;
        }
        .nav-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 32px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .nav-logo {
          font-family: var(--font-display);
          font-size: 1.1rem; font-weight: 800; color: var(--text);
          text-decoration: none; letter-spacing: -0.02em;
        }
        .nav-logo span { color: var(--accent); }
        .nav-links { display: flex; gap: 36px; }
        .nav-link {
          font-family: var(--font-body); font-size: 0.85rem; font-weight: 500;
          color: var(--muted); text-decoration: none; letter-spacing: 0.05em;
          text-transform: uppercase; transition: color 0.2s;
          position: relative;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 0; height: 1px; background: var(--accent);
          transition: width 0.3s ease;
        }
        .nav-link:hover, .nav-link.active { color: var(--accent); }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .nav-menu-btn { display: none; background: none; border: none; color: var(--text); cursor: pointer; }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-links.open {
            display: flex; flex-direction: column; gap: 0;
            position: absolute; top: 100%; left: 0; width: 100%;
            background: rgba(8,11,16,0.98);
            border-bottom: 1px solid var(--border);
            padding: 8px 0;
          }
          .nav-link { padding: 14px 32px; }
          .nav-menu-btn { display: block; }
        }

        /* -- Hero -- */
        .hero {
          min-height: 100vh; display: flex; align-items: center;
          position: relative; overflow: hidden;
          padding: 120px 32px 80px;
        }
        .hero-glow {
          position: absolute; width: 600px; height: 600px;
          border-radius: 50%; pointer-events: none;
          background: radial-gradient(ellipse, rgba(79,255,176,0.08) 0%, transparent 70%);
          top: -100px; right: -100px;
          animation: pulse 6s ease-in-out infinite;
        }
        .hero-glow2 {
          position: absolute; width: 400px; height: 400px;
          border-radius: 50%; pointer-events: none;
          background: radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%);
          bottom: 0; left: -80px;
          animation: pulse 8s ease-in-out infinite reverse;
        }
        @keyframes pulse {
          0%,100%{transform:scale(1);opacity:1;}
          50%{transform:scale(1.1);opacity:0.7;}
        }
        .hero-inner { max-width: 1280px; margin: 0 auto; position: relative; z-index: 1; width: 100%; }
        .hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(79,255,176,0.07); border: 1px solid rgba(79,255,176,0.2);
          padding: 6px 16px; border-radius: 999px;
          font-size: 0.78rem; color: var(--accent); font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 28px;
          animation: fadeSlideDown 0.8s cubic-bezier(.16,1,.3,1) forwards;
        }
        .hero-tag-dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--accent);
          animation: blink 2s infinite;
        }
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.2;} }
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-name {
          font-family: var(--font-display); font-size: clamp(2.5rem, 7.2vw, 5.8rem);
          font-weight: 800; line-height: 0.95; letter-spacing: -0.03em;
          color: var(--text); margin-bottom: 24px;
          animation: fadeSlideUp 0.9s 0.1s cubic-bezier(.16,1,.3,1) both;
        }
        .hero-name .accent-word { color: var(--accent); display: block; }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-role {
          font-size: 1.1rem; color: var(--muted); max-width: 540px; line-height: 1.7;
          animation: fadeSlideUp 0.9s 0.25s cubic-bezier(.16,1,.3,1) both;
        }
        .hero-location {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.85rem; color: var(--muted); margin-top: 12px;
          animation: fadeSlideUp 0.9s 0.35s cubic-bezier(.16,1,.3,1) both;
        }
        .hero-ctas {
          display: flex; gap: 14px; flex-wrap: wrap; margin-top: 40px;
          animation: fadeSlideUp 0.9s 0.45s cubic-bezier(.16,1,.3,1) both;
        }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--accent); color: #080b10;
          padding: 14px 28px; border-radius: 8px;
          font-family: var(--font-display); font-size: 0.9rem; font-weight: 700;
          text-decoration: none; letter-spacing: 0.02em;
          transition: all 0.25s ease;
          box-shadow: 0 0 0 0 rgba(79,255,176,0.4);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(79,255,176,0.3);
        }
        .btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid var(--border); color: var(--text);
          padding: 14px 28px; border-radius: 8px;
          font-family: var(--font-display); font-size: 0.9rem; font-weight: 600;
          text-decoration: none; letter-spacing: 0.02em;
          transition: all 0.25s ease; background: transparent;
        }
        .btn-secondary:hover {
          border-color: var(--accent); color: var(--accent);
          transform: translateY(-2px);
        }
        .hero-socials {
          display: flex; gap: 16px; margin-top: 48px;
          animation: fadeSlideUp 0.9s 0.55s cubic-bezier(.16,1,.3,1) both;
        }
        .social-icon {
          display: flex; align-items: center; justify-content: center;
          width: 42px; height: 42px; border-radius: 10px;
          border: 1px solid var(--border); color: var(--muted);
          text-decoration: none; transition: all 0.25s ease;
          background: rgba(255,255,255,0.02);
        }
        .social-icon:hover {
          border-color: var(--accent); color: var(--accent);
          background: rgba(79,255,176,0.07);
          transform: translateY(-2px);
        }
        .hero-scroll {
          position: absolute; bottom: 40px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          color: var(--muted); font-size: 0.7rem; letter-spacing: 0.12em;
          text-transform: uppercase; text-decoration: none;
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float { 0%,100%{transform:translateX(-50%) translateY(0);} 50%{transform:translateX(-50%) translateY(8px);} }

        /* -- Section -- */
        .section { padding: 100px 32px; position: relative; }
        .section-inner { max-width: 1280px; margin: 0 auto; width: 100%; }
        .section-head-center { text-align: center; }
        .section-label {
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.15em;
          color: var(--accent); text-transform: uppercase; margin-bottom: 12px;
          display: flex; align-items: center; gap: 12px;
        }
        .section-label::before {
          content: ''; flex: 0 0 32px; height: 1px; background: var(--accent);
        }
        .section-label.centered {
          justify-content: center;
        }
        .section-label.centered::after {
          content: '';
          flex: 0 0 32px;
          height: 1px;
          background: var(--accent);
        }
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
          line-height: 1.1; letter-spacing: -0.03em; color: var(--text);
          margin-bottom: 20px;
        }

        /* -- About -- */
        .about-bg { background: var(--bg2); }
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
        }
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; gap: 40px; } }
        .about-text {
          font-size: 1.05rem; color: var(--muted); line-height: 1.85;
        }
        .about-text strong { color: var(--text); font-weight: 500; }
        .about-stats {
          display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
        }
        .stat-card {
          padding: 24px; border-radius: 12px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          border-color: rgba(79,255,176,0.2);
          background: rgba(79,255,176,0.03);
          transform: translateY(-2px);
        }
        .stat-number {
          font-family: var(--font-display); font-size: 2.4rem; font-weight: 800;
          color: var(--accent); line-height: 1; letter-spacing: -0.04em;
        }
        .stat-label { font-size: 0.8rem; color: var(--muted); margin-top: 6px; }

        /* -- Skills -- */
        .skills-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;
          margin-top: 48px;
        }
        .skill-card {
          padding: 24px; border-radius: 12px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
          transition: all 0.3s ease;
          position: relative; overflow: hidden;
        }
        .skill-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--accent), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .skill-card:hover {
          border-color: rgba(79,255,176,0.2);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }
        .skill-card:hover::before { opacity: 1; }
        .skill-icon {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(79,255,176,0.08); margin-bottom: 14px;
          color: var(--accent);
        }
        .skill-cat {
          font-family: var(--font-display); font-size: 0.95rem; font-weight: 700;
          color: var(--text); margin-bottom: 12px;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .skill-tag {
          font-size: 0.72rem; padding: 3px 10px; border-radius: 999px;
          background: rgba(255,255,255,0.05); color: var(--muted);
          border: 1px solid var(--border);
        }

        /* -- Projects -- */
        .projects-bg { background: var(--bg2); }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin-top: 48px;
          align-items: stretch;
        }
        @media (max-width: 900px) { .projects-grid { grid-template-columns: 1fr; } }
        .project-card {
          border-radius: 16px; border: 1px solid var(--border);
          background: var(--bg3);
          overflow: hidden; transition: all 0.35s ease;
          display: flex; flex-direction: column;
          position: relative;
        }
        .project-card::after {
          content: ''; position: absolute; inset: 0;
          opacity: 0; transition: opacity 0.35s;
          pointer-events: none;
          border-radius: 16px;
        }
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .project-header {
          padding: 28px 28px 0;
          display: flex; align-items: flex-start; justify-content: space-between; gap: 12px;
        }
        .project-title {
          font-family: var(--font-display); font-size: 1.35rem; font-weight: 800;
          color: var(--text); letter-spacing: -0.02em; line-height: 1.25;
        }
        .project-tag {
          font-size: 0.68rem; font-weight: 600; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 4px 10px; border-radius: 6px;
          white-space: nowrap; flex-shrink: 0;
        }
        .project-body { padding: 16px 28px; flex: 1; }
        .project-desc {
          font-size: 0.9rem; color: var(--muted); line-height: 1.7; margin-bottom: 18px;
        }
        .project-features { margin-bottom: 18px; }
        .project-feature {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.82rem; color: var(--muted); padding: 3px 0;
        }
        .feature-dot { width: 4px; height: 4px; border-radius: 50%; flex-shrink: 0; }
        .project-techs { display: flex; flex-wrap: wrap; gap: 6px; }
        .tech-badge {
          font-size: 0.7rem; padding: 4px 10px; border-radius: 6px;
          background: rgba(255,255,255,0.04); color: var(--muted);
          border: 1px solid var(--border); font-weight: 500;
        }
        .project-footer {
          padding: 20px 28px;
          border-top: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap;
        }
        .project-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.82rem; font-weight: 600; color: var(--muted);
          text-decoration: none; transition: color 0.2s;
        }
        .project-link:hover { color: var(--accent); }
        .project-deployed {
          font-size: 0.7rem; color: var(--muted);
          background: rgba(255,255,255,0.04);
          padding: 4px 10px; border-radius: 6px; border: 1px solid var(--border); margin-left: auto;
        }

        /* -- Achievements -- */
        .achievements-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 48px;
        }
        @media (max-width: 900px) { .achievements-grid { grid-template-columns: 1fr; } }
        .achievement-card {
          border-radius: 16px;
          border: 1px solid var(--border);
          background: var(--bg3);
          padding: 24px;
          height: 100%;
        }
        .achievement-title {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .cert-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .cert-item {
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
          border-radius: 10px;
          padding: 12px 14px;
        }
        .cert-name {
          font-size: 0.92rem;
          color: var(--text);
          font-weight: 600;
        }
        .cert-issuer {
          font-size: 0.8rem;
          color: var(--muted);
          margin-top: 3px;
        }
        .competition-item {
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
          border-radius: 10px;
          padding: 16px;
        }
        .competition-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 8px;
        }
        .competition-name {
          color: var(--text);
          font-weight: 700;
          font-size: 0.95rem;
        }
        .competition-date {
          color: var(--muted);
          font-size: 0.78rem;
          white-space: nowrap;
        }
        .competition-org {
          color: var(--muted);
          font-size: 0.82rem;
          line-height: 1.6;
          margin-bottom: 10px;
        }
        .competition-points {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 10px;
        }
        .competition-point {
          color: var(--muted);
          font-size: 0.82rem;
          line-height: 1.6;
          display: grid;
          grid-template-columns: 10px 1fr;
          gap: 8px;
          align-items: start;
        }
        .competition-point::before {
          content: '•';
          color: var(--accent);
          line-height: 1.4;
        }
        @media (max-width: 768px) {
          .section { padding: 84px 22px; }
          .section-title { margin-bottom: 16px; }
          .nav-inner { padding: 0 22px; }
          .hero { padding: 110px 22px 70px; }
          .hero-name { font-size: clamp(2.15rem, 12vw, 3.8rem); line-height: 0.98; }
          .project-header, .project-body, .project-footer { padding-left: 20px; padding-right: 20px; }
          .project-footer { align-items: flex-start; }
          .project-deployed { margin-left: 0; }
        }

        /* -- Contact -- */
        .contact-inner {
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
        }
        @media (max-width: 768px) { .contact-inner { grid-template-columns: 1fr; gap: 40px; } }
        .contact-headline {
          font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 800; letter-spacing: -0.03em; line-height: 1.05;
          color: var(--text); margin-bottom: 20px;
        }
        .contact-headline span { color: var(--accent); }
        .contact-sub { font-size: 1rem; color: var(--muted); line-height: 1.7; }
        .contact-ctas { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 36px; }
        .contact-items { display: flex; flex-direction: column; gap: 16px; }
        .contact-item {
          display: flex; align-items: center; gap: 16px;
          padding: 18px 22px; border-radius: 12px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
          text-decoration: none; transition: all 0.25s ease;
        }
        .contact-item:hover {
          border-color: rgba(79,255,176,0.25); background: rgba(79,255,176,0.04);
          transform: translateX(4px);
        }
        .contact-item-icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(79,255,176,0.08);
          display: flex; align-items: center; justify-content: center;
          color: var(--accent); flex-shrink: 0;
        }
        .contact-item-text .label { font-size: 0.72rem; color: var(--muted); letter-spacing: 0.06em; text-transform: uppercase; }
        .contact-item-text .value { font-size: 0.9rem; color: var(--text); font-weight: 500; margin-top: 2px; }

        /* -- Footer -- */
        .footer {
          padding: 32px; border-top: 1px solid var(--border);
          display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;
        }
        .footer-copy { font-size: 0.8rem; color: var(--muted); }
        .footer-copy span { color: var(--accent); }
        .footer-socials { display: flex; gap: 12px; }

        /* -- Divider -- */
        .divider {
          height: 1px; background: linear-gradient(90deg, transparent, var(--border), transparent);
          margin: 0 32px;
        }
      `}</style>

      {/* NAVBAR */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            NK<span>.</span>
          </a>
          <div className={`nav-links${menuOpen ? " open" : ""}`}>
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className={`nav-link${activeSection === l.name.toLowerCase() ? " active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {l.name}
              </a>
            ))}
          </div>
          <button className="nav-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="grid-bg" />
        <div className="hero-glow" />
        <div className="hero-glow2" />
        <div className="hero-inner">
          <div className="hero-tag">
            <div className="hero-tag-dot" />
            Available for opportunities
          </div>
          <h1 className="hero-name">
            Nishanth<span className="accent-word">Kamalakkannan</span>
          </h1>
          <p className="hero-role">{personalInfo.sub}</p>
          <div className="hero-location">
            <MapPin size={14} />
            {personalInfo.location}
          </div>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
          <div className="hero-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon">
              <Globe size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
              <User size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="social-icon">
              <Mail size={18} />
            </a>
          </div>
        </div>
        <a href="#about" className="hero-scroll">
          Scroll <ChevronDown size={14} />
        </a>
      </section>

      <div className="divider" />

      {/* ABOUT */}
      <section id="about" className="section about-bg">
        <div className="section-inner">
          <div className="about-grid">
            <div className="reveal">
              <div className="section-label">About Me</div>
              <h2 className="section-title">
                Building things that
                <br />
                actually matter
              </h2>
              <p className="about-text">
                Third-year Computer Science undergraduate with hands-on experience in{" "}
                <strong>full-stack web development</strong> and <strong>AI integration</strong>. Skilled in building and deploying end-to-end
                applications using <strong>React, Python, Node.js, and MongoDB</strong>.
                <br />
                <br />
                Experienced in working with <strong>LLM APIs</strong> to develop intelligent, user-facing features. A driven problem-solver
                passionate about solving real-world problems through technology, with a strong interest in product development and scalable
                system design.
              </p>
            </div>
            <div className="about-stats reveal reveal-delay-2">
              {[
                { n: "3+", l: "Projects Shipped" },
                { n: "5+", l: "Tech Stacks" },
                { n: "3rd", l: "Year CS Student" },
                { n: "1", l: "Hackathon Built" },
              ].map((s, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-number">{s.n}</div>
                  <div className="stat-label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-inner">
          <div className="reveal section-head-center">
            <div className="section-label centered">
              My Expertise
            </div>
            <h2 className="section-title">Skills & Technologies</h2>
          </div>
          <div className="skills-grid">
            {skills.map((s, i) => {
              const Icon = s.icon
              return (
                <div className={`skill-card reveal reveal-delay-${Math.min(i + 1, 5)}`} key={i}>
                  <div className="skill-icon">
                    <Icon size={20} />
                  </div>
                  <div className="skill-cat">{s.category}</div>
                  <div className="skill-tags">
                    {s.items.map((item, j) => (
                      <span className="skill-tag" key={j}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PROJECTS */}
      <section id="projects" className="section projects-bg">
        <div className="section-inner">
          <div className="reveal section-head-center">
            <div className="section-label centered">
              Featured Work
            </div>
            <h2 className="section-title">Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div className={`project-card reveal reveal-delay-${Math.min(i + 1, 4)}`} key={i} style={{ "--card-accent": p.accent }}>
                <div className="project-header">
                  <div className="project-title">{p.title}</div>
                  <div className="project-tag" style={{ background: `${p.tagColor}18`, color: p.tagColor, border: `1px solid ${p.tagColor}30` }}>
                    {p.tag}
                  </div>
                </div>
                <div className="project-body">
                  <p className="project-desc">{p.description}</p>
                  <div className="project-features">
                    {p.features.map((f, j) => (
                      <div className="project-feature" key={j}>
                        <div className="feature-dot" style={{ background: p.accent }} />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="project-techs">
                    {p.tech.map((t, j) => (
                      <span className="tech-badge" key={j}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-footer">
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Globe size={15} />
                    View Source
                    <ExternalLink size={12} />
                  </a>
                  <span className="project-deployed">{p.deployed}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="section">
        <div className="section-inner">
          <div className="reveal section-head-center">
            <div className="section-label centered">
              Milestones
            </div>
            <h2 className="section-title">Certifications & Competitions</h2>
          </div>
          <div className="achievements-grid">
            <div className="achievement-card reveal reveal-delay-1">
              <h3 className="achievement-title">Certifications</h3>
              <div className="cert-list">
                {certifications.map((cert, i) => (
                  <div className="cert-item" key={i}>
                    <div className="cert-name">{cert.title}</div>
                    <div className="cert-issuer">Issued by {cert.issuer}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="achievement-card reveal reveal-delay-2">
              <h3 className="achievement-title">Competitions</h3>
              {competitions.map((comp, i) => (
                <div className="competition-item" key={i}>
                  <div className="competition-head">
                    <div className="competition-name">{comp.title}</div>
                    <div className="competition-date">{comp.date}</div>
                  </div>
                  <div className="competition-org">{comp.org}</div>
                  <div className="competition-points">
                    {comp.highlights.map((point, j) => (
                      <div className="competition-point" key={j}>{point}</div>
                    ))}
                  </div>
                  <div className="project-techs">
                    {comp.tech.map((t, j) => (
                      <span className="tech-badge" key={j}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="section-inner">
          <div className="contact-inner">
            <div className="reveal">
              <div className="section-label">Get In Touch</div>
              <h2 className="contact-headline">
                Let's build
                <br />
                something <span>great</span>
              </h2>
              <p className="contact-sub">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <div className="contact-ctas">
                <a href={`mailto:${personalInfo.email}`} className="btn-primary">
                  <Mail size={16} />
                  Send Email
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <User size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="contact-items reveal reveal-delay-2">
              {[
                { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: Globe, label: "GitHub", value: "NishanthKamalakkannan", href: personalInfo.github },
                { icon: User, label: "LinkedIn", value: "nishanth-kamalakkannan", href: personalInfo.linkedin },
                { icon: MapPin, label: "Location", value: personalInfo.location, href: "#" },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="contact-item"
                  >
                    <div className="contact-item-icon">
                      <Icon size={18} />
                    </div>
                    <div className="contact-item-text">
                      <div className="label">{item.label}</div>
                      <div className="value">{item.value}</div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p className="footer-copy">
          © {new Date().getFullYear()} <span>Nishanth Kamalakkannan</span>. All rights reserved.
        </p>
        <div className="footer-socials">
          {[
            { icon: Globe, href: personalInfo.github },
            { icon: User, href: personalInfo.linkedin },
            { icon: Mail, href: `mailto:${personalInfo.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="social-icon">
              <Icon size={17} />
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}
