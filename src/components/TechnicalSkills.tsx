interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate" | "Beginner";
  category: string;
  icon: string; // filename or special key for CDN
  experience: string; // 経験年数や使用頻度の説明
  source: string; // image source credit
}

interface SkillCategory {
  name: string;
  skills: Skill[];
  color: string;
}

interface TechnicalSkillsProps {
  currentLang?: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Cloud & Infrastructure",
    color: "blue",
    skills: [
      { name: "AWS", level: "Expert", category: "Cloud", icon: "amazonwebservices", experience: "5+ years, daily use", source: "devicon.dev" },
      { name: "AWS CDK", level: "Advanced", category: "Cloud", icon: "amazonwebservices", experience: "2+ years, IaC projects", source: "devicon.dev" },
      { name: "GCP", level: "Advanced", category: "Cloud", icon: "googlecloud", experience: "2+ years, project-based", source: "devicon.dev" },
      { name: "Azure", level: "Intermediate", category: "Cloud", icon: "azure", experience: "1 year, support role", source: "devicon.dev" },
      { name: "Terraform", level: "Advanced", category: "Cloud", icon: "terraform", experience: "3+ years, IaC projects", source: "devicon.dev" },
      { name: "Docker", level: "Advanced", category: "Cloud", icon: "docker", experience: "4+ years, containerization", source: "devicon.dev" },
      { name: "Redshift", level: "Advanced", category: "Database", icon: "amazonwebservices", experience: "3+ years, data warehousing", source: "devicon.dev" },
      { name: "Glue", level: "Intermediate", category: "Cloud", icon: "amazonwebservices", experience: "2+ years, ETL processing", source: "devicon.dev" },
      { name: "DynamoDB", level: "Intermediate", category: "Database", icon: "dynamodb", experience: "2+ years, NoSQL", source: "devicon.dev" }
    ]
  },
  {
    name: "Programming Languages",
    color: "emerald",
    skills: [
      { name: "Python", level: "Expert", category: "Language", icon: "python", experience: "8+ years, primary language", source: "devicon.dev" },
      { name: "TypeScript", level: "Advanced", category: "Language", icon: "typescript", experience: "3+ years, full-stack", source: "devicon.dev" },
      { name: "JavaScript", level: "Advanced", category: "Language", icon: "javascript", experience: "5+ years, web development", source: "devicon.dev" },
      { name: "PHP", level: "Intermediate", category: "Language", icon: "php", experience: "3+ years, WordPress", source: "devicon.dev" },
      { name: "VBA", level: "Intermediate", category: "Language", icon: "excel", experience: "2 years, automation", source: "devicon.dev" }
    ]
  },
  {
    name: "Frameworks & Tools",
    color: "violet",
    skills: [
      { name: "FastAPI", level: "Advanced", category: "Framework", icon: "fastapi", experience: "2+ years, API development", source: "devicon.dev" },
      { name: "React", level: "Intermediate", category: "Framework", icon: "react", experience: "2+ years, frontend", source: "devicon.dev" },
      { name: "NestJS", level: "Intermediate", category: "Framework", icon: "nestjs", experience: "1+ year, backend", source: "devicon.dev" },
      { name: "WordPress", level: "Advanced", category: "Framework", icon: "wordpress", experience: "3+ years, CMS", source: "devicon.dev" },
      { name: "GraphQL", level: "Intermediate", category: "Framework", icon: "graphql", experience: "1+ year, API development", source: "devicon.dev" }
    ]
  },
  {
    name: "Databases & Analytics",
    color: "amber",
    skills: [
      { name: "MySQL", level: "Expert", category: "Database", icon: "mysql", experience: "8+ years, primary DB", source: "devicon.dev" },
      { name: "PostgreSQL", level: "Intermediate", category: "Database", icon: "postgresql", experience: "1+ year, projects", source: "devicon.dev" },
      { name: "BigQuery", level: "Intermediate", category: "Database", icon: "googlecloud", experience: "1+ year, analytics", source: "devicon.dev" }
    ]
  },
  {
    name: "Development Tools",
    color: "rose",
    skills: [
      { name: "GitHub", level: "Expert", category: "Version Control", icon: "github", experience: "8+ years, daily use", source: "devicon.dev" },
      { name: "GitLab", level: "Advanced", category: "Version Control", icon: "gitlab", experience: "2+ years, CI/CD", source: "devicon.dev" },
      { name: "Backlog", level: "Advanced", category: "Project Management", icon: "backlog", experience: "3+ years, task management", source: "devicon.dev" },
      { name: "Slack", level: "Expert", category: "Communication", icon: "slack", experience: "8+ years, team collaboration", source: "devicon.dev" },
      { name: "Teams", level: "Advanced", category: "Communication", icon: "microsoft", experience: "2+ years, remote work", source: "devicon.dev" },
      { name: "Notion", level: "Intermediate", category: "Documentation", icon: "notion", experience: "2+ years, knowledge base", source: "devicon.dev" },
      { name: "Jira", level: "Intermediate", category: "Project Management", icon: "jira", experience: "1+ year, agile development", source: "devicon.dev" }
    ]
  }
];

