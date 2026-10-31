export type SocialIcon = 'github' | 'linkedin' | 'instagram' | 'email';

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
  icon: SocialIcon;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
  current?: boolean;
}

export interface EducationItem {
  title: string;
  school: string;
  location: string;
  url?: string;
  note?: string;
}

export interface CredentialItem {
  title: string;
  issuer: string;
  year: string;
  kind: 'Certification' | 'Volunteering';
}

export interface SkillGroup {
  title: string;
  accent: string;
  items: string[];
}

export type ProjectCategory =
  | 'Full-Stack'
  | 'Backend'
  | 'Frontend'
  | 'AI / ML'
  | 'Blockchain'
  | 'Game';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  year: string;
  status: 'Live' | 'In progress' | 'Open source' | 'Archived';
  tech: string[];
  links: ProjectLink[];
  accent: string;
  featured?: boolean;
}

export const profile = {
  name: 'Adesh Pandey',
  role: 'Software Engineer',
  location: 'Kathmandu, Nepal',
  email: 'adesh.pandey1673@gmail.com',
  resumeUrl: `${process.env.PUBLIC_URL}/Adesh-Pandey-CV.pdf`,
  photoUrl: `${process.env.PUBLIC_URL}/photo.jpg`,
  tagline:
    'Backend-heavy full-stack engineer building calm, reliable software from Kathmandu.',
  intro:
    "I design and ship ASP.NET Core services, shape relational data, and connect it all to interfaces that feel effortless. Currently building production APIs at Riddhsoft.",
  roles: [
    'ASP.NET Core Developer',
    'Full-Stack Engineer',
    'API Builder',
    'Problem Solver',
  ],
};

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    handle: '@Adesh7766',
    url: 'https://github.com/Adesh7766',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    handle: 'adesh-pandey-16b505280',
    url: 'https://www.linkedin.com/in/adesh-pandey-16b505280',
    icon: 'linkedin',
  },
  {
    label: 'Instagram',
    handle: '@indevmode_',
    url: 'https://instagram.com/indevmode_',
    icon: 'instagram',
  },
  {
    label: 'Email',
    handle: 'adesh.pandey1673@gmail.com',
    url: 'mailto:adesh.pandey1673@gmail.com',
    icon: 'email',
  },
];

export const stats = [
  { value: '1.5+', label: 'Years shipping software' },
  { value: '3', label: 'Engineering roles' },
  { value: '15', label: 'Public repositories' },
  { value: '10+', label: 'Projects built' },
];

export const experience: ExperienceItem[] = [
  {
    company: 'Riddhsoft',
    role: 'Software Engineer',
    period: 'Jun 2026 — Present',
    location: 'Kathmandu, Nepal',
    current: true,
    summary:
      'Building and maintaining production ASP.NET Core / .NET Web APIs and the backend business logic behind them.',
    highlights: [
      'Own the backend lifecycle end to end: API design, implementation, testing, publishing, and deployment to IIS.',
      'Integrate backend services with React and Next.js frontends, keeping contracts clean and predictable.',
      'Design and optimise relational databases, including composite keys, complex relationships, and data integrity.',
      'Level up CI/CD and DevOps workflows while collaborating in an Agile team.',
    ],
    tags: ['.NET Core', 'ASP.NET Core', 'C#', 'React', 'Next.js', 'IIS', 'CI/CD', 'SQL Server'],
  },
  {
    company: 'Codebee Nepal',
    role: 'Software Developer',
    period: 'Mar 2025 — Dec 2025',
    location: 'Kathmandu, Nepal',
    summary:
      'Delivered .NET Framework, Blazor, and RESTful API work with a focus on integrations and maintainable backend code.',
    highlights: [
      'Built scalable backend solutions across .NET Framework and Blazor applications.',
      'Integrated Windows Services and webhooks into existing production systems.',
      'Worked in a structured Agile environment with Jira for task and workflow management.',
      'Collaborated across functions to ship clean, maintainable code on schedule.',
    ],
    tags: ['.NET Framework', 'Blazor', 'REST APIs', 'Windows Services', 'Webhooks', 'Jira', 'Agile'],
  },
  {
    company: 'Giga Infosoft',
    role: 'Software Developer Intern',
    period: 'Dec 2024 — Feb 2025',
    location: 'Kathmandu, Nepal',
    summary:
      'Started in ASP.NET MVC, learning the full request path from Razor view to database and back.',
    highlights: [
      'Developed ASP.NET MVC modules following the Model–View–Controller architecture.',
      'Implemented full CRUD operations across controllers, views, and models.',
      'Used Entity Framework with LINQ for database connectivity and data manipulation.',
      'Built responsive Razor Views with HTML, CSS, and Bootstrap, plus form validation and model binding.',
    ],
    tags: ['ASP.NET MVC', 'C#', 'Entity Framework', 'LINQ', 'Razor', 'Bootstrap'],
  },
];

