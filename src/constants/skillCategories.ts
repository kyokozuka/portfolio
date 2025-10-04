interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate" | "Beginner";
  category: string;
  icon: string;
  experience: string;
  source: string;
}

interface SkillCategory {
  name: "Cloud & Infrastructure" | "Programming Languages" | "Frameworks & Tools" | "Databases & Analytics" | "Development Tools";
  skills: Skill[];
  color: string;
  translationKey: "cloudInfrastructure" | "programmingLanguages" | "frameworksTools" | "databasesAnalytics" | "developmentTools";
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Cloud & Infrastructure",
    translationKey: "cloudInfrastructure",
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
    translationKey: "programmingLanguages",
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
    translationKey: "frameworksTools",
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
    translationKey: "databasesAnalytics",
    color: "amber",
    skills: [
      { name: "MySQL", level: "Expert", category: "Database", icon: "mysql", experience: "8+ years, primary DB", source: "devicon.dev" },
      { name: "PostgreSQL", level: "Intermediate", category: "Database", icon: "postgresql", experience: "1+ year, projects", source: "devicon.dev" },
      { name: "BigQuery", level: "Intermediate", category: "Database", icon: "googlecloud", experience: "1+ year, analytics", source: "devicon.dev" }
    ]
  },
  {
    name: "Development Tools",
    translationKey: "developmentTools",
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