const categoryTranslations = {
  en: {
    "Cloud & Infrastructure": "Cloud & Infrastructure",
    "Programming Languages": "Programming Languages",
    "Frameworks & Tools": "Frameworks & Tools",
    "Databases & Analytics": "Databases & Analytics",
    "Development Tools": "Development Tools"
  },
  ja: {
    "Cloud & Infrastructure": "クラウド・インフラ",
    "Programming Languages": "プログラミング言語",
    "Frameworks & Tools": "フレームワーク・ツール",
    "Databases & Analytics": "データベース・分析",
    "Development Tools": "開発ツール"
  }
};

const levelTranslations = {
  en: {
    Expert: "Expert",
    Advanced: "Advanced",
    Intermediate: "Intermediate",
    Beginner: "Beginner"
  },
  ja: {
    Expert: "エキスパート",
    Advanced: "上級",
    Intermediate: "中級",
    Beginner: "初級"
  }
};

const getLevelColor = (level: string) => {
  const colors = {
    Expert: "bg-gradient-to-r from-emerald-500 to-teal-500",
    Advanced: "bg-gradient-to-r from-blue-500 to-indigo-500",
    Intermediate: "bg-gradient-to-r from-amber-500 to-orange-500",
    Beginner: "bg-gradient-to-r from-gray-400 to-gray-500"
  };
  return colors[level as keyof typeof colors] || "bg-gradient-to-r from-gray-400 to-gray-500";
};

function getSkillIcon(skill: Skill) {
  // Special cases for AWS services and VBA
  if (skill.name === "VBA") {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg"
        alt={`${skill.name} logo`}
        className="w-8 h-8 object-contain rounded"
      />
    );
  }

  // AWS services use AWS wordmark icon
  if (["AWS", "AWS CDK", "Redshift", "Glue"].includes(skill.name)) {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
        alt={`${skill.name} logo`}
        className="w-8 h-8 object-contain rounded"
      />
    );
  }

  // GraphQL uses plain version
  if (skill.name === "GraphQL") {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
        alt={`${skill.name} logo`}
        className="w-8 h-8 object-contain rounded"
      />
    );
  }

  // Backlog uses official logo
  if (skill.name === "Backlog") {
    return (
      <img
        src="https://backlog.com/ja/wp-content/themes/backlog/assets/images/common/logo.svg"
        alt={`${skill.name} logo`}
        className="w-8 h-8 object-contain rounded"
      />
    );
  }

  // Teams uses custom SVG
  if (skill.name === "Teams") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="32"
        height="32"
        viewBox="0 0 48 48"
        className="w-8 h-8 object-contain rounded"
      >
        <path fill="#5c6bc0" d="M41.5 13A3.5 3.5 0 1 0 41.5 20 3.5 3.5 0 1 0 41.5 13zM4 40l23 4V4L4 8V40z"></path>
        <path fill="#fff" d="M21 16.27L21 19 17.01 19.18 16.99 31.04 14.01 30.95 14.01 19.29 10 19.45 10 16.94z"></path>
        <path fill="#5c6bc0" d="M36 14c0 2.21-1.79 4-4 4-1.2 0-2.27-.53-3-1.36v-5.28c.73-.83 1.8-1.36 3-1.36C34.21 10 36 11.79 36 14zM38 23v11c0 0 1.567 0 3.5 0 1.762 0 3.205-1.306 3.45-3H45v-8H38zM29 20v17c0 0 1.567 0 3.5 0 1.762 0 3.205-1.306 3.45-3H36V20H29z"></path>
      </svg>
    );
  }

  // Devicon SVG CDN for all other skills
  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
      alt={`${skill.name} logo`}
      className="w-8 h-8 object-contain rounded"
    />
  );
}

export default function TechnicalSkills({ currentLang = "en" }: TechnicalSkillsProps) {
  const currentCategoryTranslations = categoryTranslations[currentLang as keyof typeof categoryTranslations];
  const currentLevelTranslations = levelTranslations[currentLang as keyof typeof levelTranslations];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {skillCategories.map((category) => (
        <div key={category.name} className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 drop-shadow-lg">
            <div className={`w-4 h-4 rounded-full bg-${category.color}-400 shadow-lg`}></div>
            {currentCategoryTranslations[category.name as keyof typeof currentCategoryTranslations] || category.name}
          </h3>
          <div className="space-y-4">
            {category.skills.map((skill) => (
              <div key={skill.name} className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg shadow-sm border border-white/20">
                    {getSkillIcon(skill)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{skill.name}</div>
                    <div className="text-sm text-gray-300">{skill.experience}</div>
                    <div className="text-xs text-gray-400 mt-1">Source: {skill.source}</div>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-full text-xs font-bold text-white shadow-lg ${getLevelColor(skill.level)}`}>
                  {currentLevelTranslations[skill.level as keyof typeof currentLevelTranslations] || skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}