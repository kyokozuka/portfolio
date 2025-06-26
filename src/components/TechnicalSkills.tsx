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
      { name: "AWS", level: "Expert", category: "Cloud", icon: "aws-cdn", experience: "5+ years, daily use", source: "devicon CDN" },
      { name: "AWS CDK", level: "Advanced", category: "Cloud", icon: "aws-cdk-cdn", experience: "2+ years, IaC projects", source: "devicon CDN" },
      { name: "GCP", level: "Advanced", category: "Cloud", icon: "gcp-cdn", experience: "2+ years, project-based", source: "devicon CDN" },
      { name: "Azure", level: "Intermediate", category: "Cloud", icon: "azure-cdn", experience: "1 year, support role", source: "devicon CDN" },
      { name: "Terraform", level: "Advanced", category: "Cloud", icon: "terraform-cdn", experience: "3+ years, IaC projects", source: "devicon CDN" },
      { name: "Docker", level: "Advanced", category: "Cloud", icon: "docker-cdn", experience: "4+ years, containerization", source: "devicon CDN" },
      { name: "Redshift", level: "Advanced", category: "Database", icon: "redshift-cdn", experience: "3+ years, data warehousing", source: "devicon CDN" },
      { name: "Glue", level: "Intermediate", category: "Cloud", icon: "glue-cdn", experience: "2+ years, ETL processing", source: "devicon CDN" },
      { name: "DynamoDB", level: "Intermediate", category: "Database", icon: "dynamodb-cdn", experience: "2+ years, NoSQL", source: "devicon CDN" }
    ]
  },
  {
    name: "Programming Languages",
    color: "emerald",
    skills: [
      { name: "Python", level: "Expert", category: "Language", icon: "python.svg", experience: "6+ years, primary language", source: "python.org" },
      { name: "TypeScript", level: "Advanced", category: "Language", icon: "typescript.svg", experience: "3+ years, full-stack", source: "typescriptlang.org" },
      { name: "JavaScript", level: "Advanced", category: "Language", icon: "javascript.svg", experience: "5+ years, web development", source: "javascript.com" },
      { name: "PHP", level: "Intermediate", category: "Language", icon: "php.svg", experience: "3+ years, WordPress", source: "php.net" },
      { name: "VBA", level: "Intermediate", category: "Language", icon: "vba.svg", experience: "2 years, automation", source: "microsoft.com" }
    ]
  },
  {
    name: "Frameworks & Tools",
    color: "violet",
    skills: [
      { name: "FastAPI", level: "Advanced", category: "Framework", icon: "fastapi.svg", experience: "2+ years, API development", source: "fastapi.tiangolo.com" },
      { name: "React", level: "Intermediate", category: "Framework", icon: "react.svg", experience: "2+ years, frontend", source: "react.dev" },
      { name: "NestJS", level: "Intermediate", category: "Framework", icon: "nestjs.svg", experience: "1+ year, backend", source: "nestjs.com" },
      { name: "WordPress", level: "Advanced", category: "Framework", icon: "wordpress.svg", experience: "3+ years, CMS", source: "wordpress.org" },
      { name: "GraphQL", level: "Intermediate", category: "Framework", icon: "graphql.svg", experience: "1+ year, API development", source: "graphql.org" }
    ]
  },
  {
    name: "Databases & Analytics",
    color: "amber",
    skills: [
      { name: "MySQL", level: "Expert", category: "Database", icon: "mysql.svg", experience: "6+ years, primary DB", source: "mysql.com" },
      { name: "PostgreSQL", level: "Intermediate", category: "Database", icon: "postgresql.svg", experience: "1+ year, projects", source: "postgresql.org" },
      { name: "BigQuery", level: "Intermediate", category: "Database", icon: "bigquery.svg", experience: "1+ year, analytics", source: "cloud.google.com/bigquery" }
    ]
  },
  {
    name: "Development Tools",
    color: "rose",
    skills: [
      { name: "GitHub", level: "Expert", category: "Version Control", icon: "github-cdn", experience: "6+ years, daily use", source: "devicon CDN" },
      { name: "GitLab", level: "Advanced", category: "Version Control", icon: "gitlab-cdn", experience: "2+ years, CI/CD", source: "devicon CDN" },
      { name: "Backlog", level: "Advanced", category: "Project Management", icon: "backlog-cdn", experience: "3+ years, task management", source: "backlog.com" },
      { name: "Slack", level: "Expert", category: "Communication", icon: "slack-cdn", experience: "6+ years, team collaboration", source: "devicon CDN" },
      { name: "Teams", level: "Advanced", category: "Communication", icon: "teams-cdn", experience: "2+ years, remote work", source: "devicon CDN" },
      { name: "Notion", level: "Intermediate", category: "Documentation", icon: "notion-cdn", experience: "2+ years, knowledge base", source: "devicon CDN" },
      { name: "Jira", level: "Intermediate", category: "Project Management", icon: "jira-cdn", experience: "1+ year, agile development", source: "devicon CDN" }
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
  if (skill.icon === "aws-cdn") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS logo" className="w-8 h-8 object-contain rounded" />;
  }
  if (skill.icon === "aws-cdk-cdn") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS CDK logo" className="w-8 h-8 object-contain rounded" />;
  }
  if (skill.icon === "gcp-cdn") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg" alt="Google Cloud logo" className="w-8 h-8 object-contain rounded" />;
  }
  if (skill.icon === "azure-cdn") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" alt="Azure logo" className="w-8 h-8 object-contain rounded" />;
  }
  if (skill.icon === "terraform-cdn") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" alt="Terraform logo" className="w-8 h-8 object-contain rounded" />;
  }
  if (skill.icon === "docker-cdn") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" alt="Docker logo" className="w-8 h-8 object-contain rounded" />;
  }
  if (skill.icon === "redshift-cdn") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="Redshift logo" className="w-8 h-8 object-contain rounded" />;
  }
  if (skill.icon === "glue-cdn") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="Glue logo" className="w-8 h-8 object-contain rounded" />;
  }
  if (skill.icon === "dynamodb-cdn") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg" alt="DynamoDB logo" className="w-8 h-8 object-contain rounded" />;
  }
  if (skill.icon === "github-cdn") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub logo" className="w-8 h-8 object-contain rounded" />;
  }
  if (skill.icon === "gitlab-cdn") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" alt="GitLab logo" className="w-8 h-8 object-contain rounded" />;
  }
  if (skill.icon === "backlog-cdn") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/backlog/backlog-original.svg" alt="Backlog logo" className="w-8 h-8 object-contain rounded" />;
  }
  if (skill.icon === "slack-cdn") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" alt="Slack logo" className="w-8 h-8 object-contain rounded" />;
  }
  if (skill.icon === "teams-cdn") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoft/microsoft-original.svg" alt="Teams logo" className="w-8 h-8 object-contain rounded" />;
  }
  if (skill.icon === "notion-cdn") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" alt="Notion logo" className="w-8 h-8 object-contain rounded" />;
  }
  if (skill.icon === "jira-cdn") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" alt="Jira logo" className="w-8 h-8 object-contain rounded" />;
  }
  return <img src={`/skills/${skill.icon}`} alt={`${skill.name} logo`} className="w-8 h-8 object-contain rounded" />;
}

export default function TechnicalSkills({ currentLang = "en" }: TechnicalSkillsProps) {
  const currentCategoryTranslations = categoryTranslations[currentLang as keyof typeof categoryTranslations];
  const currentLevelTranslations = levelTranslations[currentLang as keyof typeof levelTranslations];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {skillCategories.map((category) => (
        <div key={category.name} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className={`w-4 h-4 rounded-full bg-${category.color}-500 shadow-lg`}></div>
            {currentCategoryTranslations[category.name as keyof typeof currentCategoryTranslations] || category.name}
          </h3>
          <div className="space-y-4">
            {category.skills.map((skill) => (
              <div key={skill.name} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {getSkillIcon(skill)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{skill.name}</div>
                    <div className="text-sm text-gray-600">{skill.experience}</div>
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