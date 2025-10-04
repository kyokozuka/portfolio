import Image from 'next/image';

interface DefaultSkillIconProps {
  name: string;
  icon: string;
}

export default function DefaultSkillIcon({ name, icon }: DefaultSkillIconProps) {
  return (
    <Image
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
      alt={`${name} logo`}
      width={32}
      height={32}
      className="object-contain rounded"
    />
  );
}
