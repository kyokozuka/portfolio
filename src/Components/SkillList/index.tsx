import SkillBar from "../Skillbar";

type SkillListProps = {
  name: String;
  values: {
    name: string;
    level: number;
  }[];
}

const SkillList: React.FC<SkillListProps> = ({ name, values }) => {
  return (

    <div className="space-y-4 mb-8">
      <span className="text-xl font-bold">{name}</span>
      {values.map((skill) => (
        <SkillBar
          name={skill.name}
          level={skill.level}
        />
      ))}
    </div>
  );
}

export default SkillList;