export const education: EducationItem[] = [
  {
    title: "Bachelor's in Computer Engineering",
    school: 'Advanced College of Engineering and Management',
    location: 'Kathmandu, Nepal',
    url: 'https://acem.edu.np/',
    note: 'Computer Engineering',
  },
  {
    title: 'SLC — School Leaving Certificate',
    school: "Little Angels' Secondary School",
    location: 'Hattiban, Lalitpur',
    url: 'https://las.edu.np/lass',
  },
  {
    title: 'SEE — Secondary Education Examination',
    school: "Little Angels' School",
    location: 'Hattiban, Lalitpur',
    url: 'https://las.edu.np/',
  },
];

export const credentials: CredentialItem[] = [
  {
    title: 'ASP.NET Training',
    issuer: 'Broadway Infosys',
    year: '2025',
    kind: 'Certification',
  },
  {
    title: 'DevOps Training',
    issuer: 'Broadway Infosys',
    year: '2026',
    kind: 'Certification',
  },
  {
    title: 'Hult Prize Volunteer',
    issuer: 'Hult Prize',
    year: '2024',
    kind: 'Volunteering',
  },
  {
    title: 'SET Conference Volunteer',
    issuer: 'SET Conference',
    year: '2023',
    kind: 'Volunteering',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    accent: 'var(--red-light)',
    items: [
      'C#',
      '.NET',
      '.NET Core',
      '.NET Framework',
      'ASP.NET Core',
      'ASP.NET MVC',
      'REST APIs',
      'Entity Framework',
      'EF Core',
      'Blazor',
      'Windows Services',
      'JWT',
    ],
  },
  {
    title: 'Frontend',
    accent: 'var(--blue-light)',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'jQuery',
      'React',
      'Next.js',
      'Bootstrap',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Data & Storage',
    accent: 'var(--yellow-light)',
    items: ['SQL', 'MS SQL Server', 'Relational Modelling', 'MongoDB', 'Redis'],
  },
  {
    title: 'DevOps & Tools',
    accent: 'var(--green-light)',
    items: ['Git', 'GitHub', 'Azure', 'IIS', 'CI/CD', 'Jira', 'Agile / Scrum'],
  },
  {
    title: 'AI & Data Science',
    accent: 'var(--pink-light)',
    items: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Scikit-learn',
      'TensorFlow',
      'Keras',
      'CNNs',
      'Transfer Learning',
      'Jupyter Notebook',
      'Statistics',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'estadioiq',
    title: 'EstadioIQ',
    tagline: 'Football data analytics & intelligence platform',
    description:
      'A sports analytics platform that ingests live football data, normalises it into a relational model, and turns it into player form, team trends, and match insights. Built with a focus on API-driven analytics and a future ML prediction pipeline.',
    category: 'Backend',
    year: '2025 —',
    status: 'In progress',
    tech: ['ASP.NET Core', 'C#', 'EF Core', 'SQL Server', 'JWT', 'REST APIs'],
    links: [{ label: 'GitHub', url: 'https://github.com/Adesh7766/EstadioIQ' }],
    accent: 'var(--blue)',
    featured: true,
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    tagline: 'Layered expense API with a React front end',
    description:
      'A full-stack expense tracker split into BAL, DAL, Entity, and Helper layers. JWT authentication, category and status management, transaction CRUD, and aggregation endpoints for totals and spending by category.',
    category: 'Full-Stack',
    year: '2025',
    status: 'Open source',
    tech: ['ASP.NET Core', 'C#', 'EF Core', 'SQL Server', 'JWT', 'React'],
    links: [
      { label: 'API repo', url: 'https://github.com/Adesh7766/ExpenseTrackerAPI' },
      { label: 'Front end', url: 'https://github.com/Adesh7766/ExpenseTrackerFrontEnd' },
    ],
    accent: 'var(--red)',
    featured: true,
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    tagline: 'Projects, tasks, and team roles without the clutter',
    description:
      'An in-progress project and task management app with a Clean Architecture .NET backend and a React + TypeScript front end. Models projects, members, roles, and task statuses with a repository/service split.',
    category: 'Full-Stack',
    year: '2026',
    status: 'In progress',
    tech: ['.NET', 'C#', 'Clean Architecture', 'React', 'TypeScript', 'Tailwind CSS'],
    links: [{ label: 'GitHub', url: 'https://github.com/Adesh7766/taskflow' }],
    accent: 'var(--green)',
  },
  {
    id: 'thinkboard',
    title: 'ThinkBoard',
    tagline: 'A MERN notes app with rate limiting built in',
    description:
      'A full-stack notes application with a React + Vite front end and an Express + MongoDB API. Includes Upstash Redis rate limiting, CRUD notes, detail views, and a clean responsive layout.',
    category: 'Full-Stack',
    year: '2025',
    status: 'Open source',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Tailwind CSS'],
    links: [{ label: 'GitHub', url: 'https://github.com/Adesh7766/ThinkBoard' }],
    accent: 'var(--pink)',
  },
  {
    id: 'bug-tracker',
    title: 'Bug Tracker',
    tagline: 'Report, track, and close bugs in one place',
    description:
      'An ASP.NET MVC bug tracking system with session-based authentication, full CRUD for issues, Entity Framework Core data access, and a responsive Bootstrap + jQuery UI.',
    category: 'Full-Stack',
    year: '2025',
    status: 'Open source',
    tech: ['ASP.NET MVC', '.NET 6', 'C#', 'EF Core', 'SQL Server', 'Bootstrap', 'jQuery'],
    links: [{ label: 'GitHub', url: 'https://github.com/Adesh7766/Bug-Tracker' }],
    accent: 'var(--yellow)',
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Website',
    tagline: 'Product, cart, and order APIs for an online store',
    description:
      'An ecommerce backend built with a .NET Web API and SQL Server, paired with an Angular front end. Covers product management, user flows, and order processing on a clean layered structure.',
    category: 'Full-Stack',
    year: '2025',
    status: 'Open source',
    tech: ['.NET Web API', 'C#', 'SQL Server', 'Angular'],
    links: [{ label: 'GitHub', url: 'https://github.com/Adesh7766/Ecommerce-Website' }],
    accent: 'var(--purple)',
  },
  {
    id: 'foodoto',
    title: 'Foodoto',
    tagline: 'Food recognition and calorie estimation from a photo',
    description:
      'A deep learning system that identifies food items and estimates calories from images. Uses a CNN built on InceptionV3 with transfer learning on a custom augmented dataset, reaching roughly 90% accuracy.',
    category: 'AI / ML',
    year: '2024',
    status: 'Live',
    tech: ['Python', 'TensorFlow', 'Keras', 'InceptionV3', 'Transfer Learning', 'CNN'],
    links: [
      { label: 'Live demo', url: 'https://aayushmlk-foodoto.hf.space/' },
    ],
    accent: 'var(--orange)',
    featured: true,
  },
  {
    id: 'bloodbank',
    title: 'Blockchain Blood Bank',
    tagline: 'Transparent donor and inventory tracking on Ethereum',
    description:
      'A blood bank management system built on Ethereum to make donor registration and inventory trustworthy. Smart contracts automate registration, inventory updates, and transaction validation, with real-time availability surfaced through a simple interface.',
    category: 'Blockchain',
    year: '2024',
    status: 'Archived',
    tech: ['Ethereum', 'Smart Contracts', 'Solidity', 'Web3'],
    links: [],
    accent: 'var(--red)',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    tagline: 'A retro, animated home for everything above',
    description:
      'The site you are on: a custom React + TypeScript build with a warm retro palette, scroll-triggered motion, filterable projects, and a playable arcade corner. No template, no page builder.',
    category: 'Frontend',
    year: '2026',
    status: 'Live',
    tech: ['React', 'TypeScript', 'Framer Motion', 'CSS'],
    links: [{ label: 'GitHub', url: 'https://github.com/Adesh7766/Portfolio-Website' }],
    accent: 'var(--blue)',
  },
];

