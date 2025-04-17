import { useEffect, useState } from 'react';
import styles from "./skillbar.module.scss";

type SkillBarProps = {
  name: string
  level: number
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    setTimeout(() => {
      setWidth(`${level}%`);
    }, 100);
  }, [level]);

  return (
    <div key={name} className="w-full max-w-md mt-4 mr-8">
      <p className="mb-1 text-sm font-semibold text-gray-900">{name}</p>
      <div className="w-100 bg-gray-700 h-4 rounded">
        <div
          className={`${styles["skillbar"]} h-4 rounded transition-all duration-1500 text-xs text-white font-semibold flex items-center justify-end pr-2`}
          style={{ width }}
        >
          {level}%
        </div>
      </div>
    </div>
  );
}

export default SkillBar;