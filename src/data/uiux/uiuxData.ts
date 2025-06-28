export interface UIUXContent {
  title: string;
  subtitle: string;
  description: string;
  contact: string;
}

export interface UIUXProject {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tools: string[];
  color: string;
}

export interface UIUXSkill {
  name: string;
  category: string;
  icon: string;
  color: string;
}

export interface UIUXExperience {
  title: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
  color: string;
}

export interface UIUXAcademicProject {
  title: string;
  description: string;
  tools: string[];
  status: string;
  color: string;
}

export interface CreativeElement {
  left: string;
  top: string;
  size: string;
  color: string;
  delay: string;
}

export interface DesignIcon {
  left: string;
  top: string;
  icon: string;
  delay: string;
  size: string;
  color: string;
}

export const uiuxContent: Record<string, UIUXContent> = {
  en: {
    title: "UI/UX Designer",
    subtitle: "Turning ideas into beautiful experiences",
    description: "Passionate about creating intuitive, accessible, and beautiful user interfaces. Currently studying UI/UX Design at CICCC, focusing on user-centered design principles and modern design systems.",
    contact: "Let's Create Something Amazing"
  },
  ja: {
    title: "UI/UXデザイナー",
    subtitle: "アイデアを美しい体験に変える",
    description: "直感的でアクセシブル、美しいユーザーインターフェースの作成に情熱を持っています。現在CICCCでUI/UXデザインを学び、ユーザー中心のデザイン原則とモダンなデザインシステムに焦点を当てています。",
    contact: "素晴らしいものを作りましょう"
  }
};

export const uiuxProjects: UIUXProject[] = [
  {
    id: "six-acres",
    title: "Six Acres Restaurant",
    description: "Complete website redesign focusing on improved user experience and modern design principles",
    category: "Web Redesign",
    image: "projects/sixacres/Redesign_thumnail.jpg",
    tools: ["Figma", "User Research", "Prototyping"],
    color: "from-pink-500 to-purple-600"
  },
  {
    id: "achievy",
    title: "Achievy: Task Management for ADHD Students",
    description: "Design Sprint project for a neurodiversity-friendly task management app. Research, ideation, prototyping, and user testing for Canadian college students with ADHD.",
    category: "Design Sprint",
    image: "projects/achievy/achievy_thumnail.jpg",
    tools: ["Design Sprint", "Figma", "User Research", "Prototyping"],
    color: "from-blue-500 to-cyan-600"
  }
];

export const uiuxSkills: UIUXSkill[] = [
  // Design Tools
  { name: "Figma", category: "Design Tools", icon: "logos:figma", color: "from-purple-400 to-pink-500" },
  { name: "Miro", category: "Design Tools", icon: "logos:miro", color: "from-pink-400 to-rose-500" },
  { name: "Notion", category: "Design Tools", icon: "logos:notion-icon", color: "from-slate-400 to-gray-500" },

  // Research & Analysis
  { name: "User Research", category: "Research & Analysis", icon: "mdi:account-search", color: "from-blue-400 to-cyan-500" },
  { name: "Usability Testing", category: "Research & Analysis", icon: "mdi:test-tube", color: "from-indigo-400 to-purple-500" },

  // Design Process
  { name: "Prototyping", category: "Design Process", icon: "mdi:layers-triple", color: "from-green-400 to-emerald-500" },
  { name: "Wireframing", category: "Design Process", icon: "mdi:vector-square", color: "from-orange-400 to-red-500" },
  { name: "Design Sprint", category: "Design Process", icon: "mdi:run-fast", color: "from-yellow-400 to-orange-500" }
];

export const uiuxExperience: UIUXExperience[] = [
  {
    title: "UI/UX Design Program",
    institution: "CICCC",
    period: "Current",
    description: "Comprehensive program covering Information Design, Interaction Design, Multi-Platform UI Design, and Design Evaluation. Hands-on projects with real-world applications.",
    highlights: ["User Research", "Prototyping", "Design Systems", "Usability Testing"],
    color: "from-green-400 to-emerald-500"
  }
];

