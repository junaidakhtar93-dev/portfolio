export interface NavLink {
  href: string;
  label: string;
}

export interface Stat {
  num: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  purple?: boolean;
  tags: string[];
}

export interface Project {
  icon: string;
  year: string;
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
}

export interface TimelineEntry {
  role: string;
  company: string;
  date: string;
  points: string[];
}

export interface Education {
  icon: string;
  degree: string;
  institution: string;
  meta: string;
  courses: string[];
}

export interface ContactLink {
  href: string;
  label: string;
  variant: 'primary' | 'outline';
  external?: boolean;
}

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const aboutParagraphs: string[] = [
  `I'm a <strong>Computer Science graduate</strong> with a focus on systems, web technologies, and human-computer interaction. I completed my BSc at the <strong>Virtual University of Pakistan</strong> in 2022, where courses like HCI, Computer Graphics, and Web Design pointed me toward the space where technology meets people.`,
  `Professionally, I spent two years at <strong>Mid-Chain Technologies</strong> as a System Support Officer, managing infrastructure, building internal tools, and — critically — designing workflows and documentation that made complex systems legible to non-technical users.`,
  `I'm drawn to the challenge of making digital systems both technically rigorous and genuinely usable. That's the problem I want to keep solving.`,
];

export const stats: Stat[] = [
  { num: '2+', label: 'Years professional experience' },
  { num: '132', label: 'CS degree credit hours' },
  { num: '10+', label: 'Projects built' },
  { num: '4', label: 'Core tech stacks' },
];

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', tags: ['Python', 'JavaScript', 'HTML / CSS', 'SQL', 'C++'] },
  { title: 'Frameworks & Tools', tags: ['FastAPI', 'Plotly', 'NumPy / Pandas', 'SQLite / MySQL', 'Git'] },
  {
    title: 'Design & Media',
    purple: true,
    tags: ['UI / UX Design', 'Data Visualization', 'Figma (basics)', 'Information Architecture'],
  },
  {
    title: 'Systems & Ops',
    tags: ['Network Administration', 'System Monitoring', 'IT Asset Management', 'Technical Documentation'],
  },
];

export const projects: Project[] = [
  {
    icon: '📊',
    year: '2024',
    title: 'SysWatch — IT Monitoring Dashboard',
    description:
      `A real-time system monitoring dashboard built for Mid-Chain's infrastructure team. Visualises server uptime, ticket resolution rates, network throughput, and alert history across 5 server endpoints using interactive Plotly charts.`,
    tech: ['Python', 'FastAPI', 'Plotly.js', 'SQLite', 'JavaScript'],
    featured: true,
  },
  {
    icon: '🌐',
    year: '2023',
    title: 'Personal Portfolio — This Site',
    description:
      `Designed and built from scratch. Focused on typography, dark-mode aesthetics, and readable information hierarchy. No frameworks — pure HTML, CSS, and vanilla JS with smooth scroll navigation and animated transitions.`,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'UI Design'],
    featured: true,
  },
  {
    icon: '🎨',
    year: '2023',
    title: 'Palette Studio — Colour Tool',
    description:
      `An interactive browser-based tool for generating, adjusting, and exporting colour palettes. Includes HSL sliders, contrast ratio checker (WCAG AA/AAA), and one-click CSS variable export. Designed for frontend developers and UI designers.`,
    tech: ['JavaScript', 'Canvas API', 'CSS Custom Properties'],
  },
  {
    icon: '🖥️',
    year: '2022',
    title: 'Final Year Project — Digital Task Manager',
    description:
      `CS619 capstone project: a web-based collaborative task management system with role-based access control, email notifications, and a reporting module. Built the full stack — database design, backend API, and frontend UI.`,
    tech: ['PHP', 'MySQL', 'HTML / CSS', 'JavaScript'],
  },
  {
    icon: '📡',
    year: '2025',
    title: 'Network Traffic Analyser',
    description:
      `Python tool that parses and visualises network logs collected during routine infrastructure work. Generates traffic heatmaps by hour, flags anomalous bandwidth spikes, and exports weekly PDF summaries for management review.`,
    tech: ['Python', 'Matplotlib', 'Pandas', 'PDF Export'],
  },
  {
    icon: '✏️',
    year: '2024',
    title: 'HCI Study — IT Dashboard Usability',
    description:
      `A small user study evaluating two dashboard layouts for non-technical users. Measured task completion time, error rate, and subjective clarity ratings across 8 participants. Findings informed the SysWatch redesign.`,
    tech: ['User Research', 'Survey Design', 'Data Analysis', 'HCI Methods'],
  },
];

export const timeline: TimelineEntry[] = [
  {
    role: 'System Support Officer',
    company: 'Mid-Chain Technologies',
    date: 'Jan 2024 — Mar 2026',
    points: [
      'Built the SysWatch monitoring dashboard and internal reporting tools used by the operations team',
      'Maintained 5 production server endpoints, monitoring uptime, network health, and software licences',
      'Designed documentation and workflow guides that reduced onboarding time for new technical staff',
      'Coordinated vendor relationships, invoice tracking, and IT asset procurement',
      'Produced periodic performance and system reports for senior management',
    ],
  },
];

export const education: Education = {
  icon: '🎓',
  degree: 'Bachelor of Science in Computer Science (4-year)',
  institution: 'Virtual University of Pakistan',
  meta: '2017 – 2022  ·  CGPA: 2.90 / 4.00  ·  132 Credits  ·  Regular Programme',
  courses: [
    'Human-Computer Interaction',
    'Computer Graphics',
    'Web Design & Development',
    'Software Engineering',
    'Data Communication',
    'Artificial Intelligence',
    'Operating Systems',
    'Data Structures',
  ],
};

export const contactLinks: ContactLink[] = [
  { href: 'mailto:93junaidakhtar93@gmail.com', label: '📧 Email Me', variant: 'primary' },
  { href: 'https://linkedin.com/in/junaid-akhtar-93', label: 'LinkedIn', variant: 'outline', external: true },
  { href: 'https://github.com/junaidakhtar93-dev', label: 'GitHub', variant: 'outline', external: true },
];
