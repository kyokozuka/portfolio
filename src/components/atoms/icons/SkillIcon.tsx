import VBAIcon from './VBAIcon';
import AWSIcon from './AWSIcon';
import GraphQLIcon from './GraphQLIcon';
import BacklogIcon from './BacklogIcon';
import TeamsIcon from './TeamsIcon';
import DefaultSkillIcon from './DefaultSkillIcon';

interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate" | "Beginner";
  category: string;
  icon: string;
  experience: string;
  source: string;
}

interface SkillIconProps {
  skill: Skill;
}

export default function SkillIcon({ skill }: SkillIconProps) {
  if (skill.name === "VBA") {
    return <VBAIcon name={skill.name} />;
  }

  if (["AWS", "AWS CDK", "Redshift", "Glue"].includes(skill.name)) {
    return <AWSIcon name={skill.name} />;
  }

  if (skill.name === "GraphQL") {
    return <GraphQLIcon name={skill.name} />;
  }

  if (skill.name === "Backlog") {
    return <BacklogIcon name={skill.name} />;
  }

  if (skill.name === "Teams") {
    return <TeamsIcon name={skill.name} />;
  }

  return <DefaultSkillIcon name={skill.name} icon={skill.icon} />;
}