export interface MiniProject {
  title: string;
  description: string;
  language: string;
  url: string;
}

export const miniProjects: MiniProject[] = [
  {
    title: 'Tic-Tac-Toe',
    description: 'Classic three-in-a-row with a retro reset.',
    language: 'JavaScript',
    url: 'https://github.com/Adesh7766/Tik-tak-toe',
  },
  {
    title: 'Rock Paper Scissors',
    description: 'Browser game against the computer.',
    language: 'JavaScript',
    url: 'https://github.com/Adesh7766/Rock-paper-scissor-game',
  },
  {
    title: 'Currency Converter',
    description: 'Quick currency conversion in the browser.',
    language: 'JavaScript',
    url: 'https://github.com/Adesh7766/Currency-converter',
  },
  {
    title: 'Coffee Machine',
    description: 'A tiny Python state-machine simulation.',
    language: 'Python',
    url: 'https://github.com/Adesh7766/Coffee-machine-minigame',
  },
  {
    title: 'Hangman',
    description: 'Word-guessing game, terminal edition.',
    language: 'Python',
    url: 'https://github.com/Adesh7766/Hangman-minigame-python-',
  },
];

export const projectFilters: Array<ProjectCategory | 'All'> = [
  'All',
  'Full-Stack',
  'Backend',
  'AI / ML',
  'Blockchain',
  'Frontend',
];
