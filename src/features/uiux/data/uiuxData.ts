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