export const uiuxAcademicProjects: UIUXAcademicProject[] = [
  {
    title: "E-Scooter App",
    description: "Complete design process from user research to high-fidelity prototyping",
    tools: ["Figma", "Miro", "User Research"],
    status: "Completed",
    color: "from-blue-400 to-cyan-500"
  },
  {
    title: "E-Learning System",
    description: "Platform design with comprehensive usability testing and heuristic evaluation",
    tools: ["Figma", "Prototyping", "Usability Testing"],
    status: "In Progress",
    color: "from-purple-400 to-pink-500"
  }
];

export const creativeElements: CreativeElement[] = [
  { left: "5%", top: "10%", size: "w-4 h-4", color: "bg-gradient-to-r from-pink-400 to-purple-400", delay: "0s" },
  { left: "90%", top: "15%", size: "w-3 h-3", color: "bg-gradient-to-r from-blue-400 to-cyan-400", delay: "1.2s" },
  { left: "15%", top: "80%", size: "w-5 h-5", color: "bg-gradient-to-r from-yellow-400 to-orange-400", delay: "2.1s" },
  { left: "85%", top: "70%", size: "w-4 h-4", color: "bg-gradient-to-r from-green-400 to-emerald-400", delay: "0.8s" },
  { left: "50%", top: "5%", size: "w-3 h-3", color: "bg-gradient-to-r from-indigo-400 to-purple-400", delay: "1.5s" },
  { left: "10%", top: "60%", size: "w-4 h-4", color: "bg-gradient-to-r from-red-400 to-pink-400", delay: "0.3s" },
  { left: "80%", top: "90%", size: "w-3 h-3", color: "bg-gradient-to-r from-teal-400 to-blue-400", delay: "2.8s" },
  { left: "40%", top: "40%", size: "w-5 h-5", color: "bg-gradient-to-r from-violet-400 to-purple-400", delay: "1.1s" },
  { left: "70%", top: "50%", size: "w-4 h-4", color: "bg-gradient-to-r from-amber-400 to-yellow-400", delay: "0.6s" },
  { left: "30%", top: "95%", size: "w-3 h-3", color: "bg-gradient-to-r from-rose-400 to-pink-400", delay: "2.3s" },
  { left: "75%", top: "25%", size: "w-4 h-4", color: "bg-gradient-to-r from-sky-400 to-blue-400", delay: "1.7s" },
  { left: "2%", top: "75%", size: "w-5 h-5", color: "bg-gradient-to-r from-lime-400 to-green-400", delay: "0.9s" }
];

export const designIcons: DesignIcon[] = [
  { left: "25%", top: "35%", icon: "mdi:palette", delay: "0.5s", size: "text-2xl", color: "text-pink-400" },
  { left: "75%", top: "25%", icon: "mdi:vector-square", delay: "1.4s", size: "text-xl", color: "text-blue-400" },
  { left: "15%", top: "65%", icon: "mdi:layers", delay: "0.8s", size: "text-3xl", color: "text-purple-400" },
  { left: "85%", top: "55%", icon: "mdi:format-paint", delay: "2.2s", size: "text-lg", color: "text-cyan-400" },
  { left: "45%", top: "85%", icon: "mdi:brush", delay: "1.1s", size: "text-2xl", color: "text-orange-400" },
  { left: "65%", top: "15%", icon: "mdi:eyedropper", delay: "2.7s", size: "text-xl", color: "text-green-400" },
  { left: "35%", top: "85%", icon: "mdi:shape", delay: "0.3s", size: "text-lg", color: "text-indigo-400" },
  { left: "55%", top: "75%", icon: "mdi:grid", delay: "1.9s", size: "text-2xl", color: "text-yellow-400" }
];

export const categoryColors: Record<string, string> = {
  "Design Tools": "from-purple-500 to-pink-600",
  "Research & Analysis": "from-blue-500 to-cyan-600",
  "Design Process": "from-green-500 to-emerald-600"
};