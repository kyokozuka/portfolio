import Image from 'next/image';

interface VBAIconProps {
  name: string;
}

export default function VBAIcon({ name }: VBAIconProps) {
  return (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg"
      alt={`${name} logo`}
      width={32}
      height={32}
      className="object-contain rounded"
    />
  );
}
